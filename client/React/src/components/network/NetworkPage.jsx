import React from 'react';

function NetworkPage() {
  return (
    <div className="flex flex-col h-screen bg-champagne flex-wrap items-center pb-10">
      <div className=" flex box-content h-64 w-64 ml-20 mr-20 mt-10 rounded-[22px] justify-center text-center items-center bg-green">
        <div className=" font-bold text-1xl">2% of data used for this period</div>
      </div>
      <div className="flex h-64 w-64 ml-20 mr-20 mt-10 rounded-[22px] justify-center items-center bg-green">
        <div className=" p-2 font-bold text-1xl">Signal strength 68%</div>
      </div>
      {/* <div className="flex h-64 w-64 ml-20 mr-20 mt-10 rounded-[22px] justify-center items-center bg-green">
        <div>Signal strength 68%</div>
      </div> */}
    </div>

  );
}

export default NetworkPage;
