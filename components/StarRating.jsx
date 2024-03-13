'use client'

import React, { useState } from 'react';

export function StarRating({ className, name = 'rating', textRating = false, initialRating = 0}) {
  const [rating, setRating] = useState(initialRating);

  const zeroColour = 'bg-neutral-content';
  const activeColour = 'bg-orange-400';

  const handleRatingChange = (event) => {
    const selectedRating = parseInt(event.target.value);
    setRating(selectedRating);
  };

  return (
    <div className={`rating ${className}`}>
      <input
        type="radio" name={name} value="1"
        className={`mask mask-star-2 ${rating === 0 ? zeroColour : activeColour}`}
        onChange={handleRatingChange}
        checked={rating === 1}
      />

      <input
        type="radio" name={name} value="2"
        className={`mask mask-star-2 ${rating === 0 ? zeroColour : activeColour}`}
        onChange={handleRatingChange}
        checked={rating === 2}
      />

      <input
        type="radio" name={name} value="3"
        className={`mask mask-star-2 ${rating === 0 ? zeroColour : activeColour}`}
        onChange={handleRatingChange}
        checked={rating === 3}
      />

      <input
        type="radio" name={name} value="4"
        className={`mask mask-star-2 ${rating === 0 ? zeroColour : activeColour}`}
        onChange={handleRatingChange}
        checked={rating === 4}
      />

      <input
        type="radio" name={name} value="5"
        className={`mask mask-star-2 ${rating === 0 ? zeroColour : activeColour}`}
        onChange={handleRatingChange}
        checked={rating === 5}
      />

      <div hidden={!textRating} className='ms-2 text-xl text-primary font-semibold'>{rating}</div>
    </div>
  );
}
