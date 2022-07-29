import { Injectable } from '@nestjs/common';
import { ChainDataLoader } from 'src/modules/blockchain/dataloaders/chain.dataloader';
import { Chain } from 'src/modules/blockchain/entities/chain.entity';
import { ChainRepository } from 'src/modules/blockchain/repositories/chain.repository';
import { CommonService } from 'src/modules/common/common.service';

@Injectable()
export class ChainService extends CommonService<Chain> {
  constructor(private readonly chainRepository: ChainRepository, private readonly chainDataloader: ChainDataLoader) {
    super(chainRepository, chainDataloader);
  }
}
