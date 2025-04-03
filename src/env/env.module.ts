import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvService } from '@/env';
import { envSchema } from '@/env/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
    }),
  ],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule {}
