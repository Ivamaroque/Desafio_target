var fib = [0,1]
var nfib = 1;
var i = 2;
var n = 6//Inserir valor aqui
while(nfib <= n){
    nfib = fib[i-1] + fib[i-2]
    i++;
    fib.push(nfib)
}
if(fib.includes(n)){
    console.log("O número "+n+" pertence à sequência de Fibonacci.")
}else{
    console.log("O número "+n+" NÃO pertence à sequência de Fibonacci.")
}