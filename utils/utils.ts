const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/vrhidayat.github.io/public/": "";
};

export { getImagePrefix };
