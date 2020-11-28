import {format, parseISO} from 'date-fns';

export const parseShifts = param => {
  switch(param) {
    case 'morning':
      return 'Manhã';
    case 'afternoon':
      return 'Tarde';
    case 'night': 
      return 'Noite';
    default:
      return param;
  }
}

export const parseDate = param => {
  return format(param, 'd/MM/yyyy');
}

export const parseFromAPI = param => {
  console.log(parseISO(param));
}