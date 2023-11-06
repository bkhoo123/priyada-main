const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seedServices() {
  const services = [
    {
      category: "Makeup",
      description: "Dance Makeup for Arengetrams, Photoshoots & Shows. Dance Makeup Workshops, Theatre Stage Makeup"
    },
    {
      category: "Emceeing/Hosting",
      description: "Emcee/hosting for shows, tv shows, productions, etc"
    },
    {
      category: "Other/Nattuvangam",
      description: "Priyanka offers nattuvangam servies for concerts, productions, and private audio recordings."
    }
  ]

  for (const service of services) {
    await prisma.Service.create({ data: service })
  }
}

module.exports = { seedServices }