"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

export default function LandingPage() {
  const [darkMod, setDarkMod] = useState(false);

  const toggleDarkMode = () => {
    setDarkMod((prev) => !prev);
  };

  return (
    <div className={darkMod ? "dark" : "light"}>
      <div className="h-[100dvh] w-[100dvw] dark:bg-gray-900">
        <header className="flex fixed border-b p-2 w-full dark:bg-black dark:text-white">
          <div className="flex w-1/2 items-center gap-1">
            <img src="/icon.png" height="40px" width="40px"></img>
            <h1 className="font-bold text-2xl">TesteApp</h1>
          </div>

          <div className="flex w-1/2 justify-end items-center gap-2">
            <div className="rounded-2xl h-10 w-10 flex dark:bg-gray-800 bg-gray-100 justify-center items-center">
              <button className="cursor-pointer" onClick={toggleDarkMode}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-8 h-8"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 18a6 6 0 0 0 0-12v12z" />
                </svg>
              </button>
            </div>
            <div className="rounded-2xl h-10 w-10 flex dark:bg-gray-800 bg-gray-100 justify-center items-center">
              <button
                className="cursor-pointer"
                onClick={() => redirect("/login")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-full w-8"
                >
                  <path d="M18 20a6 6 0 0 0-12 0" />
                  <circle cx="12" cy="10" r="4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
