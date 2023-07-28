export const parseDate = (date) => {
  const timestamp = Date.parse(date);
  const parsedDate = new Date(timestamp);
  const day = parsedDate.getDate();
  const month = parsedDate.getMonth() + 1;
  const year = parsedDate.getFullYear();
  const hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();
  const seconds = parsedDate.getSeconds();
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}