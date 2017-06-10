const pod = document.querySelector('#pod');
const podLength = pod.getTotalLength();
pod.style.transition = pod.style.WebkitTransition = 'none';
pod.style.strokeDasharray = podLength + ' ' + podLength; 
pod.style.strokeDashoffset = podLength;
pod.getBoundingClientRect();
pod.style.transition = pod.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out, fill-opacity 1s 1s, stroke-opacity 2s .5s';
pod.style.fillOpacity = 1;
pod.style.strokeDashoffset = '0';
pod.style.strokeOpacity = 0;
pod.style.fill = 'url(#grad1)';

const seed = document.querySelector('#seed');
const seedLength = seed.getTotalLength();
seed.style.transition = seed.style.WebkitTransition = 'none';
seed.style.strokeDasharray = seedLength + ' ' + seedLength; 
seed.style.strokeDashoffset = seedLength;
seed.getBoundingClientRect();
seed.style.transition = seed.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out, fill-opacity 1s 1s, stroke-opacity 2s .5s';
seed.style.fillOpacity = 1;
seed.style.strokeDashoffset = '0';
seed.style.strokeOpacity = 0;
seed.style.fill = 'url(#grad2)';

// -------------------------------------------------------------------

const pod2 = document.querySelector('#pod2');
// const pod2Length = pod2.getTotalLength();
pod2.style.transition = pod2.style.WebkitTransition = 'none';
// pod2.style.strokeDasharray = pod2Length + ' ' + pod2Length; 
// pod2.style.strokeDashoffset = pod2Length;
// pod2.getBoundingClientRect();
// pod2.style.transition = pod2.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out, fill-opacity 1s 1s, stroke-opacity 2s .5s';
// pod2.style.fillOpacity = 1;
// pod2.style.strokeDashoffset = '0';
// pod2.style.strokeOpacity = 0;
// pod2.style.fill = 'url(#grad1)';

const seed2 = document.querySelector('#seed2');
// const seed2Length = seed2.getTotalLength();
seed2.style.transition = seed2.style.WebkitTransition = 'none';
// seed2.style.strokeDasharray = seed2Length + ' ' + seed2Length; 
// seed2.style.strokeDashoffset = seed2Length;
// seed2.getBoundingClientRect();
// seed2.style.transition = seed2.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out, fill-opacity 1s 1s, stroke-opacity 2s .5s';
// seed2.style.fillOpacity = 1;
// seed2.style.strokeDashoffset = '0';
// seed2.style.strokeOpacity = 0;
seed2.style.fill = 'url(#grad2)';

// -------------------------------------------------------------------

const POD3 = document.querySelector('#pod3');