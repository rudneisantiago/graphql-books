import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  // using create and save instead of insert. Only to use a different approach
  async create(createBookInput: CreateBookInput) {
    const output = this.bookRepository.create(createBookInput);
    await this.bookRepository.save(output);
    return output;
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

  // using create and save instead of insert. Only to use a different approach
  // TODO: create and update can be a single method. Refactoring in the near future
  async update(updateBookInput: UpdateBookInput) {
    const book = this.bookRepository.create(updateBookInput);
    await this.bookRepository.save(book);
    return book;
  }

  // using create and save instead of insert. Only to use a different approach
  async remove(id: string) {
    await this.bookRepository.delete({ id: id });
    return this.findAll();
  }
}
