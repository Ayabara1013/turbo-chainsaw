'use client'

import { useState } from 'react'
import { StarRating } from '../StarRating'


export function CreatorRatingModal({ className, children }) {
  const [ratings, setRatings] = useState({
    kitFlexibility: 0,
    price: null,
    appearance: null,
    detail: null,
    unitOptions: null,
    presupports: null,
    customerService: null,
    patreonTribesValue: null,
    discordValue: null,
    proxyAccuracy: null,
  });
  
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>
        rate ##this guy##
      </button>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          
          <div>rate ##creator##</div>

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

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}