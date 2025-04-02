import { Module } from '@nestjs/common';
import { PrismaService } from '@/prisma';
import { UsersService } from '@/users';

@Module({
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
