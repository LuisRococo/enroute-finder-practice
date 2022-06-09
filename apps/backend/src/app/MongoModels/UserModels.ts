import {
  About,
  GenderEnum,
  HoroscopeEnum,
  LookingforEnum,
  PersonalQuestion,
  User,
} from '@finder/definitions';
import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class AboutMongo implements About {
  @Prop({ required: false, type: HoroscopeEnum })
  horoscope?: HoroscopeEnum;
  @Prop({ required: false })
  personal_questions?: PersonalQuestionMongo[];
  @Prop({ required: true })
  description: string;
}

@Schema()
export class UserMongo implements User {
  @Prop({ required: true, type: mongoose.Types.ObjectId })
  _id: string;
  @Prop({ required: true, type: String })
  name: string;
  @Prop({ required: false, type: String })
  last_name?: string;
  @Prop({ required: true, type: String })
  password: string;
  @Prop({ required: true, type: String })
  email: string;
  @Prop({ required: false, type: String })
  city?: string;
  @Prop({ required: false, type: String })
  country?: string;
  @Prop({ required: true, type: String })
  phone: string;
  @Prop({ required: true, type: String })
  image_profile: string;
  @Prop({ required: true, type: [String] })
  gallery: string[];
  @Prop({ required: true, type: Number })
  age: number;
  @Prop({ required: true, enum: GenderEnum })
  gender: GenderEnum;
  @Prop({ required: true, type: String })
  preference: string;
  @Prop({ required: true, type: AboutMongo })
  about: AboutMongo;
  @Prop({ required: true, enum: LookingforEnum })
  lookingfor: LookingforEnum;
  @Prop({ required: true })
  verified: boolean;
}

@Schema()
export class PersonalQuestionMongo implements PersonalQuestion {
  @Prop({ required: true, type: String })
  question: string;
  @Prop({ required: true, type: String })
  answer: string;
}
