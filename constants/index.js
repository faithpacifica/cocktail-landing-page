const navLinks = [
  { title: "Cocktails", id: "cocktails" },
  { title: "AboutUs", id: "about" },
  { title: "The Art", id: "work" },
  { title: "Contact", id: "contact" },
];

const cocktailLists = [
  {
    name: "Chapel Hill",
    country: "AU",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Catim Malbee",
    country: "AU",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Rino Pale Ale",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Irish Guinness",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const mockTailLists = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Passionfruit Mint",
    country: "US",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Citrus Glow",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Flavors in perfect harmony",
  "Finished with flawless garnish",
  "Chilled to perfection",
  "Masterfully mixed & crafted",
];

const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Moon Blvd. #200, Los Angeles, CA 99210",
  contact: {
    phone: "(555) 988-6565",
    email: "harmonyvelvet@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "Timeless Freshness in Every Sip",
    description:
      "A refreshing mix of muddled mint, zesty lime, and sparkling soda, the Classic Mojito delivers cool, crisp flavors that never go out of style.",
  },
  {
    id: 2,
    name: "Rasberry Mojito",
    image: "/images/drink2.png",
    title: "A Fruity Twist on a Favorite",
    description:
      "Bursting with fresh raspberries, mint, and lime, this vibrant Mojito adds a sweet and tangy kick to the traditional recipe—perfect for warm afternoons.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "Floral Elegance Meets Refreshing Flavor",
    description:
      "Delicately infused with violet syrup, citrus, and a touch of fizz, the Violet Breeze offers a light, aromatic cocktail experience like no other.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.png",
    title: "Tropical Vibes in a Glass",
    description:
      "With a splash of blue Curaçao, fresh mint, and lime, this Mojito variation brings a burst of color and island flavor to your cocktail menu.",
  },
];


export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
