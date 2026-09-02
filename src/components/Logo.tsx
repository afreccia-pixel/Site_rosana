import React from 'react';
import { CONTACT_INFO } from '../contactConfig';

export const Logo: React.FC<{
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}> = ({
  variant = 'dark',
  size = 'md',
  onClick,
}) => {
  const isLight = variant === 'light';

  return (
    <a
      href="#"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="flex items-center gap-3.5 group text-left cursor-pointer"
    >
      {/* Monogram RB */}
      <div className="flex items-center justify-center font-serif text-[#B88E5E] select-none">
        <span
          className={`font-normal tracking-tight font-serif italic ${
            size === 'sm' ? 'text-2xl' : size === 'lg' ? 'text-4xl' : 'text-3xl'
          }`}
          style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
        >
          R
        </span>
        <span
          className={`font-normal -ml-1 font-serif ${
            size === 'sm' ? 'text-2xl' : size === 'lg' ? 'text-4xl' : 'text-3xl'
          }`}
          style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
        >
          B
        </span>
      </div>

      {/* Divider */}
      <div
        className={`w-[1px] bg-[#B88E5E]/40 ${
          size === 'sm' ? 'h-6' : size === 'lg' ? 'h-10' : 'h-8'
        }`}
      />

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`font-serif uppercase tracking-[0.18em] font-medium leading-none transition-colors ${
            isLight ? 'text-white' : 'text-[#211C19] group-hover:text-[#B88E5E]'
          } ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base md:text-lg' : 'text-sm md:text-[15px]'}`}
        >
          ROSANA BELING
        </span>
        <span
          className={`uppercase tracking-[0.32em] font-medium text-[#B88E5E] mt-1 leading-none ${
            size === 'sm' ? 'text-[8px]' : 'text-[9px]'
          }`}
        >
          ADVOCACIA
        </span>
      </div>
    </a>
  );
};
