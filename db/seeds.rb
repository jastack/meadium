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


# ------------------ Dates ----------
date1 = DateTime.new(2017, 4, 15)
date2 = DateTime.new(2017, 3, 17)
date3 = DateTime.new(2017, 2, 16)
date4 = DateTime.new(2017, 1, 29)
date5 = DateTime.new(2016, 9, 29)
date6 = DateTime.new(2017, 4, 01)
date7 = DateTime.new(2016, 8, 7)
date8 = DateTime.new(2016, 7, 01)
date9 = DateTime.new(2016, 12, 13)
date10 = DateTime.new(2017, 9, 15)
date11 = DateTime.new(2016, 5, 12)

# ------------------- Topics -------------
Topic.create(name: "Top Stories")
Topic.create(name: "Editor's picks")
Topic.create(name: "Technology")
Topic.create(name: "Humans")
Topic.create(name: "Culture")
Topic.create(name: "Business")
Topic.create(name: "New")

# ------------Stories---------
body = "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lake Mead is the largest reservoir in the United States, measured by water capacity. It is on the Colorado River about 24 mi (39 km) from the Las Vegas Strip southeast of the city of Las Vegas, Nevada, in the states of Nevada and Arizona. Formed by the Hoover Dam, Lake Mead is 112 miles (180 km) long when the lake is full, has 759 miles (1,221 km) of shoreline, is 532 feet (162 m) at greatest depth, with a surface elevation of 1,221.4 feet (372.3 m) above sea level, and has 247 square miles (640 km2) of surface, and when filled to available capacity, 26.12 million acre feet (32.22 km3) of water. The lake has not reached full capacity, however, since 1983 due to a combination of drought and increased water demand.[1][2][3] Owing to current low water level, Lake Sakakawea holds claim over Lake Mead in terms of the United State's largest reservoir by total area and water in reserve. <br>
 &nbsp;&nbsp;&nbsp;The reservoir serves water to the states of Arizona, Nevada and California, providing sustenance to nearly 20 million people and large areas of farmland.</p>
<p>Thanks to Wikipedia for this short article on Lake Mead!</p>"

