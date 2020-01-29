export const formatDate = date => {
  const propDate = new Date(date);

  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const d = propDate.getDate().toString();
  const m = propDate.getMonth().toString();
  const y = propDate.getFullYear().toString();
  const hours = propDate.getHours().toString();
  const minutes = propDate.getMinutes().toString();
  const time = `${hours}:${minutes.length < 2 ? "0" + minutes : minutes}`;

  return `${Months[m]} ${d}, ${y} ${time}`;
};
