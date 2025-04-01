import { Injectable } from '@nestjs/common';
import { EnvService } from './env/env.service';

@Injectable()
export class AppService {
  constructor(private readonly envService: EnvService) {}

  getPort(): { PORT: number } {
    return { PORT: this.envService.get('PORT') };
  }
}