body1 = "<p>Why do we keep bolting for Interstate 15 and the beaches of L.A. and San Diego when we have miles of shoreline just a short drive away?</p>
<p>Boasting around 6.3 million visitors in 2012, the Lake Mead National Recreation Area is the fifth most visited location in the U.S. National Park System. The reservoir that became Lake Mead was created by the completion of the Hoover Dam in 1936, and the lake’s vicinity became the country’s first national recreation area in 1964.</p>
<p>Today, the vast landscape is a haven for outdoorsy types, offering everything from kayaking and canoeing to hiking and camping. Dusty mountains tower above the Dodger-blue waters, the rugged terrain dotted with desert cacti, stunted shrubs and weathered trees.</p>
<p>But while the popular destination lies just 30 miles from the Strip, many Las Vegans have never tested its waters. It’s high time we change that.</p>
<h2><strong>Boating, water sports and houseboating</strong></h2>
<p>Let’s start with the obvious: Lake Mead is the largest reservoir by volume in the U.S., and its waters cover 248 square miles—plenty of space for you to make waves in, even if the recent drought has lowered the water level and encircled the lake with a distinctive bathtub ring.</p>
<p>The recreation area is in the midst of its busiest season, according to spokeswoman Christie Vanover, who says more than half the lake’s annual visitors come during the “101 days of summer” from Memorial Day to Labor Day.</p>
<p>“Whether it’s fishing, whether it’s wakeboarding, water skiing, Jet Skiing, this is the time of year,” Vanover says. “It’s definitely boating season.”</p>
<p>&nbsp;With watercraft rentals available at marinas and through authorized companies, you don't need your own boat to enjoy the lake's waters. Photo: Sam Morris</p>
<p>With watercraft rentals available at marinas and through authorized companies, you don't need your own boat to enjoy the lake's waters.</p>
<p>And it’s definitely hot. The park’s heat is not something to underestimate—this summer has already seen several heat-related illnesses and a probable fatality. During extreme temperatures the park issues excessive heat warnings, advising visitors that participating in hiking and other strenuous activities is highly discouraged. Boaters have the water when they need to cool off (lifejackets, please!), but it’s vital to stay hydrated and avoid overindulging in alcohol when you’re under the sun.</p>
<p>You don’t have to own your own boat to take advantage of the lake or nearby Colorado River and Lake Mohave. Small watercraft rentals start at $25 per hour or $80 per day and are a great way to explore the lake’s more remote destinations. Rentals are available at Willow Beach Marina on the Colorado, both of Lake Mohave’s marinas (Katherine’s Landing and Cottonwood Cove) and at three of Lake Mead’s marinas (Las Vegas Boat Harbor, Callville Bay and Temple Bar). Lake marinas also offer personal watercraft, water skis, wakeboards, kneeboards and inner tubes, so you can play on the water before claiming a spot on the shoreline for a picnic or hike.</p>
<p>Looking for a group getaway? Though houseboats are not permitted on the Colorado River, they’re a popular option at Mead and Mohave lakes, where families and groups of friends enjoy the comforts of home at Callville Bay or Cottonwood Cove. Built to accommodate eight to 15 people, houseboats ($503-$1,395 per day) also boast amenities like barbecue grills, kitchen appliances, TVs, DVD players and safety items. Some even include hot tubs, wet bars and DirecTV, so you can relax after a day of water skiing, mojito in hand, watching a rerun of Girls—all while snapping photos of bighorn sheep.</p>
<p>Not just anyone can step up to a boat’s wheel, though. People born after 1983 must obtain a Nevada Boater Education Card. The test—and its study guide (all the rules and regulations you need to know about riding on the water)—are available at all marinas and online at the Nevada Department of Wildlife’s website, ndow.org. Newbies shouldn’t be too intimidated, as boat rentals come with a mandatory orientation that includes operational instructions, fuel and equipment checks and information on the lake’s invasive quagga mussels and how to prevent spreading them.</p>
<h2><strong>Beach</strong></h2>
<p>Beaches can be accessed both by boat and car.</p>
<p>If boating sounds like too much work, park visitors can also access a few beaches by car. Boulder Beach is a popular spot located right off Lakeshore Road and US 93. Cottonwood Cove on Lake Mohave and Willow Beach on the Colorado also offer pleasant beaches where you can put up an umbrella and nestle down with a summer read. However, the terrain of the local beaches varies—some areas are rocky, others are lined with pebbles and some have smooth sand begging to be formed into castles (or even casinos). Cottonwood Cove and Boulder Beach are also campgrounds, so you’ll find fire pits, grills and picnic tables when you’re ready for a snack.</p>
<h2><strong>Hiking and cycling</strong></h2>
<p>Exploration isn’t limited to the water at Lake Mead National Recreation Area; 87 percent of the park (which encompasses 1.5 million acres) is actually land.</p>
<p>“When it gets to be the cooler months we see a lot of cyclists out at the park,” Vanover says. “We have some great trails for cycling, and we even host a few marathons and triathlons out here.”</p>
<p>The park offers two maintained hiking trails: the Historic Railroad Tunnel Trail and the River Mountains Loop Trail. The first runs atop a former railroad that once hauled supplies through the area during construction of the Hoover Dam and takes walkers on a flat, 3.7-mile route through six old railroad tunnels. The second is a newer trail that loops through the park for more than 30 miles, connecting the River Mountains, Henderson, Boulder City and the lake. Paved and challenging, it’s popular with spandex-clad cyclists on weekends.</p>
<p>While most know Lake Mead for its water, the national recreation area is actually 87 percent land.</p>
<p>Hikers can also take off on unmaintained routes that lead through tiny slot canyons, past steamy hot springs and sometimes to the lakes and river itself. While the recreation area’s website offers limited information, you can find thorough trail guides at birdandhike.com. Whether you’re trying to figure out how to maneuver up Spooky Canyon’s weird rock formations or find GPS coordinates for the hike to Miner’s Cove Wash Overlook, that’s the place to go.</p>
<p>The park also has nine designated wilderness areas. “You can escape and actually go into an area where there’s no motorized vehicles and just walk through the desert and the canyon walls,” Vanover says. “It’s really peaceful.”</p>
<p>The St. Thomas trail leads to the former city of St. Thomas, which operated during the dam’s construction and was flooded as the reservoir filled. The recent drought has caused water levels to drop and revealed the town’s ruins again. There’s also the Gold Strike Hot Springs trail, which begins right off the 93 outside Boulder City and ends with a hot soak for your aching feet.</p>
<p>Hikers are encouraged to bring ample water, sunscreen and appropriate clothing, and to heed the park’s safety tips. “We do recommend this time of year that you really limit your hikes to early morning and maybe an hour or so,” says Vanover, citing the park’s soaring summer temperatures.</p>
<h2><strong>Fishing</strong></h2>
<p>&nbsp;Whether you're feeding the ducks at the marina during a beach day or exploring the slot canyons on foot, the recreation area offers much to do beyond boating. Photo: Sam Morris</p>
<p>Whether you're feeding the ducks at the marina during a beach day or exploring the slot canyons on foot, the recreation area offers much to do beyond boating.</p>
<p>We’ve all heard (and maybe told) jokes about three-eyed fish in Lake Mead, and we know the stories of the mob’s cement boots. Don’t let that stop you from casting a line, though. According to one Willow Beach employee, many boat renters are actually on the river to fish—trout is a popular catch on the Colorado, while bass and catfish are just two of the species found in Lake Mead.</p>
<p>Fishing here is a 24-hour, year-round activity, and only a few places are out of bounds for the sport. Fishing isn’t permitted in the posted boundaries of federal hatcheries, immediately above and below Hoover Dam, and areas designated as harbors. Before you bait your hook, you’ll need a license to fish from the Department of Wildlife (Arizona and Nevada issue separate licenses). Nevada fishing licenses can be obtained at ndow.org, where all fishing rules and regulations are listed. Anglers can also pick up rule books at each of the marinas.</p>
<h2><strong>Kayaking and canoeing</strong></h2>
<p>While some crave the vroom and zoom of powerboats, others prefer the serenity of paddling a kayak down the river, hearing only the light breeze through the canyon walls and the sound of the stream washing over the pebbles onshore. With the towering Black Canyon, a swift current and beautiful flora and fauna, the swatch of Colorado River just below Hoover Dam is one of the country’s premier spots to canoe and kayak.</p>
<p>It’s easy to make a day of exploring the river. Pack a meal and spend the hours paddling, or pull over and tie on for shoreline hikes that offer a unique perspective on the river’s environment and, sometimes, a dip in natural hot springs.</p>
<p>Willow Beach marina in Arizona offers rentals for kayaks, tandem kayaks and canoes, while sit-on-top kayaks are available to rent at local sporting and recreation outlets. A list of authorized commercial outlets is featured on the park’s website, and some companies also offer guided kayak and canoe tours.</p>
<p>Insider tip: Start by paddling north from Willow Beach toward the Hoover Dam, then let the current carry you back when your arms are exhausted.</p>
<h2><strong>Camping</strong></h2>
<p>&nbsp;Keep an eye out for Nevada's state animal, the bighorn sheep, while you're exploring Lake Mead. Photo: Sam Morris</p>
<p>Keep an eye out for Nevada's state animal, the bighorn sheep, while you're exploring Lake Mead.</p>
<p>Wilderness slumber party? Camping is a year-round activity at the park, which offers sites at each of the Lake Mead marinas and Boulder Beach, as well as Katherine’s Landing on Lake Mohave. Site amenities include restrooms, running water, dump stations, grills and picnic tables, and for the fancier camper, some include recreational vehicle hook-ups. The fee to camp is $10 per site, and reservations are not available.</p>
<p>If you’re really looking to rough it, the park’s primitive wilderness areas can be your home for the night. Just be sure to pack out everything you bring in and leave no trace. You can find the rules and regulations about campfires and grilling at nps.gov, and campers should know that special restrictions are in place during summer months. Boaters can also set up camp along the lake’s shoreline, as long as the area isn’t marked “no camping.” Don’t forget to drop that anchor.</p>
<h2><strong>Plan your trip</strong></h2>
<p>Destinations:</p>
<p>Willow Beach Marina (Colorado River)</p>
<p>25804 N. Willow Beach Road., Willow Beach, Arizona, 928-767-4747, willowbeachharbor.com.</p>
<p>Las Vegas Boat Harbor (Lake Mead)</p>
<p>490 Horsepower Cove Road, Boulder City, 293-1191, boatinglakemead.com.</p>
<p>Callville Bay Marina (Lake Mead)</p>
<p>100 Callville Bay Road, 800-255-5561, callvillebay.com.</p>
<p>Temple Bar (Lake Mead)</p>
<p>1 Main St., Temple Bar, Arizona, 800-255-5561, templebarlakemead.com.</p>
<p>Cottonwood Cove (Lake Mohave)</p>
<p>1000 Cottonwood Cove Road, Cottonwood Cove, 800-266-5561, cottonwoodcoveresort.com.</p>
<p>Lake Mohave Resort (Lake Mohave)</p>
<p>2690 E. Katherine Spur Road, Bullhead City, Arizona, 928-754-3245, sevencrown.com.</p>
<h2><strong>Activities:</strong></h2>
<p>Powerboats</p>
<p>&nbsp;&nbsp;Available to rent for $25-$80 hourly, $80-$560 daily.</p>
<p>Jet skis</p>
<p>&nbsp;&nbsp;Rentals run $44-$95 hourly, $225-$450 daily.</p>
<p>Houseboats</p>
<p>&nbsp;&nbsp;Houseboat rentals range from $503-$1,395 daily. Many marinas recommend booking well in advance of your intended vacation.</p>
<p>Kayaks and canoes</p>
<p>&nbsp;&nbsp;Rentals range from $10-$20 hourly, $45-$85 daily.</p>
<p>Camping</p>
<p>&nbsp;&nbsp;Campsites cost $10 per night and are generally available on a first-come, first-served basis.</p>
<p>This is a sample from the site LV Weekly. <a href='https://lasvegasweekly.com/news/2013/jul/11/how-fall-love-lake-mead/'>Link here</a></p>"

