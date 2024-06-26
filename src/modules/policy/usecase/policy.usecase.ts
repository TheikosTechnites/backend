import { Inject, Injectable } from '@nestjs/common';
import {
  IPolicyRepository,
  IPolicyRepositoryToken,
} from './interface/policy-repository.interface';
import { PolicyModel } from '../entity/policy.model';

@Injectable()
export class PolicyUsecase {
  constructor(
    @Inject(IPolicyRepositoryToken)
    private readonly privacyPolicyRepository: IPolicyRepository,
  ) {}

  async createPolicy(): Promise<PolicyModel> {
    return this.privacyPolicyRepository.getPrivacyPolicy();
  }
  async getPrivacyPolicy(): Promise<PolicyModel> {
    return this.privacyPolicyRepository.getPrivacyPolicy();
  }
}
