import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && await argon2.verify(user.passwordHash, pass)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
