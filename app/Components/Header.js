import { CiSearch } from "react-icons/ci";
import calendar from "../../public/calendar.png";
import bell from "../../public/bellicon.png";
import profilepix from "../../public/Profile.png";
import solarbell from "../../public/solar-bell.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";
const Header = () => {
  const { resolvedTheme } = useTheme();

  const logoSrc = resolvedTheme === "dark" ? solarbell : bell;
  return (
    <div className=" bg-gray-scale dark:bg-black grid-cols-1 grid mtablets:grid-cols-5 items-center pb-2 pt-6 border-b border-gray-300 dark:border-gray-700 pl-2 pr-2 lg:pl-5 gap-5">
      <div className="col-span-1 mtablets:col-span-2">
        <h2 className="text-lg lg:text-xl font-semibold">Dashboard</h2>
      </div>

      <div className="bg-white dark:bg-coolors-gray py-1 fold:py-2 w-full px-3 gap-2 flex items-center border border-gray-200 dark:border-gray-700 rounded-full">
        <CiSearch className="text-xl  " />
        <input
          type="text"
          placeholder="Search"
          className="outline-none fold:w-5/12 mtablets:w-6/12 dark:bg-coolors-gray"
        ></input>
      </div>

      <div className="flex items-center gap-3">
        <Image src={calendar} alt="calender" width={20} height={20}></Image>
        <p className="text-xs">November 15, 2023</p>
      </div>

      <div className="md:flex flex-row-reverse md:flex-row items-center gap-1 lg:gap-5">
        <div className="hidden lg:block border border-gray-200 dark:border-gray-700 rounded-full p-1">
        <motion.div whileTap={{ scale: 0.85 }}>
              <Image src={logoSrc} alt="bell" width={20} height={20}></Image>
            </motion.div>
        </div>
        <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-full fold:w-11/12 mobile:w-7/12 mtablets:w-full justify-between p-1">
          <Image
            src={profilepix}
            alt="profile picture"
            width={40}
            height={20}
            className="fold:w-6 tablets:w-10"
          ></Image>
          <div>
            <p className="text-xs">Justin Bergson</p>
            <p className="text-gray-text text-xs">Justin@gmail.com</p>
          </div>
          <MdKeyboardArrowDown />
          <div className="md:hidden border border-gray-200 dark:border-gray-700 rounded-full p-1">
            <motion.div whileTap={{ scale: 0.85 }}>
              <Image src={logoSrc} alt="bell" width={20} height={20}></Image>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;