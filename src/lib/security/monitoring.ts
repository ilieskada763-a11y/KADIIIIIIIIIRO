import { prisma } from "@/lib/prisma";

export async function checkRateLimit(key: string, limit: number = 5, windowMs: number = 60000) {
  const now = new Date();

  let record = await prisma.rateLimit.findUnique({
    where: { key }
  });

  if (!record || now > record.resetAt) {
    record = await prisma.rateLimit.upsert({
      where: { key },
      create: {
        key,
        points: 1,
        resetAt: new Date(now.getTime() + windowMs)
      },
      update: {
        points: 1,
        resetAt: new Date(now.getTime() + windowMs)
      }
    });
    return true;
  }

  if (record.points >= limit) {
    return false;
  }

  await prisma.rateLimit.update({
    where: { key },
    data: { points: { increment: 1 } }
  });

  return true;
}

export async function logAudit(userId: string | null, action: string, resource: string, ip: string, details?: Record<string, unknown>) {
  await prisma.auditLog.create({
    data: {
      userId,
      action,
      resource,
      ipAddress: ip,
      details: details ? JSON.stringify(details) : null
    }
  });
}
