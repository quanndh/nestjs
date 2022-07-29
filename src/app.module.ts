import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './typeorm.config';
import { gqlOptions } from './graphql/gql-options';
import { CommonModule } from './modules/common/common.module';
import { TemplateModule } from 'src/modules/template/template.module';
import { SharedModule } from 'src/modules/shared/shared.module';
import { BlockChainModule } from 'src/modules/blockchain/blockchain.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    GraphQLModule.forRoot(gqlOptions),
    CommonModule,
    TemplateModule.forRoot({
      dir: __dirname + '/templates',
    }),
    SharedModule,
    BlockChainModule,
  ],
})
export class AppModule {}
