# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ------Users----------
avatar1 = "http://res.cloudinary.com/dopv3qpj7/image/upload/c_crop,g_face,h_768,w_768/v1490251323/6b92d9fb-4685-4b61-922a-d77eb6ea1025_vbrxru.jpg"
avatar2 = "http://res.cloudinary.com/dopv3qpj7/image/upload/c_crop,g_face,h_1080,w_1080/v1490251662/raccoon_igebwg.jpg"
avatar3 = "http://res.cloudinary.com/dopv3qpj7/image/upload/c_crop,g_face,h_2000,w_2000/v1490252134/pexels-photo-212092_gtyiho.jpg"
avatar4 = "http://res.cloudinary.com/dopv3qpj7/image/upload/c_crop,g_face,h_2592,w_2592/v1490252125/pexels-photo-206559_mzpmon.jpg"
avatar5 = "http://res.cloudinary.com/dopv3qpj7/image/upload/c_crop,g_face,h_1824,w_1824/v1490252118/pexels-photo-157023_etrrws.jpg"
avatar6 = "http://res.cloudinary.com/dopv3qpj7/image/upload/c_crop,g_face,h_1280,w_1280/v1490252104/girl-people-landscape-sun-38554_sebgkb.jpg"
avatar7 = "http://res.cloudinary.com/dopv3qpj7/image/upload/c_crop,g_face,h_3840,w_3840/v1490252019/pexels-photo-101584_kmmhem.jpg"
avatar8 = "http://res.cloudinary.com/dopv3qpj7/image/upload/c_crop,g_face,h_1984,w_1984/v1490252010/pexels-photo-119705_pafvcw.jpg"
avatar9 = "http://res.cloudinary.com/dopv3qpj7/image/upload/c_crop,g_face,h_3456,w_3456/v1490251950/pexels-photo-27411_fuqp69.jpg"
avatar10 = "http://res.cloudinary.com/dopv3qpj7/image/upload/c_crop,g_face,h_847,w_847/v1490252706/pexels-photo-196464_ypsyai.jpg"

description1 = "I may be a wizard, but I've discovered my true passion is the beauty of Lake Mead. I love to think, talk, and write about this truely magical place."
description2 = "Let the ruling classes tremble at a communist revolution. The proletarians have nothing to lose but their chains. They have a world to win. Workingmen of all countries, unite!"
description3 = "History repeats itself, first as tragedy, second as farce."
description4 = "The worker of the world has nothing to lose, but their chains, workers of the world unite."
description5 = "The theory of Communism may be summed up in one sentence: Abolish all private property."
description6 = "The production of too many useful things results in too many useless people."
description7 = "Capital is money, capital is commodities. By virtue of it being value, it has acquired the occult ability to add value to itself. It brings forth living offspring, or, at the least, lays golden eggs."
description8 = "It is absolutely impossible to transcend the laws of nature. What can change in historically different circumstances is only the form in which these laws expose themselves."
description9 = "Natural science will in time incorporate into itself the science of man, just as the science of man will incorporate into itself natural science: there will be one science."
description10 = "The development of civilization and industry in general has always shown itself so active in the destruction of forests that everything that has been done for their conservation and production is completely insignificant in comparison."

User.create(username: "Harry", password: "password1" , avatar_url: avatar1 , description: description1 )
User.create(username: "Frank", password: "password1" , avatar_url: avatar2 , description: description2 )
User.create(username: "Aaron", password: "password1" , avatar_url: avatar3 , description: description3 )
User.create(username: "Sophia", password: "password1" , avatar_url: avatar4 , description: description4 )
User.create(username: "Emma", password: "password1" , avatar_url: avatar5 , description: description5 )
User.create(username: "Isabella", password: "password1" , avatar_url: avatar6 , description: description6 )
User.create(username: "Dennis", password: "password1" , avatar_url: avatar7 , description: description7 )
User.create(username: "Jack", password: "password1" , avatar_url: avatar8 , description: description8 )
User.create(username: "Luke", password: "password1" , avatar_url: avatar9 , description: description9 )
User.create(username: "Charlotte", password: "password1" , avatar_url: avatar10 , description: description10 )


