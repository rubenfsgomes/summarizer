import React, { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos <= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 shadow-md ${
        isVisible ? "" : "hidden"
      }`}
    >
      <section className="flex flex-row-reverse p-8 gap-2">
        <span className="text-slate-300 hover:cursor-pointer hover:text-slate-50 hover:border-b-2 border-transparent border-b transition-border duration-300">
          <span className="text-yellow-200">04. </span>Contact
        </span>
        <span className="text-slate-300 hover:cursor-pointer hover:text-slate-50 hover:border-b-2 border-transparent border-b transition-border duration-300">
          <span className="text-yellow-200">03. </span>Projects
        </span>
        <span className="text-slate-300 hover:cursor-pointer hover:text-slate-50 hover:border-b-2 border-transparent border-b transition-border duration-300">
          <span className="text-yellow-200">02. </span>Experience
        </span>
        <span className="text-slate-300 hover:cursor-pointer hover:text-slate-50 hover:border-b-2 border-transparent border-b transition-border duration-300">
          <span className="text-yellow-200">01. </span>About
        </span>
      </section>
    </header>
  );
}
