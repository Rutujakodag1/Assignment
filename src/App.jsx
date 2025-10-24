import TabsWidget from "./components/TabsWidget";
import GalleryWidget from "./components/GalleryWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1f2b] to-[#111318] flex justify-center md:justify-end items-center px-4 md:px-12 py-8">
      {/* Left empty section */}
      <div className="hidden md:flex w-1/2"></div>

      {/* Right section — widgets container */}
      <div className="w-full md:w-[480px] flex flex-col items-center md:items-end space-y-6">
        <div className="w-full">
          <TabsWidget />
        </div>
        <div className="w-full h-[1.5px] bg-gradient-to-b from-[#2a2e3c] to-[#1b1f28] rounded-md shadow-inner border-t border-gray-500 border-b border-gray-800"></div>
        <div className="w-full">
          <GalleryWidget />
        </div>
        <div className="w-full h-[1.5px] bg-gradient-to-b from-[#2a2e3c] to-[#1b1f28] rounded-md shadow-inner border-t border-gray-500 border-b border-gray-800"></div>
      </div>
    </div>
  );
}
