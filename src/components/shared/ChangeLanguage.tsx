"use client";

import { useEffect, useState } from "react";

const ChangeLanguage = () => {
  const [lang, setLang] = useState("DE");

  const changeLanguage = () => {
    if (window.location.href.includes("/de")) {
      window.location.href = window.location.href.replace("/de", "/en");
    }
    if (window.location.href.includes("/en")) {
      window.location.href = window.location.href.replace("/en", "/de");
    }
  };

  useEffect(() => {
    if (window.location.href.includes("/de")) {
      setLang("DE");
    }
    if (window.location.href.includes("/en")) {
      setLang("EN");
    }
  }, [lang]);

  return (
    <button className="cursor-pointer" onClick={changeLanguage}>
      {lang}
    </button>
  );
};

export default ChangeLanguage;