# -------------------------------

# ------------Stories---------
body = "Lake Mead is the largest reservoir in the United States,
measured by water capacity. It is on the Colorado River about
24 mi (39 km) from the Las Vegas Strip southeast of the city of
Las Vegas, Nevada, in the states of Nevada and Arizona. Formed
by the Hoover Dam, Lake Mead is 112 miles (180 km) long when the
lake is full, has 759 miles (1,221 km) of shoreline, is 532
feet (162 m) at greatest depth, with a surface elevation of 1,221.4
feet (372.3 m) above sea level, and has 247 square miles (640 km2)
of surface, and when filled to available capacity, 26.12 million
acre feet (32.22 km3) of water. The lake has not reached full
capacity, however, since 1983 due to a combination of drought
and increased water demand.[1][2][3] Owing to current low water
level, Lake Sakakawea holds claim over Lake Mead in terms of
the United State's largest reservoir by total area and water
in reserve.

The reservoir serves water to the states of Arizona, Nevada
and California, providing sustenance to nearly 20 million
people and large areas of farmland"

title1 = "Is Lake Mead the Best Lake?"
title2 = "Ten Great Things to do with an Inflatable Raft at Lake Mead this summer"
title3 = "Why Lake Mead is Better Than Hogwarts"
title4 = "Park Service plans to offer Wi-Fi at popular spots around Lake Mead"
title5 = "Lake Mead Called America's Deadliest Park"
title6 = "Heavy Winter Fall will Likely Prevent Lake Mead Shortage"
title7 = "Nevada Fishing Report"
title8 = "Rocky Ward claims Angling Title"
title9 = "Fishing The Overton Arm"
title10 = "Retired Ranger Offers History of Lake Mohave"

subtitle1 = "For the past two-hundred years people have debated over the definitive ranking of American
  lakes. Here's why Lake Mead deserves the top spot."
subtitle2 = "No one understands inflatable rafts like I do and what I
    know can change your life."
subtitle3 = "A magical story."
subtitle4 = "Happiness [is] only real when shared"
subtitle5 = "We dream in our waking moments, and walk in our sleep"
subtitle6 = "Everybody is identical in their secret unspoken belief that way deep down they are different from everyone else"
subtitle7 = "I hadn't expected that a tiny glimmer of hope for the future could transform someone so utterly"
subtitle8 = "How wild it was, to let it be"
subtitle9 = "You have to know how to accept rejection and reject acceptance"
subtitle10 = "Deep feelings always mean more than they are conscious of saying"

image1 = "https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg"
image2 = "https://i1.wp.com/nicholasnelson.net/wp-content/uploads/2013/09/2013-07-20-11.00.00.jpg"
image3 = "http://www.trbimg.com/img-5755baa1/turbine/la-fi-lake-mead-water-20160523-snap"
image4 = "http://i.huffpost.com/gen/1919222/images/o-LAKE-MEAD-facebook.jpg"
image5 = "https://c.tadst.com/gfx/750w/sunrise-sunset-sun-calculator.jpg?1"
image6 = "http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg"
image7 = "https://www.ethos3.com/wp-content/uploads/2015/12/free-stock-photo1.jpg"
image8 = "https://hbr.org/resources/images/article_assets/2015/05/MAY15_14_96324959.jpg"
image9 = "http://savethewater.org/wp-content/uploads/2015/05/Lake-Mead-Has-Dropped-To-Its-Lowest-Level-Ever.jpg"
image10 = "http://i.huffpost.com/gadgets/slideshows/358700/slide_358700_3987034_free.jpg"

