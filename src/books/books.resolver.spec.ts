import { Test, TestingModule } from '@nestjs/testing';
import axios from 'axios';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';
import { AuthorService } from '../author/author.service';
import crypto from 'crypto';

describe('BooksResolver', () => {
  let resolver: BooksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksResolver, BooksService, AuthorService],
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
            price
            authors {
              name
            }
          }
        }`,
      variables: {
        createBookInput: {
          id: '86b2756b-1826-4b5c-84db-1be14c8061bc',
          name: 'New Book',
          price: 39.5,
          authors: [
            {
              id: '86b2756b-1826-4b5c-84db-1be14c8061bc',
              name: 'Bacia',
            },
          ],
        },
      },
    });

    const { data } = test.data;
    expect(data.createBook.name).toBe('New Book');
  });
});
