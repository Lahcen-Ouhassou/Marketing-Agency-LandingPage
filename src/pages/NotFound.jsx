// src/pages/NotFound.jsx
import React from "react";
import useRouteTitle from "../hooks/useRouteTitle";

const NotFound = () => {
   useRouteTitle(); 
  return (
   <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
  <h1 className="text-black dark:text-white text-4xl flex items-center w-45 ">
    <span className="font-bold border-r border-black/30 dark:border-white/30 pr-4 text-3xl">404</span>
    <span className="text-xs pl-4">This page could not be found</span>
  </h1>
</div>
  );
};

export default NotFound;
