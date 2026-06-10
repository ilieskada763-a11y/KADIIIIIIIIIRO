import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OwnerGuard } from '../../common/guards/owner.guard';

@ApiTags('Anime')
@Controller('anime')
export class AnimeController {
  constructor(private animeService: AnimeService) {}

  @Get()
  async findAll() {
    return this.animeService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, OwnerGuard)
  @Post()
  async create(@Body() body: any) {
    // Logic to create anime
    return { success: true };
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, OwnerGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    // Logic to soft delete anime
    return { success: true };
  }
}
