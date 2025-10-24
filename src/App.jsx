import TabsWidget from "./components/TabsWidget";
import GalleryWidget from "./components/GalleryWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1f2b] to-[#111318] flex justify-center md:justify-end items-center px-6 md:px-16 py-10">
      <div className="hidden md:flex w-1/2"></div>

      {/* Right section — widgets container */}
      <div className="w-full md:w-[480px] flex flex-col gap-4 md:mr-12">
        <TabsWidget />
        <div className="w-[85%] h-1 bg-gradient-to-b from-[#2a2e3c] to-[#1b1f28] rounded-md shadow-inner border-t-[2px] border-gray-500 border-b-[2px] border-gray-800 mx-auto"></div>
        <GalleryWidget />
        <div className="w-[85%] h-1 bg-gradient-to-b from-[#2a2e3c] to-[#1b1f28] rounded-md shadow-inner border-t-[2px] border-gray-500 border-b-[2px] border-gray-800 mx-auto"></div>
      </div>
    </div>
  );
}
