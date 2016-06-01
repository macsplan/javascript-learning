$(document).ready(function(){


var x = function(){
  return 'foo';
}


// select the body
var body = $('body');
console.log(body);

// select all paragraphs
var ps = $('p');
console.log(ps);

// Log "There are __ paragraph tags in this site"
console.log('There are ' + ps.length + ' paragraphs on this page');

// select all the heading 2 elements and log them
var headings = $('h2');
console.log(headings);

// select all the links in the nav

var navLinks = $('.nav li a').length;
console.log(navLinks);
// log how many links are in the nav

var totalLinks = $('a').length;
console.log(totalLinks);
// There are 9 points in the first section of the website  (Web Typography CSS3 Techniques Advanced Styling...). Select all of these.

// select the last point

var lastPoint = $('.learned li:last').text();
console.log(lastPoint);

// Select the sentence underneath "Work" that says "please take a second to check..."
var workSentence = $('.desc').text();
console.log(workSentence);
// skills and services is an unordered list, select it, but only it

var unorderedList = $('.skillMeter');
console.log(unorderedList);

// select all the skills inside the skill meter
var selectSkills =  $('.skillMeter li');
console.log(selectSkills);

// select the even skills

var skillsEven = $('.skillMeter li:nth-child(even)').length;
console.log(skillsEven);
// select the odd skills

var skillsOdd = $('.skillMeter li:nth-child(odd)').length;
console.log(skillsOdd);
// select every other skill starting at the thrid one

var thirdChild = $('.skillMeter li:nth-child(2n+3)').length;
console.log(thirdChild);
// select all spans

var allSpans = $('span').length;
console.log(allSpans);

// select the "good" and "hero" spans in a single selector
var select = $('.good, .hero').text();
console.log(select);

// Select the link inside the h1 at the top of the page AND the "© Hacker You" at the bottom of the page
var h1link - $('')
// select all the section divs

// select the process div

// select "your name, your email and your message" in the contact form

// select the "send message" input[type="text"]

// select all paragraphs in the footer

// select all the process boxes

// select all the work boxes

// select all the titles inside of them

}); // END doc ready
