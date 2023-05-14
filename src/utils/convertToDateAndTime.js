export const convertToDateAndTime = (date) => {
  const dateFormat = new Date(date);
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  };
  const time =
    ("0" + dateFormat.getHours()).slice(-2) +
    ":" +
    ("0" + dateFormat.getMinutes()).slice(-2);
  return { date: dateFormat.toLocaleDateString("en-US", options), time: time };
};
