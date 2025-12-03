import React, { useEffect, useState } from "react";

// --- The Updated Loading Screen Component ---

interface LoadingScreenProps {
  onComplete: () => void;
}

const EMOJIS = ["🛠️", "🧱", "🔨", "🔧", "🏗️"];

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [text, setText] = useState("");
  const fullText = "Building Systems...";
  const [showEmojis, setShowEmojis] = useState(false);

  useEffect(() => {
    // Trigger the "Pop up" animation shortly after mount
    setTimeout(() => setShowEmojis(true), 100);

    // Typewriter effect logic
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        // Wait a bit after typing finishes, then complete
        setTimeout(() => {
          onComplete();
        }, 0);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-800 flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* CSS Styles for custom orbit animations */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .orbit-container {
          animation: orbit 8s linear infinite;
        }
        .orbit-item {
          animation: counter-orbit 8s linear infinite;
        }
        .rocket-orbit {
          animation: orbit 3s linear infinite;
        }
        .rocket-item {
          animation: counter-orbit 3s linear infinite;
        }
      `}</style>

      <div className="relative w-64 h-64 flex items-center justify-center mb-8">
        {/* Central Gear */}
        <div
          className={`text-6xl transition-all duration-700 ease-out transform ${
            showEmojis ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <div className="animate-spin" style={{ animationDuration: "3s" }}>
            ⚙️
          </div>
        </div>

        {/* Orbiting Tools Ring */}
        <div className="absolute inset-0 orbit-container pointer-events-none">
          {EMOJIS.map((emoji, i) => {
            const angle = (i / EMOJIS.length) * 360;
            const radius = 80; // Distance from center
            // Calculate absolute position on the circle (simple CSS trig approximation via rotation wrapper could work, but absolute positioning is cleaner here)
            // We use transform in the style to place them, then the parent rotates

            return (
              <div
                key={i}
                className={`absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5 flex items-center justify-center text-3xl transition-all duration-500`}
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                  transitionDelay: `${i * 100}ms`,
                  opacity: showEmojis ? 1 : 0,
                  scale: showEmojis ? 1 : 0,
                }}
              >
                {/* The inner item counter-rotates via CSS class to stay upright */}
                <div className="orbit-item">{emoji}</div>
              </div>
            );
          })}
        </div>

        {/* The Rocket on a wider, faster orbit */}
        <div className="absolute inset-[-40px] rocket-orbit pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 transition-opacity duration-1000"
            style={{
              transform: `translateX(120px)`, // Wider radius
              opacity: showEmojis ? 1 : 0,
            }}
          >
            {/* Rocket needs to rotate to face direction of travel, not stay upright */}
            {/* <div className="transform rotate-90 text-4xl">🚀</div> */}
          </div>
        </div>
      </div>

      {/* Typewriter Text */}
      <div className="h-8 text-2xl font-mono font-bold text-gray-700 tracking-wider">
        {text}
        <span className="animate-pulse ml-1 text-blue-500">|</span>
      </div>

      {/* Subtle Loading Bar */}
      <div className="mt-6 w-[200px] h-[4px] bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-gray-500 animate-loading-bar w-full origin-left animate-[grow_2.5s_ease-in-out]"></div>
      </div>

      <div className="mt-2 text-xs text-gray-400 font-mono">
        INITIALIZING WORKSPACE
      </div>
    </div>
  );
};
