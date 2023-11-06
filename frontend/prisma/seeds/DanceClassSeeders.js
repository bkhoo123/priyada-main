// prisma/seed.ts

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seedDanceClasses() {
  const beginner = await prisma.DanceClass.create({
    data: {
      classOne: "Monday at 5:00 pm",
      classTwo: "Thursday at 6:00 pm",
      level: "Beginner",
      description: "Fundamentals & Basics: Adavus, Jathis, Mudras, Padha Bhedas and Theory"
    }
  })

  const intermediate = await prisma.DanceClass.create({
    data: {
      classOne: "Monday at 6:00 pm",
      classTwo: "Friday at 6:00 pm",
      level: "Intermediate",
      description: "Fundamentals & Items: Pushpanjalis, Alarippus, Jathiswarams, Dance Theory, etc"
    }
  })

  const advanced = await prisma.DanceClass.create({
    data: {
      classOne: "Monday at 7:00 pm",
      classTwo: "Saturday 9:30 am",
      level: "Advanced",
      description: "Advanced Dance items: Padhams, Varnams, Javalis, etc"
    }
  })

  const senior = await prisma.DanceClass.create({
    data: {
      classOne: "Available on request",
      classTwo: "Available on request",
      level: "Senior",
      description: "One-on-One mentorship and training available for senior artists looking to sharpen their performance skills"
    }
  })
}

module.exports = { seedDanceClasses}