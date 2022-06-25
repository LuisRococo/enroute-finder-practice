import { VerificationCodeInterface } from '@finder/definitions';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { DateSchema } from 'yup';

@Schema()
export class VerificationMongo implements VerificationCodeInterface {
   @Prop({ type: Types.ObjectId, required: true, default: new Types.ObjectId() })
   _id: Types.ObjectId;
   @Prop({ type: Types.ObjectId, required: true })
   user_id: Types.ObjectId;
   @Prop({ type: String, required: true })
   code: string;
   @Prop({ type: DateSchema, required: true, default: new Date() })
   date: Date;
}

export type VerificationDocument = VerificationMongo & Document;

export const VerificationSchema = SchemaFactory.createForClass(VerificationMongo);
