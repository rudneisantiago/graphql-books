import { InputType, Field, Float } from '@nestjs/graphql';
import { CreateAuthorInput } from '../../author/dto/create-author.input';

@InputType()
export class CreateBookInput {
  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => [CreateAuthorInput])
  authors: CreateAuthorInput[];
}
