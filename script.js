const pod = document.querySelector('#pod');
const seed = document.querySelector('#seed');

const pod2 = document.querySelector('#pod2');
const seed2 = document.querySelector('#seed2');

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

pod.style.transition = pod.style.WebkitTransition = 'all 2s ease-in-out';
// pod.style.transition = pod.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
// seed.style.transition = seed.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
pod.style.transition = pod.style.WebkitTransition = 'fill-opacity 2s ease-in-out';
seed.style.transition = seed.style.WebkitTransition = 'all 7s ease-in-out';

pod2.style.fill = 'linear-gradient(#1FD370, #2988E2)';
pod.style.fillOpacity = 1;
seed.style.fillOpacity = 1;
seed2.style.fill = 'linear-gradient(#FFDB22,#F74E1E)';

pod.style.strokeDashoffset = '0';
seed.style.strokeDashoffset = '0';

 
 pod.style.fill = 'url(#grad1)';
 seed.style.fill = 'url(#grad2)';