export const formatTimeWithDate = (datetime) => {
  if (!datetime) return "00:00";

  const date = new Date(datetime);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  const formattedDate = date.toISOString().split("T")[0];

  return `${formattedTime} (${formattedDate})`;
};
