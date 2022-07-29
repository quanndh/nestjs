import { registerEnumType } from '@nestjs/graphql';

export enum TransactionStatusEnum {
  AWAITING_CONFIRMATIONS = 'AWAITING_CONFIRMATIONS',
  AWAITING_EXECUTION = 'AWAITING_EXECUTION',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
}

registerEnumType(TransactionStatusEnum, {
  name: 'TransactionStatusEnum',
});
