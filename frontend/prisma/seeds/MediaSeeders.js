const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()

const images = {
  "Artist Pictures": [
    "https://i.imgur.com/KaPwYnt.jpg",
    "https://i.imgur.com/528zO9X.jpg",
    "https://i.imgur.com/1plmOkH.jpg",
    "https://i.imgur.com/pt1sEO8.jpg",
    "https://i.imgur.com/7QNz5AZ.jpg",
    "https://i.imgur.com/xLK18a3.jpg",
    "https://i.imgur.com/vHeYX9z.jpg",
    "https://i.imgur.com/KgGbmq2.jpg",
    "https://i.imgur.com/ZrhGZjj.jpg",
    "https://i.imgur.com/shdoVL0.jpg",
    "https://i.imgur.com/Oz4GXwm.jpg",
    "https://i.imgur.com/C95c76v.jpg",
    "https://i.imgur.com/KWGGceC.jpg",
    "https://i.imgur.com/GRNpWI0.jpg",
    "https://i.imgur.com/0Kp5OeA.jpg",
    "https://i.imgur.com/XgWkqvc.jpg",
    "https://i.imgur.com/ZsvQHHf.jpg",
    "https://i.imgur.com/OuZur7l.jpg",
    "https://i.imgur.com/sCrBrPR.jpg",
    "https://i.imgur.com/OFGoVDc.png",
    "https://i.imgur.com/dg63l8F.jpg",
    "https://i.imgur.com/JJ2eD51.jpg",
    "https://i.imgur.com/VfFwobg.jpg",
    "https://i.imgur.com/A7nD2Nq.jpg",
    "https://i.imgur.com/d5h29TW.jpg",
    "https://i.imgur.com/DNNuLWI.jpg",
    "https://i.imgur.com/po5BPgt.jpg",
    "https://i.imgur.com/5aK8961.jpg",
    "https://i.imgur.com/hIrewfy.jpg",
    "https://i.imgur.com/vzHpKBD.jpg",
    "https://i.imgur.com/LhO4CVZ.jpg",
    "https://i.imgur.com/1njl1db.jpg",
    "https://i.imgur.com/R3IBvPd.jpg",
    "https://i.imgur.com/yijZPqS.jpg",
    "https://i.imgur.com/foZaWLD.jpg",
    "https://i.imgur.com/XkkO1Nj.jpg",
    "https://i.imgur.com/mZZuGjX.jpg",
    "https://i.imgur.com/2f5cRvp.jpg",
    "https://i.imgur.com/V6WkEaD.jpg",
    "https://i.imgur.com/VgEPvON.jpg",
    "https://i.imgur.com/KHaELcH.jpg",
    "https://i.imgur.com/9XD1QDS.jpg",
    "https://i.imgur.com/e2anj4s.jpg",
  ],
  "Dance Class Pictures": [
    "https://i.imgur.com/mUygxyV.jpg",
    "https://i.imgur.com/81MFQGz.jpg",
    "https://i.imgur.com/d9GURYr.jpg",
    "https://i.imgur.com/usGHuuA.jpg",
    "https://i.imgur.com/0zRGFjX.jpg",
    "https://i.imgur.com/M0o6Q5p.jpg",
    "https://i.imgur.com/hI3TQvh.jpg",
    "https://i.imgur.com/0xeC5Fj.jpg",
    "https://i.imgur.com/BN9ziBw.jpg",
    "https://i.imgur.com/gOlJ0TC.jpg",
    "https://i.imgur.com/3JD0Fwc.jpg",
    "https://i.imgur.com/v23kYwn.jpg",
    "https://i.imgur.com/njpeToN.jpg",
    "https://i.imgur.com/j78qgcC.jpg",
    "https://i.imgur.com/RaGbhoJ.jpg",
    "https://i.imgur.com/fx8saeL.jpg",
    "https://i.imgur.com/1hkScMT.jpg",
    "https://i.imgur.com/nMlGSKB.jpg",
    "https://i.imgur.com/ZuT1Fos.jpg",
    "https://i.imgur.com/sxrrlN5.jpg",
    "https://i.imgur.com/rYSciAf.jpg",
    "https://i.imgur.com/k5WlS4h.jpg",
    "https://i.imgur.com/5wbazHy.jpg",
    "https://i.imgur.com/anMsH7Q.jpg",
    "https://i.imgur.com/ydwEOdv.jpg",
    "https://i.imgur.com/10dyyvc.jpg",
    "https://i.imgur.com/h4Rjd3s.jpg",
    "https://i.imgur.com/C5OOADE.jpg",
    "https://i.imgur.com/Bznm5U5.jpg",
    "https://i.imgur.com/yV0gFfV.jpg",
    "https://i.imgur.com/rn6XWgq.jpg",
    "https://i.imgur.com/0HEadx6.jpg",
    "https://i.imgur.com/LnpQpHF.jpg",
    "https://i.imgur.com/i47FcBX.jpg",
    "https://i.imgur.com/rtou2kh.jpg",
  ],
  "Makeup": [
    "https://i.imgur.com/EJDC69u.jpg",
    "https://i.imgur.com/TkTPB8F.jpg",
    "https://i.imgur.com/qVLZ9wD.jpg",
    "https://i.imgur.com/vXhcRHi.jpg",
    "https://i.imgur.com/az0GPxd.jpg",
    "https://i.imgur.com/1dsrfDk.jpg",
  ],
  "Collaboration": [
    "https://i.imgur.com/kgcDUn3.jpg",
    "https://i.imgur.com/anHl8JG.jpg",
    "https://i.imgur.com/vVYt3GZ.jpg",
    "https://i.imgur.com/vGL147P.jpg",
    "https://i.imgur.com/6tWXiou.jpg",
    "https://i.imgur.com/6Hmekwc.jpg",
    "https://i.imgur.com/08ey6JI.jpg",
    "https://i.imgur.com/BNbbqgx.jpg",
    "https://i.imgur.com/T4YsqwZ.jpg",
    "https://i.imgur.com/5t7euVz.jpg",
    "https://i.imgur.com/DqOMhgE.jpg",
    "https://i.imgur.com/7detClr.jpg",
    "https://i.imgur.com/ioEynQf.jpg",
    "https://i.imgur.com/mIekvuq.jpg",
    "https://i.imgur.com/Env5yiE.jpg",
  ],
  "Theatre/Acting": [
    "https://i.imgur.com/AU4V58D.jpg",
    "https://i.imgur.com/07JLlUF.jpg",
    "https://i.imgur.com/39MiecW.jpg",
  ]
}

async function seedMedia() {
  const newMediaList = []

  const user = await prisma.User.findUnique({
    where: {
      email: "demouser@gmail.com"
    }
  })
  

  for (const [mediaType, urls] of Object.entries(images)) {
    for (const url of urls) {
      newMediaList.push({
        userId: user.id,
        photoUrl: url,
        type: mediaType
      })
    }
  }

  for (const media of newMediaList) {
    await prisma.Media.create({ data: media })
  }
}


module.exports = { seedMedia }