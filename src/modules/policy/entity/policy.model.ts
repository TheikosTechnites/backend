import { PolicyEnum } from './enum/policy.enum';

export class PolicyModel {
  title?: string;

  description?: string;

  policyType?: PolicyEnum;

  createdAt?: Date;

  updatedAt?: Date;

  deletedAt?: Date;
}
