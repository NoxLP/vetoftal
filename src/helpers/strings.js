const TEXTS_CAROUSEL = [
  {
    src: require('@/assets/images/placeholder.png'),
    text: 'Currículum, experiencia, cosas sobre nosotros...',
    buttonText: 'Sobre nosotros',
    to: 'who',
  },
  {
    src: require('@/assets/images/carousel/carousel-diseases.jpg'),
    text:
      'Si has observado alguno de estos síntomas en tu mascota, puede que necesite una revisión...',
    buttonText: 'Infórmate aquí',
    to: 'diseases',
  },
  {
    src: require('@/assets/images/carousel/pet-surgery-1-1241227-1279x1709.jpg'),
    text:
      'Servicios de veterinaria en la isla de lanzarote, especializados en oftalmología...',
    buttonText: '¿Qué ofertamos?',
    to: 'services',
  },
]

const TEXTS_HOME = [
  {
    texts: [
      'Nuestra experiencia nos avala, diez años ejerciendo la profesión son una garantía de profesionalidad y buen hacer.',
      'Una formación continua nos prepara para afrontar cualquier contingencia, siempre pensando en el bienestar del paciente.',
      'Si trabajas an una clínica veterinaria de lanzarote y necesitas una especialista en oftalmología, acude a nuestra sección de contacto.',
    ],
    img: require('../assets/images/home/sarandy-westfall--itLKdE7ojA-unsplash.jpg'),
    buttonText: '¿Quiénes somos?',
    to: 'who',
  },
  {
    texts: [
      'Nos preocupamos por nuestras mascotas, sin embargo, no conocemos las posibles enfemedades oculares que pueden sufrir.',
      'Te damos información sobre las más comunes para que tu mascota siempre disfrute de la mejor salud posible.',
    ],
    img: require('../assets/images/home/artem-militonian-dh5ggbVBcsQ-unsplash.jpg'),
    buttonText: 'Enfermedades oculares',
    to: 'diseases',
  },
  {
    texts: [
      'Aquí puedes ver los servicios que ofrecemos a las clínicas veterinarias de lanzarote.',
      'Si crees que tu mascota puede necesitar alguno de nuestros servicios, acude a tu clínica veterinaria de confianza, ellos se pondrán en contacto con nosotros.',
    ],
    img: require('../assets/images/placeholder.png'),
    buttonText: 'Nuestros servicios',
    to: 'services',
  },
]

module.exports = {
  TEXTS_CAROUSEL,
  TEXTS_HOME,
}
