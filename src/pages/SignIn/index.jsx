import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input  placeholder="E-mail" icon={FiMail}/>
        <Input  placeholder="Senha" icon={FiLock}/>
        <Button title="Entrar"/>
        <Link to="/signup">Criar conta</Link>

      </Form>
      <Background />
    </Container>
  )
}