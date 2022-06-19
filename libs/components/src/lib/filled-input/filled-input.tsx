import { FC, useEffect } from 'react';
import styles from './filled-input.module.scss';

/* eslint-disable-next-line */
export interface FilledInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
   labelText: string;
   errorText?: string;
   error?: boolean;
   labelProps?: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
   errorMsjProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
   containerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

export const FilledInput: FC<FilledInputProps> = ({ errorText = '-', labelProps, labelText, errorMsjProps, error, containerProps, ...inputProps }) => {
   const inputClasses: string = `${styles['input']} ${inputProps.className ? inputProps.className : ''} ${error ? styles['input-error'] : ''}`;

   return (
      <div {...containerProps} className={`${styles['input-container']} ${containerProps?.className ? containerProps.className : ''}`}>
         {<label className={`${error ? styles['label-error'] : ''}`}>{labelText}</label>}
         <p className={`${styles['error-msj']} ${!error ? styles['invisible'] : ''}`}>{errorText}</p>
         <input type="text" {...inputProps} className={inputClasses} />
      </div>
   );
};

export default FilledInput;
