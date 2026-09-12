const ireland = ['dublin', 'ny', 'putaqpariu']
/*
const love = ireland.map(function(nome) {
    return `I love ${nome}`
});
const loveArrow = ireland.map((nome) => {
    return `I love ${nome}`
});*/
const loveOneLine = ireland.map(nome => `I love ${nome}!`
);
console.log(loveOneLine)
