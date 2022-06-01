import React from 'react';
import FindCard, {
  FindCardInterface,
} from '../../components/find-card/FindCard';
import './styles.scss';

const findCardMockUp: FindCardInterface = {
  image:
    'https://www.okchicas.com/wp-content/uploads/2020/08/outfits-y-conjuntos-con-todo-el-estilo-de-una-e-girl-17.png',
  name: 'Susana Horia',
  age: 24,
  gender: 'Female',
};

const Find = () => {
  return (
    <div className="pg-find">
      <div className="pg-find__card-cont">
        <FindCard {...findCardMockUp} />
      </div>
    </div>
  );
};

export default Find;
