import React, { createRef } from 'react';
// Import Swiper React components
import FindCard, {
  FindCardInterface,
} from '../../components/find-card/FindCard';
import './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { GenderEnum } from '@finder/definitions';

const findCardMockUp: FindCardInterface = {
  image:
    'https://www.okchicas.com/wp-content/uploads/2020/08/outfits-y-conjuntos-con-todo-el-estilo-de-una-e-girl-17.png',
  name: 'Susana Horia',
  age: 24,
  gender: GenderEnum.Female,
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Find = () => {
  const sliderRef = createRef();

  return (
    <div className="pg-find">
      <Slider {...settings}>
        <div>
          <div className="pg-find__card-cont">
            <FindCard {...findCardMockUp} />
          </div>
        </div>
        <div>
          <div className="pg-find__card-cont">
            <FindCard {...findCardMockUp} />
          </div>
        </div>
        <div>
          <div className="pg-find__card-cont">
            <FindCard {...findCardMockUp} />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Find;
