import { useEffect } from "react";


const UpcomingAppearence = () => {
  document.addEventListener("DOMContentLoaded", function () {
    applyDottedBorder();
    scaleDivs();
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

  function scaleDivs() {
    var divs = document.querySelectorAll("div"); 
    var maxWidth = 430; 
    var scaleRatio = window.innerWidth / maxWidth;

    if (scaleRatio > 1) {
      scaleRatio = 1;
    }
    divs.forEach(function (div) {
      var style = getComputedStyle(div);
      var isScalable = style.getPropertyValue("--custom-scalable").trim();

      if (isScalable === "1") {
        div.style.transform = "scale(" + scaleRatio + ")";
      }
    });
  }
 
  
  useEffect(() => {
    function adjustGap() {
        const minWidth = 350; 
        const maxWidth = 430;
        let currentWidth = window.innerWidth;
        console.log(currentWidth);
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
    const maxWidth = 430;
    let scaleRatio = window.innerWidth / maxWidth;

    if (scaleRatio > 1) {
      scaleRatio = 1;
    }

    divs.forEach(div => {
      const style = getComputedStyle(div);
      const isScalable = style.getPropertyValue('--custom-scalable').trim();

      if (isScalable === '1') {
        div.style.transform = `scale(${scaleRatio})`;
      }
    });
  };

  // Call scaleDivs initially and add event listener for window resize
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
        <div className="events-container">
          <div className="event">
            <span className="event-date-time">SAT ⋅ DEC 30, 2023 ⋅ 7:30PM</span>
            <span className="event-name">DUNELAND JAZZ COLLECTIVE</span>
            <span className="event-location">
              MICHIGAN CITY, IN<span className="event-location-dot">⋅</span>
              <span className="event-venue">ZORN BREW WORKS</span>
            </span>
          </div>
          <div className="event">
            <span className="event-date-time">FRI ⋅ FEB 9, 2024 ⋅ 8:30PM</span>
            <span className="event-name">MORNING GLORIES</span>
            <span className="event-location">
              ST. JOHN, IN<span className="event-location-dot">⋅</span>
              <span className="event-venue">NORTHWOODS FALLS</span>
            </span>
          </div>
          <div className="event">
            <span className="event-date-time">FRI ⋅ FEB 16, 2024 ⋅ 9PM</span>
            <span className="event-name">JOE MARCINEK BAND</span>
            <span className="event-location">
              HAMMOND, IN
              <span className="event-location-dot">⋅</span>
              <span className="event-venue">EAT</span>
            </span>
          </div>
          <div className="event">
            <span className="event-date-time">SAT ⋅ APR 20, 2024 ⋅ 8PM</span>
            <span className="event-name">HANCH & THE STARS</span>
            <span className="event-location">
              SCHERERVILLE, IN
              <span className="event-location-dot">⋅</span>
              <span className="event-venue">BUDDY N PALS</span>
            </span>
          </div>
        </div>

        <div className="upcoming-appearances-viewall">
          <a href="#">
            <i className="fas fa-star"></i> VIEW ALL LIVE DATES{" "}
            <i className="fas fa-star"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default UpcomingAppearence;
