import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import CanvasJSReact from '@canvasjs/react-charts';
import Plot from 'react-plotly.js';
import { MdOutlineBusAlert } from "react-icons/md";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import { FcDepartment } from "react-icons/fc";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { HiCurrencyBangladeshi } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
//import { get_admin_dashboard_index_data } from "../../store/Reducers/dashboardIndexReducer";

const userDashboard = () => {
  //const { userInfo } = useSelector((state) => state.auth);
  const { totalProduct, totalSeller,  recentMessage } =
    useSelector((state) => state.dashboardIndex);

  const dispatch = useDispatch();

 // useEffect(() => {
   // dispatch(get_admin_dashboard_index_data());
  //}, []);

  return (
    <div className="px-2 md:px-7 py-5 grid">
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">{totalSeller}</h2>
            <span className="text-md font-medium">Toll Collection</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            
            <HiCurrencyBangladeshi className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">{totalProduct}</h2>
            <span className="text-md font-medium">Number of Vehicle</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl">
            <MdOutlineBusAlert className="text-[#00cfe8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">{totalSeller}</h2>
            <span className="text-md font-medium">Total Employee</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <FaUsersBetweenLines className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">{totalSeller}</h2>
            <span className="text-md font-medium">Toll Collection</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <FcDepartment className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
                      </div>
                      
    </div>
  );
};

export default userDashboard;
