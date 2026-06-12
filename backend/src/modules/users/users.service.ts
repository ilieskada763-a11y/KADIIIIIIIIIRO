import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        avatar: true,
        role: true,
        createdAt: true,
      }
    });
  }

  async getWatchlist(userId: string) {
    return this.prisma.watchlist.findMany({
      where: { userId },
      include: { anime: true }
    });
  }

  async addToWatchlist(userId: string, animeId: string) {
    return this.prisma.watchlist.upsert({
      where: { userId_animeId: { userId, animeId } },
      create: { userId, animeId },
      update: { addedAt: new Date() }
    });
  }

  async getHistory(userId: string) {
    return this.prisma.watchHistory.findMany({
      where: { userId },
      include: { episode: { include: { season: { include: { anime: true } } } } },
      orderBy: { watchedAt: 'desc' }
    });
  }

  async addToHistory(userId: string, episodeId: string, progress: number) {
    return this.prisma.watchHistory.create({
      data: { userId, episodeId, progress }
    });
  }
}
