import React, { useState, useEffect } from "react";

const TypingTextList = ({ texts, typingSpeed = 100, pauseTime = 800, styles }) => {
  const [currentText, setCurrentText] = useState(""); // Current displayed text
  const [textIndex, setTextIndex] = useState(0); // Index of the current text in the list
  const [isTyping, setIsTyping] = useState(true); // Flag for typing or pausing

  useEffect(() => {
    const currentString = texts[textIndex];
    let timer;

    if (isTyping && currentText !== currentString) {
      // Typing characters one by one
      timer = setTimeout(() => {
        setCurrentText((prev) => currentString.slice(0, prev.length + 1));
      }, typingSpeed);
    } else if (isTyping && currentText === currentString) {
      // Pause after typing
      timer = setTimeout(() => {
        setIsTyping(false); // Stop typing
      }, pauseTime);
    } else if (!isTyping && currentText === currentString) {
      // Clear the text and move to the next string
      timer = setTimeout(() => {
        setCurrentText("");
        setIsTyping(true); // Start typing the next string
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through texts
      }, pauseTime);
    }

    return () => clearTimeout(timer); // Cleanup timer
  }, [currentText, isTyping, textIndex, texts, typingSpeed, pauseTime]);

  return (
    <h3 className={`font-mono text-lg ${styles}`} >{currentText}</h3>
  );
};

export default TypingTextList;
