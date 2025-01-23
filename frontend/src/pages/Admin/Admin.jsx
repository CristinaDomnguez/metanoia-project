import React from 'react';
import styles from "./Admin.module.css";
import { IntroCenters } from './CentersForm/IntroCenters';
import { FormResources } from './ResourcesForm/FormResources';
import { FormEvents } from './EventsForm/FormEvents';


export function Admin() {
  return (
    <div className={styles.main}>
      <h1>Admin "Centros"</h1>
      <IntroCenters />
      <FormResources />
      <FormEvents />
    </div>
  );
}