// Ex1. O que cada expressão retorna?
// Dê uma olhada nestes exemplos e pense sobre o que cada um retorna:
// 1 - !true     R.: False
// 2 - !false    R.: True
// 3 - !!false   R.: False
// 4 - !!true    R.: True
// 5 - !1        R.: False
// 6 - !!1       R.: True
// 7 - !0        R.: True
// 8 - !!0       R.: False
// 9 - !!""      R.: False
// 
// 10 - let x = 5 ; 
//      let y = 9;  
//      x < 10 && x!==5  R.: false porque primeiro é true e segundo é false pq x é igual a 5
//      x>9 || x===5     R.: false ou true então retorna true
//      !(x===y)         R.: true porque nega a igualdade que seria false entre x e y (5 e 9)



// Ex2. O que cada expressão retorna?
// Sem testar no console, o que você acha que cada uma destas expressões irá retornar? Elas são true ou false?

// let x=10
// let y ="a"
// y==="b" || x >= 10   R.:false ou true, então retorna True porque x é >= 10 embora y seja false

 let x=3
 let y=8
 console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y))  // R.: (true ou false) e (false e true) então retorna true porque cada parenteses tem um true com OU



// let str = ""
// let msg = "haha!"
// let eBonito = "false"
// !((str || msg) && eBonito) R.: não entendi nada


