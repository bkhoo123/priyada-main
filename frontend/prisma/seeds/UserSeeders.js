const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();



async function seedUsers() {
  //? USERS
  const user1 = await prisma.User.create({
    data: {
      username: 'DemoUser',
      email: 'demouser@gmail.com',
      hashedPassword: bcrypt.hashSync('demopassword', 10),  // Note: You'll need to hash the password before saving
      authorization: 'admin',
      firstName: 'Demo',
      lastName: 'User',
      address: '12345 Waterfront Street, San Francisco, CA',
      phoneNumber: "1234567890",
    }
  })

  const user2 = await prisma.User.create({
    data: {
      username: 'anjalis',
      email: 'anjalis88@gmail.com',
      hashedPassword: bcrypt.hashSync('132qq800', 10),  // Note: You'll need to hash the password before saving
      authorization: 'student',
      firstName: 'Anjali',
      lastName: 'S.',
      address: '22 Queen Street',
      phoneNumber: "8006667577",
      paymentInfo: 'need an update'
    }
  })

  const user3 = await prisma.User.create({
    data: {
      username: 'RohanB777',
      email: 'rohan@gmail.com',
      hashedPassword: bcrypt.hashSync('wx11iio0', 10),  // Note: You'll need to hash the password before saving
      authorization: 'student',
      firstName: 'Rohan',
      lastName: 'B.',
      address: '153 Faith Avenue',
      phoneNumber: "6266667727",
    }
  })

  const user4 = await prisma.User.create({
    data: {
      username: 'AparnaK777',
      email: 'Aparna@aa.io',
      hashedPassword: bcrypt.hashSync('fishbowl33', 10),  // Note: You'll need to hash the password before saving
      authorization: 'student',
      firstName: 'Aparna',
      lastName: 'K.',
      address: '3296 Disney Road',
      phoneNumber: "7777777777",
    }
  })

  const user5 = await prisma.User.create({
    data: {
      username: 'AdminUser',
      email: 'adminuser@gmail.com',
      hashedPassword: bcrypt.hashSync('quacksmile', 10),  // Note: You'll need to hash the password before saving
      authorization: 'student',
      firstName: 'Admin',
      lastName: 'User',
      address: '888 Happy Street',
      phoneNumber: "7971211113",
    }
  })

  const user6 = await prisma.User.create({
    data: {
      username: 'PallabKar979',
      email: 'PallabKar@gmail.com',
      hashedPassword: bcrypt.hashSync('erina123', 10),  // Note: You'll need to hash the password before saving
      authorization: 'student',
      firstName: 'Pallab',
      lastName: 'Kar',
      address: '2945 Green Street',
      phoneNumber: "2123334442",
    }
  })

  const user7 = await prisma.User.create({
    data: {
      username: 'PriyankaS',
      email: 'PriyankaS@gmail.com',
      hashedPassword: bcrypt.hashSync('eiooqwe22', 10),  // Note: You'll need to hash the password before saving
      authorization: 'student',
      firstName: 'Priyanka',
      lastName: 'Subramanyam',
      address: '645 University Street',
      phoneNumber: "6266667774",
    }
  })

  const user8 = await prisma.User.create({
    data: {
      username: 'VandanaA',
      email: 'VandanaA@gmail.com',
      hashedPassword: bcrypt.hashSync('obnfeitt', 10),  // Note: You'll need to hash the password before saving
      authorization: 'student',
      firstName: 'Vandana',
      lastName: 'A',
      address: '399 Elysian Street',
      phoneNumber: "6266667771",
    }
  })

  const user9 = await prisma.User.create({
    data: {
      username: 'ShubadraJ',
      email: 'Shubadraj@gmail.com',
      hashedPassword: bcrypt.hashSync('shu577', 10),  // Note: You'll need to hash the password before saving
      authorization: 'student',
      firstName: 'Shubadra',
      lastName: 'J',
      address: '888 Kite Street',
      phoneNumber: "6266667772",
    }
  })

  const user10 = await prisma.User.create({
    data: {
      username: 'CharlesD',
      email: 'CharlesD@gmail.com',
      hashedPassword: bcrypt.hashSync('uioovoo0', 10),  // Note: You'll need to hash the password before saving
      authorization: 'student',
      firstName: 'Charles',
      lastName: 'D.',
      address: '999 Pine Street',
      phoneNumber: "3236861346",
    }
  })

  const user11 = await prisma.User.create({
    data: {
      username: 'KarthikB777',
      email: 'KarthikB7@gmail.com',
      hashedPassword: bcrypt.hashSync('george123', 10),  // Note: You'll need to hash the password before saving
      authorization: 'student',
      firstName: 'Karthik',
      lastName: 'G.',
      address: '222 Dodger Street',
      phoneNumber: "6267995823",
    }
  })

  // return {
  //   user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11
  // }
}

module.exports = {seedUsers}