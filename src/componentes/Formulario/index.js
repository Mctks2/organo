import "./Formulario.css";
import { CampoTexto } from "../CampoTexto";
export function Formulario() {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do coloborador</h2>
        <CampoTexto label="Nome" placeholder="digite seu nome" />
        <CampoTexto label="Cargo" placeholder="digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="digite o endereço da imagem" />
        <CampoTexto label="Time" />
      </form>
    </section>
  );
}
