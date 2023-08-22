import { useState, useEffect } from 'react';
import { ApiService } from '@lib/content';
import { AvailableDate } from './components/AvailableDate';
import { AvailableTimesByDate } from 'src/@types';

export default function HomePage() {
  const [availableTimes, setAvailableTimes] = useState<AvailableTimesByDate | null>(null);

  useEffect(() => {
    const fetchedContent = ApiService.fetchContent();
    setAvailableTimes(fetchedContent.availableTimesByDate);
  }, []);

  if (!availableTimes) return <div>{'Loading'}</div>;

  return <AvailableDate availableTimes={availableTimes} />;
}
