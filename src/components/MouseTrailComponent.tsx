import { useAnimate } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { FiMousePointer,  } from "react-icons/fi";
import { MdTouchApp } from "react-icons/md";
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

export const MouseTrailComponent: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    // Check if the device is a touch device
    const detectTouchDevice = () => {
      const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(touchDevice);
    };

    // Call the function to detect touch device initially
    detectTouchDevice();

    // Add event listener for resizing to update device type
    window.addEventListener('resize', detectTouchDevice);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', detectTouchDevice);
    };
  }, []);

  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19
      ]}
    >
      <div className="flex flex-col">
      <section className="grid h-[70vh] w-full place-content-center bg-zinc-900 rounded-xl">
        <p className="flex items-center gap-2 text-3xl font-bold uppercase text-white">
          {isTouchDevice ? (
            <>
              <MdTouchApp color='white' />
              <span>TOUCH HERE</span>
            </>
          ) : (
            <>
              <FiMousePointer color='white' />
              <span>HOVER HERE</span>
            </>
          )}
        </p>
      </section>
    </div>
    </MouseImageTrail>
  );
};

interface MouseImageTrailProps {
  children: React.ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}

const MouseImageTrail: React.FC<MouseImageTrailProps> = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector) as HTMLElement;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};