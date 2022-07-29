import { ObjectType } from '@nestjs/graphql';
import { Column, Entity, Index, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Index(['address', 'chainId'], { unique: true })
@Entity()
export class Asset {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column()
  chainId: string;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column()
  decimals: number;

  @Column({ nullable: true })
  logoUri?: string;
}
