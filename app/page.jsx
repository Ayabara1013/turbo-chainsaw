'use client'


import { BasicModal } from '@/components/BasicModal';
import { StarRating } from '@/components/StarRating';
import { CreatorRatingModal } from '@/components/modals/CreatorRatingModal';
import { useState } from 'react';



export default function Home() {
  const [rating1, setRating1] = useState(null);


  return (
    <main className="flex min-h-screen flex-col items-center p-24 border">
      <div className='border m-4 p-4'>
        <span className='p-2 text-3xl text-white font-bold uppercase'>prox</span><span className='p-2 rounded-md text-3xl text-base-300 font-bold lowercase bg-orange-300'>hub</span>
      </div>

      {/* <div className='border p-4'>
        <BasicModal className={'flex flex-col gap-2'}>
          <input type="text" placeholder="creator name" className="input input-bordered input-primary w-full max-w-sm" />

          <div className="flex gap-2">
            <div className='text-xl text-primary font-semibold capitalize'>title</div>
            <StarRating name={'rating-modal-rating-1'} />
          </div>
          
          <div className="flex gap-2">
            <div className='text-xl text-primary font-semibold capitalize'>title</div>
            <StarRating name={'rating-modal-rating-2'} />
          </div>
          
          <div className="flex gap-2">
            <div className='text-xl text-primary font-semibold capitalize'>title</div>
            <StarRating name={'rating-modal-rating-3'} />
          </div>
          
          <div className="flex gap-2">
            <div className='text-xl text-primary font-semibold capitalize'>title</div>
            <StarRating name={'rating-modal-rating-4'} />
          </div>
          
          <div className="flex gap-2">
            <div className='text-xl text-primary font-semibold capitalize'>title</div>
            <StarRating name={'rating-modal-rating-5'} />
          </div>
        </BasicModal>
      </div> */}

      <div>
        <CreatorRatingModal />
      </div>

      <div className='border p-4'>
        <StarRating textRating initialRating={5}/>
      </div>

    </main>
  );
}

/**
 * what are the ratings?
 * 
 * flexibility
 * 
 * price
 * 
 * appearance
 * 
 * options
 * 
 * supports
 * 
 * service
 * 
 * accuracy (Should be special where it doesnt actual affect total rating)
 * 
 * 
 */