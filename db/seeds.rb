# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = { username: "guest", password: "password" }
User.create(demo_user)

body = "Lake Mead is the largest reservoir in the United States, measured by water capacity. It is on the Colorado River about 24 mi (39 km) from the Las Vegas Strip southeast of the city of Las Vegas, Nevada, in the states of Nevada and Arizona. Formed by the Hoover Dam, Lake Mead is 112 miles (180 km) long when the lake is full, has 759 miles (1,221 km) of shoreline, is 532 feet (162 m) at greatest depth, with a surface elevation of 1,221.4 feet (372.3 m) above sea level, and has 247 square miles (640 km2) of surface, and when filled to available capacity, 26.12 million acre feet (32.22 km3) of water. The lake has not reached full capacity, however, since 1983 due to a combination of drought and increased water demand.[1][2][3] Owing to current low water level, Lake Sakakawea holds claim over Lake Mead in terms of the United State's largest reservoir by total area and water in reserve.

The reservoir serves water to the states of Arizona, Nevada and California, providing sustenance to nearly 20 million people and large areas of farmland"


first_user = { username: "Frank", password:"password",avatar_url:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Raccoon_(Procyon_lotor)_2.jpg", description:"I've got a lot of ideas, please follow me!"}
User.create(first_user)

story_1 = { title: "Is Lake Mead the best lake?", body: body, author_id: 2, image_url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Lake_mapourika_NZ.jpeg"}
Story.create(story_1)
