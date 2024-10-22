import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <>
      <main className="min-h-screen container mx-auto">
        <Header />
        <div className="text-center">app layout</div>
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with ❤️ by Tejas
      </div>
    </>
  );
};

export default Applayout;
