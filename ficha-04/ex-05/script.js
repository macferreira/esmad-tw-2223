function calculateDogAge(age) {
  let dogYears = 7 * age;
  console.log('Your doggie is ' + dogYears + ' years old in dog years!');
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);

// Alternate version with lambda function
let calculateDogAgeAlt = (age) => {
  let dogYears = 7 * age;
  console.log('Your doggie is ' + dogYears + ' years old in dog years!');
};

calculateDogAgeAlt(1);
