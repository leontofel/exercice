import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from '../core/prisma/prisma.service';

@Module({
  providers: [UsersService, UserResolver, PrismaService],
})
export class UsersModule {}
