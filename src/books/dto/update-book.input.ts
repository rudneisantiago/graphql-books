import { CreateBookInput } from './create-book.input';
import { InputType, Field, ID, PartialType, Float } from '@nestjs/graphql';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;
}
