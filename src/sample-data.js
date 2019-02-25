import { genIds } from './helpers';

const fishes = {
  "2f79000b-e7ef-44e9-a7c7-2ae9b088f8f9": {
    name: "Widget 1",
    image: "/images/hali.jpg",
    desc:
      "Description 1.",
    price: 1724,
    status: "available"
  },

  "0a80306f-8766-4652-8e79-c5ed2917fabf": {
    name: "Widget 2",
    image: "/images/lobster.jpg",
    desc:
      "Description 2.",
    price: 3200,
    status: "available"
  },

  "2cccf1bb-363f-4853-850c-be9eb2b5ca0f": {
    name: "Widget 3",
    image: "/images/scallops.jpg",
    desc:
      "Description 3",
    price: 1684,
    status: "unavailable"
  },

  "264c99d5-c932-412e-86ec-3515df705e16": {
    name: "Widget 4",
    image: "/images/mahi.jpg",
    desc:
      "Description 4 ",
    price: 1129,
    status: "available"
  }
}

genIds(fishes);
  export default fishes;