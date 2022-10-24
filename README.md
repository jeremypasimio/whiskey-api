TODO

1. Finish routes for get by caskstrength and get by region.
2. Debug logic in update to allow for updating with only a sinlge field input.
3. Set up simple front end for demo purposes and data gathering.
4. Deploy

This is an in-development prototype API to support functionality of a whiskey knowledge database.

There is a vast community of whiskey lovers that enjoy tasting and collecting whiskies. One of the important aspects of tasting whisky is to take notes of a tasting to record the experience for future reference. Longterm, the goal is to develop a web app to allow users to record tasting notes, pictures, and personal collection information. Having a database of basic information for as many whiskies as possible would help make the user's experience better, as the likelihood of having to manually enter all the information would be greatly reduced. This would allow the user to focus on recording their experience rather than having to do data entry. This API,when complete, will facilitate the development of this web app. Even further down the line, it will be expanded to perform comparable data access for other categories of consumables such as coffee, beer, wine, cigars, etc.

Persistence enabled through PostgreSQL. Server is set up to support the following routes:

GET
url/category/all
url/category/:category/:sub?

:category and :sub options

:category
-:sub
Bourbon
-Bourbon
-Straight
-blended
-Wheated
-High Rye
Rye
-Rye
-Straight
Scotch
-Single Malt
-Single Grain
-Blended Malt
-Blended Grain
-Blended
Irish
-Single Malt
-Single Grain
-Single Pot Still
-Blended
Japanese
Canadian
American
-Single Malt
-Wheat
-Corn
Other
-Indian
-French
-Welsh
-Flavored

url/name/:name
:name refers to the name of the whiskey

url/distillery/:distillery
:distillery refers to the distillery or brand of the whiskey

url/abv/:comp/:abv
url/proof/:comp/:proof
url/age/:comp/:age

:comp is a comparison operator for filtering results. Acceptable values are:

e for equals
gt for greater than
gte for greater than or equal
lt for less than
lte for less than or equal

Example
To get all whiskies greater than 100 proof would be:
url/proof/gt/100

POST
url/add

The whisky table is structured as follows:

id: serial primary key,
name: varchar(150) not null unique,
distillery: varchar(150),
genCat: varchar(150) not null,
subCat: varchar(150) not null ,
region: varchar(150) not null,
age: smallint,
noAge: boolean
abv: decimal not null,
proof: decimal not null,
caskstrength: boolean

Note that for a non-age-statment whiskey, an age of 0 should be entered.

PUT
url/update/:name

In the body of the request, utilize the necessary fields to update values. This route should only be used by jeremypasimio
as the designer and maintainer of the database.
