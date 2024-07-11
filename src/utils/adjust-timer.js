const adjustTimer = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  console.log(minutes);
  let hours = (seconds / 3600).toFixed(0);
  let sec = seconds % 60;

  return `${hours}:${minutes}:${sec}`;
};

export default adjustTimer;
