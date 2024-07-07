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

  findAll() {
    return this.todoRepository.find({ where: { isDeleted: false } });
  }

  findOne(todoId: string) {
    const objectId = new ObjectId(todoId);
    return this.todoRepository.findOne({ where: { _id: objectId } });
  }

  create(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(todo);
  }

  update(todoId: string, updateTodoDto: UpdateTodoDto) {
    const objectId = new ObjectId(todoId);
    return this.todoRepository.update(objectId, updateTodoDto);
  }

  softDelete(todoId: string) {
    const objectId = new ObjectId(todoId);
    return this.todoRepository.update(objectId, { isDeleted: true });
  }

  findArchived() {
    return this.todoRepository.find({ where: { isArchived: true } });
  }

  restore(todoId: string) {
    const objectId = new ObjectId(todoId);
    return this.todoRepository.update(objectId, { isDeleted: false });
  }

  permanentDelete(todoId: string) {
    const objectId = new ObjectId(todoId);
    return this.todoRepository.delete(objectId);
  }
}
