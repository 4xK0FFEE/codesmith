"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useRouter } from "next/navigation";
import { Github } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [atHomePage, setAtHomePage] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isHome = window.location.pathname === "/";
      setAtHomePage(isHome);
    }
  }, []);
  return (
    <header className="border-b bg-background/50 mx-auto flex items-center justify-between py-4 px-10 w-full">
      <div className="flex items-center gap-2">
        <span
          className="text-xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          CodeSmith
        </span>
      </div>
      {!atHomePage && (
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" onClick={() => router.push("/explore")}>
            Explore Templates
          </Button>
          <Button variant="ghost" onClick={() => router.push("/generate")}>
            Generate Project
          </Button>
        </nav>
      )}
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
