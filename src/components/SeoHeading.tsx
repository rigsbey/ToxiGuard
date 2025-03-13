import React from 'react';

interface SeoHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
  keywords?: string[];
}

/**
 * SEO-optimized heading component that automatically adds schema markup
 * and proper heading structure for better search engine visibility.
 */
const SeoHeading: React.FC<SeoHeadingProps> = ({
  level,
  children,
  className = '',
  id,
  keywords = [],
}) => {
  // Create a string of keywords for data attribute
  const keywordsString = keywords.join(', ');
  
  // Base classes for all headings
  const baseClasses = `${className}`;
  
  // Render the appropriate heading based on level
  switch (level) {
    case 1:
      return (
        <h1 className={baseClasses} id={id} data-seo-keywords={keywordsString} itemScope itemProp="headline">
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={baseClasses} id={id} data-seo-keywords={keywordsString} itemScope itemProp="headline">
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={baseClasses} id={id} data-seo-keywords={keywordsString} itemScope itemProp="headline">
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={baseClasses} id={id} data-seo-keywords={keywordsString} itemScope itemProp="headline">
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={baseClasses} id={id} data-seo-keywords={keywordsString} itemScope itemProp="headline">
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={baseClasses} id={id} data-seo-keywords={keywordsString} itemScope itemProp="headline">
          {children}
        </h6>
      );
    default:
      return (
        <h2 className={baseClasses} id={id} data-seo-keywords={keywordsString} itemScope itemProp="headline">
          {children}
        </h2>
      );
  }
};

export default SeoHeading; 