import { Field, ObjectType } from '@nestjs/graphql';
import { PolicyEnum } from 'src/modules/policy/entity/enum/policy.enum';

@ObjectType()
export class PolicyOutput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => PolicyEnum)
  policyType: PolicyEnum;
}
