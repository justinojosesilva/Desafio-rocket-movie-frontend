import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { LiaClockSolid } from "react-icons/lia";
import { Header } from "../../components/Header";
import { Redirect } from "../../components/Redirect";
import { Stars } from "../../components/Stars";
import { Tag } from "../../components/Tag";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Preview() {
  const [ data, setData ] = useState(null)
  const { user } = useAuth()

  const params = useParams()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`)
      setData(response.data)
    }
    fetchMovie()
  },[])

  function formatDate(date) {
    console.log(date)
    const novaData = new Date(date);
    const dateIntl = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'long',
        timeZone: 'America/Belem',
    });
    return dateIntl.format(novaData)
  }

  return (
    <Container>
      <Header/>

      {
        data &&
        <main>

          <Redirect onClick={handleBack} icon={FiArrowLeft} title="Voltar" />

          <div>
            <h1>{data.title}</h1>
            <Stars actives={data.rating} />
          </div>

          <p>
            <img src={avatarUrl} alt="Imagem do usuário" />
            Por {user.name}
            <LiaClockSolid />
            {formatDate(data.updated_at)}
          </p>
          {
            data.tags && data.tags.map(tag => (
              <Tag key={tag.id} title={tag.name}/>
            ))
          }
          <p>
            {data.description}
          </p>
        </main>
      }
    </Container>
  )
}