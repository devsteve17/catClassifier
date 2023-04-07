import React from 'react';

type TCard = {
  children: JSX.Element;
}

export const Card:React.FC<TCard> = ({children}) => {
  return (
    <div className="flex justify-center">
      <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 mt-36">
        {children}
      </div>
    </div>
  )
}