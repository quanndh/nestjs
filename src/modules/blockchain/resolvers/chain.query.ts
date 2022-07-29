import { Query, Resolver } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server';
import { Chain } from 'src/modules/blockchain/entities/chain.entity';
import { ChainService } from 'src/modules/blockchain/services/chain.service';

@Resolver(() => Chain)
export class ChainQueryResolver {
  constructor(private readonly chainService: ChainService) {}

  @Query(() => [Chain])
  chains() {
    try {
      return this.chainService.findAll({});
    } catch (error: any) {
      throw new ApolloError(error.message);
    }
  }
}
