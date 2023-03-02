import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
