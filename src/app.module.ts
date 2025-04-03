import { AppController } from '@/app.controller';
import { EnvModule } from '@/env/env.module';
import { AppService } from '@/app.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [EnvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
