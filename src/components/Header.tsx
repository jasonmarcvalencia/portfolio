import { useEffect, useState } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const londonTime = now.toLocaleTimeString("en-GB", {
        timeZone: "Europe/London",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(londonTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">
            London, UK {currentTime}
          </span>
          <div className="flex gap-8">
            <a href="tel:+447911234567" className="nav-link">
              +44 7911 234567
            </a>
            <a href="mailto:h.waverly@consulting.co" className="nav-link">
              h.waverly@consulting.co
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
