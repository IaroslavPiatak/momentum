function setBackgroundImage() {
  const now = new Date();
  const hour = now.getHours();
  const main = document.querySelector('.main');
  if(hour >= 0 && hour< 6) {
    main.style.background = 'url(\'../images/01.jpg\') no-repeat center/cover';
  }
  else if (hour >=6 && hour < 12) {
    main.style.background = 'url(\'../images/02.jpg\') no-repeat center/cover';
  }
  else if (hour >=12 && hour < 18) {
    main.style.background = 'url(\'../images/03.jpg\') no-repeat center/cover';
  } 
  else {
    main.style.background = 'url(\'../images/04.jpg\') no-repeat center/cover';
  }
}
setInterval(setBackgroundImage, 21600000);
setBackgroundImage();

