const pod = document.querySelector('#pod');
const seed = document.querySelector('#seed');

const podLength = pod.getTotalLength();
const seedLength = seed.getTotalLength();

pod.style.transition = pod.style.WebkitTransition = 'none';
seed.style.transition = seed.style.WebkitTransition = 'none';

pod.style.strokeDasharray = podLength + ' ' + podLength; 
seed.style.strokeDasharray = seedLength + ' ' + seedLength; 

pod.style.strokeDashoffset = podLength;
seed.style.strokeDashoffset = seedLength;

pod.getBoundingClientRect();
seed.getBoundingClientRect();

// pod.style.transition = pod.style.WebkitTransition = 'all 2s ease-in-out';
pod.style.transition = pod.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out, fill-opacity 5s';
seed.style.transition = seed.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out, fill-opacity 5s';

// pod.style.transition = pod.style.WebkitTransition = 'fill-opacity 5s ease-in-out';
// seed.style.transition = seed.style.WebkitTransition = 'fill-opacity 5s ease-in-out';
// // seed.style.transition = seed.style.WebkitTransition = 'all 4s ease-in-out';

function showColor() {
pod.style.fillOpacity = 1;
seed.style.fillOpacity = 1;
};

pod.style.strokeDashoffset = '0';
seed.style.strokeDashoffset = '0';
 
pod.style.fill = 'url(#grad1)';
seed.style.fill = 'url(#grad2)';