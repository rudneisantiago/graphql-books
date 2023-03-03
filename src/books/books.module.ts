import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { AuthorService } from '../author/author.service';

@Module({
  providers: [BooksResolver, BooksService, AuthorService]
})
export class BooksModule {}
