import { DetailedHTMLProps, FC } from 'react';
import './styles.scss';
import styles from './test.module.scss';

console.info(styles);

/* eslint-disable-next-line */
interface Props extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   children?: JSX.Element;
   text: string;
   darkerHover?: boolean;
}

//el spread operator en params acumula el resto de propiedades
export const Button: FC<Props> = ({ text, ...buttonProps }) => {
   return (
      <button {...buttonProps} className={'fn-btn ' + (buttonProps?.className ? buttonProps.className : '')}>
         {text}
      </button>
   );
};

export default Button;
