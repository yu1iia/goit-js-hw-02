'use strict';

const checkForSpam = function (message) {
  message = message.toLowerCase();

  let checkResult;
  if (message.includes('spam')) {
    checkResult = true;
  } else if (message.includes('sale')) {
    checkResult = true;
  } else checkResult = false;

  return checkResult;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
