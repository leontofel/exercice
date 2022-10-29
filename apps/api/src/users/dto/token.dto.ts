import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType('TokenDto')
export class TokenDto {
  @Field()
  token: string;
}
