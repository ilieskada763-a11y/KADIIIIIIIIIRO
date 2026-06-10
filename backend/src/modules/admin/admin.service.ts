import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getStats() {
    const totalUsers = await this.prisma.user.count();
    const totalAnime = await this.prisma.anime.count();
    const totalViews = await this.prisma.animeView.count();
    return { totalUsers, totalAnime, totalViews };
  }
}
