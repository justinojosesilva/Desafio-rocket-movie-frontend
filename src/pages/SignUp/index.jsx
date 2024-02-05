import { Container, Form, Background } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input  placeholder="Nome" icon={FiUser}/>
        <Input  placeholder="E-mail" icon={FiMail}/>
        <Input  placeholder="Senha" icon={FiLock}/>
        <Button title="Cadastrar"/>
        <Link to="/">
          <FiArrowLeft/>
          Voltar para o login
        </Link>

      </Form>
      <Background />
    </Container>
  )
}