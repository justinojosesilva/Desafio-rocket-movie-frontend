import { Container, Profile } from "./styles";
import { MdSearch } from "react-icons/md";
import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" icon={MdSearch}/>
      <Profile>
        <div>
          <span><Link to="/profile">Justino José da Silva</Link></span>
          <a>sair</a>
        </div>
        <img src="https://github.com/justinojosesilva.png" alt="Imagem do usuário" />
      </Profile>
    </Container>
  )
}