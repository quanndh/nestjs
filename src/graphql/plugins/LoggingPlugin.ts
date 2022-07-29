import { Logger } from '@nestjs/common';
import { Plugin } from '@nestjs/graphql';
import { ApolloServerPlugin, GraphQLRequestListener } from 'apollo-server-plugin-base';

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  requestDidStart(): GraphQLRequestListener {
    Logger.log('Request started');
    return {
      willSendResponse() {
        Logger.log('Will send response');
      },
    };
  }
}
