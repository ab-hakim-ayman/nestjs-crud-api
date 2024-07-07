import { IsString, IsOptional } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  isArchived?: boolean;

  @IsOptional()
  isDeleted?: boolean;
}
