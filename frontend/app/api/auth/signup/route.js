const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const {username, email, password, authorization, firstName, lastName, address, phoneNumber} = await request.json()

    const hashedPassword = bcrypt.hashSync(password, 10)

    const user = await prisma.User.create({
      data: {
        username,
        email,
        hashedPassword,
        authorization,
        firstName,
        lastName,
        address,
        phoneNumber
      }
    })

    return Response.json(user)

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "An error occurred while signing up." }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}