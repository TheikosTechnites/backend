import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPolicyRepository } from '../../usecase/interface/policy-repository.interface';
import { Policy } from '../schema/policy.schema';
import { PolicyEnum } from '../../entity/enum/policy.enum';
import { PolicyModel } from '../../entity/policy.model';
import { CreatePolicyInputModel } from '../../entity/create-policy.input.model';

@Injectable()
export class PolicyRepository implements IPolicyRepository {
  constructor(@InjectModel(Policy.name) private policy: Model<Policy>) {}

  async createPolicy(input: CreatePolicyInputModel): Promise<PolicyModel> {
    return this.policy.create(input);
  }
  async getPrivacyPolicy(): Promise<PolicyModel> {
    return this.policy
      .findOne({ policyType: PolicyEnum.PRIVACY_POLICY, deletedAt: null })
      .exec();
  }
}
