import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;
}
