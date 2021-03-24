const TEXTS_CAROUSEL = {
  who: 'Currículum, experiencia, cosas sobre nosotros...',
  diseases:
    'Si has observado alguno de estos síntomas en tu mascota, puede que necesite una revisión...',
  services:
    'Prestamos servicios de veterinaria en la isla de lanzarote, especializados en oftalmología...',
}

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
      'Nos preocupamos por nuestras mascotas, sin embargo no conocemos las posibles enfemedades oculares que pueden sufrir.',
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

const CURRICULUM = [
  'Patricia Ramírez Perdomo',
  'Licenciada en Veterinaria ULPGC',
  'Postgrado en Oftalmología Veterinaria UAB',
  'Experta universitaria en Farmacología Ocular UCM',
  'Proceso de acreditación Oft-AVEPA',
  'Más de 10 años de experiencia en Oftalmología Veterinaria',
  'Autora y coautora de múltiples poster y comunicaciones en congresos nacionales e intenacionales',
]

module.exports = { TEXTS_CAROUSEL, TEXTS_HOME }
