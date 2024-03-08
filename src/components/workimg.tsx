import large1 from "../assets/banner.jpg";
import large2 from "../assets/fontside.jpg";
import large3 from "../assets/backside.jpg";
import large4 from "../assets/backside1.jpg";

import small1 from "../assets/banner.jpg";
import small2 from "../assets/fontside.jpg";
import small3 from "../assets/backside1.jpg";
import small4 from "../assets/backside1.jpg";

interface ImageData {
  id: number;
  largeImg: string;
  smallImg: string;
}

export const data: ImageData[] = [
  {
    id: 1,
    largeImg: large1,
    smallImg: small1,
  },
  {
    id: 2,
    largeImg: large2,
    smallImg: small2,
  },
  {
    id: 3,
    largeImg: large3,
    smallImg: small3,
  },
  {
    id: 4,
    largeImg: large4,
    smallImg: small4,
  },
];
