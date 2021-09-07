import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const useAnimation = () => {
  useEffect(() => {
    Aos.init({ duration: '1000' });
  }, [])
};

export default useAnimation;
