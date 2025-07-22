import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const delay = 8;
  let _x = 0;
  let _y = 0;
  let endX = window.innerWidth / 2;
  let endY = window.innerHeight / 2;
  let cursorVisible = true;
  let cursorEnlarged = false;

  let lastScrolledLeft = 0;
  let lastScrolledTop = 0;

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

 const toggleCursorSize = () => {
  if (cursorEnlarged) {
   
    dot.style.transform = "translate(-50%, -50%) scale(0.9)";
    outline.style.transform = "translate(-50%, -50%) scale(1.2)";
  } else {
    
    dot.style.transform = "translate(-50%, -50%) scale(1)";
    outline.style.transform = "translate(-50%, -50%) scale(1)";
  }
};


    const toggleCursorVisibility = () => {
      if (cursorVisible) {
        dot.style.opacity = 1;
        outline.style.opacity = 1;
      } else {
        dot.style.opacity = 0;
        outline.style.opacity = 0;
      }
    };

    const mouseMoveHandler = (e) => {
      cursorVisible = true;
      toggleCursorVisibility();

      endX = e.pageX;
      endY = e.pageY;

      dot.style.top = endY + "px";
      dot.style.left = endX + "px";
    };

    const mouseEnterHandler = () => {
      cursorVisible = true;
      toggleCursorVisibility();
    };

    const mouseLeaveHandler = () => {
      cursorVisible = false;
      toggleCursorVisibility();
    };

    const mouseDownHandler = () => {
      cursorEnlarged = true;
      toggleCursorSize();
    };

    const mouseUpHandler = () => {
      cursorEnlarged = false;
      toggleCursorSize();
    };

    const hoverLinkHandler = (enlarge) => {
      cursorEnlarged = enlarge;
      toggleCursorSize();
    };

    const scrollHandler = () => {
      if (lastScrolledLeft !== window.scrollX) {
        endX -= lastScrolledLeft;
        lastScrolledLeft = window.scrollX;
        endX += lastScrolledLeft;
      }
      if (lastScrolledTop !== window.scrollY) {
        endY -= lastScrolledTop;
        lastScrolledTop = window.scrollY;
        endY += lastScrolledTop;
      }

      dot.style.top = endY + "px";
      dot.style.left = endX + "px";
    };

    const animateDotOutline = () => {
      _x += (endX - _x) / delay;
      _y += (endY - _y) / delay;

      outline.style.top = _y + "px";
      outline.style.left = _x + "px";

      requestAnimationFrame(animateDotOutline);
    };

    // Add Event Listeners
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseenter", mouseEnterHandler);
    document.addEventListener("mouseleave", mouseLeaveHandler);
    document.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    document.addEventListener("scroll", scrollHandler);

    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => hoverLinkHandler(true));
      el.addEventListener("mouseout", () => hoverLinkHandler(false));
    });

    animateDotOutline();

    return () => {
      // Cleanup
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseenter", mouseEnterHandler);
      document.removeEventListener("mouseleave", mouseLeaveHandler);
      document.removeEventListener("mousedown", mouseDownHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-dot-outline"></div>
    </>
  );



};

export default CustomCursor;
