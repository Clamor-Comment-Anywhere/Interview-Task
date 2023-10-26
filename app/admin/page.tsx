"use client";

import React from "react";
import { LatestComments } from "./LatestComments";

const Admin: React.FC = () => {
  return (
    <section className="flex flex-col w-full justify-center  items-center">
      <h1 className="text-4xl font-bold font-sans mt-9">Admin Page</h1>
      <LatestComments />
    </section>
  );
};

export default Admin;
