function isHoursPassed(hours, oldDate) {
  const today = new Date();
  const todayInMS = today.getTime();
  const oldDateInMS = oldDate.getTime();
  const result = todayInMS - oldDateInMS;
  console.log(result / 1000 / 60 / 60)
   console.log(result / 1000 / 60 / 60 >= hours);
  return result / 1000 / 60 / 60 >= hours;
  /* return Math.round(result / 1000 / 60 / 60) >= hours; */
}
export default isHoursPassed;
