$(document).ready(() => {
    const $hour = $("#hour")
    const $minute = $("#minute")
    const $second = $("#second")
    const $start = $("#start")
    const $pause = $("#pause")
    const $reset = $("#reset")

    let hora = 0
    let minuto = 0
    let segundo = 0
    let cronometer

    const timer = () => {
        if ((segundo += 1) == 60) {
            segundo = 0
            minuto += 1
        } 
        if (minuto == 60) {
            minuto = 0
            hora += 1
        } 
        $second.text(returnData(segundo))
        $minute.text(returnData(minuto))
        $hour.text(returnData(hora))
    }

    const startCronometer = () => {
        cronometer = setInterval(() => {timer()}, 1000);
    }

    const begin = () => {
        parar()
        startCronometer()
    }

    const parar = () => {
        clearInterval(cronometer)
    }

    const restart = () => {
        clearInterval(cronometer)
        segundo = 0
        minuto = 0
        hora = 0
        begin()
    }

    const returnData = (value) => {
    if (value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}
    
    $start.click(begin)
    $pause.click(parar)
    $reset.click(restart)

})

