"use client";
import React, { useState } from "react";
import Image from "next/image";
import User from "../Image/User.png";
import "../app/css/SliderCard.css";
import ReactStars from "react-stars";
import Slider from "react-slick";

function SliderCard() {
  const [rating, setRating] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const cardData = [
    {
      id: 1,
      image: User,
      name: "Leo",
      role: "Agent",
      title: "It was a very good experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    },
    {
      id: 2,
      image: User,
      name: "Leo",
      role: "Investor",
      title: "It was a very good experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    },
    {
      id: 3,
      image: User,
      name: "Leo",
      role: "Realtor",
      title: "It was a very good experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    },
    {
      id: 4,
      image: User,
      name: "Leo",
      role: "Agent",
      title: "It was a very good experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    },
    {
      id: 5,
      image: User,
      name: "Leo",
      role: "Investor",
      title: "It was a very good experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    },
  ];

  // Function to handle rating changes
  const ratingChanged = (newRating: any) => {
    console.log(newRating);
    setRating(newRating);
  };

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    centerMode: true,
    centerPadding: "0",
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
    beforeChange: (current: any, next: any) => setActiveIndex(next),
    afterChange: (index: any) => setActiveIndex(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="text-center latoBold">
        <h1 className="mt-5">What Our Customers Say About Us</h1>
      </div>
      <div className="w-[90%] md:w-[70%] lg:w-[95%] xl:w-[85%] mx-auto py-[10%] lg:pb-[5%] lg:pt-[2%]">
        <Slider {...settings}>
          {cardData.map((item, index) => (
            <div
              className={`p-3  mx-auto card_section_main card py-5 text-center ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div className="flex items-center ">
                <div className="w-[20%]">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    className="slider_card_user_img"
                    alt="user"
                  />
                </div>
                <div className="w-[80%] pl-[2%]">
                  <h1 className="mb-0 card_user_name text-left latoBold">
                    {item.name}
                  </h1>
                  <div className="flex items-center">
                    <span
                      className={`px-[6%] rounded-full py-[0%] border-2 latoNormal ${
                        item.role == "Investor" &&
                        ` border-blue-600 text-blue-600`
                      } ${
                        item.role == "Agent" &&
                        `border-yellow-500 text-yellow-500`
                      } ${
                        item.role == "Realtor" && `border-red-500 text-red-500`
                      } `}
                    >
                      {item.role}
                    </span>
                    <ReactStars
                      count={5}
                      value={rating}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                      className="ml-[2%]"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mt-[5%]">
                <h4 className="card_title latoBold">{item.title}</h4>
                <p className="mt-[5%] card_introducation latoNormal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SliderCard;
