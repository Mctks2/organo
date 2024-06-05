import "./Formulario.css";
import { CampoTexto } from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";
export function Formulario() {
  return (
    <section className="formulario">
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Preencha os dados para criar o card do coloborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true}  label="Time" itens={["Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile"]}/>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
}
