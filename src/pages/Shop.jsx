import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import NewsletterSection from "../components/closetProducts/NewsletterSection";
import { ChevronDown, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import ArrivalProducts from "../components/ArrivalProducts/ArrivalProducts";
import FilterSection from "../components/side-bar/FilterSection";

const Shop = () => {
  const [selected, setSelected] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const options = ["All", "Newest", "Popularity"];

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalProducts = 36; // Example: Assuming 36 products exist
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Dummy Product Array
  const products = Array.from({ length: totalProducts }, (_, i) => i + 1);

  // Get Current Products for the Page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Pagination Handlers
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-[1920px] bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#F1FBFF] via-[#F1EDEB] to-[#F8DAB0] h-[437px] flex flex-col items-center justify-center">
        <h1 className="text-[72px] font-bold">Shop</h1>
        <div>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Shop</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>

      {/* Sidebar and Sorting Section */}
      <div className="flex mt-20 " id="headingSort">
        {/* Sidebar */}
        <div className=" w-[349px] h-[1399px] p-[24px] ml-60">
          <FilterSection />
        </div>

        {/* Main Content Section */}
        <div className="pl-20 flex-1">
          {/* Sorting Section */}
          <div className="flex justify-between items-center w-full mb-10">
            <p id="paragraph" className="text-gray-700">
              There are {totalProducts} products in total
            </p>

            <div id="sortItem" className="flex items-center gap-4 pr-[5rem]">
              <div>Sorted by</div>
              <div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between w-40 px-4 py-1 border border-gray-300 rounded-lg shadow-sm bg-[#E5E5E5] text-gray-700"
                >
                  {selected}
                  <ChevronDown size={20} className="text-gray-500" />
                </button>

                {isOpen && (
                  <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelected(option);
                          setIsOpen(false);
                        }}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Grid - 12 Cards per Page */}
          <div className="grid grid-cols-3 gap-8">
            {currentProducts.map((_, index) => (
              <ArrivalProducts key={index} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
                }`}
            >
              <ArrowLeft size={18} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center border-none
                   ${currentPage === i + 1 ? " text-black font-bold" : "border border-gray-300"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
                }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-16">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Shop;

