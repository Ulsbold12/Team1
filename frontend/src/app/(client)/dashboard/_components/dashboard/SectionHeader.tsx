import React from "react";
import { Button } from "@/components/ui/button";

interface SectionHeaderProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  linkLabel?: string;
  onLinkClick?: () => void;
}

export function SectionHeader({ icon: Icon, title, linkLabel, onLinkClick }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
        <Icon className="w-5 h-5 text-[#5048e5]" />
        {title}
      </h3>
      {linkLabel && onLinkClick && (
        <Button
          variant="link"
          className="text-[#5048e5] p-0 h-auto font-semibold"
          onClick={onLinkClick}
        >
          {linkLabel}
        </Button>
      )}
    </div>
  );
}
