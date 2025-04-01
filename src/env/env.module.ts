import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvService } from '@/env';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule {}
