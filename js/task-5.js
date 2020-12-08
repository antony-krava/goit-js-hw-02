const checkForSpam = function(message) {
  const checkSpam = message.toLowerCase();
  console.log(checkSpam.includes('sale') || checkSpam.includes('spam'));
};


checkForSpam('Latest technology news'); // false

checkForSpam('JavaScript weekly newsletter'); // false

checkForSpam('Get best sale offers now!'); // true

checkForSpam('[SPAM] How to earn fast money?'); // true