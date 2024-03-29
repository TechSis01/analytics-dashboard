"use client";
import Header from "./Header";
import Chart from "./Charts";
import Orders from "./Orders";
import LastOrders from "./LastOrders";
import TopPlatform from "./TopPlatform";
import logo from "../../public/logo.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState,useEffect } from "react";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
const Dashboard = ({
  isOpenState,
  toggle,
  openStateTimeline,
  timeLineOpen,
  toggleModal,
  changeModalStateClose,
}) => {
  const { resolvedTheme } = useTheme();
  const [localTheme, setLocalTheme] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setLocalTheme(storedTheme);
  }, [resolvedTheme]);
  
  // Add a new useEffect that listens to changes in localTheme
  useEffect(() => {
    if (localTheme === 'light') {
      setBackgroundColor("#e9ecef");
    } else if (localTheme === 'dark') {
      setBackgroundColor("#212529");
    }
  }, [localTheme]);
  return (
    <div
      className={` w-full ml-0 mtablets:ml-16 border-l dark:border-gray-700 border-gray-300 `}
    >
      <div
        className={`mtablets:hidden fixed w-full dark:bg-coolors-gray bg-white flex justify-between px-2 py-2 items-center`}
      >
        <PiDotsThreeOutlineVerticalFill
          size={20}
          className=" mtablets:hidden ml-2 mt-2 border border-gray-600 dark:border-white rounded-full p-1 "
          onClick={toggle}
        />
        <div className="flex justify-center items-center my-1 mtablets:hidden">
          <Image src={logo} alt="logo" width={30} height={20}></Image>
        </div>
      </div>

      <div className="fold:mt-14 mtablets:mt-0 py-3">
        <Header />
       
        <div className="tablets:max-h-56 grid grid-cols-1 mmtablets:grid-cols-1 tablets:grid-cols-3 ">
          <Chart
            openStateTimeline={openStateTimeline}
            timeLineOpen={timeLineOpen}
          />
          <Orders />
        </div>
        <div
          className={`grid grid-cols-1 tablets:grid-cols-3 ${
            openStateTimeline
              ? "tablets:mt-72"
              : "tablets:mt-36 transition duration-700"
          }`}
        >
          <LastOrders
            toggleModal={toggleModal}
            changeModalStateClose={changeModalStateClose}
          />
          <TopPlatform />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
