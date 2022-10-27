import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user.input';
import { UsersArgs } from './dto/users.args';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  async create(data: NewUserInput): Promise<User> {
    return {} as any;
  }

  async findOneById(id: number): Promise<User> {
    return {} as any;
  }

  async findOneByEmail(email: string): Promise<User> {
    return {} as any;
  }

  async findAll(): Promise<User[]> {
    return [] as User[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
