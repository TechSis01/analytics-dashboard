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
import { faker } from "@faker-js/faker";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRef,useEffect } from "react"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

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
        display: false, // Disable grid lines for x-axis
      },
    },
  },
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
const rawValues = labels.map(() => faker.number.int({ min: 0, max: 50000 }));
export const data = {
  labels,
  datasets: [
    {
      label: "sales",
      data: [7000, 18000, 3000, 28000, 8000, 43000, 8000, 20000, 35000, 5000, 30000, 33000],
      backgroundColor: "#34CAA540",
      hoverBackgroundColor: "#34CAA5", // Darker shade on hover
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

const dataWithDollarSign = {
  ...data,
  datasets: [
    {
      ...data.datasets[0],
      data: data.datasets[0].data.map(value => `$${value}`),
    },
  ],
};

const Charts = () => {


  return (
    <div className="bg-white dark:bg-coolors-gray p-5 m-3 rounded-md col-span-2 ">
      <div className="flex justify-between">
        <p className="font-semibold">Sales Trends</p>
        <div className="flex items-center gap-3">
          <p>Sort by:</p>
          <div className="flex items-center border border-gray-200 rounded-full p-1">
            <p className="text-xxss"> Weekly </p>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <div className="hidden tablets:block">
        <Bar  options={optionsDesktop} data={data} />
      </div>
      <div className="block tablets:hidden overflow-x-auto">
        <Bar   options={optionsMobile} data={data} />
      </div>
    </div>
  );
};

export default Charts;
