"use client";
import { Timeline } from "@/components/timeline";
import React from "react";
import { projects } from "./data";

export function TimelineDemo() {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline projects={projects} />
    </div>
  );
}