body2 = '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is a sample article. It originally comes from <a href="https://lasvegasweekly.com/news/2017/apr/06/how-to-have-floating-fun-lake-mead/">here.</a></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I never thought I’d find happiness in a snug, 850-square-foot boat docked on the Florida coast, but I often daydream about my vacation aboard that Prout Catamaran. I enjoyed boat life so much, I realized I’d never taken advantage of the lake in my own backyard.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With temperatures rising, April is an ideal time to hit Lake Mead, and you don’t even need your own boat. As long as you assemble a large group, you can rent a boat and have a daytime adventure that’s affordable for everyone. Sites to see include the Mike O’Callaghan–Pat Tillman Memorial Bridge, Swallow Cove, Wishing Well Cove and other scenic spots to discover and make your own.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bruce Nelson, operations director at Las Vegas Boat Harbor and Lake Mead Marina, emphasizes safety and planning ahead—making sure there’s a life jacket for every person on the vessel, a flotation device, a whistle and a fire extinguisher, and, of course, knowing where everything is. “Check the weather,” he adds. “Lake Mead can be treacherous if you’re not paying attention to the weather. You don’t want to be in the middle of the lake unprepared.” Most importantly, Nelson says, “Never drink and boat. You can get a DUI on the water just like you can [in a car].”</p>'

