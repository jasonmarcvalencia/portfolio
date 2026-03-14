import { useEffect, useState, useCallback } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [isOnDark, setIsOnDark] = useState(true);

  const checkBackground = useCallback(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const headerBottom = header.getBoundingClientRect().bottom;

    const sections = document.querySelectorAll("section, footer");
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= headerBottom && rect.bottom > headerBottom) {
        setIsOnDark(section.classList.contains("section-burgundy") || section.classList.contains("section-cream"));
        break;
      }
    }
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const manilaTime = now.toLocaleTimeString("en-PH", {
        timeZone: "Asia/Manila",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(manilaTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    window.addEventListener("scroll", checkBackground, { passive: true });
    checkBackground();

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", checkBackground);
    };
  }, [checkBackground]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-300 ${
        isOnDark
          ? "bg-[hsl(0_0%_5%)]/95"
          : "bg-white/95"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center text-sm">
          <span
            className={`transition-colors duration-300 ${
              isOnDark ? "text-white/70" : "text-black/60"
            }`}
          >
            Manila, PH {currentTime}
          </span>
          <div className="flex gap-8">
            <a
              href="tel:+639569469527"
              className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                isOnDark
                  ? "text-white/70 hover:text-white"
                  : "text-black/60 hover:text-black"
              }`}
            >
              +63 956 946 9527
            </a>
            <a
              href="mailto:jasonvalencia18@gmail.com"
              className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                isOnDark
                  ? "text-white/70 hover:text-white"
                  : "text-black/60 hover:text-black"
              }`}
            >
              jasonvalencia18@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
