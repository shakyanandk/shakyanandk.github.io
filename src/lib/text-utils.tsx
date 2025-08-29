import React from 'react';

interface TextHighlightOptions {
  className?: string;
  defaultHighlightClass?: string;
}

/**
 * Utility function to replace {highlight:text} patterns with styled spans
 * @param text - Text containing {highlight:content} patterns
 * @param options - Styling options
 * @returns JSX element with highlighted text
 */
export const formatHighlightedText = (
  text: string, 
  options: TextHighlightOptions = {}
): React.ReactNode => {
  const { defaultHighlightClass = 'text-primary font-semibold' } = options;
  
  // Split text by highlight patterns
  const parts = text.split(/(\{highlight:[^}]+\})/g);
  
  return parts.map((part, index) => {
    // Check if this part is a highlight pattern
    const highlightMatch = part.match(/^\{highlight:([^}]+)\}$/);
    
    if (highlightMatch) {
      const highlightText = highlightMatch[1];
      return (
        <span key={index} className={defaultHighlightClass}>
          {highlightText}
        </span>
      );
    }
    
    return part;
  });
};

/**
 * Utility function to replace multiple patterns in text
 * @param text - Text containing patterns like {highlight:text}, {bold:text}, etc.
 * @param patterns - Object mapping pattern names to CSS classes
 * @returns JSX element with styled text
 */
export const formatStyledText = (
  text: string,
  patterns: Record<string, string> = {}
): React.ReactNode => {
  const defaultPatterns = {
    highlight: 'text-primary font-semibold',
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline',
    ...patterns
  };
  
  // Create regex to match all patterns
  const patternNames = Object.keys(defaultPatterns).join('|');
  const regex = new RegExp(`\\{(${patternNames}):([^}]+)\\}`, 'g');
  
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    // Add styled text
    const [, patternName, content] = match;
    const className = defaultPatterns[patternName];
    
    parts.push(
      <span key={match.index} className={className}>
        {content}
      </span>
    );
    
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts.length > 1 ? <>{parts}</> : parts[0] || text;
};