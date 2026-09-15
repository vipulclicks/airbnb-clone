import React from 'react';
import { Search, Globe, Menu } from 'lucide-react';

interface NavbarProps {
  onSearchClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#EBEBEB]">
      <div className="max-w-[1280px] mx-auto px-10 h-20 flex items-center justify-between">
        {/* Left: Exact Airbnb Logo + Wordmark matching reference */}
        <a href="#" className="flex items-center gap-1.5 focus:outline-none">
          <img
            src="photos/orig_logo.png"
            alt="airbnb"
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Center: Search pill with exact House Icon from reference */}
        <button
          onClick={onSearchClick}
          className="flex items-center border border-[#DDDDDD] rounded-full py-2 pl-3.5 pr-2 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow cursor-pointer bg-white text-sm font-medium"
        >
          {/* Authentic House Illustration with red door & tree from reference */}
          <img
            src="photos/orig_search_house.png"
            alt="Homes"
            className="w-5 h-5 object-contain mr-3"
          />
          <span className="text-[#222222] font-semibold pr-3.5 border-r border-[#DDDDDD]">
            Anywhere
          </span>
          <span className="text-[#222222] font-semibold px-3.5 border-r border-[#DDDDDD]">
            Anytime
          </span>
          <span className="text-[#717171] pl-3.5 pr-3">
            Add guests
          </span>
          <div className="bg-[#FF385C] hover:bg-[#E00B41] text-white p-2.5 rounded-full flex items-center justify-center transition-colors">
            <Search className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        </button>

        {/* Right: Actions matching reference screenshot 1 */}
        <div className="flex items-center gap-2">
          <button className="text-sm font-semibold text-[#222222] px-3.5 py-2 rounded-full hover:bg-[#F7F7F7] transition-colors cursor-pointer">
            Become a host
          </button>

          {/* Circular Globe Button with light gray background */}
          <button
            className="w-10 h-10 rounded-full bg-[#F2F2F2] hover:bg-[#EBEBEB] text-[#222222] flex items-center justify-center transition-colors cursor-pointer"
            title="Language & region"
          >
            <Globe className="w-4 h-4 stroke-[1.75]" />
          </button>

          {/* Circular Hamburger Button with light gray background (NO user avatar, exact match) */}
          <div className="relative">
            <button
              className="w-10 h-10 rounded-full bg-[#F2F2F2] text-[#222222] flex items-center justify-center cursor-default"
              title="Main navigation menu"
            >
              <Menu className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};