const FooterSection = () => {
  return (
    <footer className="py-6 section-burgundy">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <span className="text-xs text-white/50">
            Jason Marc Valencia. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a
              href="https://jobstreet.com"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Jobstreet
            </a>
            <a
              href="https://indeed.com"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Indeed
            </a>
            <a
              href="https://github.com"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
