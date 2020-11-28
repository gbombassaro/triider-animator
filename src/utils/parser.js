import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

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

export const parseDayOfWeek = param => {
  return format(param, 'EEEE').toLowerCase();
}

export const parseCompleteDate = param => {
  if (!param) return null;
  const month = format(param, 'MMMM', {locale: ptBR});
  const day = format(param, 'd');
  return `${day} de ${month}`;
}