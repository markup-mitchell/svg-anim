const pod = document.querySelector('#pod');
const seed = document.querySelector('#seed');

const podLength = pod.getTotalLength();
const seedLength = seed.getTotalLength();

function draw() {
pod.style.transition = pod.style.WebkitTransition = 'none';
seed.style.transition = seed.style.WebkitTransition = 'none';

pod.style.strokeDashArray = podLength + ' ' + podLength; 
seed.style.strokeDashArray = seedLength + ' ' + seedLength; 

pod.style.strokeDashOffset = podLength;
seed.style.strokeDashOffset = seedLength;

pod.style.transition = pod.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
seed.style.transition = seed.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';

pod.style.strokeDashOffset = '0';
seed.style.strokeDashOffset = '0';
}