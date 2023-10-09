const screenSize = {
  xs: 0,
  sm: 328,
  md: 600,
  lg: 1284,
  xl: 1280,
};

const device = {
  mobile: `(minWidth: ${screenSize.sm}px)`,
  tablet: `(minWidth: ${screenSize.md}px)`,
  desktop: `(minWidth: ${screenSize.lg}px)`,
};

export { device, screenSize };
