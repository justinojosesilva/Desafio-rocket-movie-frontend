import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Redirect } from "../../components/Redirect";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <Redirect to="/" title="Voltar" icon={FiArrowLeft}/>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/justinojosesilva.png" alt="Imagem do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <Input icon={FiUser} placeholder="Nome do usuário"/>
        <Input icon={FiMail} placeholder="E-mail"/>
        <Input icon={FiLock} placeholder="Senha atual"/>
        <Input icon={FiLock} placeholder="Nova senha"/>
        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}