import image_character_22 from '../resources/character-model/22.png'
import image_character_23 from '../resources/character-model/23.png'
import image_character_24 from '../resources/character-model/24.png'
import image_character_25 from '../resources/character-model/25.png'
import image_character_26 from '../resources/character-model/26.png'
import image_character_27 from '../resources/character-model/27.png'
import image_character_28 from '../resources/character-model/28.png'
import image_character_29 from '../resources/character-model/29.png'
import image_character_30 from '../resources/character-model/30.png'

export const characterModel = {
  id: 'character-model-2',
  name: 'Character Model',
  type: '3D Model',
  shortIntro: ['3D MOdel'],
  image: `${image_character_24}`,
  info: {
    description: {
      title: 'Character Model',
      text: `Models used for my final year project.
      For creating these models, I took inspiration from real wolrd
      people`,
    },
    subDescription: {
      title: 'Built With',
      text: [
        'Autodesk Maya'
      ],
    }
  },
  sliderImages: [
    `${image_character_22}`,
    `${image_character_23}`,
    `${image_character_24}`,
    `${image_character_25}`,
    `${image_character_26}`,
    `${image_character_27}`,
    `${image_character_28}`,
    `${image_character_29}`,
    `${image_character_30}`,
  ],
  backgroundColor: `rgba(181, 157, 142, 0.7)`
};