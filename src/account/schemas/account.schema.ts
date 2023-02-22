import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type AccountDocument = HydratedDocument<Account>;

@Schema({ timestamps: { createdAt: true } })
export class Account {
  @Prop({ 
    required: true,
    unique: true
  })
  accountNumber: string

  @Prop({ required: true })
  company: string

  @Prop({ required: true })
  name: string

  @Prop({ default: 0 })
  accountAmount: number

  @Prop({ required: true })
  currency: string

  @Prop({ default: null })
  paymentTime: Date
}

export const AccountSchema = SchemaFactory.createForClass(Account)