import HeroParallax from "./ui/HeroParallax";
import img1 from "../assets/gallery/IMG.jpg"
import img2 from "../assets/gallery/IMG002.jpg"
import img3 from "../assets/gallery/IMG003.jpg"
import img4 from "../assets/gallery/IMG004.jpg"
import img5 from "../assets/gallery/IMG001.jpg"
import img6 from "../assets/gallery/IMG018.jpg"
import img7 from "../assets/gallery/IMG006.jpg"
import img8 from "../assets/gallery/IMG010.jpg"
import img9 from "../assets/gallery/IMG011.jpg"
import img10 from "../assets/gallery/IMG008.jpg"
import img11 from "../assets/gallery/IMG007.jpg"
import img12 from "../assets/gallery/IMG009.jpg"

function HeroParallaxComponent() {
  return <HeroParallax products={products} />;
}

const products = [
  {
    title: "Moonbeam",
    link: " ",
    thumbnail:
      img1,
  },
  {
    title: " ",
    link: "",
    thumbnail:
      img2,
  },
  {
    title: "Rogue",
    link: "",
    thumbnail:
      img3,
  },

  {
    title: "Editorially",
    link: "",
    thumbnail:
      img4,
  },
  {
    title: "Editrix AI",
    link: "",
    thumbnail:
      img5,
  },
  {
    title: "Pixel Perfect",
    link: "",
    thumbnail:
      img6,
  },

  {
    title: "Algochurn",
    link: "",
    thumbnail:
      img7,
  },
  {
    title: "Aceternity UI",
    link: "",
    thumbnail:
      img8,
  },
  {
    title: "Tailwind Master Kit",
    link: " ",
    thumbnail:
      img9,
  },
  {
    title: "SmartBridge",
    link: " ",
    thumbnail:
      img10,
  },
  {
    title: "Renderwork Studio",
    link: " ",
    thumbnail:
      img1,
  },

  {
    title: "Creme Digital",
    link: " ",
    thumbnail:
      img3,
  },
  {
    title: "Golden Bells Academy",
    link: " ",
    thumbnail:
      img11,
  },
  {
    title: "Invoker Labs",
    link: " ",
    thumbnail:
      img12,
  },
  {
    title: "E Free Invoice",
    link: " ",
    thumbnail:
      img5,
  },
];

export default HeroParallaxComponent;
