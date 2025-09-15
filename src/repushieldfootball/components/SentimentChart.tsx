"use client";

import { useEffect, useRef } from 'react';

export default function SentimentChart() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 40; // ~4s total
    const interval = setInterval(() => {
      const Highcharts = typeof window !== 'undefined' ? window.Highcharts : null;
      if (Highcharts && containerRef.current) {
        Highcharts.chart(containerRef.current, {
          chart: { type: 'area', height: 250, backgroundColor: 'transparent' },
          credits: { enabled: false },
          title: { text: null },
          xAxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            gridLineWidth: 0,
            lineWidth: 0,
            tickWidth: 0,
          },
          yAxis: {
            title: { text: null },
            gridLineWidth: 1,
            gridLineColor: '#f3f4f6',
          },
          legend: { enabled: false },
          plotOptions: {
            area: { stacking: 'percent', marker: { enabled: false } },
          },
          series: [
            { name: 'Positive', data: [45, 48, 42, 55, 51, 49, 53], color: '#10b981' },
            { name: 'Neutral', data: [35, 32, 38, 30, 33, 35, 32], color: '#f59e0b' },
            { name: 'Negative', data: [20, 20, 20, 15, 16, 16, 15], color: '#ef4444' },
          ],
        });
        clearInterval(interval);
      } else if (++attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="h-64" />;
}
