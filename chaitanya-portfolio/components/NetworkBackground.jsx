"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useTheme } from "next-themes";

export default function NetworkBackground() {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    d3.select(containerRef.current).selectAll("*").remove();

    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = d3
      .select(containerRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("position", "absolute")
      .style("top", 0)
      .style("left", 0)
      .style("pointer-events", "none");

    const numNodes = 70;
    const nodes = Array.from({ length: numNodes }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1.5,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
    }));

    const links = [];
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        if (Math.random() < 0.04) {
          links.push({ source: i, target: j });
        }
      }
    }

    const isDark = document.documentElement.classList.contains("dark");
    const lineColor = isDark ? "rgba(63, 63, 70, 0.4)" : "rgba(229, 231, 235, 0.8)";
    const dotColor = isDark ? "#3b82f6" : "#2563eb";

    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", lineColor)
      .attr("stroke-width", 1);

    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d) => d.radius)
      .attr("fill", dotColor)
      .attr("opacity", 0.6);

    const simulation = d3
      .forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-20))
      .force("link", d3.forceLink(links).distance(120))
      .force("collide", d3.forceCollide().radius((d) => d.radius + 10))
      .on("tick", () => {
        // Keep nodes within bounds
        nodes.forEach((d) => {
          if (d.x < 0 || d.x > width) d.vx *= -1;
          if (d.y < 0 || d.y > height) d.vy *= -1;
          d.x = Math.max(0, Math.min(width, d.x));
          d.y = Math.max(0, Math.min(height, d.y));
        });

        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      });

    const handleMouseMove = (e) => {
      nodes[0].fx = e.clientX;
      nodes[0].fy = e.clientY;
      simulation.alphaTarget(0.1).restart();
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      simulation.stop();
    };
  }, [theme]);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />;
}