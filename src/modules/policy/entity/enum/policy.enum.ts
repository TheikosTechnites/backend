import { registerEnumType } from '@nestjs/graphql';

export enum PolicyEnum {
  PRIVACY_POLICY = 'privacy_policy',
  TERMS_AND_CONDITIONS = 'terms_and_conditions',
}

registerEnumType(PolicyEnum, {
  name: 'PolicyEnum',
  description: 'Policy Enum',
});
