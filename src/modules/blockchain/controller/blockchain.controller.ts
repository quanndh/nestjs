import { Controller, Get } from '@nestjs/common';
import { ChainService } from 'src/modules/blockchain/services/chain.service';

@Controller('blockchain')
export class BlockchainController {
  constructor(private readonly chainService: ChainService) {}

  @Get()
  chains() {
    return this.chainService.findAll({});
  }
}
