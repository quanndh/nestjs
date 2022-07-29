import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
import inlineCss from 'inline-css';
import { Injectable, Inject } from '@nestjs/common';
import { TemplateAdapter, TemplateModuleOptions } from './../template.interface';
import { TEMPLATE_MODULE_OPTIONS } from '../template.constants';

type CompileOptions = Parameters<typeof handlebars.compile>[1];
type MailData = {
  template: string;
  context: any;
  options?: CompileOptions;
};

@Injectable()
export class HandlebarsAdapter implements TemplateAdapter {
  private precompiledTemplates: {
    [name: string]: handlebars.TemplateDelegate;
  } = {};

  constructor(@Inject(TEMPLATE_MODULE_OPTIONS) private readonly options: TemplateModuleOptions) {
    handlebars.registerHelper('concat', (...args) => {
      args.pop();
      return args.join('');
    });
  }

  public compile(mail: MailData): Promise<string> {
    const precompile = (template: string, options?: CompileOptions) => {
      const templateExt = path.extname(template) || '.hbs';
      const templateName = path.basename(template, path.extname(template));
      const templateDir = path.dirname(template) !== '.' ? path.dirname(template) : this.options.dir;
      const templatePath = path.join(templateDir, templateName + templateExt);

      if (!this.precompiledTemplates[templateName.toString()]) {
        const template = fs.readFileSync(templatePath.toString(), { encoding: 'utf-8' });

        this.precompiledTemplates[templateName.toString()] = handlebars.compile(template, options);
      }

      return {
        templateExt,
        templateName,
        templateDir,
        templatePath,
      };
    };

    const { templateName } = precompile(mail.template, mail.context);

    const rendered = this.precompiledTemplates[templateName.toString()](mail.context, {
      partials: this.precompiledTemplates,
    });

    return inlineCss(rendered, { url: ' ' });
  }
}
