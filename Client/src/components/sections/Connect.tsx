import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Calendar,
  ArrowUpRight,
  Twitter,
  X,
  Clock,
} from "lucide-react";

import game from "@/assets/game.gif";

declare global {
  interface Window {
    Cal: any;
  }
}

const ConnectWidgets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize Cal.com embed script
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize 15min namespace
    Cal("init", "15min", { origin: "https://app.cal.com" });
    Cal.ns["15min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });

    // Initialize 30min namespace
    Cal("init", "30min", { origin: "https://app.cal.com" });
    Cal.ns["30min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  const links = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      label: "Check my code",
      url: "https://github.com/neekunjchaturvedi",
      color:
        "hover:border-neutral-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
      isAction: false,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      label: "Let's connect",
      url: "https://linkedin.com/in/neekunj-chaturvedi",
      color:
        "hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:text-blue-400",
      isAction: false,
    },
    {
      name: "X/Twitter",
      icon: <Twitter size={24} />,
      label: "Let's tweet",
      url: "https://x.com/neekunj_ch",
      color:
        "hover:border-gray-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:text-white",
      isAction: false,
    },
    {
      name: "Cal.com",
      icon: <Calendar size={24} />,
      label: "Lets Talk Tech",
      url: "#", // Prevent default navigation
      color: "hover:border-white hover:bg-neutral-100 hover:text-black",
      isAction: true, // Marker to trigger modal
    },
  ];

  const handleLinkClick = (e, link) => {
    if (link.isAction) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section className="w-full max-w-2xl mx-auto relative z-10">
        <h3 className="text-sm font-mono text-neutral-500 mb-4 uppercase tracking-wider">
          Connect
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.isAction ? "_self" : "_blank"}
              rel="noopener noreferrer"
              onClick={(e) => handleLinkClick(e, link)}
              className={`
                group flex flex-col justify-between p-4 h-32
                bg-neutral-900/50 border border-neutral-800 rounded-xl
                transition-all duration-300 ${link.color} cursor-pointer
              `}
            >
              <div className="flex justify-between items-start">
                <span className="text-neutral-400 group-hover:text-inherit transition-colors">
                  {link.icon}
                </span>
                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div>
                <span className="block font-bold text-lg">{link.name}</span>
                <span className="text-xs text-neutral-500 group-hover:text-inherit/70">
                  {link.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        <img src={game} />
      </section>

      {/* MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-sm bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-2">
                Schedule a Meeting
              </h2>
              <p className="text-sm text-neutral-400">
                Choose a duration for our chat.
              </p>
            </div>

            <div className="space-y-3">
              {/* 15 Minute Option */}
              <button
                data-cal-namespace="15min"
                data-cal-link="neekunj-chaturvedi-jn7voh/15min"
                data-cal-config='{"layout":"month_view"}'
                onClick={() => setIsModalOpen(false)}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 hover:border-neutral-600 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Clock size={20} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">15 Minutes</div>
                    <div className="text-xs text-neutral-500">
                      Quick sync / Intro
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-neutral-600 group-hover:text-white"
                />
              </button>

              {/* 30 Minute Option */}
              <button
                data-cal-namespace="30min"
                data-cal-link="neekunj-chaturvedi-jn7voh/30min"
                data-cal-config='{"layout":"month_view"}'
                onClick={() => setIsModalOpen(false)}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 hover:border-neutral-600 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <Clock size={20} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white">30 Minutes</div>
                    <div className="text-xs text-neutral-500">
                      Deep dive / Lets Talk Tech
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-neutral-600 group-hover:text-white"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectWidgets;
