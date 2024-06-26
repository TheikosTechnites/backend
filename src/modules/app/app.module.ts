import { Module } from '@nestjs/common';
import { AppController } from './v1/adapter/controller/app.controller';
import { AppUseCase } from './v1/usecase/app.usecase';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { PolicyModule } from '../policy/policy.module';
import { MONGODB_URI } from 'src/config/index.env';

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URI),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    PolicyModule,
  ],
  controllers: [AppController],
  providers: [AppUseCase],
})
export class AppModule {}
