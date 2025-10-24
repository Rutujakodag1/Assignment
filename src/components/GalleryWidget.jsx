import { useState } from "react";
import { Grid, ArrowLeft, ArrowRight, Plus, HelpCircle } from "lucide-react";
import { useRef } from "react";

export default function GalleryWidget() {
  const [images, setImages] = useState([
    "https://picsum.photos/200/200?1",
    "https://picsum.photos/200/200?2",
    "https://picsum.photos/200/200?3",
  ]);

  const scrollRef = useRef(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Handle adding user-uploaded images
  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file); // Convert image file to local preview URL
      setImages([...images, url]);
    }
  };

  return (
    <div className="relative bg-[#2b2e36]/80 backdrop-blur-xl rounded-3xl w-full min-h-[220px] transition-all duration-500 pt-3 pl-10 pr-10 shadow-[0_8px_25px_rgba(0,0,0,0.45)] border border-white/10">
      {/* Left Help Icon */}
      <div className="absolute left-2 top-5">
        <HelpCircle className="w-5 h-5 text-gray-400/70" />
      </div>

      {/* Side Grid Dots */}
      <div className="absolute left-3 top-28 flex flex-col gap-[2px]">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex gap-[2px]">
            {[0, 1].map((col) => (
              <div key={col} className="w-[6px] h-[6px] bg-gray-400/50"></div>
            ))}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold text-sm bg-gradient-to-b from-[#1b1f2b] to-[#111318] py-2 px-5 rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] transition-all duration-200 hover:from-[#1e2230] hover:to-[#14151b]">
          Gallery
        </h3>


        <div className="flex items-center gap-3">
          {/* Add Image Button */}
          <label className="flex items-center gap-2 bg-gradient-to-b from-[#1b1f2b] to-[#111318] hover:from-[#1e2230] hover:to-[#14151b] text-white text-sm font-medium py-2 px-4 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,1),0_10px_20px_rgba(0,0,0,0.4)] cursor-pointer transition-all duration-200">
            <Plus className="w-4 h-4" /> Add Image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAddImage}
            />
          </label>


          {/* Arrow Buttons */}
          <button
            onClick={scrollLeft}
            className="p-3 rounded-full bg-gradient-to-b from-[#1b1f2b] to-[#111318] shadow-[0_2px_4px_rgba(0,0,0,1),0_10px_20px_rgba(0,0,0,0.4)] border border-gray-900 hover:from-[#1e2230] hover:to-[#14151b] transition-all"
          >
            <ArrowLeft className="w-3 h-3 text-white" />
          </button>

          <button
            onClick={scrollRight}
            className="p-3 rounded-full bg-gradient-to-b from-[#1b1f2b] to-[#111318] shadow-[0_2px_4px_rgba(0,0,0,1),0_10px_20px_rgba(0,0,0,0.4)] border border-gray-900 hover:from-[#1e2230] hover:to-[#14151b] transition-all"
          >
            <ArrowRight className="w-3 h-3 text-white" />
          </button>


        </div>
      </div>

      {/* Image Gallery */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth overflow-visible relative"
      >

        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group flex-shrink-0 overflow-visible"
          >

            <img
              src={src}
              alt="gallery"
              className="w-30 h-30 object-cover rounded-xl shadow-md transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:z-20"
              style={{
                transformOrigin: "top right",
              }}
            />


          </div>
        ))}


      </div>
    </div>
  );
}
