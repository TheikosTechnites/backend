import { Module } from '@nestjs/common';
import { AppController } from './v1/adapter/controller/app.controller';
import { AppUseCase } from './v1/usecase/app.usecase';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppUseCase],
})
export class AppModule {}
