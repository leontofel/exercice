import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType('CreateUserDto')
export class CreateUserDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

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
