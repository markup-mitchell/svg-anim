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

const outerHair = document.querySelector('#outerHair');
const outerHairLength = outerHair.getTotalLength();
outerHair.style.transition = outerHair.style.WebkitTransition = 'none';
outerHair.style.strokeDasharray = outerHairLength + ' ' + outerHairLength; 
outerHair.style.strokeDashoffset = outerHairLength;
outerHair.getBoundingClientRect();
outerHair.style.transition = outerHair.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
outerHair.style.strokeDashoffset = '0';

const outerFace = document.querySelector('#outerFace');
const outerFaceLength = outerFace.getTotalLength();
outerFace.style.transition = outerFace.style.WebkitTransition = 'none';
outerFace.style.strokeDasharray = outerFaceLength + ' ' + outerFaceLength; 
outerFace.style.strokeDashoffset = outerFaceLength;
outerFace.getBoundingClientRect();
outerFace.style.transition = outerFace.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
outerFace.style.strokeDashoffset = '0';

const innerHair = document.querySelector('#innerHair');
const innerHairLength = innerHair.getTotalLength();
innerHair.style.transition = innerHair.style.WebkitTransition = 'none';
innerHair.style.strokeDasharray = innerHairLength + ' ' + outerHairLength; 
innerHair.style.strokeDashoffset = innerHairLength;
innerHair.getBoundingClientRect();
innerHair.style.transition = innerHair.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
innerHair.style.strokeDashoffset = '0';