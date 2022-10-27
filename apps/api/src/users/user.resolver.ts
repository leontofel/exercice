import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDto } from './dto/user.dto';
import { PrismaService } from '../core/prisma/prisma.service';
import { CreateUserDto } from './dto/create.dto';
import { GraphQLError } from 'graphql/error';

@Resolver()
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => UserDto)
  getUser() {
    return {
      id: 'user1',
      name: 'leo',
    };
  }

  @Mutation(() => UserDto)
  async createUser(
    @Args('dto', { type: () => CreateUserDto }) dto: CreateUserDto,
  ) {
    let user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (user) {
      throw new GraphQLError(`There's already an user with this email`);
    }

    user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        password: dto.password, // hash password
      },
    });

    return user;
  }
}
