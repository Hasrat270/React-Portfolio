import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ye line har martaba page change hone par screen ko top par le jayegi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}