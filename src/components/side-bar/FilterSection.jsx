/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";

const FilterSection = () => {
  const [filters, setFilters] = useState({
    designers: [],
    bagTypes: [],
    colors: [],
    availability: {
      inStock: false,
      outOfStock: false,
    },
    priceRange: { min: 0, max: 395 },
  });

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const updatedCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];
      return { ...prevFilters, [category]: updatedCategory };
    });
  };

  const handleAvailabilityChange = (type) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      availability: { ...prevFilters.availability, [type]: !prevFilters.availability[type] },
    }));
  };

  const handlePriceChange = (event) => {
    const [min, max] = event.target.value.split(",").map(Number);
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: { min, max },
    }));
  };
  const handleColorClick = (color) => {
    setFilters((prevFilters) => {
      const updatedColors = prevFilters.colors.includes(color)
        ? prevFilters.colors.filter((c) => c !== color) // Remove the color if it's already selected
        : [...prevFilters.colors, color]; // Add the color if it's not selected

      return { ...prevFilters, colors: updatedColors };
    });
  };


  return (
    <div className="w-[350px] bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0] rounded-lg shadow-md p-6">
     <div className="bg-white px-4">
     <h3 className="text-lg font-semibold mb-4">Filter</h3>

{/* Designers */}
<div className="mb-4">
  <p className="font-medium mb-2">Designers</p>
  <div className="space-y-2 text-[#5A5C5F]">
    {["3.1 Phillip Lim", "Alaia", "Alexander McQueen", "Alexander Wang", "Balenciaga", "Bottega Veneta", "Bulgari"].map(
      (designer) => (
        <label key={designer} className="block text-sm">
          <input
            type="checkbox"
            checked={filters.designers.includes(designer)}
            onChange={() => handleCheckboxChange("designers", designer)}
            className="mr-2"
          />
          {designer}
        </label>
      )
    )}
  </div>
</div>

{/* Bag Type */}
<div className="mb-4">
  <p className="font-medium mb-2">Bag Type</p>
  <div className="space-y-2  text-[#5A5C5F]">
    {["Handbags", "Shoulder Bags", "Crossbody", "Clutch & Evening", "Wallet Style", "Totes"].map((bagType) => (
      <label key={bagType} className="block text-sm">
        <input
          type="checkbox"
          checked={filters.bagTypes.includes(bagType)}
          onChange={() => handleCheckboxChange("bagTypes", bagType)}
          className="mr-2"
        />
        {bagType}
      </label>
    ))}
  </div>
</div>

{/* Color */}
<div className="mb-4">
        <p className="font-medium mb-2">Color</p>
        <div className="flex flex-wrap items-start gap-4 self-stretch ">
          {[
            "#FF6F61", "#006F62", "#F9B500", "#6F0061", "#000000", "#8E8E8E", "#0071D2", "#006B3F", "#8E1D91", "#9E3D3B",
          ].map((color) => (
            <label key={color} className="flex items-center space-x-1 cursor-pointer">
              <span
                onClick={() => handleColorClick(color)}
                className={`w-6 h-6 rounded-full ${filters.colors.includes(color) ? 'border-2 border-black' : 'border-1  rounded-xl'}`}
                style={{ backgroundColor: color }}
              />
            </label>
          ))}
        </div>
      </div>



{/* Availability */}
<div className="mb-4">
  <p className="font-medium mb-2">Availability</p>
  <div className="space-y-2  text-[#5A5C5F]">
    <label className="block text-sm">
      <input
        type="checkbox"
        checked={filters.availability.inStock}
        onChange={() => handleAvailabilityChange("inStock")}
        className="mr-2"
      />
      In Stock (56)
    </label>
    <label className="block text-sm">
      <input
        type="checkbox"
        checked={filters.availability.outOfStock}
        onChange={() => handleAvailabilityChange("outOfStock")}
        className="mr-2"
      />
      Out of Stock (12)
    </label>
  </div>
</div>

{/* Price */}
<div className="mb-4">
  <p className="font-medium mb-2">Price</p>
  <input
    type="range"
    min="0"
    max="395"
    value={`${filters.priceRange.min},${filters.priceRange.max}`}
    step="1"
    onChange={handlePriceChange}
    className="w-full"
  />
  <div className="flex justify-between text-sm mt-2">
    <span>${filters.priceRange.min}</span>
    <span>${filters.priceRange.max}</span>
  </div>
</div>
     </div>
    </div>
  );
};

export default FilterSection;
