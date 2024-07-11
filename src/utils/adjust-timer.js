const adjustTimer = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let sec = seconds % 60;

  return String(minutes).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
};

export default adjustTimer;
