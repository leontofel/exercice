import { Header, Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { PrismaService } from '../core/prisma/prisma.service';
import { CreateUserDto } from './dto/create.dto';
import { UserDto } from './dto/user.dto';
import { GraphQLError, Token } from 'graphql';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { updateInput } from './dto/update.input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });
  }

  async login(email: string, password: string): Promise<string> {
    //if(!email || !password)
    const user = this._findOneByEmail(email);
    const validLogin = await bcrypt.compare(password, (await user).password);

    if (!user || !validLogin) {
      throw new GraphQLError(`Incorrect login, please try again or register`);
    }

    const token = jwt.sign(
      { email: email, id: (await user).id },
      process.env.PRIVATEKEY || 'secret',
      { expiresIn: '6h' },
    );
    return token;
  }

  async createUser(dto: CreateUserDto): Promise<string> {
    let newUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (newUser) {
      throw new GraphQLError(`There's already an user with this email`);
    }

    const encryptedPassword = await bcrypt.hash(dto.password, 6);

    newUser = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        password: encryptedPassword,
        city: dto.city,
        pet: dto.pet,
        tech_stack: dto.tech_stack,
        married: dto.married,
        birthday: dto.birthday,
      },
    });

    const { id } = await this._findOneByEmail(dto.email);

    const registerToken = jwt.sign(
      { email: dto.email, id: id },
      process.env.PRIVATEKEY || 'secret',
      { expiresIn: '6h' },
    );
    return registerToken;
  }

  async findOneById(id: number): Promise<UserDto> {
    const foundUser = await this.prisma.user.findUnique({
      where: { id: id },
    });
    return foundUser;
  }

  private async _findOneByEmail(email: string): Promise<User> {
    const userOfEmail = await this.prisma.user.findUnique({
      where: { email: email },
    });
    return userOfEmail;
  }

  async getLoggedUserInfo(email: string): Promise<UserDto> {
    const userInfo = await this._findOneByEmail(email);
    return userInfo;
  }

  async updateUser(dto: updateInput): Promise<UserDto> {
    const updatedUser = await this.prisma.user.update({
      where: {
        id: dto.id,
      },
      data: {
        name: dto.name,
        city: dto.city,
        pet: dto.pet,
        married: dto.married,
        tech_stack: dto.tech_stack,
        birthday: dto.birthday,
      },
    });

    return updatedUser;
  }
}
