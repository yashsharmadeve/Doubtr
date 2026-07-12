import { format } from 'date-fns';

export const formatDate = (date: Date) => {
  return format(date, 'EEEE, MMMM d');
};
