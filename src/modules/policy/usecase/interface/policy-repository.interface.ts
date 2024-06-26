import { CreatePolicyInputModel } from '../../entity/create-policy.input.model';
import { PolicyModel } from '../../entity/policy.model';

export interface IPolicyRepository {
  createPolicy(input: CreatePolicyInputModel): Promise<PolicyModel>;
  getPrivacyPolicy(): Promise<PolicyModel>;
}
export const IPolicyRepositoryToken = Symbol('IPolicyRepository');
