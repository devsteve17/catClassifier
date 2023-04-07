import React from "react";
import logo from "../../images/logo.svg";

export const Header = () => {
  return (
    <header className="relative flex w-full justify-items-start justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start">
      <div className="flex w-full flex-wrap items-center justify-items-start px-6">
        <div>
          <img src={logo} className="h-auto w-16 rounded-full" alt="logo" />
        </div>
        <h3 className="text-2xl font-bold">Cat classifier</h3>
      </div>
    </header>
  );
};
