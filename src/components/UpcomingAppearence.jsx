import { useEffect, useState } from "react";
import { eventData } from "../api/api";
import { Link } from "react-router-dom";


const UpcomingAppearence = () => {
  const [displayCount, setDisplayCount] = useState(6);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleViewAllClick = () => {
    const newDisplayCount = Math.min(displayCount + 6, eventData.length);
    setDisplayCount(newDisplayCount);
    setDropdownVisible(true);
  };

  document.addEventListener("DOMContentLoaded", function () {
    applyDottedBorder();
    window.addEventListener("resize", onResize);
    function onResize() {
      applyDottedBorder(); 
      scaleDivs();
    }
    
    
    setInterval(moveDots, 500); // Adjust speed as needed
  });

  function applyDottedBorder(alternateColors = false) {
    const elements = document.querySelectorAll(".event");
    elements.forEach((element) => {
      const dotRadius = 5; 
      const dotDiameter = dotRadius * 2;
      const dotColor = "#FFD900"; 
      const alternateColor = "#746520";
      
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;
      
      const xDots = Math.round(elementWidth / (dotDiameter + dotRadius)) - 1;
      const yDots = Math.round(elementHeight / (dotDiameter + dotRadius)) - 1;
      
      const xSpacing = (elementWidth - dotDiameter * (xDots + 1)) / xDots;
      const ySpacing = (elementHeight - dotDiameter * (yDots + 1)) / yDots;
      
      let svg = `<svg width="${elementWidth}" height="${elementHeight}" xmlns="http://www.w3.org/2000/svg">`;
      
      const addDot = (x, y, index) => {
        let currentColor =
          (index % 2 === 0) !== alternateColors ? dotColor : alternateColor;
        svg += `<circle cx="${x}" cy="${y}" r="${dotRadius}" fill="${currentColor}" />`;
      };
      
      for (let i = 0; i <= xDots; i++) {
        addDot(dotRadius + i * (dotDiameter + xSpacing), dotRadius, i);
        addDot(
          dotRadius + i * (dotDiameter + xSpacing),
          elementHeight - dotRadius,
          i
        );
      }
      
      for (let i = 1; i < yDots; i++) {
        addDot(dotRadius, dotRadius + i * (dotDiameter + ySpacing), i + xDots);
        addDot(
          elementWidth - dotRadius,
          dotRadius + i * (dotDiameter + ySpacing),
          i + xDots + yDots
        );
      }
      
      svg += `</svg>`;
      
      const dataUrl = "url('data:image/svg+xml;base64," + btoa(svg) + "')";
      element.style.backgroundImage = dataUrl;
      element.style.border = "none"; 
    });
  }

  setInterval(() => {
    applyDottedBorder(true); 
    setTimeout(() => applyDottedBorder(), 200); 
  }, 400); 

  useEffect(() => {
    function adjustGap() {
        const minWidth = 350; 
        const maxWidth = 430;
        let currentWidth = window.innerWidth;

        currentWidth = Math.max(minWidth, Math.min(currentWidth, maxWidth));

        const gapSize = (30 * (currentWidth - minWidth)) / (maxWidth - minWidth);
        
        document
          .querySelectorAll(".events-container")
          .forEach(container => {
            container.style.gap = gapSize + "px";
          });
    }

    // Update gap on resize
    window.addEventListener('resize', adjustGap);
    // Initial update
    adjustGap();

    return () => {
        // Cleanup listener on component unmount
        window.removeEventListener('resize', adjustGap);
    };
}, []);


useEffect(() => {
  const scaleDivs = () => {
    const divs = document.querySelectorAll('div');
    const minWidth = 350;
    const maxWidth = 430;
    let scaleRatio = window.innerWidth / maxWidth;

    if (scaleRatio > 1) {
      scaleRatio = 1;
    }

    if (window.innerWidth >= minWidth) {
      divs.forEach(div => {
        const style = getComputedStyle(div);
        const isScalable = style.getPropertyValue('--custom-scalable').trim();

        if (isScalable === '1') {
          div.style.transform = `scale(${scaleRatio})`;
        }
      });
    }
  };

  // Call scaleDivs initially and add event listener for resizing
  scaleDivs();
  window.addEventListener('resize', scaleDivs);

  // Cleanup function to remove event listener
  return () => {
    window.removeEventListener('resize', scaleDivs);
  };
}, []);

  return (
    <>
      <div className="section-upcoming-appearances-container">
        <div className="section-title-upcoming-appearances">
          UPCOMING APPEARANCES
        </div>
        <div className={`events-container ${dropdownVisible ? "show" : ""}`}>
          {
            eventData.slice(0, displayCount).map((event , index) => (
              <div className="event" key={index}>
                <span className="event-date-time">{event.dateTime}</span>
                <span className="event-name">{event.name}</span>
                <span className="event-location">{event.location}<span className="event-location-dot">⋅</span>
                  <span className="event-venue">{event.venue}</span>
                </span>
              </div>
            ))
          }
        </div>

        
          <div className="upcoming-appearances-viewall">
            <Link onClick={handleViewAllClick}>
                <i className="fas fa-star"></i> {displayCount < eventData.length ?  `VIEW MORE LIVE DATES` : <span className="last-text">THAT'S ALL FOR NOW</span>}
                <i className="fas fa-star just-spac"></i>
            </Link>
          </div>
        
      </div>
    </>
  );
};

export default UpcomingAppearence;
