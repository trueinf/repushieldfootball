"use client";

import { useEffect, useRef } from "react";

export default function SeverityChart() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 40;
    const interval = setInterval(() => {
      const Highcharts = typeof window !== "undefined" ? window.Highcharts : null;
      if (Highcharts && ref.current) {
        Highcharts.chart(ref.current, {
          chart: { type: "column", backgroundColor: "transparent", height: 180 },
          title: { text: null },
          credits: { enabled: false },
          xAxis: { categories: ["Critical", "High", "Medium", "Low"], lineWidth: 0 },
          yAxis: { title: { text: null }, gridLineColor: "#f3f4f6" },
          legend: { enabled: false },
          series: [
            {
              name: "Items",
              data: [24, 12, 7, 4],
              color: "#ef4444",
            },
          ],
        });
        clearInterval(interval);
      } else if (++attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <div ref={ref} className="h-48" />;
}
