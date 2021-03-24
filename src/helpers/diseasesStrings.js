const SYMPTOMS_TITLE = {
  title: 'Posibles síntomas',
  subtitle:
    'Si tu mascota presenta alguno de estos síntomas, deberías llevarlo a tu clínica veterinaria de confianza.',
}

const SYMPTOMS = [
  'Legañas',
  'Dolor ocular',
  'Úlceras recurrentes',
  'Pérdida de visión',
  'Cambio de color en los ojos',
  'Lagrimeo',
  'Opacificación de alguna parte del ojo',
]

const DISEASES_TITLE = {
  title: 'Enfermedades',
  subtitle:
    'Aquí puedes informarte acerca de las enfermedades oculares más comunes',
}

const DISEASES = [
  {
    title: 'Queratoconjuntivitis seca',
    paragraphs: [
      'Esta alteración es muy frecuente en ciertas razas caninas como el Yorkshire Terrier, el West Highland White Terrier y el Bulldog Francés entre otros. Se caracteriza por una disminución de la producción de uno o varios componentes de la película lagrimal.',
      'Las mascotas que padecen esta enfermedad suelen presentar legañas, conjuntivitis recurrentes y úlceras corneales frecuentes.',
      'Esta alteración es crónica, pero en muchas ocasiones si se diagnostica a tiempo, las mascotas que lo padecen se pueden controlar con un tratamiento y ciertos cuidados determinados.',
      'Se recomienda acudir al oftalmólogo si nuestra mascota presenta alguna de estas alteraciones, ya que, de no controlarse, pueden desencadenarse problemas más graves como infecciones graves, úlceras complicadas y ceguera entre otros.',
    ],
    img: require('@/assets/images/placeholder.png'),
  },
  {
    title: 'Cataratas',
    paragraphs: [
      'Al igual que en personas, la catarata es la opacificación del cristalino, que es una estructura en forma de lente que se encuentra en el interior del ojo; cuando esta alteración está avanzada podemos ',
      'Cualquier animal puede presentar cataratas, aunque hay algunas especies o razas que están más predispuestas como el Yorkshire Terrier, el Cocker o el Bulldog francés.',
      'Dependiendo del tipo de catarata, la edad de presentación cambia, aunque lo más frecuente es que se presente en individuos de edad avanzada, pueden desarrollarse en otros momentos de la vida de nuestras mascotas.',
      'La recomendación en caso de sospecha de catarata acudir al oftalmólogo, para valorar si es operable o no y para controlar las posibles consecuencias como la ceguera y el glaucoma en el ojo en caso de que se confirme su existencia.',
    ],
    img: require('@/assets/images/placeholder.png'),
  },
  {
    title: 'Atrofia de retina',
    paragraphs: [
      'La atrofia de retina es una manera genérica de llamar a un conjunto de enfermedades en las que la retina, que es la porción del ojo que más participa en el proceso de la visión, deja de funcionar con normalidad.',
      'Al igual que en las otras enfermedades, diversas especies o razas tienen mayor predisposición a padecerla y dependiendo del tipo de atrofia se presentará a una edad u otra.',
      'El síntoma principal es la pérdida de visión, que suele ser gradual y en ciertas condiciones dependiendo del tipo de atrofia.',
      'Se recomienda acudir al oftalmólogo si se observa una disminución en la visión y si hay cambios de hábitos o comportamiento en nuestras mascotas.',
    ],
    img: require('@/assets/images/placeholder.png'),
  },
]

module.exports = {
  SYMPTOMS_TITLE,
  SYMPTOMS,
  DISEASES_TITLE,
  DISEASES,
}
