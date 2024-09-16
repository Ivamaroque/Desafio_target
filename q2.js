let str = "A target é uma empresa de renome";
let count = 0;
let found = false;

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a' || str[i] === 'A') {
    count++;
    found = true;
  }
}

if (found) {
  console.log('A letra A (maiúscula ou minúscula) foi encontrada '+count+' vezes');
} else {
  console.log("A letra A (maiúscula ou minúscula) não foi encontrada.");
}