import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../author/entities/author.entity';
import { Repository } from 'typeorm';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  // using create and save instead of insert. Only to use a different approach
  async create(createBookInput: CreateBookInput) {
    for (const author of createBookInput.authors) {
      await this.authorRepository.save(author);
    }

    const inputBook: Book = { id: randomUUID(), ...createBookInput };
    const book = this.bookRepository.create(inputBook);
    await this.bookRepository.save(book);

    return book;
  }

  async findAll() {
    const books = await this.bookRepository.find({
      relations: {
        authors: true,
      },
    });
    return books;
  }

  async findOne(id: string) {
    const book = await this.bookRepository.findOne({
      where: { id: id },
      relations: ['authors'],
    });
    return book;
  }

  async update(updateBookInput: UpdateBookInput) {
    for (const author of updateBookInput.authors) {
      await this.authorRepository.save(author);
    }

    const book = this.bookRepository.create(updateBookInput);
    const output = await this.bookRepository.save(book);
    return output;
  }

  async remove(id: string) {
    await this.bookRepository.delete({ id: id });
    return this.findAll();
  }
}
