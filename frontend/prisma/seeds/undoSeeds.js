const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function undoSeeds() {
  try {
    await prisma.Testimonial.deleteMany()
    await prisma.Media.deleteMany();
    await prisma.DanceClass.deleteMany();
    await prisma.Service.deleteMany()
    await prisma.User.deleteMany();
    // ... delete records for other models
    console.log('Seeds undone successfully');
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

undoSeeds();