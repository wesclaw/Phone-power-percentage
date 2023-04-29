let power;
const root = document.documentElement;
const powerRed = getComputedStyle(root).getPropertyValue('--powerRed');
const powerGreen = getComputedStyle(root).getPropertyValue('--powerGreen');
const body = document.querySelector('body');
const phone_input = document.getElementById('phone-input');
const power_wrap = document.createElement('div');
power_wrap.classList.add('power-wrap');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const percentText = document.createElement('h1');
percentText.textContent = '100%';
const bar = document.createElement('div');
bar.classList.add('bar');
body.append(wrapper);
wrapper.append(percentText);
wrapper.append(power_wrap);
power_wrap.append(bar);
const noNegNum = document.querySelector('.no-neg-num');
const betweenNum = document.querySelector('.between-num');
phone_input.addEventListener('input', () => {
  power = phone_input.value;
  bar.style.width = power + '%';
  percentText.textContent = power + '%';
  if (power < 0) {
    noNegNum.style.display = 'flex';
    betweenNum.style.display = 'none';
    percentText.textContent = '0%';
    bar.style.width = '0%';
  } else if (/\\b00{2,}\\b/.test(power)) {
    betweenNum.style.display = 'flex';
    percentText.textContent = '0%';
    bar.style.width = '0%';
  } else if (/\b00+\b/.test(power)) {
    betweenNum.style.display = 'flex';
    percentText.textContent = '0%';
    bar.style.width = '0%';
  } else if (/^0\d+/.test(power)) {
    noNegNum.style.display = 'none';
    betweenNum.style.display = 'flex';
    percentText.textContent = '0%';
    bar.style.width = '0%';
  } else if (power.includes('.')) {
    noNegNum.style.display = 'none';
    betweenNum.style.display = 'flex';
    bar.style.width = '0%';
    percentText.textContent = '0%';
  } else if (/\b00\d/.test(power)) {
    betweenNum.style.display = 'flex';
    percentText.textContent = '0%';
    bar.style.width = '0%';
  } else if (power.length > 3) {
    noNegNum.style.display = 'none';
    betweenNum.style.display = 'flex';
    bar.style.width = '100%';
    percentText.textContent = '100%';
  } else if (power > 100) {
    noNegNum.style.display = 'none';
    betweenNum.style.display = 'flex';
    bar.style.width = '100%';
    percentText.textContent = '100%';
  } else if (power === '') {
    percentText.textContent = '100%';
    bar.style.width = '100%';
    bar.style.background = powerGreen;
    noNegNum.style.display = 'none';
    betweenNum.style.display = 'none';
  } else if (power < 20) {
    bar.style.background = powerRed;
    noNegNum.style.display = 'none';
    betweenNum.style.display = 'none';
  } else if (power >= 20) {
    bar.style.background = powerGreen;
    noNegNum.style.display = 'none';
    betweenNum.style.display = 'none';
  }
});
const clock = document.createElement('p');
clock.style = 'font-size: 3rem';
clock.style.color = 'black';
wrapper.append(clock);
setInterval(() => {
  let time = new Date();
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  clock.textContent = h + ':' + m + ':' + s;
}, 1000);
