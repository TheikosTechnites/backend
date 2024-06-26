import { PolicyEnum } from './enum/policy.enum';

export class CreatePolicyInputModel {
  title: string;
  description: string;
  policyType: PolicyEnum;
}
