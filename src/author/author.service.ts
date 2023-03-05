import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorInput: CreateAuthorInput) {
    const author = this.authorRepository.create(createAuthorInput);
    this.authorRepository.save(author);
    return author;
  }

  async findAll() {
    return await this.authorRepository.find();
  }

  async findOne(id: string) {
    const output = this.authorRepository.findOneBy({ id: id });
    return output;
  }

  async update(updateAuthorInput: UpdateAuthorInput) {
    await this.authorRepository
      .createQueryBuilder()
      .update(Author)
      .set({ name: updateAuthorInput.name })
      .where('id = :id', { id: updateAuthorInput.id })
      .execute();

    return updateAuthorInput;
  }

  async remove(id: string) {
    await this.authorRepository
      .createQueryBuilder()
      .delete()
      .from(Author)
      .where('id = :id', { id: id })
      .execute();

    const author = await this.findAll();
    return author;
  }
}
