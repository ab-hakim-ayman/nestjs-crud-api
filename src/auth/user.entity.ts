import { Entity, ObjectIdColumn, Column, Unique } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
@Unique(['username'])
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  username: string;

  @Column()
  password: string;
}
