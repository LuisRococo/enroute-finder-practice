import React, { FC } from 'react';
import styles from './styles.module.scss';

interface TextAreInterface
   extends React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
   > {
   labelText?: string;
   error?: string;
   errorText?: string;
}

const TextArea: FC<TextAreInterface> = ({
   className,
   labelText = '',
   error = false,
   errorText = '-',
   ...textAreaProps
}) => {
   return (
      <div className={`${styles['input-container']}`}>
         <label className={`${error ? styles['label-error'] : ''}`} htmlFor="">
            {labelText}
         </label>
         <p className={`${styles['text-area-error']} ${!error ? styles['invisible'] : ''}`}>
            {errorText}
         </p>
         <textarea
            {...textAreaProps}
            className={`${styles['text-area']} ${className ? className : ''} ${
               error ? styles['text-area-error'] : ''
            }`}
            rows={10}
            cols={10}
         />
      </div>
   );
};

export default TextArea;
