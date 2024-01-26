"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { easeInOut, motion } from "framer-motion";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const nums = [
  25000, 30000, 20000, 28000, 8000, 45000, 12000, 40000, 35000, 36000, 15000, 33000,
  50000,
];

export const optionsDesktop = {
  maintainAspectRatio: true,
  aspectRatio: 3,
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => `$${context.parsed.y}`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 10000,
        callback: function(value) {
          return value.toLocaleString();
        }
      }
    },
    x: {
      grid: {
        display: false, // Disable grid lines for x-axis
      },
    },
  },
};
 
export const optionsMobile = {
  // maintainAspectRatio: true,
  aspectRatio: 0,
  tooltips: {
    callbacks: {
      label: (tooltipItem) => `$${nums[tooltipItem.index]}`,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 10000,
        callback: function(value) {
          return value.toLocaleString();
        }
      }
    },
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
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 10000,
        callback: function(value) {
          return value.toLocaleString();
        }
      }
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const generateGradientColors = (context) => {
  const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(52, 202, 165, 1)"); // Start color at the bottom of the bar
  gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)");
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

const variants = {
  open: { opacity: 1, y: "1%" },
  closed: { opacity: 0, y: "-10%" },
};

const Charts = ({ openStateTimeline, timeLineOpen }) => {
  const [timeLine, setTimeLine] = useState("Weekly");


  const changeDaily = ()=>{
    setTimeLine('Daily')
    timeLineOpen()
  }
  const changeWeekly = ()=>{
    setTimeLine('Weekly')
    timeLineOpen()
  }
  const changeMonthly = ()=>{
    setTimeLine('Monthly')
    timeLineOpen()
  }
  const changeYear = ()=>{
    setTimeLine('Yearly')
    timeLineOpen()
  }
  return (
    <div className="bg-white dark:bg-coolors-gray p-5 m-3 rounded-md col-span-2  text-xs ">
      <div className="flex justify-between">
        <p className="font-semibold">Sales Trends</p>
        <div className="flex items-center gap-3">
          <p>Sort by:</p>
          <motion.div
            whileHover={{ backgroundColor: "#34CAA540" }}
            transition={{
              duration: 0.125,
            }}
            onClick={timeLineOpen}
            className="flex items-center border border-gray-200 rounded-full p-1"
          >
            <p className="text-xxss cursor-pointer"> {timeLine} </p>
            {openStateTimeline ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={openStateTimeline ? "open" : "closed"}
        variants={variants}
        transition={{
          duration: 0.125,
          ease: easeInOut,
        }}
        className={`flex justify-between items-center w-full ${
          openStateTimeline ? "block" : "hidden transition duration-500"
        }`}
      >
        <div></div>
        <div className=" w-full p-1">
          <motion.p
            className=" p-1 mb-2 cursor-pointer rounded-sm"
            whileHover={{ backgroundColor:'#898989'}}
            whileTap={{backgroundColor:'#787486'}}
            onClick={changeDaily}
          >
            Daily
          </motion.p>
          <motion.p
            className="p-1 mb-2 cursor-pointer rounded-sm"
            whileHover={{ backgroundColor:'#898989' }}
            whileTap={{backgroundColor:'#787486'}}
            onClick={changeWeekly}
          >
            Weekly
          </motion.p>
          <motion.p
            className="p-1 mb-2 cursor-pointer rounded-sm"
            whileHover={{ backgroundColor:'#898989' }}
            whileTap={{backgroundColor:'#787486'}}
            onClick={changeMonthly}
          >
            Monthly
          </motion.p>
          <motion.p
            className=" p-1 mb-2 cursor-pointer rounded-sm"
            whileHover={{ backgroundColor:'#898989' }}
            whileTap={{backgroundColor:'#787486'}}
            onClick={changeYear}
          >
            Yearly
          </motion.p>
        </div>
      </motion.div>

      <div className="hidden mmtablets:block">
        <Bar options={optionsDesktop} data={data} />
      </div>
      <div className="block mmtablets:hidden overflow-x-auto text-xxss">
        <Bar options={optionsMobile} data={data} />
      </div>
    </div>
  );
};

export default Charts;
