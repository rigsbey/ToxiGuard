'use client';

import { useState, useEffect } from 'react';

const words = [
  { text: 'Freelancers', color: '#EA580C' },
  { text: 'Agencies', color: '#9333EA' }
];

export default function TypewriterText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0].text);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const animateText = () => {
      const currentWord = words[currentWordIndex].text;
      
      if (!isDeleting) {
        if (displayText === currentWord) {
          timeout = setTimeout(() => setIsDeleting(true), 2000); // Пауза перед удалением
          return;
        }
        
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        timeout = setTimeout(animateText, 100); // Скорость печати
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        
        setDisplayText(displayText.substring(0, displayText.length - 1));
        timeout = setTimeout(animateText, 50); // Скорость удаления
      }
    };

    timeout = setTimeout(animateText, 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <span 
      className="inline-block min-w-[200px]"
      style={{ 
        color: words[currentWordIndex].color,
        fontSize: '60px',
        lineHeight: '69px',
      }}
    >
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
} 