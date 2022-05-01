import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CatDocument = Cat & Document;

@Schema({ timestamps: true })
export class Cat {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
