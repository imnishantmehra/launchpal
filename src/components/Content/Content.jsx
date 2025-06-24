import React from "react";

const Content = () => {
  // Example tags
  const tags = [
    "Competitive analysis tips",
    "Poll: Pick our next topic",
    "Process deep-dive",
    "Client brainstorm session",
  ];

  // Example library and stock placeholders
  const libraryImages = [
    { alt: "Benetivy Logo", src: "" },
    { alt: "Dollar Icon 1", src: "" },
    { alt: "Dollar Icon 2", src: "" },
    { alt: "Pyramid Icon", src: "" },
    { alt: "Instagram Icon", src: "" },
  ];

  const stockImages = [
    { alt: "Stock Image 1", src: "" },
    { alt: "Stock Image 2", src: "" },
    { alt: "Stock Image 3", src: "" },
    { alt: "Stock Image 4", src: "" },
    { alt: "Stock Image 5", src: "" },
    { alt: "Stock Image 6", src: "" },
  ];

  return (
    <div className="p-4 md:p-6">
      {/* Top Navigation */}
      <div className="flex flex-wrap gap-6 mb-6 border-b-2">
        <button className="px-4 py-2 text-[#7E22CD] text-base font-medium border-b-2 border-[#7E22CD]">
          Canvas
        </button>
        <button className="px-4 py-2 text-[#111827] text-base font-medium">
          Posts
        </button>
        <button className="px-4 py-2 text-[#111827] text-base font-medium">
          Smart Library
        </button>
      </div>

      {/* Tags and Input */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-lg border border-[#DFE5EC] text-[#111827] text-sm font-medium bg-white"
            >
              {tag}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="I want to make a post about..."
          className="border rounded-lg border-[#DFE5EC] px-4 py-3 w-full max-w-md mb-6"
        />
      </div>

      {/* Library */}
      <h3 className="text-lg font-semibold mb-4">From your Library</h3>
      <div className="flex flex-wrap gap-4 mb-6">
        {libraryImages.map((img, index) => (
          <img
            key={index}
            src={
              img.src ||
              "https://dn721803.ca.archive.org/0/items/placeholder-image//placeholder-image.jpg"
            }
            alt={img.alt}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://dn721803.ca.archive.org/0/items/placeholder-image//placeholder-image.jpg";
            }}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-[8px] object-cover border border-[#E5E7EB]"
          />
        ))}
      </div>

      {/* Stock */}
      <h3 className="text-lg font-semibold mb-4">Stock</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative">
        {stockImages.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={
                img.src ||
                "https://dn721803.ca.archive.org/0/items/placeholder-image//placeholder-image.jpg"
              }
              alt={img.alt}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://dn721803.ca.archive.org/0/items/placeholder-image//placeholder-image.jpg";
              }}
              className="w-full h-[100px] md:h-[120px] rounded-[8px] object-cover border border-[#E5E7EB]"
            />
          </div>
        ))}

        {/* Floating Use Button */}
        <button className="fixed bottom-6 right-6 md:bottom-10 md:right-10 px-4 py-2 bg-white border border-[#DFE5EC] text-sm flex items-center gap-1 rounded shadow">
          Use
          <span className="text-base mt-1">↗</span>
        </button>
      </div>
    </div>
  );
};

export default Content;
