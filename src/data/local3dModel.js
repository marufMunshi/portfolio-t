import image_local_1 from '../resources/local-3d-model-image/01.png'
import image_local_4 from '../resources/local-3d-model-image/04.png'
import image_local_5 from '../resources/local-3d-model-image/05.png'
import image_local_7 from '../resources/local-3d-model-image/07.png'
import image_local_9 from '../resources/local-3d-model-image/09.png'
import image_local_13 from '../resources/local-3d-model-image/13.png'
import image_local_14 from '../resources/local-3d-model-image/14.png'
import image_local_17 from '../resources/local-3d-model-image/17.png'
import image_local_19 from '../resources/local-3d-model-image/19.png'
import image_local_20 from '../resources/local-3d-model-image/20.png'
import image_local_35 from '../resources/local-3d-model-image/35.png'

export const localModel = {
  id: 'local-3d-model-image',
  name: 'Bangladeshi Local model',
  type: '3D Model',
  shortIntro: [
    '3D Model', 
  ],
  image: `${image_local_35}`,
  info: {
    description: {
      title: 'Bangladeshi Local model',
      text: `Models used for my final year project.
      For creating these models, I took inspiration from real wolrd
      objects`,
    },
    subDescription: {
      title: 'Built With',
      text: [
        'Autodesk Maya'
      ],
    }
  },
  sliderImages: [
    `${image_local_1}`,
    `${image_local_4}`,
    `${image_local_5}`,
    `${image_local_7}`,
    `${image_local_9}`,
    `${image_local_13}`,
    `${image_local_14}`,
    `${image_local_17}`,
    `${image_local_19}`,
    `${image_local_20}`,
    `${image_local_35}`,
  ],
  backgroundColor: `rgba(158, 196, 255, 0.8)`
};