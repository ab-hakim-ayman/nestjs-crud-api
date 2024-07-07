import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class Todo {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  isArchived: boolean;

  @Column({ default: false })
  isDeleted: boolean;
}
