import { InputType, ID, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;
}
