import React, {useState} from 'react';
import './FlippedCard.css';
import cn from 'classnames';

const FlippedCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onFlippedToggle = () => {
    setIsFlipped(prevState => !prevState);
  }

  return (
    <div
      className='card'
      onClick={onFlippedToggle}>
      <div className={cn('card__inner', {'is_flipped': isFlipped})}>
        <div className='card__face card__face--front'>
          <h2>Developer card</h2>
        </div>
        <div className='card__face card__face--back'>
          <div className='card__content'>
            <div className='card__header'>
              <img
                className='avatar'
                src='https://avatars.githubusercontent.com/u/60394886?v=4'
                alt='user_avatar' />
              <h2>Alexey Horbunov</h2>
            </div>
            <div className='card__body'>
              <h3>Software developer</h3>
              <p>JavaScript/TypeScript, React, NextJS, NestJS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippedCard;
