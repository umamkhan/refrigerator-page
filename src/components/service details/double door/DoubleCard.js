import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DoubleCard = ({doubledetail}) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="xl:w-[70%] w-[90%] lg:w-[70%] h-[full] border border-gray-200 rounded shadow-md sm:ml-4">
        
        <div>
          <h1 className="text-2xl font-bold mt-10  mx-10">{doubledetail.heading}</h1>
        </div>
        <div className="flex justify-between mt-4">
          <div className="mx-10">
          <div className="flex gap-2">
          <FontAwesomeIcon icon={faStar} />
            <h1 className="mb-1">{doubledetail.ratings}</h1>
            </div>
            <div className="flex gap-3">
              <h1 className="font-bold">{doubledetail.price}</h1>
              <h1>{doubledetail.time}</h1>
            </div>
            <hr className="mt-4"/>
                <ul>
                <li className="mt-4  ">{doubledetail.desc1}</li>
              <li className="mt-4 ">{doubledetail.desc2}</li>
              </ul>
           
          </div>
          <div>
            <img
              className=" w-[110px] h-[110px] mr-6"
              src={doubledetail.image}
            />
            <button className="bg-black text-white mt-8 rounded p-2 hover:bg-slate-500 mb-4">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  DoubleCard;