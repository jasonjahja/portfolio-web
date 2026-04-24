import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // hanya scroll kalau navigation punya state (artinya dari Link)
    if (location.state?.fromLink) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}