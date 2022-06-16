import { FC, useEffect } from 'react';
import styles from './filled-input.module.scss';

/* eslint-disable-next-line */
export interface FilledInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
   labelText: string;
   errorText?: string;
   error?: boolean;
   labelProps?: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
   errorMsjProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
}

export const FilledInput: FC<FilledInputProps> = ({ errorText = '-', labelProps, labelText, errorMsjProps, error, ...inputProps }) => {
   const inputClasses: string = `${styles['input']} ${inputProps.className ? inputProps.className : ''} ${error ? styles['input-error'] : ''}`;

   return (
      <div className={styles['input-container']}>
         {<label className={`${error ? styles['label-error'] : ''}`}>{labelText}</label>}
         <p className={`${styles['error-msj']} ${!error ? styles['invisible'] : ''}`}>{errorText}</p>
         <input {...inputProps} className={inputClasses} type="text" />
      </div>
   );
};

export default FilledInput;
