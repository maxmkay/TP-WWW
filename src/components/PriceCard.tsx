import React from "react";
import Image from "next/image";
import righticon from "../Image/RightIcon.png";
import wrongicon from "../Image/WrongIcon.png";

import "../app/css/Pricing.css";

interface PriceCardProps {
  plan: string;
  price: number;
  features: { purchase: boolean; name: string }[];
}

function PriceCard(props: PriceCardProps) {
  return (
    <div className="col-12 col-md-8 mx-md-auto col-lg-3 px-0 my-4 my-md-5 my-lg-0">
      <div className=" pricing_card_main_section">
        <div
          className={`w-full text-center overflow-hidde rounded common_title_border ${
            props.plan == "FREE" && `bg-blue-600`
          } ${props.plan == "PREMIUM" && `bg-yellow-500`} ${
            props.plan == "ULTRA" && `bg-red-500`
          } `}
        >
          <h4 className="py-[3%] m-0 ">{props.plan}</h4>
        </div>
        <div className="w-full flex justify-center items-center ">
          <h1 className="my-[3%]">${props.price}</h1>
          <span>/MO</span>
        </div>
        <h4 className="w-full text-center my-[2%] pricing_Billed_Monthly  ">
          Billed Monthly
        </h4>

        {props.features.map((features) => {
          return (
            <>
              <div className="flex items-center mb-[2%]">
                <div className="w-[20%] flex items-center ">
                  <Image
                    src={features.purchase ? righticon : wrongicon}
                    alt="logo"
                    className="fs-3 mx-auto "
                    width={40}
                    height={40}
                  />
                </div>
                <div className="w-[80%]">
                  <h4 className="m-0 pricing_plan_introduction">
                    {features.name}
                  </h4>
                </div>
              </div>
            </>
          );
        })}

        <div className="text-center">
          <button
            className={`w-[70%] my-[5%] py-[5%] bg-transparent rounded border-2 ${
              props.plan == "FREE" && `border-blue-600`
            } ${props.plan == "PREMIUM" && `border-yellow-500`} ${
              props.plan == "ULTRA" && `border-red-500`
            } `}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
