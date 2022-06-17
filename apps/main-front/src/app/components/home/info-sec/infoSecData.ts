import img1 from '../../../../assets/imgs/smiling-1.jpeg';
import img2 from '../../../../assets/imgs/smiling-2.jpeg';
import img3 from '../../../../assets/imgs/smiling-3.jpeg';

export interface InfoSecData {
  image: any;
  title: string;
  content: string;
}
const infoSecData: InfoSecData[] = [
  {
    image: img1,
    title: 'Jose Alvarez',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    image: img2,
    title: 'Joselina Martinez',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    image: img3,
    title: 'Ricardo Perez',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
];

export default infoSecData;
