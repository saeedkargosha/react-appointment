import { useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import { format, isSameDay } from 'date-fns';
import { AvailableTimesByDate } from 'src/@types';
import { Value } from 'node_modules/react-calendar/dist/esm/shared/types';
import { Description } from './Description';
import clsx from 'clsx';
import { Times } from './Times';

const DATE_PARAM = 'date';
const DATE_FORMAT = 'yyyy-MM-dd';

export function AvailableDate({ availableTimes }: { availableTimes: AvailableTimesByDate }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedDateTimes, setSelectedDateTimes] = useState<string[]>([]);

  const handleDateChange = useCallback(
    (date: Value, _event: React.MouseEvent<HTMLButtonElement>) => {
      setSearchParams((params) => {
        if (date === null) {
          params.delete(DATE_PARAM);
        } else {
          params.set(DATE_PARAM, format(date as Date, DATE_FORMAT));
        }
        return params;
      });

      if (availableTimes) {
        setSelectedDateTimes(availableTimes[format(date as Date, DATE_FORMAT)] || []);
      }
    },
    [availableTimes, setSearchParams],
  );

  const availableDates = useMemo(() => {
    if (!availableTimes) return [];
    return Object.keys(availableTimes).map((date) => new Date(date));
  }, [availableTimes]);

  const isDateAvailable = useCallback(
    (date: Date) => {
      return availableDates.some((availableDate) => isSameDay(availableDate, date));
    },
    [availableDates],
  );

  const dateParam = searchParams.get(DATE_PARAM);
  const selectedDate = dateParam ? new Date(dateParam) : null;

  return (
    <div
      className={clsx('grid grid-cols-1 md:grid-cols-[2fr_1px_2fr] gap-8 mt-20 bg-white rounded shadow-lg p-8', {
        '!md:grid-cols-[2fr_1px_3fr]': selectedDateTimes.length > 0,
      })}
    >
      <Description />
      <div className='h-full w-[1px] bg-gray-200' />
      <div className='m-auto'>
        <h3 className='text-xl font-semibold text-neutral-700 mb-8'>{'Select a Date & Time'}</h3>
        <div
          className={clsx('grid grid-cols-1 gap-4', {
            'md:grid-cols-[2fr_1fr]': selectedDateTimes.length > 0,
          })}
        >
          <Calendar
            minDate={new Date()}
            defaultView='month'
            nextAriaLabel='Go to next month'
            prevAriaLabel='Go to prev month'
            tileDisabled={({ date }) => !isDateAvailable(date)}
            value={selectedDate ? (isDateAvailable(selectedDate) ? selectedDate : null) : null}
            onChange={handleDateChange}
          />
          <Times selectedDateTimes={selectedDateTimes} selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
}
