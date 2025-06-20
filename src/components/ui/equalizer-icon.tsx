
import React from 'react';
import { cn } from '@/lib/utils';

interface EqualizerIconProps {
  className?: string;
}

export const EqualizerIcon: React.FC<EqualizerIconProps> = ({ className }) => {
  return (
    <div className={cn("flex items-end space-x-1", className)}>
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          className={cn(
            "bg-gradient-to-t from-neon-blue to-neon-orange rounded-sm animate-equalizer",
            "w-1 h-4"
          )}
          style={{
            animationDelay: `${index * 0.1}s`,
            animationDuration: `${0.5 + index * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};
