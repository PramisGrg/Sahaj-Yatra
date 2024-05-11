"use client";
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { axiosAuthInstance } from "@/services/axios";

const PieChartPage = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [credit, setCredit] = useState("");
  const [debit, setDebit] = useState("");

  useEffect(() => {
    const getPieChartData = async () => {
      try {
        const response = await axiosAuthInstance.get("/dashboard/user");
        const amount = response?.data?.data;
        console.log(amount);
        setCredit(amount?.creditAmount);
        setDebit(amount?.debitAmount);
      } catch (error) {
        console.log(error);
      }
    };
    getPieChartData();
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create new chart instance
    const newChartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["credit", "debit"],
        datasets: [
          {
            label: "My First Dataset",
            data: [60, 40],
            backgroundColor: [
              "#4ba3c3", //credit
              "#df7373", //Debit
            ],
            borderColor: ["#e8edf0"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: true,
      },
    });

    setChartInstance(newChartInstance);

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="space-y-10">
      <h1 className="text-3xl">Credit Vs Debit : </h1>
      <canvas ref={chartRef} height={400} width={400} />
    </div>
  );
};

export default PieChartPage;
