import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PolicyUsecase } from '../../usecase/policy.usecase';
import { PolicyOutput } from '../dto/output/policy.output';
import { PolicyMapper } from '../dto/mapper/policy.mapper';
import { CreatePolicyInput } from '../dto/input/policy.input';

@Resolver(() => PolicyOutput)
export class PolicyResolver {
  constructor(private readonly privacyUsecase: PolicyUsecase) {}

  /************************************************************************************************
   ************************************  Query  *****************************************
   ************************************************************************************************/

  /**
   * Fetch Privacy Policy
   * @returns {PolicyOutput} - Returns the privacy policy
   */

  @Query(() => PolicyOutput)
  async getPrivacyPolicy(): Promise<PolicyOutput> {
    const policy = await this.privacyUsecase.getPrivacyPolicy();

    return PolicyMapper.map(policy);
  }

  /************************************************************************************************
   ************************************  Mutation  *****************************************
   ************************************************************************************************/

  /**
   * Create Policy
   * @param {CreatePolicyInput} input - The policy input
   * @returns {PolicyOutput} - Returns the created policy
   *
   */

  @Mutation(() => PolicyOutput)
  async createPolicy(
    @Args('input') input: CreatePolicyInput,
  ): Promise<PolicyOutput> {
    const policy = await this.privacyUsecase.createPolicy(input);

    return PolicyMapper.map(policy);
  }
}
