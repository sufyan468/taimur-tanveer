import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScroll = documentHeight - windowHeight;
      const currentScrollPercentage = (scrollTop / totalScroll) * 100;
      setScrollPercentage(currentScrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center gap-16">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="text-red-500 font-bold"
      >
        To Top
      </Link>
      <div className="relative flex w-1 rotate-90">
        <div className="w-1 bg-slate-300 " style={{ height: "100px" }}></div>
        <div
          className="w-1 bg-red-500  absolute "
          style={{ height: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
