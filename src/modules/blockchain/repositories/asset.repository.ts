import { Asset } from 'src/modules/blockchain/entities/asset.entity';
import { CommonRepository } from 'src/modules/common/common.repository';
import { EntityRepository } from 'typeorm';

@EntityRepository(Asset)
export class AssetRepository extends CommonRepository<Asset> {}
