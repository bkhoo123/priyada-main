import { NextResponse } from 'next/server';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const mediaGallery = await prisma.media.findMany();
    

    return NextResponse.json(mediaGallery);

  } catch (error) {
    console.error(error.message)
    return NextResponse.json({
      message: "An error occured while fetching the media gallery" + error.message
    })
  }
}