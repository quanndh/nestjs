import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockchainController } from 'src/modules/blockchain/controller/blockchain.controller';
import { ChainDataLoader } from 'src/modules/blockchain/dataloaders/chain.dataloader';
import { Asset } from 'src/modules/blockchain/entities/asset.entity';
import { Chain } from 'src/modules/blockchain/entities/chain.entity';
import { AssetRepository } from 'src/modules/blockchain/repositories/asset.repository';
import { ChainRepository } from 'src/modules/blockchain/repositories/chain.repository';
import { ChainQueryResolver } from 'src/modules/blockchain/resolvers/chain.query';
import { ChainService } from 'src/modules/blockchain/services/chain.service';
import { ChainSupport } from 'src/modules/blockchain/validators/chain_support.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Asset, AssetRepository, Chain, ChainRepository])],
  providers: [ChainQueryResolver, ChainDataLoader, ChainService, ChainSupport],
  exports: [ChainSupport],
  controllers: [BlockchainController],
})
export class BlockChainModule {}
