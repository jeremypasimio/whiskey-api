const whiskeys = [{
    id: 1,
    name: "Buffalo Trace",
    category: {
      general: "Bourbon",
      sub: null
    },
    region: "USA",
    distillery: "Buffalo Trace",
    age: "NAS",
    abv: "45",
    proof: "90",
    caskstrength:false
  },
  {
    id: 2,
    name: "Ardbeg 10",
    category: {
      general: "Scotch",
      sub: "Single Malt"
    },
    region: "Islay",
    distillery: "Ardbeg",
    age: "10 years",
    abv: "46",
    proof: "92",
    caskstrength:false
  },
  {
    id: 3,
    name: "Michter's Straight Rye",
    category: {
      general: "Rye",
      sub: null
    },
    region: "USA",
    distillery: "Michter's",
    age: "NAS",
    abv: "42.4",
    proof: "84.8",
    caskstrength:false
  },
  {
    id: 4,
    name: "Stranahan's Original",
    category: {
      general: "American",
      sub: "Single Malt"
    },
    region: "USA",
    distillery: "Stranahan's",
    age: "NAS",
    abv: "47",
    proof: "94",
    caskstrength:false
  },
  {
    id: 5,
    name: "Crown Royal",
    category: {
      general: "Canadian",
      sub: ""
    },
    region: "Canada",
    distillery: "Crown Royal",
    age: "NAS",
    abv: "40",
    proof: "80",
    caskstrength:false
  },
  {
    id: 6,
    name: "Hibiki Harmony",
    category: {
      general: "Japanese",
      sub: ""
    },
    region: "Japan",
    distillery: "Suntory Whisky",
    age: "NAS",
    abv: "43",
    proof: "86",
    caskstrength:false
  },
  {
    id: 7,
    name: "Jameson",
    category: {
      general: "Irish",
      sub: "Blended"
    },
    region: "Ireland",
    distillery: "Midleton",
    age: "NAS",
    abv: "40",
    proof: "80",
    caskstrength:false
  },
  {
    id: 8,
    name: "Monkey Shoulder",
    category: {
      general: "Scotch",
      sub: "Blended"
    },
    region: "Scotland",
    distillery: "William Grant & Sons",
    age: "NAS",
    abv: "43",
    proof: "86",
    caskstrength:false
  },
  {
    id: 9,
    name: "Springbank 12",
    category: {
      general: "Scotch",
      sub: "Single Malt"
    },
    region: "Campbeltown",
    distillery: "Springbank",
    age: "12",
    abv: "55.9",
    proof: "111.8",
    caskstrength:true
  },
  {
    id: 10,
    name: "The Balvenie Double Wood",
    category: {
      general: "Scotch",
      sub: "Single Malt"
    },
    region: "Speyside",
    distillery: "The Balvenie",
    age: "12",
    abv: "43",
    proof: "86",
    caskstrength:false
  },
  {
    id: 11,
    name: "Auchentoshan 12",
    category: {
      general: "Scotch",
      sub: "Single Malt"
    },
    region: "Lowland",
    distillery: "Auchentoshan",
    age: "12",
    abv: "40",
    proof: "80",
    caskstrength:false
  },
  {
    id: 12,
    name: "Dalmore Cigar Malt",
    category: {
      general: "Scotch",
      sub: "Single Malt"
    },
    region: "Highland",
    distillery: "Dalmore",
    age: "NAS",
    abv: "44",
    proof: "88",
    caskstrength:false
  },
  {
    id: 13,
    name: "Bushmills 10 Year Old",
    category: {
      general: "Irish",
      sub: "Single Malt"
    },
    region: "Ireland",
    distillery: "Old Bushmills Distillery",
    age: "10",
    abv: "40",
    proof: "80",
    caskstrength:false
  }
];

module.exports = {whiskeys};


//category/all
//category/bourbon
//category/rye
//category/us-single-malt
//category/canadian
//category/japanese
//category/scotch/all
//category/scotch-blended/malt
//category/scotch-single/islay
//category/scotch-single/speyside
//category/scotch-single/lowland
//category/scotch-single/highland
//category/scotch-single/campbeltown
