const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
apple


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
true - orange

const reverseString = str => str.split("").reverse().join("");
grape * true

let result = performOperation(getRandomNumber(), getRandomNumber());

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
