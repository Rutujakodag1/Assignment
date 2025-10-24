import { useState } from "react";
import { HelpCircle } from "lucide-react";

const tabs = ["About Me", "Experiences", "Recommended"];

export default function TabsWidget() {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabContent = {
    "About Me": `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
    I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters — Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM.`,
    Experiences: `I have over 10 years of experience in enterprise SaaS sales, collaborating with global teams and consistently exceeding revenue targets.`,
    Recommended: `Dave is known for his empathy-driven communication and problem-solving approach, making him a highly recommended client partner.`,
  };

  return (
    <div className="relative bg-[#2b2e36]/80 backdrop-blur-xl rounded-3xl w-full min-h-[260px] px-10 pt-4 pb-5
 shadow-[0_8px_25px_rgba(0,0,0,0.45)] border border-white/10 transition-all duration-500">
      {/* Help icon (top-left like Figma) */}
      <div className="absolute left-2 top-5">
        <HelpCircle className="w-5 h-5 text-gray-400/70" />
      </div>

      {/* Side grid icon */}
      <div className="absolute left-2 top-32 flex flex-col gap-[2px]">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex gap-[2px]">
            {[0, 1].map((col) => (
              <div key={col} className="w-[6px] h-[6px] bg-gray-400/50"></div>
            ))}
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex mb-4 bg-gradient-to-b from-[#1b1f2b]/90 to-[#111318]/90 rounded-2xl p-2 px-3 relative overflow-hidden gap-x-3 shadow-[inset_0_1px_3px_rgba(255,255,255,0.08),0_6px_12px_-3px_rgba(0,0,0,0.6)] transition-all duration-200 hover:from-[#1e2230]/90 hover:to-[#14151b]/90">
        {/* Active tab background slider */}
        <div
          className="absolute top-[8px] bottom-[8px] bg-[#2e323a] rounded-xl shadow-[0_3px_8px_rgba(0,0,0,0.5),inset_0_2px_6px_rgba(255,255,255,0.08)] transition-all duration-500 ease-in-out"
          style={{
            left: `calc(${tabs.indexOf(activeTab) * (100 / tabs.length)}% + 0.5rem)`,
            width: `calc(${100 / tabs.length}% - 1rem)`,
          }}
        />

        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget
                    .querySelector(".hover-bg")
                    .classList.add("animate-slide-right");
                  e.currentTarget
                    .querySelector(".hover-bg")
                    .classList.remove("animate-slide-left");
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget
                    .querySelector(".hover-bg")
                    .classList.add("animate-slide-left");
                  e.currentTarget
                    .querySelector(".hover-bg")
                    .classList.remove("animate-slide-right");
                }
              }}
              onClick={() => setActiveTab(tab)}
              className={`relative flex-1 py-[4px] z-10 text-[15px] font-semibold tracking-wide overflow-hidden 
        transition-all duration-300 ease-in-out rounded-lg
        ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {/* Hover animation background */}
              {!isActive && (
                <span
                  className="hover-bg absolute inset-0 bg-gradient-to-r 
            from-[#9ca3af]/10 via-[#6b7280]/25 to-[#3a3f46]/70
            opacity-0 transition-opacity duration-300 ease-in-out rounded-lg"
                ></span>
              )}

              <span className="relative z-10">{tab}</span>
            </button>
          );
        })}
      </div>

      <style>
        {`
          @keyframes slideRight {
            0% { transform: translateX(-100%); opacity: 0.25; }
            100% { transform: translateX(0%); opacity: 0.5; }
          }

          @keyframes slideLeft {
            0% { transform: translateX(0%); opacity: 0.5; }
            100% { transform: translateX(-100%); opacity: 0.25; }
          }

          .animate-slide-right {
            animation: slideRight 0.4s ease-in-out forwards;
          }

          .animate-slide-left {
            animation: slideLeft 0.4s ease-in-out forwards;
          }
        `}
      </style>

      {/* Content area */}
      <div
  key={activeTab}
  className="text-gray-300/90 text-[15px] leading-relaxed max-h-[150px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600/30 scrollbar-track-transparent pr-2 transition-opacity duration-300 ease-in-out"
>
  {tabContent[activeTab]}
</div>

    </div>
  );
}
