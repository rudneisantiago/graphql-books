import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Author } from '../../author/entities/author.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

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

  @ManyToMany(() => Author)
  @JoinTable({
    name: 'book_author',
    joinColumn: {
      name: 'book_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'author_id',
      referencedColumnName: 'id',
    },
  })
  @Field(() => [Author])
  authors: Author[];
}
