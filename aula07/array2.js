let valores = [6, 2, 3, 8, 10]
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log (`a position pos tem o valor ${pos}`)
}
  */  

for (let pos in valores) {
    console.log(` ESSA É a POSIÇÃO ${pos} DENTRO DO ARRAY e o VALOR é ${valores[pos]}`)
} 