Story.create( title: title1, body: body, image_url: image1, subtitle: subtitle1, author_id: 3)
Story.create( title: title2, body: body, image_url: image2, subtitle: subtitle2, author_id: 2)
Story.create( title: title3, body: body, image_url: image3, subtitle: subtitle3, author_id: 1)
Story.create( title: title4, body: body, image_url: image4, subtitle: subtitle4, author_id: 4)
Story.create( title: title5, body: body, image_url: image5, subtitle: subtitle5, author_id: 5)
Story.create( title: title6, body: body, image_url: image6, subtitle: subtitle6, author_id: 6)
Story.create( title: title7, body: body, image_url: image7, subtitle: subtitle7, author_id: 7)
Story.create( title: title8, body: body, image_url: image8, subtitle: subtitle8, author_id: 8)
Story.create( title: title9, body: body, image_url: image9, subtitle: subtitle9, author_id: 9)
Story.create( title: title10, body: body, image_url: image10, subtitle: subtitle10, author_id: 10)


# --------------Comments-------------
text = "This is a test comment. Who am I? Where do I exist? I like
this story a lot! Good job author!"
comment1 = { story_id: 1, user_id: 1, comment: text }
Comment.create(comment1)

#------------------Likes ----------------
Like.create(story_id: 1, user_id: 1)
Like.create(story_id: 1, user_id: 2)
Like.create(story_id: 1, user_id: 3)
Like.create(story_id: 1, user_id: 4)
Like.create(story_id: 1, user_id: 5)
Like.create(story_id: 1, user_id: 6)
Like.create(story_id: 1, user_id: 7)
Like.create(story_id: 1, user_id: 8)
Like.create(story_id: 1, user_id: 9)
Like.create(story_id: 1, user_id: 10)

Like.create(story_id: 2, user_id: 2)
Like.create(story_id: 2, user_id: 3)
Like.create(story_id: 2, user_id: 4)
Like.create(story_id: 2, user_id: 5)
Like.create(story_id: 2, user_id: 6)
Like.create(story_id: 2, user_id: 7)
Like.create(story_id: 2, user_id: 8)
Like.create(story_id: 2, user_id: 9)
Like.create(story_id: 2, user_id: 10)

Like.create(story_id: 3, user_id: 2)
Like.create(story_id: 3, user_id: 3)
Like.create(story_id: 3, user_id: 4)
Like.create(story_id: 3, user_id: 5)
Like.create(story_id: 3, user_id: 6)
Like.create(story_id: 3, user_id: 7)
Like.create(story_id: 3, user_id: 8)
Like.create(story_id: 3, user_id: 9)
Like.create(story_id: 3, user_id: 10)

Like.create(story_id: 4, user_id: 2)
Like.create(story_id: 4, user_id: 3)
Like.create(story_id: 4, user_id: 4)
Like.create(story_id: 4, user_id: 5)
Like.create(story_id: 4, user_id: 6)
Like.create(story_id: 4, user_id: 7)
Like.create(story_id: 4, user_id: 8)
Like.create(story_id: 4, user_id: 9)
Like.create(story_id: 4, user_id: 10)

Like.create(story_id: 5, user_id: 1)
Like.create(story_id: 5, user_id: 3)
Like.create(story_id: 5, user_id: 5)
Like.create(story_id: 5, user_id: 7)
Like.create(story_id: 5, user_id: 9)

Like.create(story_id: 6, user_id: 2)
Like.create(story_id: 6, user_id: 3)
Like.create(story_id: 6, user_id: 6)
Like.create(story_id: 6, user_id: 7)
Like.create(story_id: 6, user_id: 8)
Like.create(story_id: 6, user_id: 7)
Like.create(story_id: 6, user_id: 9)

Like.create(story_id: 7, user_id: 2)
Like.create(story_id: 7, user_id: 3)
Like.create(story_id: 7, user_id: 7)
Like.create(story_id: 7, user_id: 7)
Like.create(story_id: 7, user_id: 8)
Like.create(story_id: 7, user_id: 7)
Like.create(story_id: 7, user_id: 9)
Like.create(story_id: 7, user_id: 7)
Like.create(story_id: 7, user_id: 9)

