const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/vrhidayat.github.io/": "";
};

export { getImagePrefix };
