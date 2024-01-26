import barblue from "../../public/barblue.png";
import barlightblue from "../../public/barlightblue.png";
import bargold from "../../public/bargold.png";
import bared from "../../public/bared.png";
import Image from "next/image";
const TopPlatform = () => {
  return (
    <section className="flex flex-col mt-3 tablets:mt-0 fold:mx-3 mmtablets:mx-4 overflow-y-auto bg-white dark:bg-coolors-gray rounded-md fold:p-2 mtablets:p-5 ">
      <div>
        <div className="flex justify-between items-center w-11/12">
          <p className="fold:text-xs mobile:text-base mtablets:text-lg font-semibold">
            Top Platform
          </p>
          <p className="text-paid-green fold:text-xs mobile:text-base mtablets:text-lg font-semibold cursor-pointer">
            See All
          </p>
        </div>
      </div>
      <div className=" mmtablets:h-80 overflow-y-auto custom-scrollbar px-2">
        <div className="my-5">
          <h2 className="fold:text-xs mobile:text-base mtablets:text-lg font-semibold my-2">
            Book Bazaar
          </h2>
          <Image
            src={barblue}
            alt="book bazaar"
            width={500}
            height={20}
          ></Image>
          <div className="flex justify-between items-center">
            <p className="mt-2 fold:text-xs mobile:text-base mtablets:text-lg">
              $2,500,500
            </p>
            <p className="pr-2">+15%</p>
          </div>
        </div>
        <div className="my-5">
          <h2 className="fold:text-xs mobile:text-base mtablets:text-lg font-semibold my-2">
            Artisan Aisle
          </h2>
          <Image
            src={barlightblue}
            alt="Artisan Aisle"
            width={500}
            height={20}
          ></Image>
          <div className="flex justify-between items-center">
            <p className="mt-2 fold:text-xs  mobile:text-base mtablets:text-lg">
              $1,800,500
            </p>
            <p className="pr-2">+10%</p>
          </div>
        </div>
        <div className="my-5">
          <h2 className="fold:text-xs mobile:text-base mtablets:text-lg font-semibold my-2">
            Toy Troop
          </h2>
          <Image src={bargold} alt="Toy Troop" width={500} height={20}></Image>
          <div className="flex justify-between items-center">
            <p className="mt-2 fold:text-xs mobile:text-base mtablets:text-lg">
              $1,200,500
            </p>
            <p className="pr-2">+8%</p>
          </div>
        </div>
        <div className="my-5">
          <h2 className="fold:text-xs mobile:text-base mtablets:text-lg font-semibold">
            XStore
          </h2>
          <div className="w-full h-3 bg-gray-scale rounded-md">
            <div className="bg-red-600 rounded-md w-3/12 h-2"></div>
          </div>
          <div className="flex justify-between items-center">
            <p className="mt-2 fold:text-xs mobile:text-base mtablets:text-lg">
              $600,000
            </p>
            <p className="pr-2">+5%</p>
          </div>
        </div>
        <div className="my-5">
          <h2 className="fold:text-xs mobile:text-base mtablets:text-lg font-semibold">
            Drone
          </h2>
          <div className="w-full h-3 bg-gray-scale rounded-md">
            <div className="bg-indigo-900 rounded-md w-1/5 h-2"></div>
          </div>
          <div className="flex justify-between items-center">
            <p className="mt-2 fold:text-xs mobile:text-base mtablets:text-lg">
              $500,000
            </p>
            <p className="pr-2">+3%</p>
          </div>
        </div>
        <div className="my-5">
          <h2 className="fold:text-xs mobile:text-base mtablets:text-lg font-semibold">
            Mine Craft
          </h2>
          <div className="w-full h-3 bg-gray-scale rounded-md">
            <div className="bg-purple-500 rounded-md w-1/6 h-2"></div>
          </div>
          <div className="flex justify-between items-center">
            <p className="mt-2 fold:text-xs mobile:text-base mtablets:text-lg">
              $400,000
            </p>
            <p className="pr-2">+2%</p>
          </div>
        </div>
        <div className="my-5">
          <h2 className="fold:text-xs mobile:text-base mtablets:text-lg font-semibold">
            City Hunter
          </h2>
          <div className="w-full h-3 bg-gray-scale rounded-md">
            <div className="bg-green-500 rounded-md w-1/12 h-2"></div>
          </div>
          <div className="flex justify-between items-center ">
            <p className="mt-2 fold:text-xs mobile:text-base mtablets:text-lg">
              $300,000
            </p>
            <p className="pr-2">+1%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPlatform;
