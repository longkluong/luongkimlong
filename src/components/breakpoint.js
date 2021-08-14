const size = {
  sm: `320px`,
  md: `768px`,
  lg: `1200px`,
};

const device = {
  sm: `@media screen and (min-width: ${size.sm})`,
  md: `@media screen and (min-width: ${size.md})`,
  lg: `@media screen and (min-width: ${size.lg})`,
};

const breakpoint = {
  size,
  device,
};

export default breakpoint;
