export function Description() {
  return (
    <div className='flex flex-col relative'>
      <h1 className='text-2xl font-bold text-neutral-900'>{'Conference'}</h1>
      <h2 className='text-base text-neutral-600 mt-2 mb-8'>{'React conference'}</h2>
      <p className='text-base text-neutral-600 text-justify mb-12'>
        {
          'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.'
        }
      </p>
      <a href='https://react.dev/' className='font-medium text-blue-600  hover:underline absolute bottom-0'>
        {'Read more'}
      </a>
    </div>
  );
}
