import { Field, InputType } from '@nestjs/graphql';
import { PolicyEnum } from 'src/modules/policy/entity/enum/policy.enum';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePolicyInput {
  @Field(() => PolicyEnum)
  @IsNotEmpty()
  policyType: PolicyEnum;

  @Field(() => String)
  @IsNotEmpty()
  title: string;

  @Field(() => String)
  @IsNotEmpty()
  description: string;
}
