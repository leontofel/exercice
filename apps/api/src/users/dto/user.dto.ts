import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType('User')
export class UserDto {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  pet: string;

  @Field()
  tech_stack: string;

  @Field()
  married: boolean;

  @Field()
  birthday: Date;
}
