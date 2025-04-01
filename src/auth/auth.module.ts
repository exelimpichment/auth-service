import { Module } from '@nestjs/common';
import { AuthService } from '@/auth';
import { UsersModule } from '@/users';
import { JwtModule } from '@nestjs/jwt';

import { EnvService, EnvModule } from '@/env';

@Module({
  imports: [
    UsersModule,
    EnvModule,
    JwtModule.registerAsync({
      imports: [EnvModule],
      useFactory: (envService: EnvService) => {
        const secret = envService.get('JWT_SECRET_KEY');
        return {
          secret,
          signOptions: { expiresIn: '60m' },
        };
      },
      inject: [EnvService], // Inject EnvService into the factory
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
