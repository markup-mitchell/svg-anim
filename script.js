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

const leftLense = document.querySelector('#leftLense');
const leftLenseLength = leftLense.getTotalLength();
leftLense.style.transition = leftLense.style.WebkitTransition = 'none';
leftLense.style.strokeDasharray = leftLenseLength + ' ' + outerHairLength; 
leftLense.style.strokeDashoffset = leftLenseLength;
leftLense.getBoundingClientRect();
leftLense.style.transition = leftLense.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
leftLense.style.strokeDashoffset = '0';

const rightLense = document.querySelector('#rightLense');
const rightLenseLength = rightLense.getTotalLength();
rightLense.style.transition = rightLense.style.WebkitTransition = 'none';
rightLense.style.strokeDasharray = rightLenseLength + ' ' + outerHairLength; 
rightLense.style.strokeDashoffset = rightLenseLength;
rightLense.getBoundingClientRect();
rightLense.style.transition = rightLense.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
rightLense.style.strokeDashoffset = '0';

const leftBrow= document.querySelector('#leftBrow');
const leftBrowLength = leftBrow.getTotalLength();
leftBrow.style.transition = leftBrow.style.WebkitTransition = 'none';
leftBrow.style.strokeDasharray = leftBrowLength + ' ' + outerHairLength; 
leftBrow.style.strokeDashoffset = leftBrowLength;
leftBrow.getBoundingClientRect();
leftBrow.style.transition = leftBrow.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
leftBrow.style.strokeDashoffset = '0';

const rightBrow= document.querySelector('#rightBrow');
const rightBrowLength = rightBrow.getTotalLength();
rightBrow.style.transition = rightBrow.style.WebkitTransition = 'none';
rightBrow.style.strokeDasharray = rightBrowLength + ' ' + outerHairLength; 
rightBrow.style.strokeDashoffset = rightBrowLength;
rightBrow.getBoundingClientRect();
rightBrow.style.transition = rightBrow.style.WebkitTransition = 'stroke-dashoffset 1s ease-in-out';
rightBrow.style.strokeDashoffset = '0';