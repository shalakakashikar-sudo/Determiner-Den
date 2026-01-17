
import React from 'react';

interface TextFormatterProps {
  text: string;
}

const TextFormatter: React.FC<TextFormatterProps> = ({ text }) => {
  if (!text) return null;

  // Split by bold and italic markers
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-black text-inherit">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i} className="italic text-inherit">{part.slice(1, -1)}</em>;
        }
        return part;
      })}
    </>
  );
};

export default TextFormatter;
