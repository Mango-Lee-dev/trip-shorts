import { NAV_ITEMS } from "../../lib/constants/nav";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function BottomNavigation({
  activeTab,
  onTabChange,
}: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        {NAV_ITEMS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 ${
              activeTab === tab.id
                ? "text-blue-500 bg-blue-50"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <tab.icon className="w-6 h-6 mb-1" />
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
