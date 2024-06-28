"use client";

import Image from "next/image";
import hero from "../../public/hero.png";
import { HiCheckBadge } from "react-icons/hi2";
import { motion } from "framer-motion";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdSavings } from "react-icons/md";
import { MdOutlineSavings } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { BsBookHalf } from "react-icons/bs";
import { IoHome } from "react-icons/io5";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row md:flex-col  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/*Text- container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
          <p className="text-white ring-1 ring-green-60 flex flex-row items-center gap-1 border border-grey-10 bg-grey-10 rounded-full p-1">
            <HiCheckBadge className=" text-green-60 text-xl" /> No LLC Required,
            No Credit Check.{" "}
          </p>
          {/* Title */}
          <h1 className=" md:text-6xl text-4xl font-bold text-white  ">
            Welcome to paySwift Empowering Your{" "}
            <span className="text-green-60">Financial Journey </span>{" "}
          </h1>
          <p className="text-white md:text-xl">
            At paySwift, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers{"' "} needs.
          </p>
          <div>
            <button className="flex rounded-full   hover:bg-greenyellow hover:text-white gap-4 p-4 ring-1 ring-green-60 bg-green-60 text-black">
              Open Account
            </button>
          </div>
        </div>
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative md:flex flex-col">
          <Image src={hero} alt="" fill className="object-contain" />
        </div>
      </div>
      {/* OUR PRODUCTS CONTAINER */}
      <div className="bg-grey-11 h-auto flex-col pt-8 min-w-fit">
        <div className="flex flex-row justify-between items-center bg-grey-11">
          <div className=" flex flex-col lg:flex-col md:flex-col  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-grey-11 md:z-40">
            <h1 className=" flex gap-2 md:text-6xl text-4xl font-bold text-white  ">
              Our{" "}
              <span className="md:text-6xl text-4xl font-bold  text-green-60">
                {" "}
                Products
              </span>
            </h1>
            <p className="text-white flex  ">
              Discover a range of comprehensive and customizable banking
              products at paySwift, designed to suit your unique financial needs
              and aspirations
            </p>
            {/* Button container */}
          </div>

          <div className="flex flex-row rounded border-black gap-2 items-center mr-8 ">
            <button className="ring-1 rounded-full h-auto w-auto p-2 hover:bg-greenyellow hover:text-white bg-green-60 ">
              For Individuals{" "}
            </button>
            <button className="ring-1 rounded-full h-auto w-auto p-2 hover:bg-greenyellow hover:text-white bg-green-60 ">
              For Businesses{" "}
            </button>
          </div>
        </div>

        {/* grid of types of accounts */}
        <div className="h-auto mt-8 mx-8 flex items-center justify-center md:mx-10 sm:mx-8 px-4 ">
          <div className="lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-4  md:flex md:flex-col">
            <div className=" lg:border-r-8 lg:border-b-0 md:border-r-0 md:border-b-8 p-4 border-grey-15 ">
              <div className="flex flex-col ">
                <h1 className="text-4xl text-green-60 text-center gap-2 p-5  font-semibold">
                  {" "}
                  <span className="flex justify-center p-3">
                    <MdSavings className="flex text-green-60 text-6xl items-center justify-center " />{" "}
                  </span>
                  Saving Account
                </h1>
                <p className="text-sm flex text-white">
                  Build your savings with our competitive interest rates and
                  flexible savings account options. Whether you're saving for a
                  specific goal or want to grow your wealth over time, we have
                  the right account for you.{" "}
                </p>
              </div>
            </div>
            <div className="lg:border-r-8  lg:border-b-0 d:border-r-0 md:border-b-8 p-4 border-grey-15">
              <div className="flex flex-col ">
                <h1 className=" flex flex-col text-4xl p-5  text-green-60 text-center justify-center gap-2 font-semibold">
                  {" "}
                  <span className="flex justify-center p-3">
                    <GiTakeMyMoney className="flex text-green-60 text-6xl  items-center justify-center " />{" "}
                  </span>
                  Loans and Mortgages
                </h1>
                <p className="text-sm text-white">
                  Realize your dreams with our flexible loan and mortgage
                  options. From personal loans to home mortgages, our
                  experienced loan officers are here to guide you through the
                  application process and help you secure the funds you need.{" "}
                </p>
              </div>
            </div>
            <div className="lg:border-r-8  lg:border-b-0 d:border-r-0 md:border-b-8 p-4 border-grey-15 gap-2">
              <div className="flex flex-col ">
                <h1 className="text-4xl text-green-60 text-center p-5 gap-2 font-semibold">
                  {" "}
                  <span className="flex justify-center p-3">
                    <MdOutlineSavings className="flex text-green-60 text-6xl  items-center justify-center " />{" "}
                  </span>
                  Current Account
                </h1>
                <p className="text-sm text-white">
                  Build your savings with our competitive interest rates and
                  flexible savings account options. Whether you're saving for a
                  specific goal or want to grow your wealth over time, we have
                  the right account for you.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Container */}
      <div>
        {/* heading and subheading */}
        <div className="bg-grey-11 flex items-start gap-2 justify-start lg:flex-col md:flex-col  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          <div className="">
            <h1 className="flex text-green-60 text-6xl font-bold ">
              Use Cases
            </h1>{" "}
          </div>
          <div className="flex flex-col">
            <p className="text-white flex ">
              At paySwift, we cater to the diverse needs of individuals and
              businesses alike, offering a wide range of financial solutions
            </p>
          </div>
        </div>
        {/* big 4x4 grid */}
        <div className="grid lg:grid-cols-2 items-center lg:grid-rows-2 gap-4 bg-grey-11 h-1/2 w-auto md:grid-cols-1 md:grid-rows-4 px-16 py-8">
          {/* grid1 also 4x4 */}
          <div className="border border-grey-15 h-auto text-white flex items-center justify-center p-2  ">
            {/* Grid slot 1 container  */}
            <div className="grid grid-cols-2 gap-2  grid-rows-2 h-1/4 w-1/2 p-2 bg-grey-10 ">
              <div className="flex flex-col items-center justify-center bg-grey-15 border border-grey-11 text-center">
                {" "}
                <GiReceiveMoney className="text-green-60 rounded text-3xl" />{" "}
                <h1 className="text-white text-3xl ">
                  {" "}
                  Managing Personal Finances
                </h1>{" "}
              </div>
              <div className="flex flex-col items-center justify-center bg-grey-15 border border-grey-11">
                {" "}
                <GrMoney className="text-green-60 rounded text-3xl" />{" "}
                <h1 className="text-white text-3xl text-center ">
                  Saving for Future
                </h1>{" "}
              </div>
              <div className="flex flex-col items-center justify-center bg-grey-15 border border-grey-11">
                {" "}
                <IoHome className="text-green-60 rounded text-3xl" />{" "}
                <h1 className="text-white text-3xl text-center ">
                  Home OwnerShip
                </h1>{" "}
              </div>

              <div className="flex flex-col items-center justify-center bg-grey-15 border border-grey-11">
                {" "}
                <BsBookHalf className="text-green-60 rounded text-3xl" />{" "}
                <h1 className="text-white text-3xl text-center ">
                  {" "}
                  Education loan
                </h1>{" "}
              </div>
            </div>
          </div>
          {/* grid2 also 4x4 */}
          <div className="border border-grey-15 flex flex-col gap-12 ">
            <div className="flex ">
              <h1 className="text-white text-4xl font font-semibold stroke-emerald-200">
                For Individuals
              </h1>
            </div>
            <div className="flex text-center">
              <p className="text-white text-xl">
                For individuals, our mortgage services pave the way to
                homeownership, and our flexible personal loans provide vital
                support during various life milestones. We also prioritize
                retirement planning, ensuring a financially secure future for
                our customers
              </p>
            </div>
            {/* 1X3 Grid  */}
            <div className="grid grid-cols-3 grid-rows-1 text-white ">
              <div className="flex flex-col items-center justify-center   border-dashed border-r-4 border-grey-15 gap-4 ">
                <div className="flex">
                  <h1 className="text-6xl text-green-60">78%</h1>
                </div>
                <div className="flex">
                  <p className="text-white text-xl text-center ">
                    {" "}
                    Secure Retirement Planning
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center  border-dashed border-r-4 border-grey-15 gap-4">
                <div className="flex">
                  <h1 className="text-6xl text-green-60">63%</h1>
                </div>
                <div className="flex">
                  <p className="text-white text-xl text-center ">
                    {" "}
                    Manageable Debt Consolidation
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center  gap-4">
                <div className="flex">
                  <h1 className="text-6xl text-green-60">91%</h1>
                </div>
                <div className="flex">
                  <p className="text-white text-xl text-center ">
                    {" "}
                    Reducing Financial burdens
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  className="border border-white "grid3 also 4x4 */}
          <div className="border border-grey-15 gap-4 ">
            <div className="flex ">
              <h1 className="text-white text-4xl font font-semibold stroke-emerald-200">
                For Business
              </h1>
            </div>
            <div className="flex text-center">
              <p className="text-white text-xl">
                For businesses, we empower growth with working capital solutions
                that optimize cash flow, and our tailored financing options fuel
                business expansion. Whatever your financial aspirations,
                YourBank is committed to providing the right tools and support
                to achieve them
              </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-1 text-white ">
              <div className="flex flex-col items-center justify-center   border-dashed border-r-4 border-grey-15 gap-4 p-4 ">
                <div className="flex">
                  <h1 className="text-6xl text-green-60">65%</h1>
                </div>
                <div className="flex">
                  <p className="text-white text-xl text-center ">
                    {" "}
                    Cash Flow Management
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center  border-dashed border-r-4 border-grey-15 gap-4">
                <div className="flex">
                  <h1 className="text-6xl text-green-60">70%</h1>
                </div>
                <div className="flex">
                  <p className="text-white text-xl text-center ">
                    {" "}
                    Drive Business Expansion
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center  gap-4">
                <div className="flex">
                  <h1 className="text-6xl text-green-60">45%</h1>
                </div>
                <div className="flex">
                  <p className="text-white text-xl text-center ">
                    {" "}
                    Streamline payroll processing
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  className="border border-white "grid4 also 4x4 */}
          <div className="border border-grey-15 h-auto text-white flex items-center justify-center p-2  ">
            {/* Grid slot 1 container  */}
            <div className="grid grid-cols-2 gap-2  grid-rows-2 h-1/4 w-1/2 p-2 bg-grey-10 ">
              <div className="flex flex-col items-center justify-center bg-grey-15 border border-grey-11 text-center">
                {" "}
                <GiReceiveMoney className="text-green-60 rounded text-3xl" />{" "}
                <h1 className="text-white text-3xl ">
                  {" "}
                  Startups and Entrepreneurs
                </h1>{" "}
              </div>
              <div className="flex flex-col items-center justify-center bg-grey-15 border border-grey-11">
                {" "}
                <GrMoney className="text-green-60 rounded text-3xl" />{" "}
                <h1 className="text-white text-3xl text-center ">
                  Cash Flow Management
                </h1>{" "}
              </div>
              <div className="flex flex-col items-center justify-center bg-grey-15 border border-grey-11">
                {" "}
                <IoHome className="text-green-60 rounded text-3xl" />{" "}
                <h1 className="text-white text-3xl text-center ">
                  Business Expansion
                </h1>{" "}
              </div>

              <div className="flex flex-col items-center justify-center bg-grey-15 border border-grey-11">
                {" "}
                <BsBookHalf className="text-green-60 rounded text-3xl" />{" "}
                <h1 className="text-white text-3xl text-center "> Payment</h1>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
