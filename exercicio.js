/*
Faça um programa que pegue a hora atual e imprima atraves do console 
as horas atuais e deseja bom dia,boa tarde e boa noite!
*/
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if(hora<12){
    console.log('Bom dia!')
}else if(hora<=18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa noite!')
}
