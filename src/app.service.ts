import { EnvService } from '@/env/env.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly envService: EnvService) {}

  getPort(): { PORT: number } {
    return { PORT: this.envService.get('PORT') };
  }
}
