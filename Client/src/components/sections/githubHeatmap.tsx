import React from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GithubHeatmapProps {
  data: ContributionDay[];
}

// Now accepts 'data' as a prop
export const GithubHeatmap = ({ data }: GithubHeatmapProps) => {
  // Color mapping based on contribution level
  const getLevelColor = (level: number): string => {
    switch (level) {
      case 0:
        return "bg-neutral-800";
      case 1:
        return "bg-green-900/60";
      case 2:
        return "bg-green-700";
      case 3:
        return "bg-green-500";
      case 4:
        return "bg-green-300";
      default:
        return "bg-neutral-800";
    }
  };

  // If no data yet, show skeleton
  if (!data || data.length === 0) {
    return (
      <div className="flex gap-1 overflow-hidden opacity-50 animate-pulse">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex flex-col gap-1">
            {[...Array(7)].map((_, j) => (
              <div key={j} className="w-2 h-2 rounded-sm bg-neutral-800"></div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  // Helper to chunk days into weeks for the grid
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }
  // Show last ~24 weeks to fit layout
  const visibleWeeks = weeks.slice(-24);

  return (
    <div className="flex gap-1 overflow-hidden">
      {visibleWeeks.map((week, i) => (
        <div key={i} className="flex flex-col gap-1">
          {week.map((day, j) => (
            <div
              key={j}
              title={`${day.date}: ${day.count} contributions`}
              className={`w-2 h-2 rounded-sm ${getLevelColor(day.level)}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
