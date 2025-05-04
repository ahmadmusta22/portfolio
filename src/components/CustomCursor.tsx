import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Update CSS variables for smoother animations
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
      
      // Set cursor visibility
      setIsVisible(true);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.tagName.toLowerCase() === 'a' || 
                          target.tagName.toLowerCase() === 'button' || 
                          target.getAttribute('role') === 'button' ||
                          target.classList.contains('hoverable');
      
      setIsHovering(isHoverable);
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousemove', updateHoverState);
    window.addEventListener('mouseout', hideCursor);
    
    // Handle touch devices
    if ('ontouchstart' in window) {
      setIsVisible(false);
    }

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousemove', updateHoverState);
      window.removeEventListener('mouseout', hideCursor);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="custom-cursor-dot" 
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.1s'
        }}
      />
      <div 
        className="custom-cursor" 
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: isHovering ? '40px' : '20px',
          height: isHovering ? '40px' : '20px',
          backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
          borderColor: isHovering ? 'rgba(139, 92, 246, 0.8)' : 'rgba(255, 255, 255, 0.3)'
        }}
      />
    </>
  );
};

export default CustomCursor;