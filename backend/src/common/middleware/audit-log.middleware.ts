import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../../modules/prisma/prisma.service';

@Injectable()
export class AuditLogMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('user-agent') || '';

    res.on('finish', async () => {
      const { statusCode } = res;
      // We only log non-GET requests or admin requests for audit
      if (method !== 'GET' || originalUrl.includes('/admin')) {
        const user = (req as any).user;
        try {
          await this.prisma.auditLog.create({
            data: {
              userId: user?.id || null,
              action: method,
              resource: originalUrl,
              ipAddress: ip || 'unknown',
              userAgent,
              details: {
                statusCode,
                body: method !== 'GET' ? req.body : undefined
              },
            },
          });
        } catch (e) {
          console.error('Failed to log audit:', e);
        }
      }
    });

    next();
  }
}
