export const useUtilities = () => {
  function toTitleCase(text) {
    return text.replace(text.slice(0, 1), text.slice(0, 1).toUpperCase());
  }

  return {
    toTitleCase,
  };
};

