import { Chain } from 'src/modules/blockchain/entities/chain.entity';
import { CommonRepository } from 'src/modules/common/common.repository';
import { EntityRepository } from 'typeorm';

@EntityRepository(Chain)
export class ChainRepository extends CommonRepository<Chain> {}
