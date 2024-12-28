import React, { PureComponent } from "react";
import "./style.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  LabelList, // Import ReferenceLine
} from "recharts";

function summarizeName(name) {
  if (!name) return ""; // Trả về chuỗi rỗng nếu không có tên
  return name
    .split(" ") // Tách chuỗi thành mảng các từ
    .map((word) => word[0].toUpperCase()) // Lấy chữ cái đầu tiên và viết hoa
    .join(""); // Nối tất cả các chữ cái lại thành chuỗi
}
export const LineChart = ({ data }) => {
  console.log("check data ", JSON.stringify(data, null, 2));
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      console.log("payload ", payload);
      return (
        <div
          style={{
            background: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p
            style={{ fontSize: "14px", fontWeight: "bold", color: "#393E40" }}
          >{`Kỹ thuật: ${label}`}</p>
          <hr style={{ padding: "10px" }}></hr>
          <p style={{ color: "#1b3fe4" }}>Số lần dùng : {payload[0].value}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <ResponsiveContainer
      className={
        "rounded-xl border border-[#09379447] p-2 bg-[linear-gradient(45deg,_#09379447_28%,_#09379447_28%,_#09379447_28%)]"
      }
      width="100%"
      height="100%"
    >
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        className="pr-4"
      >
        <XAxis
          dataKey="Technique"
          axisLine={{ stroke: "#61B8FF33", strokeWidth: 1 }}
          stroke="#FFFFFF"
          tickFormatter={(value) => `${summarizeName(value)}`}
        />
        <YAxis orientation="left" axisLine={{ stroke: "" }} stroke="#FFFFFF" />
        <Tooltip content={<CustomTooltip />} />

        {/* Định nghĩa gradient */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#61B8FF33" stopOpacity={1} />
            <stop offset="100%" stopColor="#61B8FF00" stopOpacity={1} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="count"
          stroke="#2187E5"
          fill="url(#gradient1)"
          dot={{ stroke: "white", strokeWidth: 2, fill: "white" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
