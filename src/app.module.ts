import { AppController } from './app.controller';
import { EnvModule } from './env/env.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'prisma.service';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { envSchema } from './env/env';
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
