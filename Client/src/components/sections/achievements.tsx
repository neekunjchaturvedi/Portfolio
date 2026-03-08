import { useState, useRef, useCallback, useEffect } from "react";
import {
  Trophy,
  Flame,
  GitCommit,
  Calendar as CalIcon,
  Clock,
  Star,
  Code,
  Zap,
  Hash,
} from "lucide-react";
import { GithubHeatmap } from "./githubHeatmap";

import devfolio from "@/assets/devfolio.png";
import ethglobal from "@/assets/ethglobal.jpeg";
import expo from "@/assets/expo.png";
import hacktober from "@/assets/hacktober2025.png";
import node from "@/assets/node.png";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

// --- ACHIEVEMENTS COMPONENT ---
export const Achievements = () => {
  const [contributionData, setContributionData] = useState<ContributionDay[]>(
    [],
  );
  const [loading, setLoading] = useState(true);

  // Dynamic Stats State
  const [totalCommits, setTotalCommits] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [bestMonth, setBestMonth] = useState("-");
  const [bestDay, setBestDay] = useState("-");

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // Fetch data for the last year
        const res = await fetch(
          "https://github-contributions-api.jogruber.de/v4/neekunjchaturvedi?y=last",
        );
        const json = await res.json();
        const days = json.contributions;

        // 1. Set Heatmap Data
        setContributionData(days);

        // 2. Calculate Total Commits
        const total = days.reduce(
          (sum: number, day: ContributionDay) => sum + day.count,
          0,
        );
        setTotalCommits(total);

        // 3. Calculate Longest Streak
        let currentStreak = 0;
        let longest = 0;
        days.forEach((day: ContributionDay) => {
          if (day.count > 0) {
            currentStreak++;
          } else {
            if (currentStreak > longest) longest = currentStreak;
            currentStreak = 0;
          }
        });
        // Check if the streak ended on the last day
        if (currentStreak > longest) longest = currentStreak;
        setMaxStreak(longest);

        // 4. Calculate Best Month & Day
        const monthCounts: Record<string, number> = {};
        const dayCounts: Record<string, number> = {};
        const monthNames = [
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
        const dayNames = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];

        days.forEach((day: ContributionDay) => {
          if (day.count > 0) {
            const date = new Date(day.date);
            const month = monthNames[date.getMonth()];
            const dayName = dayNames[date.getDay()];

            monthCounts[month] = (monthCounts[month] || 0) + day.count;
            dayCounts[dayName] = (dayCounts[dayName] || 0) + day.count;
          }
        });

        // Find max key in objects
        const getTopKey = (obj: Record<string, number>): string =>
          Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b), "-");

        setBestMonth(getTopKey(monthCounts));
        setBestDay(getTopKey(dayCounts));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const stats = [
    {
      label: "Longest Streak",
      value: loading ? "..." : `${maxStreak} Days`,
      icon: <Flame size={16} />,
      color: "text-orange-500",
    },
    {
      label: "Total Commits",
      value: loading ? "..." : totalCommits.toLocaleString(),
      icon: <GitCommit size={16} />,
      color: "text-pink-500",
    },

    {
      label: "Most Active Day",
      value: loading ? "..." : bestDay,
      icon: <Clock size={16} />,
      color: "text-blue-500",
    },
    {
      label: "Total Stars",
      value: "8",
      icon: <Star size={16} />,
      color: "text-yellow-300",
    },
    {
      label: "Top Language",
      value: "TypeScript",
      icon: <Code size={16} />,
      color: "text-blue-400",
    },
    {
      label: "Power Level",
      value: "Elite Class",
      icon: <Zap size={16} />,
      color: "text-green-400",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
        <span className="w-2 h-2 bg-pink-500 rounded-full"></span> Latest Code
        Wrap
      </h2>

      {/* Contribution Graph Visual */}
      <div className="mb-4 p-4 border border-neutral-800 bg-neutral-900/30 rounded-xl">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs text-neutral-500 font-mono">
            @neekunjchaturvedi
          </span>
          <span className="text-xs text-green-400 font-bold animate-in fade-in">
            {loading ? "Loading..." : `${totalCommits} Contributions`}
          </span>
        </div>
        {/* Pass the fetched data down */}
        <GithubHeatmap data={contributionData} />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-3 bg-neutral-900/20 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
          >
            <div className={`mb-2 ${stat.color}`}>{stat.icon}</div>
            <div className="text-xl font-bold text-neutral-200">
              {stat.value}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- STICKER BOARD COMPONENT ---
interface Sticker {
  src: string;
  rot: string;
  top: string;
  left: string;
  link?: string;
}

const initialStickers: Sticker[] = [
  // Original stickers
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    rot: "rotate-6",
    top: "5%",
    left: "5%",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png",
    rot: "rotate-45",
    top: "5%",
    left: "80%",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    rot: "-rotate-3",
    top: "65%",
    left: "80%",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    rot: "rotate-12",
    top: "35%",
    left: "90%",
  },
  // Imported stickers
  {
    src: devfolio,
    rot: "-rotate-6",
    top: "10%",
    left: "25%",
    link: "https://devfolio.co/@neekunj",
  },
  {
    src: ethglobal,
    rot: "rotate-3",
    top: "55%",
    left: "10%",
  },
  {
    src: expo,
    rot: "rotate-8",
    top: "5%",
    left: "50%",
  },
  {
    src: hacktober,
    rot: "-rotate-4",
    top: "50%",
    left: "50%",
    link: "https://www.holopin.io/hacktoberfest2025/userbadge/cmgdrdeqr003al8040cc4yitj",
  },
  {
    src: node,
    rot: "rotate-6",
    top: "30%",
    left: "65%",
  },
  // GitHub sticker
  {
    src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    rot: "-rotate-12",
    top: "50%",
    left: "30%",
    link: "https://github.com/neekunjchaturvedi",
  },
];

export const StickerBoard = () => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>(
    initialStickers.map((s) => ({ top: s.top, left: s.left })),
  );
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef<{ x: number; y: number } | null>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent | React.TouchEvent, idx: number) => {
      e.preventDefault();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      dragStartPos.current = { x: clientX, y: clientY };
      setDraggingIndex(idx);
      setIsDragging(false);
    },
    [],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (draggingIndex === null || !boardRef.current) return;

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      // Check if we've moved enough to consider it a drag
      if (dragStartPos.current) {
        const dx = Math.abs(clientX - dragStartPos.current.x);
        const dy = Math.abs(clientY - dragStartPos.current.y);
        if (dx > 5 || dy > 5) {
          setIsDragging(true);
        }
      }

      const rect = boardRef.current.getBoundingClientRect();
      const x = clientX - rect.left - 32; // 32 = half of sticker width (64/2)
      const y = clientY - rect.top - 32;

      // Clamp to board bounds
      const clampedX = Math.max(0, Math.min(x, rect.width - 64));
      const clampedY = Math.max(0, Math.min(y, rect.height - 64));

      // Convert to percentage
      const leftPercent = (clampedX / rect.width) * 100;
      const topPercent = (clampedY / rect.height) * 100;

      setPositions((prev) => {
        const newPositions = [...prev];
        newPositions[draggingIndex] = {
          top: `${topPercent}%`,
          left: `${leftPercent}%`,
        };
        return newPositions;
      });
    },
    [draggingIndex],
  );

  const handleMouseUp = useCallback(() => {
    setDraggingIndex(null);
    dragStartPos.current = null;
    // Reset isDragging after a small delay to allow click handler to check it
    setTimeout(() => setIsDragging(false), 100);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent, link?: string) => {
      if (isDragging || !link) {
        e.preventDefault();
        return;
      }
      window.open(link, "_blank", "noopener,noreferrer");
    },
    [isDragging],
  );

  return (
    <div className="mt-12">
      <div
        ref={boardRef}
        className="relative w-full h-64 bg-gray-900 rounded-xl border-4 border-neutral-800 shadow-2xl overflow-hidden group select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Apple Logo Placeholder (Optional) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <div className="w-18 h-18 bg-white rounded-full blur-xl"></div>
        </div>

        {/* Stickers */}
        {initialStickers.map((sticker, idx) => (
          <div
            key={idx}
            className={`absolute w-16 h-16 transition-transform ${
              draggingIndex === idx ? "scale-110 z-50" : "hover:scale-110"
            } cursor-grab active:cursor-grabbing drop-shadow-xl filter brightness-90 hover:brightness-100 ${sticker.rot}`}
            style={{
              top: positions[idx].top,
              left: positions[idx].left,
              zIndex: draggingIndex === idx ? 50 : 1,
            }}
            onMouseDown={(e) => handleMouseDown(e, idx)}
            onTouchStart={(e) => handleMouseDown(e, idx)}
            onClick={(e) => handleClick(e, sticker.link)}
          >
            <img
              src={sticker.src}
              alt="sticker"
              className="w-full h-full object-contain pointer-events-none"
              draggable={false}
            />
            {sticker.link && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center opacity-60">
                <span className="text-[8px] text-white">↗</span>
              </div>
            )}
          </div>
        ))}

        <div className="absolute bottom-2 left-2 text-[10px] text-neutral-600 font-mono pointer-events-none">
          drag to rearrange
        </div>
      </div>
    </div>
  );
};
