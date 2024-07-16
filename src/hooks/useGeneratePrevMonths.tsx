import moment from 'moment';

const useGeneratePrevMonths = (filter?: string) => {
  const today = new Date();
  const recentMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  let daysInPreviousMonth;

  if (filter === 'month') {
    daysInPreviousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0,
    ).getDate(); // Get number of days in previous month
  } else if (filter === 'week') {
    daysInPreviousMonth = 7;
  } else {
    daysInPreviousMonth = 1;
  }

  const dates = [];

  for (let i = 0; i < daysInPreviousMonth; i++) {
    const date = new Date(
      recentMonth.getFullYear(),
      recentMonth.getMonth(),
      today.getDate() - i,
    );
    // const splitDate = moment(date).format('LL').split(',')[0];
    dates.push(moment(date).format('LL'));
  }

  return dates.reverse();
};

export default useGeneratePrevMonths;
