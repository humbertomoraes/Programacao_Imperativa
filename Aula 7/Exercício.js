// Ex1. O que cada expressão retorna?
// Dê uma olhada nestes exemplos e pense sobre o que cada um retorna:
// !true     R.: False
// !false    R.: True
// !!false   R.: False
// !!true    R.: True
// !1        R.: False
// !!1       R.: True
// !0        R.: True
// !!0       R.: False
// !!""      R.: False
// let x = 5 ; R.: Cria variável x e atribui o valor 5
// let y = 9;  R.: Cria variável y e atribui o valor 9
// x < 10 && x!==5  R.: Compara se x é menor que 10 e se o valor de x é diferente de 5
// x>9 || x===5     R.: Compara se x é maior que 9 OU se o valor e tipo de dado de x é igual a 5
// !(x===y)         R.: erro porque o ! está fora dos parenteses


// Ex2. O que cada expressão retorna?
// Sem testar no console, o que você acha que cada uma destas expressões irá retornar? Elas são true ou false?

// let x=10
// let y ="a"
// y==="b" || x >= 10   R.:True porque x é >= 10 embora y seja false

// let x=3
// let y=8
// !(x == "3" || x === y) && !(y !== 8 && x <= y)  R.: erro porque ! está fora dos parenteses

// let str = ""
// let msg = "haha!"
// let eBonito = "false"
// !((str || msg) && eBonito) R.: não podem ser usados os nomes str e msg como nome de variáveis nem valor false
