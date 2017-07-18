const pod = document.querySelector('#pod');
const podLength = pod.getTotalLength();
pod.style.transition = pod.style.WebkitTransition = 'none';
pod.style.strokeDasharray = podLength + ' ' + podLength; 
pod.style.strokeDashoffset = podLength;
pod.getBoundingClientRect();
pod.style.transition = pod.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
pod.style.strokeDashoffset = '0';

const seed = document.querySelector('#seed');
const seedLength = seed.getTotalLength();
seed.style.transition = seed.style.WebkitTransition = 'none';
seed.style.strokeDasharray = seedLength + ' ' + seedLength; 
seed.style.strokeDashoffset = seedLength;
seed.getBoundingClientRect();
seed.style.transition = seed.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
seed.style.strokeDashoffset = '0';
