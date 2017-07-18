function draw(pathSelector) {
  const path = document.querySelector(pathSelector);
  const pathLength = path.getTotalLength();
  path.style.transition = path.style.WebkitTransition = 'none';
  path.style.strokeDasharray = pathLength + ' ' + pathLength; 
  path.style.strokeDashoffset = pathLength;
  path.getBoundingClientRect();
  path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-out';
  path.style.strokeDashoffset = '0';
}

let paths = document.querySelectorAll('path');

console.log(paths);

paths.forEach(function(path) {
  let pathSelector = `#${path.id}`;
  draw(pathSelector);
  console.log(path);
});