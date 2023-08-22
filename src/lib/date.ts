import { addDays, format } from 'date-fns';
import { AvailableTimesByDate } from 'src/@types';

const getRandomTimes = (availableTimes: string[], count: number): string[] => {
  const randomTimes: string[] = [];
  const availableTimesCopy = [...availableTimes];

  while (randomTimes.length < count && availableTimesCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableTimesCopy.length);
    randomTimes.push(availableTimesCopy.splice(randomIndex, 1)[0]);
  }

  return randomTimes;
};

const generateRandomAvailableTimesByDate = (numWeeks: number, timesPerDay: string[]): AvailableTimesByDate => {
  const result: AvailableTimesByDate = {};

  Array.from({ length: numWeeks * 7 }).forEach((_, i) => {
    const currentDate = addDays(new Date(), i);

    if (i % 7 === 0) {
      const randomAvailableDays = getRandomTimes(['0', '1', '2', '3', '4', '5', '6'], 2);
      randomAvailableDays.forEach((day) => {
        const formattedDate = format(addDays(currentDate, parseInt(day)), 'yyyy-MM-dd');
        result[formattedDate] = getRandomTimes(timesPerDay, 3);
      });
    }
  });

  return result;
};

export const generateRandomDateAndTimes = (): AvailableTimesByDate => {
  const numWeeks = 1;
  const timesPerDay = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
  return generateRandomAvailableTimesByDate(numWeeks, timesPerDay);
};
