import { useEffect, useRef, useState } from "react";

export default function UseComponentVisible(initialVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialVisible);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if(ref.current && !ref.current.contains(e.target)){
      setIsComponentVisible(false)
    }

  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { isComponentVisible, setIsComponentVisible, ref };
}
