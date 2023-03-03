import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.entity';
import { AuthorService } from '../author/author.service';

let books: Book[] = [
  {
    id: '0d681aa1-f475-4ba4-8366-c2ff8cd95bdc',
    name: 'Book A',
    price: 35,
    authors: [
      {
        id: '1',
        name: 'author 1',
      },
    ],
  },
  {
    id: 'a477bd88-8aaa-4c62-a9af-e20fa3e2af8d',
    name: 'Book B',
    price: 37.5,
    authors: [
      {
        id: '1',
        name: 'author 1',
      },
    ],
  },
  {
    id: '6a7bff92-beb8-40b9-be94-896820eb2a42',
    name: 'Book C',
    price: 55.12,
    authors: [
      {
        id: '1',
        name: 'author 1',
      },
    ],
  },
];

@Injectable()
export class BooksService {
  authorService: AuthorService;
  constructor(authorService: AuthorService) {
    this.authorService = authorService;
  }

  create(createBookInput: CreateBookInput) {
    for (const author of createBookInput.authors) {
      this.authorService.create(author);
    }
    books.push(createBookInput);
    return createBookInput;
  }

  findAll() {
    return books;
  }

  findOne(id: string) {
    const [book] = books.filter((book) => {
      return book.id === id;
    });
    return book;
  }

  update(id: string, updateBookInput: UpdateBookInput) {
    const book = books.find((book) => book.id === id);
    book.name = updateBookInput.name;
    return book;
  }

  remove(id: string) {
    const filteredBooks = books.filter((book) => book.id !== id);
    books = [...filteredBooks];
    return books;
  }
}
