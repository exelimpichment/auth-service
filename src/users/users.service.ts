import { PrismaService } from 'prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(email: string) {
    return await this.prisma.users.findUnique({ where: { email } });
  }
}
