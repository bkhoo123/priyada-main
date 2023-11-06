const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

export async function POST(request, res) {
  try {
    const { email, password } = await request.json();

    
    const user = await prisma.User.findUnique({
      where: {
        email: JSON.parse(email)
      }
    });

    // return Response.json(user)
    

    if (user && bcrypt.compareSync(JSON.parse(password), user.hashedPassword)) {
      return Response.json(user);
    } 
    else {
      return Response.json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
   return Response.json({ message: "An error occurred while logging in." });
  }
}
