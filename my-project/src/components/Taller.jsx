import React from 'react';
import aceitunas from "../assets/icons/aceitunas-icon.png"



const Taller = ({
  imageSrc,
  title,
  textItems,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="p-1">
        <img src={imageSrc} alt="" className="w-[90vw] border-[40px] border-[--brown] rounded-xl" />
      </div>
      <div className="flex w-full py-4 h-100 bg-[--beige-clear]">
        <div className="w-full">
          <p className="p-6 ps-[10%] text-6xl text-[--brown]">{title}</p>
          <div className="p-6 ps-[8%] w-full border-t-2 border-[--beige]">
            {textItems.map((item, index) => (
              <span key={index} className="flex items-center monserrat text-2xl text-[--gray]">
                <img src={aceitunas} alt="aceitunas" className="w-10" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taller;