body4 = '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The National Park Service is seeking public comment on a project that would add wireless internet infrastructure to developed areas within Lake Mead National Recreation Area.<br>
 &nbsp;&nbsp;&nbsp;&nbsp;The park is developing a five-year contract that would allow a business to provide wireless internet access at reasonable rates within select areas of the park to improve and modernize the visitor experience.<br>
 &nbsp;&nbsp;&nbsp;&nbsp;Antennas will need to be installed within the park to provide the service. Infrastructure will be confined to pre-existing structures and buildings within campgrounds, marinas, employee housing areas and concessioner facilities.<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This project has the potential to impact historic structures and campgrounds. The campgrounds at Boulder Beach, Cottonwood Cove, Echo Bay, Katherine Landing and Temple Bar were constructed between the 1940s and the 1960s and are considered historic. Every effort will be made to ensure the visibility of equipment is minimal to visitors and that it will not impact the historic character of the campgrounds.<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The public is encouraged to comment on the proposed project. Feedback will be accepted through April 2 both online at http://go.nps.gov/lakewifi and via U.S. mail at: Lake Mead National Recreation Area Superintendent, Attention: Proposed Wi-Fi Project, 601 Nevada Way, Boulder City, Nevada 89005.</p>
<p>This is an actual news story from KTNV (<a href="http://www.ktnv.com/news/lake-mead-thinking-about-adding-wi-fi">link here</a>)</p>'

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
title11 = "Boatlife: How to Have Floating Fun at Lake Mead"
title12 = "Major Local Fishing tourneys on Lake Mead Upcoming"
title13 = "Lake Mead to get above-average flow of Colorado River water"
title14 = "Lake Mead paddle Wheeler loses power on lake"
title15 = "Lake Mead shortage appears unlikely for 2018"
title16 = "Smart Agreement Leave More Water in Lake Mead, Regulators Say"
title17 = "In Space, Making Peanut Butter and Jelly is a Tiny Adventure"
title18 = "The first Space Launch System flight will probably be delayed"
title19 = "Ligtning and Myster Objects Spotted by Space Station"
title20 = "Self-driving Cars and Space Robots"

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
subtitle11 = "What's living if you never pull you shorts down and slide on the ice?"
subtitle12 = "Is it possible the evenone else on Earth is early?"
subtitle13 = "Feasting is like eating, but with bigger plates"
subtitle14 = "If only, if only, the woodpecker sighs, the bark on the tree was as soft of the skies"
subtitle15 = "Rattlesnakes would be a lot more dangerous if they didn't have the rattle"
subtitle16 = "There is no lake at Camp Green Lake"
subtitle17 = "When you spend your whole life living in a hole, the only way you can go is up"
subtitle18 = "You have only one life, make the most of it"
subtitle19 = "You make the decision: Whom did God punish?"
subtitle20 = "He couldn't help but think that a hundred time zero was still nothing"


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
image11 = "//media.lasvegasweekly.com/img/photos/2017/04/05/0406_Boating-by-Christopher-Devargas_t1000.jpg?c76bf34eada957f64a0b14990027a576ff9bf379"
image12 = 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Domestic_goat_kid_in_capeweed.jpg'
image13 = "http://mediad.publicbroadcasting.net/p/kajx/files/201407/A_bull_moose_animal_mammal.jpg"
image14 = "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/20/2j/p0202jwh.jpg"
image15 = "http://rabbitbreeders.us/supplies/wp-content/uploads/2016/09/Rabbits.jpg"
image16 = "http://www.serenityhelicopters.com/Media/Default/Images/BlogPhotos/Lake-Mead-from-the-air.jpg"
image17 = "http://peanutbutterlovers.com/wp-content/uploads/2015/10/pb_hero.jpg"
image18 = "https://www.nasa.gov/sites/default/files/11572307115_1194957269_o_0.jpg"
image19 = "https://static.pexels.com/photos/110854/pexels-photo-110854.jpeg"
image20 = "https://ericpetersautos.com/wp-content/uploads/2015/12/Google-self-driving-car.jpg"

