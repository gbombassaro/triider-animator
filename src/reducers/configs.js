import {startOfMonth, endOfMonth, eachDayOfInterval} from 'date-fns';
import {parseDate, parseDayOfWeek, parseShifts} from '../utils/parser';

const getInitialState = () => {
  const now = new Date();
  const firstDayMonth = startOfMonth(now);
  const lastDayMonth = endOfMonth(now);
  const availableDays = eachDayOfInterval({start: firstDayMonth, end: lastDayMonth});
  const availableShifts = [
    { id: "morning", label: "Manhã" },
    { id: "afternoon", label: "Tarde" },
    { id: "night", label: "Noite" }
  ];
  return { availableShifts, daysOfMonth: availableDays }
}

const setNewConfig = (state, action) => {
  const {payload} = action;
  const availableShifts = payload.day_shifts.map(entry => { return {id: entry, label: parseShifts(entry)} });
  const availableDays = payload.week_days.map(entry => { return {day: entry} });
  const daysOfMonth = state.daysOfMonth.map(entry => { return {date: parseDate(entry), day: parseDayOfWeek(entry), originalDate: entry}})
  return {...state.configs, availableShifts, availableDays, daysOfMonth};
}

const configs = (state, action) => {
  switch(action.type) {
    case 'SET_NEW_CONFIG':
      return setNewConfig(state, action);
    default:
      return getInitialState();
  }
};

export default configs;