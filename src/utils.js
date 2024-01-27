import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

export const getMonthYear = (date = new Date(Date.now())) =>
  format(date, 'MMMM yyyy', { locale: pl });
