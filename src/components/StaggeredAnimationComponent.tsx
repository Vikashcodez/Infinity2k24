import React, { useEffect } from 'react';
import anime from "animejs"; // Import anime.js library
import styles from '../stylesheets/StaggeredAnimationComponentStyle.module.css'; // Import your CSS file with ".module.css" extension

const StaggeredAnimationComponent: React.FC = () => {
  useEffect(() => {
    const fitElementToParent = (el: HTMLElement, padding: number): void => {
      let timeout: NodeJS.Timeout | null = null;
      function resize(): void {
        if (timeout) clearTimeout(timeout);
        anime.set(el, { scale: 1 });
        const pad = padding || 0;
        const parentEl = el.parentNode as HTMLElement;
        const elOffsetWidth = el.offsetWidth - pad;
        const parentOffsetWidth = parentEl.offsetWidth;
        const ratio = parentOffsetWidth / elOffsetWidth;
        timeout = setTimeout(() => anime.set(el, { scale: ratio }), 10);
      }
      resize();
      window.addEventListener('resize', resize);
    };

    const staggerVisualizerEl = document.querySelector(`.${styles['stagger-visualizer']}`) as HTMLElement;

    const grid: [number, number] = [20, 10];
    const cell: number = 55;
    const numberOfElements: number = grid[0] * grid[1];

    fitElementToParent(staggerVisualizerEl, 0);

    // Animation logic
    // Place your animation logic here, using anime.js

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <div className='animation-wrapper'>
      <div className={styles['stagger-visualizer']}>
        <div className='cursor color-red'></div>
        <div className='dots-wrapper'></div>
      </div>
    </div>
  );
};

export default StaggeredAnimationComponent;
