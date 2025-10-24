import { useState } from "react";
import { Grid, ArrowLeft, ArrowRight, Plus } from "lucide-react";

export default function GalleryWidget() {
  const [images, setImages] = useState([
    "https://picsum.photos/200/200?1",
    "https://picsum.photos/200/200?2",
    "https://picsum.photos/200/200?3",
  ]);

  const addImage = () => {
    const newImg = `https://picsum.photos/200/200?random=${Math.random()}`;
    setImages([...images, newImg]);
  };

  return (
    <div className="relative bg-[#2b2e35]/90 rounded-xl w-full min-h-[240px] transition-all duration-500 pt-3 pl-10 pr-10 pb-3">
      {/* Left Icon */}
     <div className="absolute left-1 top-20 flex flex-col gap-[1px] p-2">
  {/* 3 rows */}
  {[0, 1, 2].map((row) => (
    <div key={row} className="flex gap-[1px] rounded-lg">
      {/* 2 columns */}
      {[0, 1].map((col) => (
        <div key={col} className="w-[5px] h-[5px] bg-gray-400"></div>
      ))}
    </div>
  ))}
</div>


      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-semibold text-sm bg-[#1f2126] py-2 px-5 rounded-lg shadow-inner">
          Gallery
        </h3>

        <div className="flex items-center gap-3">
          <button
            onClick={addImage}
            className="flex items-center gap-2 bg-[#1f2126] hover:bg-[#3a3f46] text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md transition-all duration-200"
          >
            <Plus className="w-4 h-4" /> Add Image
          </button>

          <button className="bg-[#1f2126] hover:bg-[#3a3f46] p-2 rounded-full shadow-md">
            <ArrowLeft className="w-4 h-4 text-gray-300" />
          </button>
          <button className="bg-[#1f2126] hover:bg-[#3a3f46] p-2 rounded-full shadow-md">
            <ArrowRight className="w-4 h-4 text-gray-300" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Gallery"
            className="w-28 h-28 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
