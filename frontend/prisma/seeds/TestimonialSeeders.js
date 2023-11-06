const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seedTestimonials() {
  const user1 = await prisma.User.findUnique({
    where: {
      email: "demouser@gmail.com"
    }
  })
  
  const user2 = await prisma.User.findUnique({
    where: {
      email: "anjalis88@gmail.com"
    }
  })
  
  const user3 = await prisma.User.findUnique({
    where: {
      email: "rohan@gmail.com"
    }
  })
  
  const user4 = await prisma.User.findUnique({
    where: {
      email: "Aparna@aa.io"
    }
  })
  
  const user5 = await prisma.User.findUnique({
    where: {
      email: "adminuser@gmail.com"
    }
  })

  const testimonials = [
    {
      userId: user1.id,
      firstName: "Anjali",
      lastName: "S.",
      role: "Student at Priyada Arts",
      content: "Priyanka is a true gem in the world of Bharatanatyam. Her skills and creativity are matched only by her kindness and generosity",
      isApproved: true
    },
    {
      userId: user2.id,
      firstName: "Rohan",
      lastName: "B.",
      role: "Collaborator",
      content: "Working with Priyanka has been a transformative experience. She has a rare combination of technical brilliance and emotional depth that makes her performances truly unforgettable.",
      isApproved: true
    },
    {
      userId: user3.id,
      firstName: "Aparna",
      lastName: "K.",
      role: "Student at Priyada Arts",
      content: "Priyada Arts is more than just a dance school; it is a community that fosters growth, creativity, and belonging. Priyanka's leadership and vision are truly inspiring.",
      isApproved: true
    },
    {
        userId: user4.id,
        firstName: "Keerthana",
        lastName: "Yellapragada",
        role: "Student at Priyada Arts",
        content: "Priyada Arts has been instrumental in my journey as an artist. Priyanka Akka's techniques and approach to Abhinaya and stage performance have been invaluable and inspiring and have helped me developed artistic abilities. She pours her heart and soul into each and every student, encouraging artistic freedom - something that is rare in the world of tradional arts! As a person, she is warm, loving, and genuine and a good friend of mine. I always leave class encouraged and in high spirits!",
        isApproved: true
    },
    {
        userId: user5.id,
        firstName: "Pallab",
        lastName: "Kar",
        role: "Student at Priyada Arts",
        content: "I met Priyanka on the sets of Mahabharata, and I was immmediately impressed by her techniques and enthusiasm towards Bharatanatyam. It was an immense pleasure to share the stage with her. During that period, she also helped me understand the Talams(rhythmic patterns) and certain steps that were just hard for me to grasp. But her way of guidance just made it easy. It's almost a year of learning from such a friendly and talented guru. Thank you, Priyanka!",
        isApproved: true
    },
    {
      userId: user3.id,
      firstName: "Aparna",
      lastName: "K.",
      role: "Student at Priyada Arts",
      content: "Priyada Arts is more than just a dance school; it is a community that fosters growth, creativity, and belonging. Priyanka's leadership and vision are truly inspiring.",
      isApproved: true
    },
    {
        userId: user4.id,
        firstName: "Keerthana",
        lastName: "Yellapragada",
        role: "Student at Priyada Arts",
        content: "Priyada Arts has been instrumental in my journey as an artist. Priyanka Akka's techniques and approach to Abhinaya and stage performance have been invaluable and inspiring and have helped me developed artistic abilities. She pours her heart and soul into each and every student, encouraging artistic freedom - something that is rare in the world of tradional arts! As a person, she is warm, loving, and genuine and a good friend of mine. I always leave class encouraged and in high spirits!",
        isApproved: true
    },
    {
        userId: user5.id,
        firstName: "Pallab",
        lastName: "Kar",
        role: "Student at Priyada Arts",
        content: "I met Priyanka on the sets of Mahabharata, and I was immmediately impressed by her techniques and enthusiasm towards Bharatanatyam. It was an immense pleasure to share the stage with her. During that period, she also helped me understand the Talams(rhythmic patterns) and certain steps that were just hard for me to grasp. But her way of guidance just made it easy. It's almost a year of learning from such a friendly and talented guru. Thank you, Priyanka!",
        isApproved: true
    },
  ]
  


  for (const testimonial of testimonials) {
    await prisma.Testimonial.create({ data: testimonial });
  }
}

module.exports = {seedTestimonials}