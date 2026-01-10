import React, { useEffect } from "react";
import useRouteTitle from "../hooks/useRouteTitle";

const NotFound = () => {
  useRouteTitle();

  // useEffect : شنو ندير ملي نخرج منها ,  شنو ندير ملي ندخل للصفحة

  useEffect(() => { 

    const favicon = document.querySelector("link[rel='icon']"); // katjib lfavicon mn index.html
    const prevFavicon = favicon?.href;                          // backup lfavicon li kayn daba
    if (favicon) favicon.href = "/marketingLogo404.jpg";        // bdal favicon l 404
    return () => {
      if (favicon && prevFavicon) favicon.href = prevFavicon; // ila khrejti mn page 404, rja3 lfavicon l9dima
    };
  }, []); // [] : كتخدم غير مرة وحدة   , ملي الصفحة تتحل


  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <h1 className="text-black dark:text-white text-4xl flex items-center w-45">
        <span className="font-bold border-r border-black/30 dark:border-white/30 pr-4 text-3xl">404</span>
        <span className="text-xs pl-4">This page could not be found</span>
      </h1>
    </div>
  );
};

export default NotFound;
