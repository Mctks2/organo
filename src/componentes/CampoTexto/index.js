import "./CampoTexto.css";
export function CampoTexto(props) {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  );
}
