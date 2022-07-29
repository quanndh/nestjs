import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { ChainService } from 'src/modules/blockchain/services/chain.service';

@ValidatorConstraint({ name: 'ChainSupport', async: true })
export class ChainSupport implements ValidatorConstraintInterface {
  constructor(protected readonly chainService: ChainService) {}
  async validate(text: string, args: ValidationArguments) {
    const chain = await this.chainService.findById(text);
    return chain ? true : false;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Network not supported';
  }
}
