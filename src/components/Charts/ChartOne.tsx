import { ApexOptions } from 'apexcharts';
import { AiOutlineCaretDown } from 'react-icons/ai';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import useGeneratePrevMonths from '../../hooks/useGeneratePrevMonths';

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const [filter, setFilter] = useState('month');
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Product One',
        data: [...Array(30)].map((e) => ~~(Math.random() * 30)),
      },
    ],
  });

  const dates = useGeneratePrevMonths(filter);

  const options: ApexOptions = {
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      height: 350,
      type: 'area',
      dropShadow: {
        enabled: true,
        color: '#623CEA14',
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },

      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: 'straight',
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 3,
      colors: '#fff',
      //add the color here if you have multiple date on graph nabin
      strokeColors: ['#3056D3', '#80CAEE'],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: 'category',
      categories: dates,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: '0px',
        },
      },
      min: 0,
      max: 100,
    },
  };

  // Generate array of dates for previous month

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 ">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-52.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className=" w-full">
              <div className="font-bold text-primary text-xl">
                447{' '}
                <span className=" text-sm font-normal">avg. 14.90 per day</span>
              </div>
              <div className="text-sm font-semibold">
                Total occupacy (30 days)
              </div>
            </div>
          </div>
          <div className="flex min-w-52.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-graydark"></span>
            </span>
            <div className="w-full">
              <div className="flex gap-2 items-center font-bold text-graydark text-xl">
                {' '}
                <AiOutlineCaretDown className=" text-red-600" /> -28.9%
              </div>
              <p className="text-sm font-semibold">
                Growth vs Previous 30 days
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button
              onClick={() => {
                setFilter('day');
                setState((prev) => ({
                  ...prev,
                  series: [
                    {
                      name: 'Product One',
                      data: [80],
                    },
                  ],
                }));
              }}
              className={`${filter === 'day' ? 'bg-white shadow-card' : ''} rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark`}
            >
              Day
            </button>
            <button
              onClick={() => {
                setFilter('week');
                setState((prev) => ({
                  ...prev,
                  series: [
                    {
                      name: 'Product One',
                      data: [...Array(7)].map((e) => ~~(Math.random() * 7)),
                    },
                  ],
                }));
              }}
              className={`${filter === 'week' ? 'bg-white shadow-card' : ''} rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark`}
            >
              Week
            </button>
            <button
              onClick={() => {
                setFilter('month');
                setState((prev) => ({
                  ...prev,
                  series: [
                    {
                      name: 'Product One',
                      data: [...Array(30)].map((e) => ~~(Math.random() * 30)),
                    },
                  ],
                }));
              }}
              className={`${filter === 'month' ? 'bg-white shadow-card' : ''} rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark`}
            >
              Month
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
