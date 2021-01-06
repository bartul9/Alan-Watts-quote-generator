"use strict";

const btn = document.querySelector("#btnOne");
const text = document.querySelector("#text");

const quotes = [
  "Trying to define yourself is like trying to bite your own teeth",
  "We seldom realize, for example that our most private thoughts and emotions are not actually our own. For we think in terms of languages and images which we did not invent, but which were given to us by our society.",
  "Man suffers only because he takes seriously what the Gods made for fun.",
  "This is the real secret of life — to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.",
  "Muddy water is best cleared by leaving it alone.",
  "You are an aperture through which the universe is looking at and exploring itself.",
  "Every intelligent individual wants to know what makes him tick, and yet is at once fascinated and frustrated by the fact that oneself is the most difficult of all things to know.",
  "A scholar tries to learn something everyday; a student of Buddhism tries to unlearn something daily.",
  "Problems that remain persistently insoluble should always be suspected as questions asked in the wrong way.",
  "When we attempt to exercise power or control over someone else, we cannot avoid giving that person the very same power or control over us.",
  "One is a great deal less anxious if one feels perfectly free to be anxious, and the same may be said of guilt.",
  "The world is filled with love-play, from animal lust to sublime compassion.",
  "What we have to discover is that there is no safety, that seeking is painful, and that when we imagine that we have found it, we don’t like it.",
  "Words can be communicative only between those who share similar experiences.",
  "If you cannot trust yourself, you cannot even trust your mistrust of yourself – so that without this underlying trust in the whole system of nature you are simply paralyzed.",
  "Technology is destructive only in the hands of people who do not realize that they are one and the same process as the universe.",
  "Hospitals should be arranged in such a way as to make being sick an interesting experience. One learns a great deal sometimes from being sick.",
  "Normally, we do not so much look at things as overlook them.",
  "Our pleasures are not material pleasures, but symbols of pleasure – attractively packaged but inferior in content.",
  "It is hard indeed to notice anything for which the languages available to us have no description.",
  "It’s better to have a short life that is full of what you like doing, than a long life spent in a miserable way.",
  "Society is our extended mind and body.",
];

btn.addEventListener("click", function () {
  let i = Math.floor(Math.random() * quotes.length);
  text.innerText = quotes[i];
  console.log(i);
});
