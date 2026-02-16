import { useState, useEffect } from 'react';

/**
 * Noesis Bioluminescent Theme Demo
 * Showcasing syntax highlighting with WCAG AAA contrast
 */
function BioluminescentDemo() {
  const [count, setCount] = useState(0);
  const SOLAR_BRONZE = '#C4873B';
  const VOID_TEAL = '#0A1628';
  const PHOSPHOR_CREAM = '#F0EDE3';

  useEffect(() => {
    console.log(`Count updated: ${count}`);
    // Bioluminescent architecture in action
    updateThemeMetrics(count);
  }, [count]);

  const updateThemeMetrics = (value) => {
    const metrics = {
      contrast: 15.5,
      colors: 608,
      tokens: 47,
      accessibility: 'WCAG AAA'
    };
    return metrics;
  };

  return (
    <div className="theme-showcase" style={{ backgroundColor: VOID_TEAL }}>
      <h1 style={{ color: SOLAR_BRONZE }}>Obsidianite-inspired VS Code Theme</h1>
      <p style={{ color: PHOSPHOR_CREAM }}>Deep ocean bioluminescence meets Art Nouveau</p>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default BioluminescentDemo;
