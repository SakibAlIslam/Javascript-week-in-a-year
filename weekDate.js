const getWeekInYear = (year) => {
  var start = new Date(year, 0, 1);
  var end = new Date(year, 11, 31);
  var count = 1;
  var sDate;
  var eDate;
  var dateArr = [];

  while (start <= end) {
    if (start.getDay() === 6 || (dateArr.length === 0 && !sDate)) {
      sDate = new Date(start.getTime());
    }

    if ((sDate && start.getDay() === 5) || start.getTime() === end.getTime()) {
      eDate = new Date(start.getTime());
    }

    if (sDate && eDate) {
      dateArr.push({
        dteStartDateTime: sDate,
        dteEndDateTime: eDate,
        strPlanningHorizonName: "Week" + " " + count,
        intSubHorizonId: count,
      });
      sDate = undefined;
      eDate = undefined;
      count++;
    }

    start.setDate(start.getDate() + 1);
  }

  return dateArr;
};

console.log(getWeekInYear(2024));