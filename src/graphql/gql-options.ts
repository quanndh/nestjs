import { Request, Response } from 'express';
import { GqlModuleOptions } from '@nestjs/graphql';
import { ApolloComplexityPlugin } from './plugins/ApolloComplexityPlugin';
import { isProduction } from 'src/helpers/environtment';
import { GraphQLError } from 'graphql';
import { AuthenticationError } from 'apollo-server-errors';

export const gqlOptions: GqlModuleOptions = {
  uploads: false,
  fieldResolverEnhancers: ['guards', 'interceptors'],
  useGlobalPrefix: false,
  playground: !isProduction,
  debug: !isProduction,
  installSubscriptionHandlers: true,
  autoSchemaFile: true,
  tracing: !isProduction,
  plugins: [new ApolloComplexityPlugin(200)],
  // autoTransformHttpErrors: true,
  formatError: (error: GraphQLError) => {
    if (error.extensions?.exception?.response?.message === 'Unauthorized' || error.message === 'Unauthorized') {
      return new AuthenticationError('Unauthorized');
    }
    return error;
  },
  context: ({ req, res, connection }: { req: Request; res: Response; connection: { context: Request } }) => {
    if (connection) {
      // check connection for metadata
      return { req: connection.context, res };
    } else {
      // check from req
      // return new GraphQLContext(req, res);
      return { req, res };
    }
  },
};
