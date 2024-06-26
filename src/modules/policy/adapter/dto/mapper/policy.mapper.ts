import { PolicyModel } from 'src/modules/policy/entity/policy.model';
import { PolicyOutput } from '../output/policy.output';

export class PolicyMapper {
  static map(policy: PolicyModel): PolicyOutput {
    if (!policy) return null;

    return {
      title: policy.title,
      description: policy.description,
      policyType: policy.policyType,
    };
  }
}
