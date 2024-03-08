import React, { useState } from "react";
import closeIcon from "../assets/icon-close-white.svg";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";
import { data } from "../components/workimg";

interface ProductProps {
  price: number;
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
}

const Product: React.FC<ProductProps> = ( ) => {
  const products = [...data];
  const [value, setValue] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(true);

  const largeImage: string = products[value].largeImg;

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const goBack = () => {
    value === 0 ? setValue(0) : setValue((prev) => prev - 1);
  };

  const goForward = () => {
    value === products.length - 1
      ? setValue(products.length - 1)
      : setValue((prev) => prev + 1);
  };

  return (
    <main>
      <div className="main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[100px] relative">
        <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
          <div className="hidden md:block large-image">
            <img
              onClick={toggleModal}
              className="object-cover cursor-pointer rounded-xl w-[400px] h-[400px]"
              src={largeImage}
              alt="sneakers-photo"
            />
          </div>
          <div className="md:hidden large-image">
            <img
              onClick={goBack}
              className="bg-white rounded-full p-4 absolute top-[15%] left-6 cursor-pointer"
              src={prevIcon}
              alt="go-back"
            />
            <img
              className="w-[100%] h-[300px] object-cover"
              src={largeImage}
              alt="sneakers-photo"
            />
            <img
              onClick={goForward}
              className="bg-white rounded-full p-4 absolute top-[15%] left-[82%] cursor-pointer"
              src={nextIcon}
              alt="go-forward"
            />
          </div>
          <div className="small-images hidden md:flex mt-7 justify-between w-[400px]">
            {data.map((img, idx) => {
              return (
                <div key={img.id} className="single-image">
                  <img
                    onClick={() => setValue(idx)}
                    className="w-[80px] cursor-pointer rounded-xl transition-all hover:opacity-25 hover:border-[3px] border-orange"
                    src={img.smallImg}
                    alt="product-photo"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`${
            modal ? "hidden" : "hidden md:block"
          } absolute -top-[20%] right-0 -bottom-[20%] left-0 bg-lightBlack`}
        >
          <div
            className={
              "basis-1/2 flex flex-col justify-between absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            }
          >
            <div className="large-image">
              <img
                className="w-[400px] h-[400px] rounded-xl cursor-pointer"
                src={largeImage}
                alt="sneakers-photo"
              />
              <img
                onClick={toggleModal}
                className="w-[20px] h-[20px] absolute -top-8 left-[95%] transition-all cursor-pointer hover:scale-150"
                src={closeIcon}
                alt="close-icon"
              />
              <img
                onClick={goBack}
                className="bg-white p-4 rounded-full absolute top-[36%] -translate-x-[20px] cursor-pointer transition-all hover:scale-150"
                src={prevIcon}
                alt="previous"
              />
              <img
                onClick={goForward}
                className="bg-white p-4 rounded-full absolute top-[36%] left-[95%] cursor-pointer transition-all hover:scale-150"
                src={nextIcon}
                alt="next"
              />
            </div>
            <div className="small-images flex mt-7 justify-around w-[400px]">
              {data.map((img, idx) => {
                return (
                  <div key={img.id} className="single-image">
                    <img
                      onClick={() => setValue(idx)}
                      className="w-[60px] cursor-pointer rounded-xl transition-all hover:border-[3px] border-orange"
                      src={img.smallImg}
                      alt="product-photo"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="description p-6 md:basis-1/2 md:py-[40px]">
          <p className="text-orange text-[14px] tracking-widest uppercase font-[700] mb-6">
            A Two Days Hands on Workshop On
          </p>
          <h1 className="text-3xl md:text-4xl capitalize font-[700]">
            WEB DEVELOPMENT <br /> 
          </h1>
          <p className="hidden md:block text-darkGrayishBlue my-10 leading-7">
          The two-day, hands-on Web Development workshop, organized by the Infinity team in partnership with Genesis, garnered substantial success with an attendance exceeding participants/students. Delving into fundamental aspects such as HTML, CSS, and JavaScript. Attendees received comprehensive instruction and individualized mentorship from distinguished developers from Genesis while crafting their own real-world website projects. Certification, reflective of performance, was conferred upon participants, while select individuals were offered internship based on merit.
          </p>
          <p className="md:hidden text-darkGrayishBlue my-6 leading-7">
            
          </p>
        </div>
      </div>
    </main>
  );
};

export default Product;
