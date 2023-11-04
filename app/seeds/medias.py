from app.models import db, Media, environment, SCHEMA
from sqlalchemy.sql import text

def seed_medias():

  new_media_list = []

  images = {
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
     "Dance School Pictures" : [

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
     "Makeup" : [
        "https://i.imgur.com/EJDC69u.jpg",
        "https://i.imgur.com/TkTPB8F.jpg",
        "https://i.imgur.com/qVLZ9wD.jpg",
        "https://i.imgur.com/vXhcRHi.jpg",
        "https://i.imgur.com/az0GPxd.jpg",
        "https://i.imgur.com/1dsrfDk.jpg",
     ],
     "Collaboration" : [
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
     "Theatre/Acting" : [
        "https://i.imgur.com/AU4V58D.jpg",
        "https://i.imgur.com/07JLlUF.jpg",
        "https://i.imgur.com/39MiecW.jpg",
     ],
  }

  for media_type, urls in images.items():
    for url in urls:
        new_media_list.append(Media(user_id=1, photo_url=url, type=media_type))

  # Add all Media objects to the database
  for media in new_media_list:
    db.session.add(media)
  db.session.commit()


  ## Photos in Google Drive
  # old_media_list = [

  #   #  Theatre/Acting

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1dC0KsboyXTHpYKX2SsJQZguntnMtM5O2/view?usp=drive_link',
  #     type='Theatre/Acting'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1d76PYHK39a8nYP8SgbJufWx1OJpBnPh4/view?usp=drive_link',
  #     type='Theatre/Acting'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1d6JM1ctENJ_SjPeiBbPM9ItnAursBPft/view?usp=drive_link',
  #     type='Theatre/Acting'
  #   ),

  #   # Reviews

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1dUTfnzPNFq1GpEafGR-WUDAxri5_FnA8/view?usp=drive_link',
  #     type='Reviews'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1dRg4FAt-EOR7mCwcJ_4Jn5S4_vpcSpm-/view?usp=drive_link',
  #     type='Reviews'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1ddIqktR45m67SC0sOq6j7ZcM89B46Cax/view?usp=drive_link',
  #     type='Reviews'
  #   ),

  #   # Makeup

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1jYbfDb8hy_a9mL6vl0CCKCP3I5pp9jZ1/view?usp=drive_link',
  #     type='Makeup'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1ab9wEsOEo3bHiaW0ezaDZt-hdU8MMl-E/view?usp=drive_link',
  #     type='Makeup'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1RSX1gjrNfqkNzjS1xDPzFoDNzJlZKtHh/view?usp=drive_link',
  #     type='Makeup'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1dtrY9w_p0mwJROOSbS8HhgVY7RhtWKH9/view?usp=drive_link',
  #     type='Makeup'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1e27KeB4905N2bO4Ql1goEG94rbCb8W4K/view?usp=drive_link',
  #     type='Makeup'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1jWc4et8Mog9SFYqzZEnoERkcRU4T35V9/view?usp=drive_link',
  #     type='Makeup'
  #   ),

  #   # LOGO

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1wNCewsQtUGa9rwKPtwXP1SCnwxG7vYbO/view?usp=drive_link',
  #     type='Logo'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1w6XIT31JGhkheMnPGcd5YcXkL-GNsHCC/view?usp=drive_link',
  #     type='Logo',
  #     description='Hand drawn logo'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1mYzhVUH4z2iqPWtr77S88uxqJDte3pyl/view?usp=drive_link',
  #     type='Logo'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1tnFbDacue2HIzpR6tYLvqgeA-sDzF8xm/view?usp=drive_link',
  #     type='Logo'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1H-LXDvEh0xUi-wmQgKJQpg37kPXaLVxs/view?usp=drive_link',
  #     type='Logo'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1v3gjkdc3FcHryYeD2KYZc1STEXLiJmnQ/view?usp=drive_link',
  #     type='Logo'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1ZoSFGWYwuYoEJKgzbF9WPTycis0ePrnP/view?usp=drive_link',
  #     type='Logo'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1X2IcOkS0-nJj0gGWJd6z7Lew_ktMisqo/view?usp=drive_link',
  #     type='Logo'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1IWq97hTFAB7fslFxoP5UZch33LIbTSFJ/view?usp=drive_link',
  #     type='Logo'
  #   ),

  #   # Hosting
  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1dEH_-JUDTQHTH-1KhRTGXiEirGtnm9ER/view?usp=drive_link',
  #     type='Hosting'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1dK_1vMLW--NaUAi9lRp001u4A8dr1kmX/view?usp=drive_link',
  #     type='Hosting'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1dQqkYHQtQjubwvtJ3EPzZ77V3dWQ8doc/view?usp=drive_link',
  #     type='Hosting'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1d19Itf8AEjy2mgfM7moFD6VZS5jQ6kyM/view?usp=drive_link',
  #     type='Hosting'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1d5Dnyj-wCHqsc8RpvVQkZ3BBDhr-3UMJ/view?usp=drive_link',
  #     type='Hosting'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1-urh6zIUaS4ecVa6wOgjfa4hb7VfIHz_/view?usp=drive_link',
  #     type='Hosting'
  #   ),

  #   # Dance School Pictures

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1fM8AyHEoHVqtIAE3a1dNm5ohhAgWOFvL/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1fUIIVxkhCTXBnveKEJ3a1ckXIJi0JOKd/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1h8HLOuBSIBytgDRTIfTcjy1YAFuX4G3A/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gVKt332AZw7_FJXkh04eNa3W9XJfJUq4/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gWqlApuymuzDHY90NJFDZaH4SdqR8tlp/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gb9HrNrxF3QbgkN-59BcnPzfk6ZElA12/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gcZEMesI5T--pbCVE7ysjieabcJpGIur/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1h8E9otUVp1WMz9gAdeSfSPcE-hcvmRTr/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1hWxouU1SPD5AcRFjeWkjdGtQfzRrP0Xt/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1hToKcgPNm4OtxA67KdWoJLFYBLQEaomv/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1hMtKA0QDVCHQFdEfI8JRCwjHrF2rhEIe/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1eKaqer5ICwI62OFT9qujs6iiGAcrO7gi/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gTbAIlw2Dm54UZIufpqKUYMs8LvN5ESf/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1hEG8O0OK2_B4RV63e7YRKT9nthu43jA8/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1hCbmjQuXphQmb9sZMAVAdngpg-skZgfK/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gSls9ItV6KiOaQACnJyDfdEL8HtDWOUV/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gRqLO5i2dx1E0aFvNSAOr16Pf4d5EDxq/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gOAD2t0u2SaSSDnVDWHiYokUvOaqsClH/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gNloxD9pV95daPH1p9Yvu_zxw8WKiewv/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gNE-Kf5DSp4DvWghAPwLe116pu9DQmAv/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gAVEL2lyXzDk1gzlyTBaTx7qONSCJXMf/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1g6XMeRr2oiMD4S3yoBDX2MPOWOoCyRQ_/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1g2NZwRRz9d7ekyO7W8Uz8RCyv3--JZW4/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1g1Q2j3Z3Ji8tXqZ1Z6ZVq2t6x7UHrQ1m/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gflT1ox1BtRvajWmr74vHrkcyAevykBM/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1ggvu6URkCvXFRTc951KaJUKTaU3QSpkA/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1fmH_ohYvPZKZ-j5B1xnvOb3gU6MLpBto/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1fgk8xhKEGb5HfHk13uGPr6q3ggTM8x5n/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1h2-w60m3L59Py9Je0tJRwZwFscV0oI_r/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1fXjheNRprYOA-mkn7PWae03oyRmINdTi/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1h9sR3xt4PvgJP7DVsexz8CC0x8v0hN8G/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1fdQM92TRbefF_cQF_s-HlD9WwbBbB5Rw/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1f_paQkOy44xqE39Lcs_BxVqVAOpX1LqG/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1fUysvcn6Mx9lom0gwfctBTFricZzdxaG/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1eQyeYPEfuFZoE_9TosKkrTSMUWo2N_qN/view?usp=drive_link',
  #     type='Dance School Pictures'
  #   ),

  #   # Collaborations

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1eM9p4le69aOTYkuQBXpZbLjnnzj_sN-q/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1JizPUUsdrvMzOiyyEmUcqzFTGBIE5flk/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1nK_KKLQ3V3OZwtv7LHVSdxCWWRSmsqTm/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/19MaHQfH2nIMHMlnShwQjbVS2dmYNDwEa/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1jWyerfG2zXuAAwj9ozkIGyyNESofUmCk/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1FpQXBgtuCN3YrMgZ868hwrdBXozhHjGb/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1IzDUBEuRKhMaj1aPMf6JixKX4a0sg4pM/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1-fHdaXAQpdrpOj6miKARBtYYJT88tO4m/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1w9Wqs91pP4nTThWPeCbbuMOjGzQwP1pN/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1bfGgGfdj4iZyZtDJ-gBOQobXmDGrmruK/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1HXf8HlRCPiozWY4dQAeOswnWLX6QJSK0/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1jbR85LXd3V8iESW3h0gsILfXp8ow54z0/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1cCV5I4sYDoLpKNEstiPTJDh3zkcRatLk/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1sbxgXNRLuFoYYnz80ObMHbmODIpFKDJn/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1mkDbp2PCh1gINjH5cl1rGOQISj3WAJIH/view?usp=drive_link',
  #     type='Collaborations'
  #   ),

  #   # Artist Pictures

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1z90-2orbd8KJ3nKC_4EPADH2BHU0okKO/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1Xlb9dxQqdmLnkWSxaCMMNuN4PIXbaHZq/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1UF6EP_rVjD2SWQW7gPR23dzToWKppOZi/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1HSiIhIaAZOMaNDWiIkDokYj1Y4ZpB71C/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1eErgJgm35r7A6gx3RyYb_8eNUTA08RTr/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gE2oxFStH7sO5NVrOMLb6OPkpd8cOO3e/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1EK9zynsfKmdUxvGDJkyaaGlCadO_QprB/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1Z6UhHoe30YABzTW90QrzY0UZ8nhOJDDt/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1BnIuEsARXhnd-OStw8QWaLu6HdwvF3sZ/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1vOZvXAbcSrkodBtICx8sgtcPgmxbesQL/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1IiiJOb7_kyBye-zJDf-EcSphYFCd40Yl/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1eONCcxJDHt0zhAljE8Y78GQ9esXWE9o1/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1oaZ-Ykv-U9K8HVxqD_Sa9XPNwU4RDLUF/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1Lx4A5kZiygOdnLzZCxWZOsfg7lbOySSl/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1Ie6QKZU1oSp30S64SIWJnza1jPILc6XI/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1Nay40PuYW6cMJDZm1wau0rq9fZe3iIXr/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1lQLcKLtdLgCj_dwYynhiRWcS2ll81LnI/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1x_dxtH8cHX2iHLpUZpJhVNvViiUxaX2L/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/13bTnA3OKEihmecKlwfVP5yiC_CWjhAXG/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1hAbkrbso0fTtgePdocEo0RigO6Q25urI/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1kd6gAaBbs3oPO1iU0d6E5E6jyr4wuNAL/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1ZCN6n0Tr_39_rkjO4qHvNiRGs_smlsiN/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1HDR8IIVxJWSNlTjjqQ2nyvmR0Ze8pviZ/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1pjqszZWK-2jQwq8_ra5bPCQiYPL6r6Gg/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1YVmjijAtJZ_N-1tmWSctP5rvx23pt19s/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1UOS20zCVk0Pnjs2VOkcwy6msAWyZS0KX/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1Kp_4THFQpD63ncZBJL9hhBmEbjJVmNs6/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/13Aq5kyl_Dhvk3DxEhXMlPqXrEjV_mi12/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/10W8ABL2IEcq8wJAsu5eCfTEowys5DF3I/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/17DOnYNnVXXrPBMC6KmhN76SnJl-fbAJn/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1pONiZZs-Z_rXrmJcBquTYzdxjPHLm2pf/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/16RHRUOLn8YmUrp-zkj26LYKdEzka_qW4/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/10bk7sk9-j1GzHsTz2BOWnVESqJgDsAko/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1FifbMJXN9Ov2U1eaUrDZneomfK343Pd9/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1InkRTJTizfs7tKYQgqPDwjWYL5HeilrS/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1oh1h4KqgkN8_TziVbnmJpmKzMwFfomjI/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1KrTpRq9o7hL3XK9abH08XGft1o_u58CI/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1kZOFGjVhDl7cGDg31MYkQzPZDh5UdyJG/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1gaepBVgSOqMYlSe-nYh6sNL4UlLtge1r/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1x1DPKlao-95oLGNob6aEt9F7uJgNoi7G/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/11FHJBljNMydCsXg3P_SRrsUUTjrWjuy5/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1OuQ413-NlIp7MG_GrFzxopqHoGO-mw1E/view?usp=drive_link',
  #     type='Artist Pictures'
  #   ),

  #   # Aesthetic Images

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1m8VL-l6yw5tDn0zXJPxfREQ6O6lNBgYi/view?usp=drive_link',
  #     type='Aesthetic Images',
  #     description='Splash Page'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1Bvs4cgrM0UwUt0S3B3RIe4IOOyx5A3Y1/view?usp=drive_link',
  #     type='Aesthetic Images',
  #     description='Splash Page Background'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1-IzyIbMsIh180blPoS1TD0KsvPpZObgC/view?usp=drive_link',
  #     type='Aesthetic Images',
  #     description='Front Page Translucent Background Image'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1BK4DME8rlS_YXO6wDFeFpskJ_Zs_CCMf/view?usp=drive_link',
  #     type='Other',
  #     description='Hand drawn logo'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/17dDQ-VGmFC4fPv_vbxwYycfNFwEyv4uu/view?usp=drive_link',
  #     type='Other',
  #     description='CHATBOT image'
  #   ),

  #   Media(
  #     user_id=1,
  #     photo_url='https://drive.google.com/file/d/1MwNn4lXKDbS7HDApPqdRYTUwYVhy1_9g/view?usp=drive_link',
  #     type='Other',
  #     description="About My Teacher (Anitha Guha's Bharathanjali)"
  #   )
  # ]

  # Iterate through the dictionary creating Media objects then appending them to new_media_list


def undo_medias():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.media RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM media"))

    db.session.commit()
