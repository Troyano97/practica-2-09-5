const imgCambiante1 = document.querySelector("#img-1");
const imgCambiante2 = document.querySelector("#img-2");
const imgCambiante3 = document.querySelector("#img-3");
const botonImagen = document.querySelector("#img-siguiente");

const IMG_1 = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/230AA9814FCBC9CF1DD4011C6EB73E1FAD382F2E7CF04E6C497DFB3B48B4DA79/scale?width=1200&aspectRatio=1.78&format=jpeg";
const IMG_2 = "https://www.mundodeportivo.com/alfabeta/hero/2020/10/family-guy-portada.jpg";
const IMG_3 = "https://images.pagina12.com.ar/styles/focal_16_9_960x540/public/2022-09/649612-20223292845-1-203x2.png";

//let  

function mostrarImagen() {
    imgCambiante1.innerHTML = `
    <img src="${IMG_1}" alt="">`;
    imgCambiante1.scr = IMG_1;
}