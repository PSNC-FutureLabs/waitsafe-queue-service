import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const card = await prisma.card.upsert({
    where: { number: 'AK58GD' },
    update: {},
    create: {
      number: 'AK58GD',
      icon: 'green-monkey',
      visits: {
        create: {
          estimatedTime: '1996-12-19T11:15:00+01:00',
          queueId: 'kolejka-1',
          hospitalId: 'szpital-1',
        },
      },
    },
  });

  console.log({ card });

  const scan = await prisma.scan.createMany({
    data: [
      {
        body: JSON.stringify({ valid: 'json' }),
      },
      { body: 'plain text' },
    ],
  });

  console.log(scan);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
