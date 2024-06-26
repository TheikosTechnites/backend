import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PolicyEnum } from '../../entity/enum/policy.enum';

export type PolicyDocument = HydratedDocument<Policy>;
@Schema({ timestamps: true })
export class Policy {
  @Prop({ enum: PolicyEnum })
  policyType?: PolicyEnum;

  @Prop()
  title?: string;

  @Prop()
  description?: string;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;

  @Prop({ type: Date, default: null })
  deletedAt?: Date;
}

export const PolicySchema = SchemaFactory.createForClass(Policy);
