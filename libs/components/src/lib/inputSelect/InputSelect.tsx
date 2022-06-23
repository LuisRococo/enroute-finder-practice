import React, { FC } from 'react';
import styles from './styles.module.scss';

interface InputSelectInterface
   extends React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
   > {
   children: JSX.Element;
   labelText: string;
}

const InputSelect: FC<InputSelectInterface> = ({
   children,
   className,
   labelText,
   ...inputProps
}) => {
   return (
      <div>
         <label className={styles['label']} htmlFor="">
            {labelText}
         </label>
         <select {...inputProps} className={`${styles['select']} ${className ? className : ''}`}>
            {children}
         </select>
      </div>
   );
};

export default InputSelect;
