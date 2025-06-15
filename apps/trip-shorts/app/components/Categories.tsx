import { Dispatch, SetStateAction } from "react";
import { CATEGORIES } from "../../lib/constants/categories";
import { Category } from "../../types/constants.types";

interface CategoriesProps {
  category: string;
  setCategory: Dispatch<SetStateAction<Category>>;
}

export function Categories({ category, setCategory }: CategoriesProps) {
  return (
    <div className="px-4 mb-4">
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {CATEGORIES.map((cat, index) => (
          <button
            key={index}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              cat === category
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-blue-50"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
