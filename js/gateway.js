(() => {
  const wait = 5000;
  const button = document.querySelector('#enterButton');
  let timer; let navigating = false;
  function enter() { if (navigating) return; navigating = true; clearTimeout(timer); document.body.classList.add('leaving'); window.setTimeout(() => { window.location.assign('index.html'); }, 720); }
  timer = window.setTimeout(enter, wait);
  button.addEventListener('click', enter);
})();
