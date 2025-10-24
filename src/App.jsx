import TabsWidget from "./components/TabsWidget";
import GalleryWidget from "./components/GalleryWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1f2b] to-[#111318] flex justify-center md:justify-end items-center px-6 md:px-16 py-10">
      
      {/* Left section (empty for laptop, image optional) */}
      <div className="hidden md:flex w-1/2 justify-center items-center">
        <img
          src="/img.png"
          alt="Left Side"
          className="w-[90%] h-auto object-contain opacity-70"
        />
      </div>

      {/* Right section — widgets container */}
      <div className="w-full md:w-[480px] flex flex-col gap-8 md:mr-12">
        <TabsWidget />
        <GalleryWidget />
      </div>
    </div>
  );
}
