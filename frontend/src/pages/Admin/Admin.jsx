import React from 'react';
import styles from "./Admin.module.css";
import { Form } from './Form';

export function Admin() {
  return (
    <div className={styles.main}>
      <h1>Admin Page</h1>
      <Form />
    </div>
  );
}