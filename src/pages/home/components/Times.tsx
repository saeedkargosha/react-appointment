import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

interface TimeProps {
  selectedDateTimes: string[];
  selectedDate: Date | null;
}

export function Times({ selectedDateTimes, selectedDate }: TimeProps) {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const handleTime = (time: string) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (!selectedDate) return;
    const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    const dateString = `${formattedDate}T${selectedTime}`;
    navigate(`/info/${dateString}`);
  };

  if (selectedDateTimes.length === 0) return null;
  if (selectedDate == null) return null;

  return (
    <div role='list' className='flex flex-col items-center mt-3 min-w-[10rem]'>
      <h4 className='text-xs text-neutral-700 mb-4 font-semibold'>{format(selectedDate, 'EEEE, MMMM dd')}</h4>
      {selectedDateTimes.map((time: string) => (
        <div role='listitem' className='flex w-full'>
          <button
            type='button'
            onClick={() => handleTime(time)}
            onKeyDown={() => handleTime(time)}
            className='py-2.5 px-5 block w-full mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 '
          >
            {time}
          </button>
          {selectedTime?.includes(time) && (
            <button
              onClick={handleNext}
              onKeyDown={handleNext}
              className='py-2.5 px-5 mr-2 mb-2 text-white inline-block w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm text-center 800'
            >
              {'Next'}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
