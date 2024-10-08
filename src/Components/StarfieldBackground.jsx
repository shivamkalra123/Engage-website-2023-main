import React, { useEffect, useRef } from 'react';

const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let numStars;
    let speed;
    const maxDepth = 1000;
    const starColors = ['#FFFFFF', '#FFDDC1', '#FFC0CB', '#ADD8E6', '#B0E0E6'];
    let stars = [];

    function setCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Adjust number of stars and speed based on screen size
      if (window.innerWidth < 600) {
        numStars = 400; // Fewer stars for mobile screens
        speed = 0.35; // Slower speed for mobile screens
      } else if (window.innerWidth < 1024) {
        numStars = 1000; // Moderate number of stars for tablets
        speed = 0.6; // Moderate speed for tablets
      } else {
        numStars = 1800; // Original number of stars for desktops
        speed = 0.8; // Original speed for desktops
      }
    }

    function getRandomColor() {
      return starColors[Math.floor(Math.random() * starColors.length)];
    }

    class Star {
      constructor(x, y, z, size, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.color = color;
      }

      update() {
        this.z -= speed * (2 - this.z / maxDepth);
        if (this.z <= 0) {
          this.reset();
        }
      }

      reset() {
        this.z = maxDepth;
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.sqrt(Math.random()) * (canvas.width / 2);
        this.x = Math.cos(angle) * distance;
        this.y = Math.sin(angle) * distance;
        this.size = (1 - distance / (canvas.width / 2)) * 0.1 + 0.5;
        this.color = getRandomColor();
      }

      draw() {
        const x = ((this.x / this.z) * canvas.width) / 2 + canvas.width / 2;
        const y = ((this.y / this.z) * canvas.height) / 2 + canvas.height / 2;
        const radius = (1 - this.z / maxDepth) * this.size * 3;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function initStars() {
      stars = Array.from({ length: numStars }, () => {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.sqrt(Math.random()) * (canvas.width / 2);
        return new Star(
          Math.cos(angle) * distance,
          Math.sin(angle) * distance,
          Math.random() * maxDepth,
          (1 - distance / (canvas.width / 2)) * 0.1 + 0.5,
          getRandomColor()
        );
      });
    }

    function updateAndDrawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(updateAndDrawStars);
    }

    window.addEventListener('resize', () => {
      setCanvasSize();
      initStars();
    });

    setCanvasSize();
    initStars();
    requestAnimationFrame(updateAndDrawStars);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} id="starfield" />;
};

export default StarfieldBackground;
