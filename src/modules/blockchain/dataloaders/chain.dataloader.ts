import { Injectable } from '@nestjs/common';
import DataLoader from 'dataloader';
import { Chain } from 'src/modules/blockchain/entities/chain.entity';
import { ChainRepository } from 'src/modules/blockchain/repositories/chain.repository';
import { In } from 'typeorm';

@Injectable()
export class ChainDataLoader extends DataLoader<string, Chain | undefined> {
  constructor(private readonly chainRepository: ChainRepository) {
    super(async (ids: ReadonlyArray<string>) => {
      const rows = await this.chainRepository.find({ where: { chainId: In([...ids]) } });
      return ids.map((id) => rows.find((x) => x.chainId == id) || undefined);
    });
  }
}
