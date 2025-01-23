import style from "./IntroCenters.module.css";
import { FormCenters } from "./FormCenters";
import { ListCenters } from "../../Centers/ListCenters/ListCenters.jsx";

export function IntroCenters() {
  return (
    <>
      <ListCenters />
      <FormCenters />
    </>
  );
}
