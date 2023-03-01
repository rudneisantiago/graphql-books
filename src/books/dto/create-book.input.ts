import { InputType, ID, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
