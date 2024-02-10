import { Container, Profile, Logout } from "./styles";
import { MdSearch } from "react-icons/md";
import { Input } from "../Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../service/api";
import { useSearch } from "../../hooks/search";

export function Header() {
  const { signOut, user } = useAuth()
  const { changeSearch } = useSearch()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  function setSearch(value) {
    changeSearch({value})
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input 
        placeholder="Pesquisar pelo título" 
        icon={MdSearch}
        onChange={e => setSearch(e.target.value)}
      />
      <Profile>
        <div>
          <span><Link to="/profile">{user.name}</Link></span>
          <Logout onClick={handleSignOut}>sair</Logout>
        </div>
        <img src={avatarUrl} alt={user.name} />
      </Profile>
    </Container>
  )
}