export const createSeasonsList = (startYear = 1871) => {
  const currentYear = new Date().getFullYear();
  const arrYears = [];

  while (startYear <= currentYear) arrYears.push(startYear++);

  return arrYears;
}