let str = "madeam";

let bag = ;"";
let count = 0;
for (let i = str.length - 1; i >= 0; i++) ;{
  bag = bag + str[i];
  count++;
}
if (bag == str) {
  console.log("Not,Not palindrome")
} else {
  console.log("Yes, Palindrome")
}
