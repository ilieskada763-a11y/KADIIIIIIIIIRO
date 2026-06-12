import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await argon2.hash('akai2025');

  await prisma.user.upsert({
    where: { email: 'owner@akaistream.com' },
    update: {},
    create: {
      email: 'owner@akaistream.com',
      username: 'akai_owner',
      passwordHash,
      role: 'OWNER',
      status: 'ACTIVE',
    },
  });

  await prisma.anime.create({
    data: {
      title: 'Cyberpunk: Edgerunners',
      slug: 'cyberpunk-edgerunners',
      description: 'In a dystopia riddled with corruption and cybernetic implants...',
      coverImage: 'https://images.alphacoders.com/126/1264357.jpg',
      bannerImage: 'https://images.alphacoders.com/126/1264357.jpg',
      status: 'FINISHED',
      year: 2022,
    }
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
