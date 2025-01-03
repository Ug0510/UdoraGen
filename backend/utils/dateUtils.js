// @desc    Format a date to a readable string
// @param   {Date} date - The date to format
// @returns {string} - Formatted date string
export const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };