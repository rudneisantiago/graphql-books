import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.entity';

let authors: Author[] = [
  {
    id: '1',
    name: 'author 1',
  },
  {
    id: '8da09b7c-1c48-4bde-940e-50eb952d5020',
    name: 'Author 1',
  },
  {
    id: '3c62e723-1da5-49e4-97ab-b60afa5bc39a',
    name: 'Author 2',
  },
  {
    id: '8a20921d-db40-442f-b58a-0cca165236ec',
    name: 'Author 3',
  },
];

@Injectable()
export class AuthorService {
  create(createAuthorInput: CreateAuthorInput) {
    authors.push(createAuthorInput);
    return createAuthorInput;
  }

  findAll() {
    return authors;
  }

  findOne(id: string) {
    const [author] = authors.filter((author) => author.id === id);
    return author;
  }

  update(id: string, updateAuthorInput: UpdateAuthorInput) {
    const author = authors.find((book) => book.id === id);
    author.name = updateAuthorInput.name;
    return author;
  }

  remove(id: string) {
    const filteredBooks = authors.filter((book) => book.id !== id);
    authors = [...filteredBooks];
    return authors;
  }
}
