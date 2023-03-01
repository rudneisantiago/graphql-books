import { Test, TestingModule } from '@nestjs/testing';
import axios from 'axios';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';

describe('BooksResolver', () => {
  let resolver: BooksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksResolver, BooksService],
    }).compile();

    resolver = module.get<BooksResolver>(BooksResolver);
  });

  it('Shoud return a list of Book', async () => {
    const test = await axios.post('http://localhost:3000/graphql', {
      query: `{
        books {
          id
          name
        }
      }`,
    });
    const { data } = test.data;
    expect(data.books.length).toBeGreaterThan(0);
  });

  it('Shoud insert a Book and return the inserted book', async () => {
    const test = await axios.post('http://localhost:3000/graphql', {
      query: `mutation ($createBookInput: CreateBookInput!) {
          createBook(createBookInput: $createBookInput) {
            id
            name
          }
        }`,
      variables: {
        createBookInput: {
          id: '1',
          name: 'Book J',
        },
      },
    });

    const { data } = test.data;
    expect(data.createBook.name).toBe('Book J');
  });
});
