import { Inject, Injectable } from '@nestjs/common';
import {
  IPolicyRepository,
  IPolicyRepositoryToken,
} from './interface/policy-repository.interface';
import { PolicyModel } from '../entity/policy.model';
import { CreatePolicyInputModel } from '../entity/create-policy.input.model';

@Injectable()
export class PolicyUsecase {
  constructor(
    @Inject(IPolicyRepositoryToken)
    private readonly privacyPolicyRepository: IPolicyRepository,
  ) {}

  async createPolicy(input: CreatePolicyInputModel): Promise<PolicyModel> {
    return this.privacyPolicyRepository.createPolicy(input);
  }
  async getPrivacyPolicy(): Promise<PolicyModel> {
    return this.privacyPolicyRepository.getPrivacyPolicy();
  }
}
