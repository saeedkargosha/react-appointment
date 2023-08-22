import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

interface Input {
  firstName: string;
  lastName: string;
  email: string;
}

export default function InfoPage() {
  const param = useParams<{ time: string }>();
  const { register, handleSubmit } = useForm<Input>();
  const navigate = useNavigate();

  const onSubmit = (data: Input) => {
    console.log('Appointment set:', {
      date: param.time,
      ...data,
    });
    navigate(-1);
  };

  if (typeof param.time === 'undefined') return <div>{'There is no time '}</div>;

  const formattedTime = format(new Date(param.time), 'HH:mm');
  const formattedDate = format(new Date(param.time), 'EEEE, MMMM dd, yyyy');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={clsx('grid grid-cols-1 md:grid-cols-[2fr_1px_2fr] gap-8 mt-20 bg-white rounded shadow-lg p-8', {})}
      >
        <div>{`${formattedTime} , ${formattedDate}`}</div>
        <div className='h-full w-[1px] bg-gray-200' />
        <div className='grid gap-6'>
          <h2>Enter Details</h2>
          <div>
            <label htmlFor='first_name' className='block mb-2 text-sm font-medium text-gray-900 '>
              First name
            </label>
            <input
              type='text'
              id='first_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='John'
              required
              {...register('firstName')}
            />
          </div>
          <div>
            <label htmlFor='last_name' className='block mb-2 text-sm font-medium text-gray-900 '>
              Last name
            </label>
            <input
              type='text'
              id='last_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='Doe'
              required
              {...register('lastName')}
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>
              Email address
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='john.doe@company.com'
              required
              {...register('email')}
            />
          </div>
          <button
            type='submit'
            className='py-2.5 px-5 mr-2 mb-2 text-white inline-block w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm text-center '
          >
            {'Submit'}
          </button>
        </div>
      </div>
    </form>
  );
}
