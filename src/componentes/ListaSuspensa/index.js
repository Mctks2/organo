import "./ListaSuspensa.css";
export function ListaSuspensa(props) {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select required={props.required}>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
