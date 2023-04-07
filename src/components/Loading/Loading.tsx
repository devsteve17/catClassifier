import React from 'react';
import { Card } from 'components/Card/Card';

export const Loading = () => {
  return (
    <Card>
      <div className="flex justify-center content-center flex-col w-full text-center">
        <div className="mt10 w-full text-center">
          <svg className="animate-spin mt-10 ml-32 h-14 w-14 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="Blue" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <p className="mt-10 text-lg w-full">Processing your image, please wait...</p>
      </div>
    </Card>
  )
}