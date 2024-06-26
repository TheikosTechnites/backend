import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PolicyResolver } from './adapter/resolver/policy.resolver';
import { PolicyUsecase } from './usecase/policy.usecase';
import { PolicyRepository } from './adapter/repository/policy.repository';
import { IPolicyRepositoryToken } from './usecase/interface/policy-repository.interface';
import { Policy, PolicySchema } from './adapter/schema/policy.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Policy.name, schema: PolicySchema }]),
  ],
  providers: [
    PolicyResolver,
    PolicyUsecase,
    {
      provide: IPolicyRepositoryToken,
      useClass: PolicyRepository,
    },
  ],
  exports: [
    PolicyResolver,
    PolicyUsecase,
    {
      provide: IPolicyRepositoryToken,
      useClass: PolicyRepository,
    },
  ],
})
export class PolicyModule {}
