import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <section>{children}</section>
    </main>
  );
};

export default HomeLayout;
