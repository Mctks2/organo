import "./CampoTexto.css";
export function CampoTexto(props) {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value); // evento.target.value obtém o valor atual do campo de entrada e o passa para a função aoAlterado.
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  );
}
