import { registerEnumType } from '@nestjs/graphql';

export enum TransactionTypeEnum {
  CREATION = 'CREATION',
  TRANSFER = 'TRANSFER',
  ADD_OWNER = 'ADD_OWNER',
  REMOVE_OWNER = 'REMOVE_OWNER',
}

registerEnumType(TransactionTypeEnum, {
  name: 'TransactionTypeEnum',
});

export enum TransactionDirectionEnum {
  OUTGOING = 'OUTGOING',
  INCOMING = 'INCOMING',
}

registerEnumType(TransactionDirectionEnum, {
  name: 'TransactionDirectionEnum',
});
