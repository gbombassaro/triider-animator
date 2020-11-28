import {startOfMonth, endOfMonth, eachDayOfInterval} from 'date-fns';
import {parseDate} from '../utils/parser';

const configs = () => {

  const now = new Date();
  const firstDayMonth = startOfMonth(now);
  const lastDayMonth = endOfMonth(now);
  const availableDays = eachDayOfInterval({start: firstDayMonth, end: lastDayMonth});
  const parsedAvailableDays = availableDays.map(entry => parseDate(entry));

  const availableShifts = [
    { id: "morning", label: "Manhã" },
    { id: "afternoon", label: "Tarde" },
    { id: "night", label: "Noite" }
  ];

  return { availableShifts, availableDays: parsedAvailableDays }
};

export default configs;