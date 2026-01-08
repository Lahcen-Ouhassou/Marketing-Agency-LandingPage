import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import pageConfig from "../config/pageConfig";

const useRouteMeta = () => {
  const location = useLocation();
  const route = pageConfig[location.pathname] || pageConfig["*"];

  useEffect(() => {
    // فقط تغيير title
    document.title = route.title;

    // لا نبدلو favicon، يبقى ثابت
  }, [route.title]);
};

export default useRouteMeta;