Story.create( title: title1, body: body1, image_url: image1, subtitle: subtitle1, author_id: 3, topic_id: 1, created_at: date1)
Story.create( title: title2, body: body, image_url: image2, subtitle: subtitle2, author_id: 2, topic_id: 1, created_at: date2)
Story.create( title: title3, body: body, image_url: image3, subtitle: subtitle3, author_id: 1, topic_id: 1, created_at: date3)
Story.create( title: title4, body: body4, image_url: image4, subtitle: subtitle4, author_id: 4, topic_id: 2, created_at: date4)
Story.create( title: title5, body: body, image_url: image5, subtitle: subtitle5, author_id: 5, topic_id: 2, created_at: date5)
Story.create( title: title6, body: body, image_url: image6, subtitle: subtitle6, author_id: 6, topic_id: 2, created_at: date6)
Story.create( title: title7, body: body, image_url: image7, subtitle: subtitle7, author_id: 7, topic_id: 2, created_at: date7)
Story.create( title: title8, body: body, image_url: image8, subtitle: subtitle8, author_id: 8, topic_id: 2, created_at: date8)
Story.create( title: title9, body: body, image_url: image9, subtitle: subtitle9, author_id: 9, topic_id: 2, created_at: date9)
Story.create( title: title10, body: body, image_url: image10, subtitle: subtitle10, author_id: 10, topic_id: 1, created_at: date10)
Story.create( title: title11, body: body2, image_url: image11, subtitle: subtitle11, author_id: 4, topic_id: 3, created_at: date11)
Story.create( title: title12, body: body1, image_url: image12, subtitle: subtitle12, author_id: 4, topic_id: 3, created_at: date1)
Story.create( title: title13, body: body1, image_url: image13, subtitle: subtitle13, author_id: 2, topic_id: 3, created_at: date2)
Story.create( title: title14, body: body1, image_url: image14, subtitle: subtitle14, author_id: 3, topic_id: 3, created_at: date3)
Story.create( title: title15, body: body1, image_url: image15, subtitle: subtitle15, author_id: 6, topic_id: 4, created_at: date4)
Story.create( title: title16, body: body1, image_url: image16, subtitle: subtitle16, author_id: 7, topic_id: 4, created_at: date5)
Story.create( title: title17, body: body1, image_url: image17, subtitle: subtitle17, author_id: 8, topic_id: 5, created_at: date6)
Story.create( title: title18, body: body1, image_url: image18, subtitle: subtitle18, author_id: 9, topic_id: 5, created_at: date7)
Story.create( title: title19, body: body1, image_url: image19, subtitle: subtitle19, author_id: 7, topic_id: 6, created_at: date8)
Story.create( title: title20, body: body1, image_url: image20, subtitle: subtitle20, author_id: 2, topic_id: 6, created_at: date9)


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
