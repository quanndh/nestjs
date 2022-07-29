import { ObjectType } from '@nestjs/graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@ObjectType()
export class ChainTheme {
  textColor: string;
  backgroundColor: string;
}

@ObjectType()
@Entity()
export class Chain extends BaseEntity {
  @PrimaryColumn()
  chainId: string;

  @Column()
  chainName: string;

  @Column()
  shortName: string;

  @Column()
  rpcUri: string;

  @Column({ nullable: true })
  ensRegistryAddress?: string;

  @Column('text', { array: true, default: '{}' })
  features: string[];

  @Column('json', { default: '{}' })
  theme: ChainTheme;

  @Column()
  nativeCurrency: string;
}
