import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Cross1Icon } from '@radix-ui/react-icons';
import HeroParallaxComponent from '../components/HeroParallaxComponent';
import img1 from "../assets/gallery/IMG.jpg"
import img2 from "../assets/gallery/IMG001.jpg"
import img3 from "../assets/gallery/IMG011.jpg"
import img4 from "../assets/gallery/IMG017.jpg"
import img5 from "../assets/gallery/IMG015.jpg"
import img6 from "../assets/gallery/IMG007.jpg"
import img7 from "../assets/gallery/IMG015.jpg"
import img8 from "../assets/gallery/IMG002.jpg"
import img9 from "../assets/gallery/IMG004.jpg"
import img10 from "../assets/gallery/IMG006.jpg"
import img11 from "../assets/gallery/IMG009.jpg"
import img12 from "../assets/gallery/IMG008.jpg"
import img13 from "../assets/gallery/IMG010.jpg"
import img14 from "../assets/gallery/IMG012.jpg"
import img15 from "../assets/gallery/IMG013.jpg"
import img16 from "../assets/gallery/IMG018.jpg"
import img17 from "../assets/gallery/IMG016.jpg"
import img18 from "../assets/gallery/IMG014.jpg"
import img19 from "../assets/gallery/IMG002.jpg"

interface Card {
  url: string;
  id: number;
}

interface ImageModalProps {
  url: string;
  onClose: () => void;
}

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (url: string) => {
    setSelectedImage(url);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className='my-4'>
      {/* <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8">
        <span className="inline bg-gradient-to-r from-[#f493cf]  to-[#ff00b7] text-transparent bg-clip-text">
          GALLERY
        </span>
      </h1> */}
      <HeroParallaxComponent/>
      <HorizontalScrollCarousel openImage={openImage} />
      {selectedImage && (
        <ImageModal url={selectedImage} onClose={closeImage} />
      )}
    </div>
  );
};

const HorizontalScrollCarousel: React.FC<{ openImage: (url: string) => void }> = ({ openImage }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} openImage={openImage} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card: React.FC<{ card: Card; openImage: (url: string) => void }> = ({ card, openImage }) => {
  const handleClick = () => {
    openImage(card.url);
  };

  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 cursor-pointer"
      onClick={handleClick}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

const ImageModal: React.FC<ImageModalProps> = ({ url, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [modalStyles, setModalStyles] = useState<React.CSSProperties>({});

  useEffect(() => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      const windowWidth = window.innerWidth * 0.8; // Adjust as needed
      const windowHeight = window.innerHeight * 0.8; // Adjust as needed

      if (windowWidth / aspectRatio > windowHeight) {
        setModalStyles({
          width: `${windowHeight * aspectRatio}px`,
          height: `${windowHeight}px`,
        });
      } else {
        setModalStyles({
          width: `${windowWidth}px`,
          height: `${windowWidth / aspectRatio}px`,
        });
      }

      setImageLoaded(true);
    };

    // Add event listener for "Esc" key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [url, onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="max-w-4xl max-h-4xl overflow-auto" style={modalStyles}>
        {imageLoaded && (
          <img src={url} alt="Large" className="block mx-auto max-w-full max-h-full" />
        )}
        <button
          className="absolute top-4 right-4 text-white text-xl focus:outline-none"
          onClick={onClose}
        >
          <Cross1Icon height={50} />
        </button>
      </div>
    </div>
  );
};

export default GalleryPage;

const cards: Card[] = [
  { url: img1, id: 1 },
  { url: img2, id: 2 },
  { url: img3, id: 3 },
  { url: img4, id: 4 },
  { url: img5, id: 5 },
  { url: img6, id: 6 },
  { url: img7, id: 7 },
  { url: img8, id: 8 },
  { url: img9, id: 9 },
  { url: img10, id: 10 },
  { url: img11, id: 11 },
  { url: img12, id: 12 },
  { url: img13, id: 13 },
  { url: img14, id: 14 },
  { url: img15, id: 15 },
  { url: img16, id: 16 },
  { url: img17, id: 17 },
  { url: img18, id: 18 },
  { url: img19, id: 19 }
];