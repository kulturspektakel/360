import React, { useEffect, useState } from "react";
import { Pannellum } from "pannellum-react";

function debounce<T extends Function>(
  func: T,
  wait: number,
  immediate?: boolean
) {
  let timeout: NodeJS.Timeout | null = null;
  return function() {
    // @ts-ignore
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = debounce(() => {
      setSize([window.innerWidth, window.innerHeight]);
    }, 200);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return size;
}

export default function Panorama() {
  const [width, height] = useWindowSize();
  const [image, setImage] = useState("/images/520096037.500665.jpg");
  return (
    <Pannellum
      height={height + "px"}
      width={width + "px"}
      image={image}
      autoLoad
    >
      <Pannellum.Hotspot id="2" type="custom" />
    </Pannellum>
  );
}
