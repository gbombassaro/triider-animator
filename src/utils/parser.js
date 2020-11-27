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