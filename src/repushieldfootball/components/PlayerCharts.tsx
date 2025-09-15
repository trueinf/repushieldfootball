"use client";

import { useEffect } from "react";

export default function PlayerCharts() {
  useEffect(() => {
    let tries = 0;
    const max = 50;
    const t = setInterval(() => {
      const Highcharts = typeof window !== "undefined" ? window.Highcharts : null;
      if (!Highcharts) {
        if (++tries >= max) clearInterval(t);
        return;
      }

      // Sentiment Trend Chart
      Highcharts.chart("sentiment-trend-chart", {
        chart: { type: "line", backgroundColor: "transparent" },
        credits: { enabled: false },
        title: { text: null },
        xAxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
        yAxis: { title: { text: "Posts" } },
        series: [
          { name: "Positive", data: [12, 15, 18, 14, 16, 20, 22], color: "#10B981" },
          { name: "Neutral", data: [8, 10, 12, 9, 11, 14, 16], color: "#F59E0B" },
          { name: "Negative", data: [5, 8, 6, 12, 9, 7, 10], color: "#EF4444" },
        ],
      });

      // Sentiment Donut
      Highcharts.chart("sentiment-donut-chart", {
        chart: { type: "pie", backgroundColor: "transparent" },
        credits: { enabled: false },
        title: { text: null },
        plotOptions: {
          pie: {
            innerSize: "50%",
            dataLabels: { enabled: true, format: "{point.name}: {point.percentage:.1f}%" },
          },
        },
        series: [
          {
            data: [
              { name: "Positive", y: 58, color: "#10B981" },
              { name: "Neutral", y: 27, color: "#F59E0B" },
              { name: "Negative", y: 15, color: "#EF4444" },
            ],
          },
        ],
      });

      // Abusive Timeline
      Highcharts.chart("abusive-timeline-chart", {
        chart: { type: "column", backgroundColor: "transparent" },
        credits: { enabled: false },
        title: { text: null },
        xAxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
        plotOptions: { column: { stacking: "normal" } },
        series: [
          { name: "Personal Attack", data: [2, 3, 1, 4, 2, 1, 3], color: "#F59E0B" },
          { name: "Identity Attack", data: [1, 2, 2, 1, 3, 2, 1], color: "#EF4444" },
          { name: "Threats", data: [0, 1, 0, 2, 1, 0, 1], color: "#DC2626" },
        ],
      });

      // Platform Chart
      Highcharts.chart("platform-chart", {
        chart: { type: "bar", backgroundColor: "transparent" },
        credits: { enabled: false },
        title: { text: null },
        xAxis: { categories: ["Twitter", "Instagram", "Facebook", "TikTok", "YouTube"] },
        series: [{ name: "Abusive Posts", data: [12, 8, 6, 4, 2], color: "#EF4444" }],
      });

      // Abuse Types Chart
      Highcharts.chart("abuse-types-chart", {
        chart: { type: "bar", backgroundColor: "transparent" },
        credits: { enabled: false },
        title: { text: null },
        xAxis: { categories: ["Personal Attack", "Identity Attack", "Threats"] },
        plotOptions: { bar: { stacking: "normal" } },
        series: [{ name: "Count", data: [15, 8, 5], color: "#EF4444" }],
      });

      // Post Types Chart
      Highcharts.chart("post-types-chart", {
        chart: { type: "pie", backgroundColor: "transparent" },
        credits: { enabled: false },
        title: { text: null },
        series: [
          {
            data: [
              { name: "Text", y: 65, color: "#3B82F6" },
              { name: "Image", y: 20, color: "#10B981" },
              { name: "Video", y: 10, color: "#F59E0B" },
              { name: "Comment", y: 5, color: "#8B5CF6" },
            ],
          },
        ],
      });

      // Geo Heatmap
      Highcharts.chart("geo-heatmap-chart", {
        chart: { type: "heatmap", backgroundColor: "transparent" },
        credits: { enabled: false },
        title: { text: null },
        xAxis: { categories: ["UK", "US", "DE", "FR", "ES"] },
        yAxis: { categories: ["Abusive Posts"], title: null },
        colorAxis: { min: 0, minColor: "#FFFFFF", maxColor: "#EF4444" },
        series: [
          {
            borderWidth: 1,
            data: [
              [0, 0, 25],
              [1, 0, 30],
              [2, 0, 12],
              [3, 0, 18],
              [4, 0, 10],
            ],
            dataLabels: { enabled: true, color: "#000" },
          },
        ],
      });

      clearInterval(t);
    }, 100);

    return () => clearInterval(t);
  }, []);

  return null;
}
