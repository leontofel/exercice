import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class UsersArgs {
  @Field(() => Int)
  skip = 0;

  @Field(() => Int)
  take = 25;
}
