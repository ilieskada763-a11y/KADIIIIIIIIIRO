import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnimeService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.anime.findMany({ where: { deletedAt: null } });
  }
}
