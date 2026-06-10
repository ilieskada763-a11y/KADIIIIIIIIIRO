import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OwnerGuard } from '../../common/guards/owner.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, OwnerGuard)
@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Get('stats')
  async getStats() {
    return this.adminService.getStats();
  }
}
