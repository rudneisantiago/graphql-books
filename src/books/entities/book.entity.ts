import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('books')
@ObjectType()
export class Book {
  @PrimaryColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column('varchar', { length: 50, nullable: false })
  @Field()
  name: string;

  @Column({ nullable: false })
  @Field(() => Float)
  price: number;

//   @Field(() => [Author])
//   authors: Author[];
}
