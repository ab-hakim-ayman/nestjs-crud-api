import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll() {
    return await this.todoRepository.find({ where: { isDeleted: false } });
  }

  async findOne(todoId: string) {
    const objectId = new ObjectId(todoId);
    return await this.todoRepository.findOne({ where: { _id: objectId } });
  }

  async create(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepository.create(createTodoDto);
    return await this.todoRepository.save(todo);
  }

  async update(todoId: string, updateTodoDto: UpdateTodoDto) {
    const objectId = new ObjectId(todoId);
    await this.todoRepository.update(objectId, updateTodoDto);
    return await this.todoRepository.findOne({ where: { _id: objectId } });
  }

  async softDelete(todoId: string) {
    const objectId = new ObjectId(todoId);
    await this.todoRepository.update(objectId, { isDeleted: true });
    return { message: 'Todo soft deleted successfully' };
  }

  async findArchived() {
    return await this.todoRepository.find({ where: { isArchived: true } });
  }

  async restore(todoId: string) {
    const objectId = new ObjectId(todoId);
    await this.todoRepository.update(objectId, { isDeleted: false });
    return await this.todoRepository.findOne({ where: { _id: objectId } });
  }

  async permanentDelete(todoId: string) {
    const objectId = new ObjectId(todoId);
    await this.todoRepository.delete(objectId);
    return { message: 'Todo permanently deleted successfully' };
  }
}
