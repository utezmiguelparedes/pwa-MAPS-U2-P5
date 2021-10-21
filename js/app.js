let url = window.location.href;
let swDirect = '/pwa-MAPS-u2-p5/sw.js'

if (navigator.serviceWorker) {

    if (url.includes('localhost')) {
        swDirect = '/sw.js'
    }
    navigator.serviceWorker.register(swDirect)
} else {
    console.log("Ups, cambia de navegador")
}