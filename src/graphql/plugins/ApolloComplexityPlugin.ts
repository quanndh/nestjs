import { ApolloServerPlugin, GraphQLServiceContext, GraphQLRequestListener } from 'apollo-server-plugin-base';
import { GraphQLError, GraphQLSchema } from 'graphql';
import { fieldExtensionsEstimator, getComplexity, simpleEstimator } from 'graphql-query-complexity';
import { Plugin } from '@nestjs/graphql';

@Plugin()
export class ApolloComplexityPlugin implements ApolloServerPlugin {
  private schema: GraphQLSchema;

  constructor(private readonly maxComplexity: number = 500) {}

  serverWillStart(service: GraphQLServiceContext) {
    this.schema = service.schema;
  }

  requestDidStart(): GraphQLRequestListener {
    return {
      didResolveOperation: ({ request, document }) => {
        const complexity = getComplexity({
          schema: this.schema,
          operationName: request.operationName,
          query: document,
          variables: request.variables,
          estimators: [fieldExtensionsEstimator(), simpleEstimator({ defaultComplexity: 1 })],
        });
        if (complexity > this.maxComplexity) {
          throw new GraphQLError(
            `Sorry, too complicated query! ${complexity} is over ${this.maxComplexity} that is the max allowed complexity.`,
          );
        }
      },
    };
  }
}
