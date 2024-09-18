let myCarousel = document.getElementById('myCarousel');
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  wrap: false
});

myCarousel.addEventListener('slide.bs.carousel', function () {
  //  executar quando o evento 'slide' ocorrer

});


// DESENVOLVEDORES

document.addEventListener('mousemove', (event) => {
  const pet = document.getElementById('adopt-pet');
  if (pet) {
    const rect = pet.getBoundingClientRect();
    const x = event.clientX - rect.left - (rect.width / 2);
    const y = event.clientY - rect.top - (rect.height / 2);

    pet.style.transform = `translate(${x / 20}px, ${y / 20}px)`;
  }
});

//lOGO 

document.querySelector('.logo').addEventListener('click', () => {
  alert('Logo clicada! Bem-vindo à ONG Pet Friends!');
});

// Adote - Pausar video do gato

window.addEventListener('load', function () {
  var video = document.getElementById('videoGato');
  video.pause();
});

