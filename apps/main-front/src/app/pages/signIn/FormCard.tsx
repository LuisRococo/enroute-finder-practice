import React, { FC } from 'react';
import styles from './styles.module.scss';

interface FormCardInterface {
   children: JSX.Element;
}

export const FormCard: FC<FormCardInterface> = ({ children }) => {
   return <div className={styles['form-card']}>{children}</div>;
};
