import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('profile')
  async getProfile(@Request() req: any) {
    return this.usersService.findOne(req.user.userId);
  }

  @Get('watchlist')
  async getWatchlist(@Request() req: any) {
    return this.usersService.getWatchlist(req.user.userId);
  }

  @Post('watchlist/:animeId')
  async addToWatchlist(@Request() req: any, @Param('animeId') animeId: string) {
    return this.usersService.addToWatchlist(req.user.userId, animeId);
  }

  @Get('history')
  async getHistory(@Request() req: any) {
    return this.usersService.getHistory(req.user.userId);
  }

  @Post('history')
  async addToHistory(@Request() req: any, @Body() body: { episodeId: string, progress: number }) {
    return this.usersService.addToHistory(req.user.userId, body.episodeId, body.progress);
  }
}
