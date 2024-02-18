import { useEffect, useState } from "react";

const useFetchYScroll = () => {
  const [scrollData, setScrollData] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const setScrollY = () => {
    setScrollData((prev) => {
      if (window.scrollY > prev) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      setScrollData(window.scrollY);
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", setScrollY);
    return () => {
      window.removeEventListener("scroll", setScrollY);
    };
  });
  console.log(scrollData);
  return { isScrollingUp };
};

export default useFetchYScroll;
