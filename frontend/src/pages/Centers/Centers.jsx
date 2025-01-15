import { ListCenters } from "./ListCenters/ListCenters"
import { TextInicio } from "./TextInicio/TextInicio";


export function Centers() {
  return (
    <div className="centers">
      <TextInicio />
      <ListCenters />
    </div>
  );
}