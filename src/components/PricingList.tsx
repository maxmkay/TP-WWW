import React from "react";
import PriceCard from "./PriceCard";
import pricingData from "../mockdata/pricing";

function PricingList() {
  return (
    <div className="flex-shrink-0 container-fluid mb-0 mb-md-5">
      <div className="row mb-0 mb-md-5">
        <div className="col-12 text-center ">
          <h1 className="mt-[2%] mb-[2%] interBold">Choose Your Membership</h1>
        </div>
        <div className="col-12 interBold">
          <div className="container">
            <div className="row">
              {pricingData.map((item) => {
                return (
                  <PriceCard
                    key={item.plan}
                    plan={item.plan}
                    price={item.price}
                    features={item.features}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingList;
