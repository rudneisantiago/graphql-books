import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Author } from '../../author/entities/author.entity';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => [Author])
  authors: Author[];
}
