import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GenderEnum, LookingforEnum, User } from '@finder/definitions';
import { Document, Schema as SchemaMongoose, Types } from 'mongoose';
import { AboutDocument } from './about';
@Schema()
export class UserMongo implements User {
   @Prop({
      type: SchemaMongoose.Types.ObjectId,
   })
   _id: Types.ObjectId;
   @Prop({ type: String, required: true })
   name: string;
   @Prop({ type: String, required: false })
   last_name?: string;
   @Prop({ type: String, required: true })
   password: string;
   @Prop({ type: String, required: true, unique: true })
   email: string;
   @Prop({ type: String, required: false })
   city?: string;
   @Prop({ type: String, required: false })
   country?: string;
   @Prop({ type: String, required: true })
   phone: string;
   @Prop({ type: String, required: true })
   image_profile: string;
   @Prop({ type: [String], required: true })
   gallery: string[];
   @Prop({ type: Number, required: true })
   age: number;
   @Prop({ type: () => GenderEnum, enum: GenderEnum, required: true })
   gender: GenderEnum;
   @Prop({ type: String, required: true })
   preference: string;
   @Prop({
      type: SchemaMongoose.Types.ObjectId,
      ref: 'About',
   })
   about: AboutDocument;
   @Prop({ type: () => LookingforEnum, enum: LookingforEnum, required: true })
   lookingfor: LookingforEnum;
   @Prop({ required: true, default: false })
   verified: boolean;
}

export type UserDocument = UserMongo & Document;

export const UserSchema = SchemaFactory.createForClass(UserMongo);
