"use client";
import Image from "next/image";
interface Extension {
  title: string;
  removeBorder: boolean;
}

import { Modal } from "../components/layout/Modal";
import { useEffect, useState } from "react";

const Extension: React.FC<Extension> = ({ title, removeBorder }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Enable body scrolling when the modal is closed
    document.body.style.overflow = "auto";
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    // Close the modal on pressing the "Esc" key
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    // Add event listener for the "Esc" key when the modal is open
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="container-fluid ">
        <div className="row interBold py-5 align-center gy-5">
          <div className="col-lg-7 col-12 flex  items-center  justify-center">
            <div className="text-center">
              <h1 className="md:text-3xl lg:text-4xl xl:text-5xl fw-bolder mb-5">
                <span
                  className="text-black d-inline"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></span>
              </h1>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-[200px]"
                onClick={handleOpenModal}
              >
                Download the Extension Here
              </button>
            </div>
          </div>
          <div
            className={`col-lg-5 col-12 flex justify-center lg:!justify-start ${
              removeBorder ? "" : "border-2 rounded-l-lg shadow"
            }`}
          >
            <div className="d-flex justify-content-start mt-xl-5 mt-0  mt-xxl-0 py-5">
              {/* <div className=""> */}
              <Image
                src={"/company/right.png"}
                alt="logo"
                className="fs-3 "
                width={300}
                height={400}
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default Extension;
