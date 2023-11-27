"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../Image/Logo.png";
import Multiply from "../../Image/Multiply.png";
import homeWhite from "../../Image/homeWhite.png";
import "../../../src/app/css/Modal.css";

interface modalProps {
  isModalOpen: boolean;
  handleCloseModal: any;
}

export const Modal: React.FC<modalProps> = (props) => {
  return (
    <>
      <div className="relative">
        {/* Modal */}
        {props.isModalOpen && (
          <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div className="relative bg-white p-3 rounded shadow-lg w-[90%] md:w-[60%] lg:w-[60%] xl:w-[40%] 2xl:w-[30%]">
              <div className="flex items-center">
                <div className="w-[20%]">
                  <Image
                    src={logo}
                    alt="logo"
                    className="fs-3 mx-auto"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="flex justify-between w-[80%] items-center">
                  <h1 className="modal_header_title">TopProp</h1>
                  <Image
                    src={Multiply}
                    alt="logo"
                    className="mr-[2%] mt-[-10%]"
                    width={30}
                    height={30}
                    onClick={props.handleCloseModal}
                  />
                </div>
              </div>
              <div className="w-[95%] md:w-[85%] lg:w-[85%] mx-auto text-center mt-[5%]">
                <h1 className="modal_top_prop_para">
                  Top prop is currently in Beta
                </h1>
              </div>
              <div className="w-[75%] mx-auto text-center mt-[5%]">
                <h5 className="modal_but_would_second__para">
                  But we would love to give you updates.
                </h5>
              </div>
              <div className="mt-[5%] mx-auto h-[100px] w-[100px] modal_home_image_section">
                <Image
                  src={homeWhite}
                  alt="logo"
                  className="m-auto p-3"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-[5%] w-[95%] md:w-[85%] lg:w-[85%] mx-auto">
                <h4>Enter your email below!</h4>
                <form>
                  <input type="email" className="modal_input_email" />
                </form>
              </div>
              <div className="mt-[3%] mx-auto w-[95%] text-center">
                <button className="modal_down_btn py-[2%] px-[4%]">
                  Download
                </button>
              </div>
              <div className="w-[75%] mx-auto text-center mt-[3%]">
                <p className="modal_contact_para">
                  If you would like to become a beta tester,{" "}
                  <span className="underline decoration-1">contact us.</span> We
                  would love the help.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
