import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDto } from './dto/user.dto';
import { PrismaService } from '../core/prisma/prisma.service';
import { CreateUserDto } from './dto/create.dto';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { NewUserInput } from './dto/new-user.input';
import { updateInput } from './dto/update.input';
import { TokenDto } from './dto/token.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  @Query(() => UserDto)
  async getUserById(@Args('id', { type: () => Int }) id: number) {
    return await this.usersService.findOneById(id);
  }

  @Query(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return await this.usersService.login(email, password);
  }

  @Query(() => UserDto)
  async getLoggedUserInfo(
    @Args('tokenForInfo', { type: () => String }) tokenForInfo: string,
  ) {
    return await this.getLoggedUserInfo(tokenForInfo);
  }

  @Mutation(() => String) // string
  async createUser(
    @Args('NewUserInput', { type: () => NewUserInput }) dto: CreateUserDto,
  ) {
    return this.usersService.createUser(dto);
  }

  @Mutation(() => UserDto)
  async updateUser(
    @Args('updateInput', { type: () => updateInput }) dto: UserDto,
  ) {
    return this.usersService.updateUser(dto);
  }
}
