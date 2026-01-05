import { useEffect, useRef } from "react";

const Cat = () => {
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia(
      `(prefers-reduced-motion: reduce)`
    ).matches;

    if (isReducedMotion) return;

    // Configuration
    const nekoEl = document.createElement("div");
    const nekoSpeed = 1;
    const idleTime = 200; // Time before cat falls asleep
    let idleCounter = 0;
    let mousePosition = { x: idleTime, y: idleTime };
    let nekoPosition = { x: idleTime / 2, y: idleTime / 2 };
    let frameCount = 0;

    // Sprite Data
    const spriteSets = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
      ],
      scratchWallN: [
        [0, 0],
        [0, -1],
      ],
      scratchWallS: [
        [-7, -1],
        [-6, -2],
      ],
      scratchWallE: [
        [-2, -2],
        [-2, -3],
      ],
      scratchWallW: [
        [-4, 0],
        [-4, -1],
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, 0],
        [-2, -1],
      ],
      N: [
        [-1, -2],
        [-1, -3],
      ],
      NE: [
        [0, -2],
        [0, -3],
      ],
      E: [
        [-3, 0],
        [-3, -1],
      ],
      SE: [
        [-5, -1],
        [-5, -2],
      ],
      S: [
        [-6, -3],
        [-7, -2],
      ],
      SW: [
        [-5, -3],
        [-6, -1],
      ],
      W: [
        [-4, -2],
        [-4, -3],
      ],
      NW: [
        [-1, 0],
        [-1, -1],
      ],
    };

    // Initialize CSS
    nekoEl.id = "oneko";
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.pointerEvents = "none";
    nekoEl.style.imageRendering = "pixelated"; // Keeps pixel art crisp
    nekoEl.style.left = `${nekoPosition.x - 16}px`;
    nekoEl.style.top = `${nekoPosition.y - 16}px`;
    nekoEl.style.zIndex = "9999"; // Ensures it sits on top
    nekoEl.style.backgroundImage =
      "url('https://raw.githubusercontent.com/adryd325/oneko.js/master/oneko.gif')";

    document.body.appendChild(nekoEl);

    // Mouse Tracking
    const onMouseMove = (e: any) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };
    document.addEventListener("mousemove", onMouseMove);

    // Helper: Set Sprite
    const setSprite = (name: keyof typeof spriteSets, frame: number) => {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${
        sprite[1] * 32
      }px`;
    };

    // Animation Loop
    const animate = () => {
      nekoPosition.x = parseFloat(nekoEl.style.left.slice(0, -2)) + 16;
      nekoPosition.y = parseFloat(nekoEl.style.top.slice(0, -2)) + 16;

      const diffX = nekoPosition.x - mousePosition.x;
      const diffY = nekoPosition.y - mousePosition.y;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < nekoSpeed || distance < 48) {
        // Cat is idle (near mouse)
        idleCounter += 1;
        if (idleCounter > 10) {
          // Wait a bit before sleeping
          if (idleCounter > 200 && idleCounter < 500) {
            setSprite("tired", 0);
          } else if (idleCounter >= 500) {
            setSprite("sleeping", Math.floor(frameCount / 4));
            if (idleCounter > 800) idleCounter = 0; // Reset eventually
          } else {
            setSprite("idle", 0);
          }
        }
      } else {
        // Cat is moving
        idleCounter = 0;
        if (distance <= nekoSpeed) {
          nekoEl.style.left = `${mousePosition.x - 16}px`;
          nekoEl.style.top = `${mousePosition.y - 16}px`;
        } else {
          // Calculate movement angle
          let angle = Math.atan2(diffY, diffX);
          let velX = Math.cos(angle) * nekoSpeed;
          let velY = Math.sin(angle) * nekoSpeed;

          nekoEl.style.left = `${nekoPosition.x - velX - 16}px`;
          nekoEl.style.top = `${nekoPosition.y - velY - 16}px`;

          // Determine direction sprite
          let direction: keyof typeof spriteSets = "N";
          angle = angle * (180 / Math.PI) - 90; // Convert to degrees

          if (angle >= 337.5 || angle < 22.5) direction = "N";
          else if (angle >= 22.5 && angle < 67.5) direction = "NW";
          else if (angle >= 67.5 && angle < 112.5) direction = "W";
          else if (angle >= 112.5 && angle < 157.5) direction = "SW";
          else if (angle >= 157.5 && angle < 202.5) direction = "S";
          else if (angle >= 202.5 && angle < 247.5) direction = "SE";
          else if (angle >= 247.5 && angle < 292.5) direction = "E";
          else if (angle >= 292.5 && angle < 337.5) direction = "NE";

          setSprite(direction, frameCount);
        }
      }

      frameCount += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = window.requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current !== null) {
        window.cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener("mousemove", onMouseMove);
      if (nekoEl && nekoEl.parentNode) {
        nekoEl.parentNode.removeChild(nekoEl);
      }
    };
  }, []);

  return null; // The component renders nothing in the React tree, it appends to Body
};

export default Cat;
