import { InputType, ID, Field, Float } from '@nestjs/graphql';
import { CreateAuthorInput } from '../../author/dto/create-author.input';

@InputType()
export class CreateBookInput {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  // @Field(() => [CreateAuthorInput])
  // authors: CreateAuthorInput[];
}
