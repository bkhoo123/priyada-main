const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const testimonials = await prisma.Testimonial.findMany();
    console.log(testimonials, 'testimonials')

    return Response.json(testimonials);
  } catch (error) {
    console.error(error);
    return Response.json({ message: "An error occurred while fetching testimonials." });
  }
}

