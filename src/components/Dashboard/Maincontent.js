import React from 'react';


const ColdStart = () => {
  return (
    <div className="flex-1 p-0 sm:p-0 bg-gray-50 mt-[0] sm:mt-[42px]">
     
      <div className="flex flex-col sm:flex-row justify-center gap-[37px] px-[0] 2xl:px-[140px] xl:px-[80px] md:px-[50px]">
       
        <div className="bg-white p-[20px] sm:p-[54px] rounded-3xl w-sm flex flex-col items-center " style={{ boxShadow: '0px 5px 9px rgba(0, 0, 0, 0.07)' }}>
          <div className="w-full h-[153px] bg-[#E9EEF4] mb-[27px]"></div>
          <h2 className="text-2xl font-bold mb-2 text-center mb-[31px]">Create your first post</h2>
          <p className="text-sm text-gray-500 text-center  mb-[31px]">
            Jump in and start creating. You can use our chat interface to tell us about your client or project
          </p>
          <button className="bg-[#7E22CD] hover:bg-[transparent] hover:border hover:border-[#7E22CD] hover:text-black text-base font-semibold text-white h-[50px] px-4 py-2 rounded-lg">
            Create Content
          </button>
        </div>
      
        <div className="bg-white p-[20px] sm:p-[54px] rounded-3xl w-sm flex flex-col items-center relative" style={{ boxShadow: '0px 5px 9px rgba(0, 0, 0, 0.07)' }}>
          <span className="absolute top-20 right-20 bg-[#BE37BE] text-white text-base px-4 py-1 rounded-[40px] ">Recommended</span>
          <div className="w-full h-[153px] bg-[#E9EEF4] mb-[27px]"></div>
          <h2 className="text-2xl font-bold mb-2 text-center mb-[31px]">Teach LaunchPal about your brand</h2>
          <p className="text-sm text-gray-500 text-center mb-4">
            Quickly train our model on your brand & messaging to get the industry leading content creation
          </p>
          <button className="bg-[#7E22CD] hover:bg-[transparent] hover:border hover:border-[#7E22CD] hover:text-black text-base font-semibold text-white h-[50px] px-4 py-2 rounded-lg">
            Train LaunchPal on your brand
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColdStart;