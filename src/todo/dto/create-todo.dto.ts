import { IsString, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  isArchived?: boolean;

  @IsOptional()
  isDeleted?: boolean;
}
