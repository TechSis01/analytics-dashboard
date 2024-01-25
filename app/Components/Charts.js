"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const nums =  [7000, 18000, 3000, 28000, 8000, 45000, 8000, 20000, 35000, 5000, 30000, 33000,50000]

export const optionsDesktop = {
  maintainAspectRatio: true,
  aspectRatio: 3,
  responsive: true,
  tooltips: {
    callbacks: {
      label: (tooltipItem) => `$${tooltipItem.yLabel}`,
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Disable grid lines for x-axis
      },
    },
  },
};
export const optionsMobile = {
  maintainAspectRatio: true,
  aspectRatio: 1,
  responsive: true,
  tooltips: {
    callbacks: {
      label: (tooltipItem) => `$${nums[tooltipItem.index]}`
    },
  },
  scales: {
    x: {
      ticks: {
        maxRotation: 95, 
        minRotation: 0,  
      },
      grid: {
        display: false, 
      },
    },
  },
};
export const optionsTablet = {
  maintainAspectRatio: true,
  aspectRatio: 3,
  responsive: true,
  tooltips: {
    callbacks: {
      label: (tooltipItem) => `$${tooltipItem.yLabel}`,
    },
  },
  scales: {
    x: {
      grid: {
        display: false, 
      },
    },
  },
};

const generateGradientColors = (context) => {
  const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0,'rgba(52, 202, 165, 1)'); // Start color at the bottom of the bar
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)'); 
  return gradient;
};



const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "sales ($)",
      data: nums,
      backgroundColor: "#34CAA540",
      hoverBackgroundColor: generateGradientColors, // Darker shade on hover
      borderRadius: {
        topLeft: 80, 
        topRight: 80, 
        bottomLeft: 0, 
        bottomRight: 0, 
      },
      borderSkipped: false, 
    },
  ],
};



const Charts = () => {
  return (
    <div className="bg-white dark:bg-coolors-gray p-5 m-3 rounded-md col-span-2  text-xs ">
      <div className="flex justify-between">
        <p className="font-semibold">Sales Trends</p>
        <div className="flex items-center gap-3">
          <p>Sort by:</p>
          <motion.div 
           whileHover={{ backgroundColor: "#34CAA540"}}
           transition={
             {
               duration:0.125,
             }
           }
          className="flex items-center border border-gray-200 rounded-full p-1">
            <p 
            
            className="text-xxss cursor-pointer"> Weekly </p>
            <MdKeyboardArrowDown />
          </motion.div>
        </div>
      </div>
      <div className="hidden tablets:block">
        <Bar  options={optionsDesktop} data={data} />
      </div>
      <div className="block tablets:hidden overflow-x-auto text-xxss">
        <Bar   options={optionsMobile} data={data} />
      </div>
    </div>
  );
};

export default Charts;
