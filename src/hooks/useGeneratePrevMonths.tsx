import moment from 'moment';

const useGeneratePrevMonths = (filter?: string) => {
  const today = new Date();
  const previousMonth = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
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
      previousMonth.getFullYear(),
      previousMonth.getMonth(),
      i + today.getDate(),
    );
    // const splitDate = moment(date).format('LL').split(',')[0];
    dates.push(moment(date).format('LL'));
  }

  return dates;
};

export default useGeneratePrevMonths;
