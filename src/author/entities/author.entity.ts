import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('authors')
@ObjectType()
export class Author {
  @PrimaryColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column('varchar', { length: 100, nullable: false })
  @Field()
  name: string;
}
