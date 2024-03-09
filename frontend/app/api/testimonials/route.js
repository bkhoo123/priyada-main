import { NextResponse } from 'next/server';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const testimonials = await prisma.testimonial.findMany();
    

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json({ 
      message: "An error occurred while fetching testimonials." + error.message
    });
  }
}

