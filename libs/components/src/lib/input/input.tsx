import { FC, useState } from 'react';
import styles from './input.module.scss';

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

//placeholder, error del texto, type, animacion o algo.

export const Input: FC<InputProps> = ({ ...inputProps }) => {
   const [inputFocused, setInputFocused] = useState(false);

   return (
      <div className={styles['input-cont']}>
         <label className={`${styles['label']} ${inputFocused ? styles['label-active'] : ''}`} htmlFor="">
            Label:
         </label>
         <input {...inputProps} className={styles['input']} type="text" onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)} />
      </div>
   );
};

export default Input;
