import Image from "next/image";
import MarketingData from "../mockdata/marketing";

const Marketing: React.FC = () => {
  return (
    <section className="bg-blue-600 py-[2%]">
      <div className="container">
        <div className="row p-lg-5 p-2 gy-5">
          <div className="col-md-6 p-0 p-md-5 flex  items-center  justify-center lg:justify-start">
            <Image
              src={MarketingData.imageUrl}
              alt="real-estate"
              className="rounded md:ml-[10%] ml-[0%]"
              width={150}
              height={150}
            />
          </div>
          <div className="col-md-6 p-3 p-md-5">
            <div className="">
              <div className="interBold text-white">
                <h3>{MarketingData.title}</h3>
              </div>
              <p className="interNormal text-white text-sm">
                {MarketingData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Marketing;
