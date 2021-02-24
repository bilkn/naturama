function isHoursPassed(hours, oldDate) {
  const today = new Date();
  const todayInMS = today.getTime();
  const oldDateInMS = oldDate.getTime();
  const result = todayInMS - oldDateInMS;
  return (result / 1000 / 60 / 60) >= hours;
  /* return Math.round(result / 1000 / 60 / 60) >= hours; */
}
export default isHoursPassed;
