import sgMail from '@sendgrid/mail';
import MailMessage from 'nodemailer/lib/mailer/mail-message';
export class SendGridTransport {
  name: string;
  version: string;
  constructor(options: { apiKey?: string }) {
    this.name = 'nodemailer-sendgrid';
    this.version = '1.0.0';
    if (options.apiKey) {
      sgMail.setApiKey(options.apiKey);
    }
  }

  send(mail: MailMessage, callback: (err: Error | null | undefined, info?: any) => void) {
    mail.normalize((err, source) => {
      if (err || !source) {
        return callback(err);
      }
      const data: any = {};
      if (Array.isArray(source.to)) {
        data.to = source.to.map((v) => {
          if (typeof v === 'string') {
            return {
              email: v,
            };
          }
          return {
            email: v.address,
            name: v.name,
          };
        });
      } else if (typeof source.to === 'object') {
        data.to = { email: source.to.address, name: source.to.name };
      }
      if (typeof source.from === 'object') {
        data.from = { email: source.from.address, name: source.from.name };
      } else if (typeof source.from === 'string') {
        data.from = { email: source.from };
      }

      sgMail
        .send({
          ...data,
          attachments: source.attachments?.map((v) => ({
            content: v.content,
            filename: v.filename,
            contentId: v.cid,
            disposition: v.contentDisposition,
            type: v.contentType,
          })),
          html: source.html as string,
          subject: source.subject,
          text: source.text as string,
        })
        .then((res) => {
          callback(null, res);
        })
        .catch((error) => {
          callback(error);
        });
    });
  }
}
