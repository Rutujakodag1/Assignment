import TabsWidget from "./components/TabsWidget";
import GalleryWidget from "./components/GalleryWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1f2b] to-[#111318] flex">
      {/* Left half empty (hidden on mobile) */}
      <div className="hidden md:block md:w-1/2"></div>

      {/* Right half — widgets container */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end px-4 md:px-12 py-8 space-y-6">
        <div className="w-full max-w-[550px]">
          <TabsWidget />
        </div>

        <div className="w-[75%] h-[1.5px] mx-auto bg-gradient-to-b from-[#2a2e3c] to-[#1b1f28] rounded-md shadow-inner border-t border-gray-500 border-b border-gray-800"></div>

        <div className="w-full max-w-[550px]">
          <GalleryWidget />
        </div>

        <div className="w-[75%]  mx-auto h-[1.5px] bg-gradient-to-b from-[#2a2e3c] to-[#1b1f28] rounded-md shadow-inner border-t border-gray-500 border-b border-gray-800"></div>
      </div>
    </div>
  );
}
