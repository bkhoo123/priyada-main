const { PrismaClient } = require('@prisma/client');
const { seedUsers } = require("./UserSeeders");
const { seedDanceClasses } = require("./DanceClassSeeders");
const { seedMedia } = require("./MediaSeeders");
const { seedServices } = require("./ServicesSeeds");
const { seedTestimonials } = require("./TestimonialSeeders");

const prisma = new PrismaClient();

async function main () {
  await seedUsers()
  await seedDanceClasses()
  await seedMedia()
  await seedServices()
  await seedTestimonials()
  console.log("Seeded successfully")
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();  // Ensure you disconnect from the database
  });