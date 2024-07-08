import React from 'react';
import ChartOne from '../../components/Charts/ChartOne';

const RoomData = [
  { title: 'Available', number: '60' },
  { title: 'Cleaning', number: '40' },
  { title: 'Occupied', number: '20' },
];
const MealPlanData = [{ title: 'BB', number: '12' }];

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <div className=" text-center bg-[#6fcaad] rounded px-16 py-4 shadow">
          <h1 className=" text-white font-bold text-xl">Occupacy Count</h1>
          <h2 className=" text-graydark font-bold text-4xl py-3">6</h2>
          <p className=" text-sm">12 PAX checkins</p>
        </div>

        <div className=" border border-secondary rounded shadow p-2">
          <h1 className="  font-bold  text-blue-500 ">Room Status</h1>
          {RoomData.map((each, index) => (
            <div
              key={`${each.title}+${index}`}
              className=" flex justify-between items-center border-b p-2 text-xs"
            >
              <div>{each.title}</div>
              <div
                className={`${index === 0 ? 'bg-green-500' : index == 1 ? 'bg-orange-500' : 'bg-blue-700'} text-white p-0.5`}
              >
                {each.number}
              </div>
            </div>
          ))}
        </div>

        <div className=" border border-secondary rounded shadow p-2">
          <h1 className="  font-bold  text-blue-500 ">Meal Plan</h1>
          {MealPlanData.map((each, index) => (
            <div
              key={`${each.title}+${index}`}
              className=" flex justify-between items-center border-b p-2 text-xs"
            >
              <div>{each.title}</div>
              <div
                className={`${index === 0 ? 'bg-green-500' : index == 1 ? 'bg-orange-500' : 'bg-blue-700'} text-white p-0.5`}
              >
                {each.number}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />

        <div className="col-span-4 border border-secondary rounded shadow p-2">
          <h1 className="  font-bold  text-blue-500 ">Latest Checkins</h1>
          {RoomData.map((each, index) => (
            <div
              key={`${each.title}+${index}`}
              className=" flex justify-between items-center border-b p-2 text-xs"
            >
              <div>{each.title}</div>
              <div className={`bg-blue-600 text-white p-0.5`}>
                {each.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ECommerce;
