#!/usr/bin/node

const argsList = process.argv.slice(2).map(num => parseInt(num));
const sortedList = argsList.slice().sort((a, b) => a - b);

if (sortedList.length < 2) {
  console.log(0);
} else {
  console.log(sortedList[1]);
}
