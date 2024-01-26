"use client";
import logo from "../../public/logo.png";
import flowerIcon from "../../public/flowericon.png";
import infoIcon from "../../public/infoIcon.png";
import backIcon from "../../public/backicon.png";
import settings from "../../public/settings.png";
import forwardIcon from "../../public/forwardicon.png";
import box from "../../public/box.png";
import people from "../../public/people.png";
import trendUp from "../../public/trend-up.png";
import dashboardIcon from "../../public/dashboard.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiMiniSun } from "react-icons/hi2";
import { BiSolidSun } from "react-icons/bi";
import moon from "../../public/moon.png";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import brightdash from "../../public/brightdash.png";
import brightmoon from '../../public/brightmoon.png'
const variants = {
  open: { opacity: 1, x: "-7%" },
  closed: { opacity: 0, x: "-100%" },
};

const Sidebar = ({ isOpenState, toggle }) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const logoSrc = resolvedTheme === "dark" ? brightdash : dashboardIcon;
  const moonSrc = resolvedTheme === "dark" ? brightmoon : moon;
  const backgroundColorLightMode = "#e9ecef";
  const backgroundColorDarkMode = "#212529"; 

  const backgroundColor = resolvedTheme === 'light' ? backgroundColorLightMode : backgroundColorDarkMode;
  useEffect(() => setMounted(true), []);
  return (
    // MOBILE
    <>
      <div className={`fixed bg-black bg-opacity-30 ${isOpenState ? 'w-screen h-screen backdrop-blur-sm' : 'w-0 h-0'} `}  onClick={toggle}>
        <motion.div
          animate={isOpenState ? "open" : "closed"}
          variants={variants}
          className="fixed block mtablets:hidden top-0 left-0 flex flex-col items-center justify-between fold:w-12 mobile:w-16  bg-gray-scale dark:bg-black pt-5 border-r border-gray-300 dark:border-gray-700 h-screen"
        >
          <div>
            <div className="flex justify-center items-center my-1">
              <Image src={logo} alt="logo" width={30} height={20}></Image>
            </div>
            <motion.div
              whileHover={{ scale: 1.5, backgroundColor: backgroundColor }}
              transition={{
                duration: 0.125,
              }}
              className="mt-5 mb-2 cursor-pointer "
            >
              <Image src={logoSrc} alt="logo" width={80} height={20}></Image>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, backgroundColor: backgroundColor }}
              transition={{
                duration: 0.125,
              }}
              className="my-1 cursor-pointer"
            >
              <Image src={trendUp} alt="logo" width={80} height={20}></Image>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, backgroundColor: backgroundColor }}
              transition={{
                duration: 0.125,
              }}
              className="my-1 cursor-pointer"
            >
              <Image src={people} alt="logo" width={80} height={50}></Image>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, backgroundColor: backgroundColor }}
              transition={{
                duration: 0.125,
              }}
              className="my-1 cursor-pointer"
            >
              <Image src={box} alt="logo" width={80} height={50}></Image>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, backgroundColor: backgroundColor}}
              transition={{
                duration: 0.125,
              }}
              className="my-1 cursor-pointer"
            >
              <Image src={flowerIcon} alt="logo" width={80} height={50}></Image>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, backgroundColor: backgroundColor }}
              transition={{
                duration: 0.125,
              }}
              className="my-1 cursor-pointer"
            >
              <Image src={infoIcon} alt="logo" width={80} height={50}></Image>
            </motion.div>
            <div className="flex flex-col items-center gap-3 bg-white dark:bg-coolors-gray justify-center rounded-full py-1 w-6/12 mx-auto">
              <div>
                {" "}
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  size={25}
                  style={{
                    color: resolvedTheme === "dark" ? "#B2ABAB" : "#FFFFFF",
                  }}
                  className="dark:bg-transparent bg-paid-green rounded-full p-1"
                />
              </div>
              <Image
                src={moonSrc}
                alt="moon"
                width={20}
                height={50}
                onClick={() => setTheme("dark")}
                className="dark:bg-paid-green bg-transparent rounded-full"
              ></Image>
            </div>
          </div>

          <div>
            <motion.div
              whileHover={{ scale: 1.5, backgroundColor: backgroundColor }}
              transition={{
                duration: 0.125,
              }}
              className="my-1 cursor-pointer"
            >
              <Image
                src={forwardIcon}
                alt="logo"
                width={80}
                height={20}
              ></Image>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, backgroundColor: backgroundColor }}
              transition={{
                duration: 0.125,
              }}
              className="my-1 cursor-pointer"
            >
              <Image src={settings} alt="logo" width={80} height={20}></Image>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.5, backgroundColor: backgroundColor }}
              transition={{
                duration: 0.125,
              }}
              className="my-1 cursor-pointer"
            >
              <Image src={backIcon} alt="logo" width={80} height={20}></Image>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* DESKTOP */}
      <div className="fixed hidden mtablets:flex top-0 left-0 flex-col items-center justify-between w-16  bg-gray-scale dark:bg-black pt-5 h-5/6 ">
        <div>
          <div className="flex justify-center items-center my-1">
            <Image src={logo} alt="logo" width={30} height={20}></Image>
          </div>
          <motion.div
            whileHover={{ scale: 0.9, backgroundColor: backgroundColor }}
            transition={{
              duration: 0.125,
            }}
            className="mt-3 mb-2  cursor-pointer"
          >
            <Image src={logoSrc} alt="logo" width={80} height={20}></Image>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.9, backgroundColor: backgroundColor }}
            transition={{
              duration: 0.125,
            }}
            className="my-1 cursor-pointer"
          >
            <Image src={trendUp} alt="logo" width={80} height={20}></Image>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.9, backgroundColor: backgroundColor }}
            transition={{
              duration: 0.125,
            }}
            className="my-1 cursor-pointer"
          >
            <Image src={people} alt="logo" width={80} height={50}></Image>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.9, backgroundColor: backgroundColor }}
            transition={{
              duration: 0.125,
            }}
            className="my-1 cursor-pointer"
          >
            <Image src={box} alt="logo" width={80} height={50}></Image>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.9, backgroundColor: backgroundColor }}
            transition={{
              duration: 0.125,
            }}
            className="my-1 cursor-pointer"
          >
            <Image src={flowerIcon} alt="logo" width={80} height={50}></Image>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.9, backgroundColor: backgroundColor }}
            transition={{
              duration: 0.125,
            }}
            className="my-1 cursor-pointer"
          >
            <Image src={infoIcon} alt="logo" width={80} height={50}></Image>
          </motion.div>
          <div className="flex flex-col items-center gap-3 bg-white dark:bg-coolors-gray justify-center rounded-full py-1 w-6/12 mx-auto">
            <div>
              {" "}
              <BiSolidSun
                onClick={() => setTheme("light")}
                size={25}
                style={{
                  color: resolvedTheme === "dark" ? "#B2ABAB" : "#FFFFFF",
                }}
                className="dark:bg-transparent bg-paid-green rounded-full p-1"
              />
            </div>
            <Image
              src={moonSrc}
              alt="moon"
              width={20}
              height={50}
              onClick={() => setTheme("dark")}
              className="dark:bg-paid-green bg-transparent p-[0.5] rounded-full"
            ></Image>
          </div>
        </div>

        <div className="mt-20">
          <motion.div
            whileHover={{ scale: 0.9, backgroundColor: backgroundColor }}
            transition={{
              duration: 0.125,
            }}
            className="my-1 cursor-pointer"
          >
            <Image src={forwardIcon} alt="logo" width={80} height={20}></Image>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.9, backgroundColor: backgroundColor }}
            transition={{
              duration: 0.125,
            }}
            className="my-1 cursor-pointer"
          >
            <Image src={settings} alt="logo" width={80} height={20}></Image>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.9, backgroundColor: backgroundColor }}
            transition={{
              duration: 0.125,
            }}
            className="my-1 cursor-pointer"
          >
            <Image src={backIcon} alt="logo" width={80} height={20}></Image>
          </motion.div>
          <div className="bg-white h-20 w-full dark:bg-coolors-gray"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
