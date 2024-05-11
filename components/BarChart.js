"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { axiosAuthInstance } from "@/services/axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChartPage = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  let [daily_Revenue, set_dailyRevenue] = useState(0);
  let [monthly_Revenue, set_monthlyRevenue] = useState(0);
  let [yearly_Revenue, set_yearlyRevenue] = useState(0);
  let [bus_no, set_bus_no] = useState(0);

  const [chartOptions, setChartOptions] = useState({});
  const [selectedOption, setSelectedOption] = useState("daily");

  useEffect(() => {
    fetchData(selectedOption);
  }, [selectedOption]);
  const fetchData = async () => {
    try {
      const response = await axiosAuthInstance.get("/dashboard/busowner");
      console.log(response);
      set_dailyRevenue(response?.data?.data?.totalDailySale);
      set_monthlyRevenue(response?.data?.data?.totalYearlySale);
      set_yearlyRevenue(response?.data?.data?.totalYearlySale);
      const graphData = response?.data?.data?.graphData;
      set_bus_no(graphData.length);
      const label = graphData.map((bus) => bus.busName);
      const salesData = graphData.map((bus) => bus.sale[selectedOption]);
      console.warn();

      setChartData({
        labels: label, // Use data.labels directly
        datasets: [
          {
            label: "Income Npr",
            data: salesData, // Use data.data directly
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgb(53, 162, 235, 0.4)",
          },
        ],
      });

      setChartOptions({
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text:
              selectedOption === "daily"
                ? "Daily Revenue"
                : selectedOption === "monthly"
                ? "Monthly Revenue"
                : "Yearly Revenue",
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="topBar">
        <div className="grid lg:grid-cols-5 gap-4 p-4">
          <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold">NPR, {daily_Revenue}</p>
              <p className="text-gray-600">Daily Revenue</p>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold">NPR,{yearly_Revenue}</p>
              <p className="text-gray-600">YTD Revenue</p>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold">NPR, {monthly_Revenue}</p>
              <p className="text-gray-600">Monthly Revenue</p>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold">{bus_no}</p>
              <p className="text-gray-600">Total Bus</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto border rounded-lg bg-white ml-4"
        style={{ maxWidth: "70%", marginLeft: "5%", marginRight: "auto" }}
      >
        <div className="absolute top-4 right-4 z-10">
          <select
            value={selectedOption}
            onChange={(e) => handleOptionChange(e.target.value)}
            className="px-3 py-1 bg-white border rounded-md shadow"
          >
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChartPage;
