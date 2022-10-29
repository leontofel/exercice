import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('updateInput')
export class updateInput {
  @Field()
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
