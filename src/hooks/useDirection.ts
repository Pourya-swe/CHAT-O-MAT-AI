import { useEffect } from "react";

// A custom hook to set the text direction and language attribute of the document
const useDirection = (language: string) => {
  useEffect(() => {
    const dir = language === "fa" ? "rtl" : "ltr";
    document.documentElement.dir = dir; // Sets the <html dir="...">
    document.documentElement.lang = language; // Sets the <html lang="...">
  }, [language]);
};

export default useDirection;
