const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/image/": "";
};

export { getImagePrefix };
