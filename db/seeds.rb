# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ------Users----------
demo_user = { username: "Harry", password: "password", avatar_url: "http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/09/12/101029496--sites-default-files-images-101029496-3176173-1748009911-hp.jp-1.jpg?v=1474281478", description: "I may be a wizard, but I've discovered my true passion is the beauty of Lake Mead. I love to think, talk, and write about this truely magical place." }
User.create(demo_user)

first_user = { username: "Frank", password:"password",avatar_url:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Raccoon_(Procyon_lotor)_2.jpg", description:"I have a lot of ideas, please follow me!"}
User.create(first_user)

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

subtitle1 = "For the past two-hundred years people
  have debated over the definitive ranking of American
  lakes. Here's why Lake Mead deserves the top spot."
subtitle2 = "No one understands inflatable rafts like I do and what I
    know can change your life."
subtitle3 = "A magical story."
subtitle4 = ""


story_1 = { title: "Is Lake Mead the Best Lake?",
  body: body, author_id: 2,
  image_url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg",
  subtitle: subtitle1}
Story.create(story_1)

story_2 = { title: "Ten Great Things to do with
  an Inflatable Raft at Lake Mead this summer",
  body: body, author_id: 2,
  image_url: "https://i1.wp.com/nicholasnelson.net/wp-content/uploads/2013/09/2013-07-20-11.00.00.jpg",
  subtitle: subtitle2 }
Story.create(story_2)

story_3 = { title: "Why Lake Mead is Better Than Hogwarts", body: body, author_id: 1, image_url: "http://www.trbimg.com/img-5755baa1/turbine/la-fi-lake-mead-water-20160523-snap", subtitle: subtitle3}
Story.create(story_3)

story_4 = {title: "Park Service plans to offer Wi-Fi at popular spots around Lake Mead", body: body, author_id: 2, image_url: "http://i.huffpost.com/gen/1919222/images/o-LAKE-MEAD-facebook.jpg"}
Story.create(story_4)
# --------------Comments-------------
text = "This is a test comment. Who am I? Where do I exist? I like
this story a lot! Good job author!"
comment1 = { story_id: 1, user_id: 1, comment: text }
Comment.create(comment1)

#------------------Likes ----------------
Like.create(story_id: 1, user_id: 1)
Like.create(story_id: 1, user_id: 2)
Like.create(story_id: 2, user_id: 1)


#------------------Follows--------------------
Follow.create(author_id: 1, user_id: 2)
