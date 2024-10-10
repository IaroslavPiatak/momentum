function updateTimeAndDate() {
  const now = new Date();

  const hourse = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.querySelector(
    ".time"
  ).textContent = `${hourse}:${minutes}:${seconds}`;

  const day = String(now.getDate()).padStart(2, "0");
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const weekdays = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];
  const month = months[now.getMonth()];
  const weekday = weekdays[now.getDay() - 1];
  document.querySelector(".date").textContent = `${day} ${month}, ${weekday}`;
}
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();
