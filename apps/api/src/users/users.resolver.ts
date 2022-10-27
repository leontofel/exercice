import {
  Args,
  Field,
  Int,
  Mutation,
  ObjectType,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import jwt from 'jsonwebtoken';
import { NewUserInput } from './dto/new-user.input';
import { User } from './models/user.model';
import { UsersService } from './users.service';

const pubSub = new PubSub();

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Query((returns) => User)
  async findUser(@Args('user_id', { type: () => Int }) user_id: number) {
    return this.usersService.findOneById(user_id);
  }

  @Query((returns) => User)
  async findUserByEmail(@Args('email', { type: () => String }) email: string) {
    return this.usersService.findOneByEmail(email);
  }

  // return JWT
  @Query((login) => String)
  async token(@Args('user_id', { type: () => Int }) user_id: number) {
    const token = await this.findUser(user_id).then((res: User) => {
      const token = jwt.sign({ ...res }, process.env.PRIVATEKEY || 'secret');
      return token;
    });
    return token;
  }

  // Returns the logged user info
  @Query((login) => String)
  async getUserInfo(@Args('user_id', { type: () => Int }) user_id: number) {
    return this.usersService.findOneById(user_id);
  }

  @ResolveField()
  async users(@Parent() author: User) {
    const { user_id } = author;
    return this.usersService.findAll();
  }

  // Creates new user
  @Mutation((returns) => User)
  async addUser(@Args('newUserData') newUserData: NewUserInput): Promise<User> {
    const user = await this.usersService.create(newUserData);
    pubSub.publish('userAdded', { userAdded: user });
    return user;
  }

  @Mutation(() => Boolean)
  async Register(
    @Args('name') name: string,
    @Args('city') city: string,
    @Args('pet') pet: string,
    @Args('tech_stack') tech_stack: string,
    @Args('married') married: boolean,
    @Args('birthday') birthday: Date,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const hashedPassword = await jwt.sign(
      { password },
      process.env.PRIVATEKEY || 'secret',
    );

    try {
      await this.addUser({
        name,
        city,
        pet,
        tech_stack,
        married,
        birthday,
        email,
        password: hashedPassword,
      });
    } catch (err) {
      console.log(err);
      return false;
    }

    return true;
  }

  @Mutation(() => LoginResponse)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const user = await this.findUserByEmail(email);

    if (!user) {
      throw new Error('Could not find user');
    }

    const verify = jwt.verify(password, user.password);

    if (!verify) {
      throw new Error('Wrong password');
    }
    const accessToken = jwt.sign(
      { t: 'jhfksjhdk' },
      process.env.PRIVATEKEY || 'secret',
      { expiresIn: '6h' },
    );
    return accessToken;
  }

  // Updates user
  @Mutation((returns) => User)
  async updateUser(@Args('newUserData') newUserData: NewUserInput) {
    const user = await this.usersService.create(newUserData);
    pubSub.publish('userAdded', { userAdded: user });
    return user;
  }
}
