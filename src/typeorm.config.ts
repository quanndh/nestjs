import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Env } from 'src/helpers/environtment';
import { Asset } from 'src/modules/blockchain/entities/asset.entity';
import { Chain } from 'src/modules/blockchain/entities/chain.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  port: parseInt(Env.DATABASE_PORT || '3306', 10),
  host: Env.DATABASE_HOST,
  username: Env.DATABASE_USER,
  password: Env.DATABASE_PASSWORD,
  database: Env.DATABASE_NAME,
  synchronize: Env.DATABASE_SYNC === 'true',
  entities: [Asset, Chain],
  logging: Env.DATABASE_LOGGING === 'true',
  connectTimeoutMS: 10000,
  maxQueryExecutionTime: 5000,
  logNotifications: true,
  namingStrategy: new SnakeNamingStrategy(),
};
