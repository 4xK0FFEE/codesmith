import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { IconType } from "react-icons";
import { LuCircleX } from "react-icons/lu";

export interface CardSelectOption {
  value: string;
  label: string;
  icon?: IconType;
}

interface CardSelectProps {
  options: CardSelectOption[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export function CardSelect({
  options,
  value,
  onValueChange,
  className,
}: CardSelectProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4",
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onValueChange(option.value)}
          className={cn(
            "flex flex-col items-center justify-center rounded-lg border-2 p-4 transition-all hover:border-primary",
            value === option.value
              ? "border-primary bg-primary/5"
              : "border-border"
          )}
        >
          <div className="relative mb-3 flex h-12 w-12 items-center justify-center">
            {option.icon ? (
              <option.icon size={24} />
            ) : (
              option.value === "none" && <LuCircleX size={24} />
            )}
            {value === option.value && (
              <div className="absolute -right-1 -top-1 rounded-full bg-primary p-1">
                <Check className="h-3 w-3 text-primary-foreground" />
              </div>
            )}
          </div>
          <span className="text-sm font-medium">{option.label}</span>
        </button>
      ))}
    </div>
  );
}
