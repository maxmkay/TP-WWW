import Image from "next/image";
import MarketingData from "../mockdata/marketing";

const Marketing: React.FC = () => {
  return (
    <section className="bg-blue-600 py-[2%]">
      <div className="container">
        <div className="row p-5 gy-5">
          <div className="col-lg-6 p-0 p-md-5 flex  items-center  justify-center lg:justify-start">
            <Image
              src={MarketingData.imageUrl}
              alt="real-estate"
              className="rounded ml-[10%]"
              width={200}
              height={200}
            />
          </div>
          <div className="col-lg-6 p-0 p-md-5">
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
