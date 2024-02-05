import { FiArrowLeft } from "react-icons/fi";
import { Container, ContainerTags, Textarea } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Redirect } from "../../components/Redirect"
import { ButtonTag } from "../../components/ButtonTag"
import { Button } from "../../components/Button"
import { RiCloseLine, RiAddLine } from "react-icons/ri"


export function Create() {
  return (
    <Container>
      <Header />
      <main>
        <Redirect to="/" title="Voltar" icon={FiArrowLeft}/>

        <h1>Novo filme</h1>
        <div>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>

        <div>
          <Textarea placeholder="Observações"></Textarea>
        </div>

        <h2>Marcadores</h2>

        <ContainerTags>
          <ButtonTag title="React" icon={RiCloseLine}/>
          <ButtonTag title="Novo marcador" icon={RiAddLine} isNew/>
        </ContainerTags>

        <div>
          <Button title="Excluir Filme" isDelete/>
          <Button title="Salvar alterações"/>
        </div>

      </main>
    </Container>
  )
}