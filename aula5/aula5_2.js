var agora = new Date()
var diaSem = agora.getDay()
switch(diaSem){
    case 0:
        console.log('Domingão')
        break
    case 1:
        console.log('Segundona')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sextou')
        break
    case 6:
        console.log('Sabadão')
        break
    default:
        console.log('[ERROR]')
}