import { IsString, MinLength } from 'class-validator';

export class NewMessageDto {
  @IsString()
  @MinLength(4)
  message: string;
}
