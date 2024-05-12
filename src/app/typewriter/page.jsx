"use client"

import { useState, useEffect } from "react";

const Page = () => {
  const words = ["how are you", "i love you", "i miss you"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWord = words[wordIndex];
      if (charIndex < currentWord.length) {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setWordIndex((wordIndex + 1) % words.length);
        setCharIndex(0);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, [wordIndex, charIndex, words]);

  return (
    <div>
      <h1>Type writer effect</h1>
      <p>{typedText}</p>
    </div>
  );
};

export default Page;