Like.create(story_id: 8, user_id: 2)
Like.create(story_id: 8, user_id: 3)
Like.create(story_id: 8, user_id: 8)
Like.create(story_id: 8, user_id: 8)
Like.create(story_id: 8, user_id: 8)
Like.create(story_id: 8, user_id: 8)
Like.create(story_id: 8, user_id: 9)
Like.create(story_id: 8, user_id: 8)
Like.create(story_id: 8, user_id: 9)
Like.create(story_id: 8, user_id: 2)
Like.create(story_id: 8, user_id: 3)
Like.create(story_id: 8, user_id: 8)
Like.create(story_id: 8, user_id: 8)
Like.create(story_id: 8, user_id: 8)
Like.create(story_id: 8, user_id: 8)
Like.create(story_id: 8, user_id: 9)
Like.create(story_id: 8, user_id: 8)
Like.create(story_id: 8, user_id: 9)

Like.create(story_id: 9, user_id: 10)
Like.create(story_id: 9, user_id: 1)
Like.create(story_id: 9, user_id: 2)
Like.create(story_id: 9, user_id: 4)


Like.create(story_id: 10, user_id: 4)


#------------------Follows--------------------
Follow.create(author_id: 2, user_id: 1)
Follow.create(author_id: 3, user_id: 1)
Follow.create(author_id: 4, user_id: 1)
Follow.create(author_id: 5, user_id: 1)
Follow.create(author_id: 6, user_id: 1)
Follow.create(author_id: 7, user_id: 1)

Follow.create(author_id: 1, user_id: 2)
Follow.create(author_id: 3, user_id: 2)
Follow.create(author_id: 4, user_id: 2)
Follow.create(author_id: 5, user_id: 2)
Follow.create(author_id: 6, user_id: 2)
Follow.create(author_id: 7, user_id: 2)

Follow.create(author_id: 2, user_id: 3)
Follow.create(author_id: 1, user_id: 3)
Follow.create(author_id: 4, user_id: 3)
Follow.create(author_id: 5, user_id: 3)
Follow.create(author_id: 6, user_id: 3)
Follow.create(author_id: 7, user_id: 3)

Follow.create(author_id: 2, user_id: 4)
Follow.create(author_id: 3, user_id: 4)
Follow.create(author_id: 1, user_id: 4)
Follow.create(author_id: 5, user_id: 4)
Follow.create(author_id: 6, user_id: 4)
Follow.create(author_id: 7, user_id: 4)

Follow.create(author_id: 2, user_id: 5)
Follow.create(author_id: 3, user_id: 5)
Follow.create(author_id: 4, user_id: 5)
Follow.create(author_id: 1, user_id: 5)
Follow.create(author_id: 6, user_id: 5)
Follow.create(author_id: 7, user_id: 5)

Follow.create(author_id: 2, user_id: 6)
Follow.create(author_id: 3, user_id: 6)
Follow.create(author_id: 4, user_id: 6)
Follow.create(author_id: 1, user_id: 6)
Follow.create(author_id: 8, user_id: 6)
Follow.create(author_id: 7, user_id: 6)

Follow.create(author_id: 2, user_id: 7)
Follow.create(author_id: 3, user_id: 7)
Follow.create(author_id: 4, user_id: 7)
Follow.create(author_id: 1, user_id: 7)
Follow.create(author_id: 8, user_id: 7)
Follow.create(author_id: 5, user_id: 7)

Follow.create(author_id: 2, user_id: 8)
Follow.create(author_id: 3, user_id: 8)
Follow.create(author_id: 4, user_id: 8)
Follow.create(author_id: 1, user_id: 8)
Follow.create(author_id: 5, user_id: 8)
Follow.create(author_id: 7, user_id: 8)
Follow.create(author_id: 10, user_id: 8)
Follow.create(author_id: 9, user_id: 8)

Follow.create(author_id: 2, user_id: 9)
Follow.create(author_id: 3, user_id: 9)
Follow.create(author_id: 4, user_id: 9)
Follow.create(author_id: 1, user_id: 9)

Follow.create(author_id: 2, user_id: 10)
Follow.create(author_id: 3, user_id: 10)
Follow.create(author_id: 4, user_id: 10)
Follow.create(author_id: 1, user_id: 10)
Follow.create(author_id: 5, user_id: 10)
Follow.create(author_id: 7, user_id: 10)
Follow.create(author_id: 8, user_id: 10)
