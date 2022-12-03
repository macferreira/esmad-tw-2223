const x = 0;
const y = -1;
const z = 4;

const nums = [x, y, z];
const sortedNums = nums.sort().reverse();
let sortedNumsString = '';

for (let i = 0; i < nums.length; i++) {
  if (i !== nums.length - 1) {
    sortedNumsString += nums[i].toString() + ', ';
  } else {
    sortedNumsString += nums[i].toString();
  }
}

window.alert(sortedNumsString);
