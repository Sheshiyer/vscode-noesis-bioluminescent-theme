import React from 'react';

interface ThemeProps {
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
}

interface PaletteColors {
  voidTeal: string;
  phosphorCream: string;
  solarBronze: string;
  titanium: string;
  chlorophyll: string;
  terracotta: string;
}

const NoesisTheme: React.FC<ThemeProps> = ({
  primaryColor,
  accentColor,
  backgroundColor
}) => {
  const palette: PaletteColors = {
    voidTeal: '#0A1628',
    phosphorCream: '#F0EDE3',
    solarBronze: '#C4873B',
    titanium: '#8A9BA8',
    chlorophyll: '#4A7C59',
    terracotta: '#C65D3B'
  };

  return (
    <div style={{ backgroundColor }}>
      <header>
        <h1 style={{ color: palette.solarBronze }}>
          Noesis Bioluminescent
        </h1>
        <span style={{ color: primaryColor }}>Phosphor Cream Text</span>
        <span style={{ color: accentColor }}>Solar Bronze Accent</span>
      </header>

      <main>
        <p style={{ color: palette.titanium }}>
          Obsidianite-inspired aesthetic with Art Nouveau
        </p>
        <code style={{ color: palette.chlorophyll }}>
          const theme = 'bioluminescent';
        </code>
      </main>
    </div>
  );
};

export default NoesisTheme;
