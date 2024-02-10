import { FiArrowLeft } from "react-icons/fi";
import { Container, ContainerTags, Textarea } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Redirect } from "../../components/Redirect"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../service/api";


export function Create() {
  const params = useParams()
  const navigate = useNavigate()
  const [ isEditable, setIsEditable ] = useState(false)
  const [ idMovie, setIdMovie ] = useState("")
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ rating, setRating ] = useState(null)

  const [ tags, setTags ] = useState([])
  const [ newTag, setNewTag ] = useState("")

  function handleAddTag() {
    if(!newTag) {
      return alert("Tag não informada!")
    }
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags( prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleBack() {
    navigate(-1)
  }

  async function handleDeleteMovie(id) {
    if(confirm("Deseja realmente excluir o filme?")){
      console.log("Deletando o filme", id)
      await api.delete(`/movies/${id}`)
      navigate(-1)
    }
  }

  async function handleNewMovie() {
    if(!title) {
      return alert("Digite o titulo do filme")
    }

    if(!rating) {
      setRating(Number(0))
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
    }

    const movie = {
      title,
      description,
      rating,
      tags
    }

    isEditable ? await api.put(`/movies/${idMovie}`, movie) : await api.post("/movies", movie)
    alert(`Filme ${isEditable ? 'alterado': 'criado'} com sucesso!`)
  
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovie() {
      const id = params.id
      if(id) {
        setIdMovie(id)
        setIsEditable(true)
        const response = await api.get(`/movies/${params.id}`)
        const movieResponse = response.data
        setTitle(movieResponse.title)
        setRating(movieResponse.rating)
        setDescription(movieResponse.description)
        const tagsResponse = []
        movieResponse.tags.map(tag => tagsResponse.push(tag.name))
        setTags(tagsResponse)
      }

    }
    fetchMovie()
  },[])

  return (
    <Container>
      <Header />
      <main>
        <Redirect onClick={handleBack} title="Voltar" icon={FiArrowLeft}/>

        <h1>{isEditable ? 'Alterar filme':'Novo filme'}</h1>
        <div>
          <Input 
            placeholder="Título" 
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Input 
            placeholder="Sua nota (de 0 a 5)" 
            type="number"
            max={5}
            min={0}
            value={rating}
            onChange={e => setRating(e.target.value)}
          />
        </div>

        <div>
          <Textarea 
            placeholder="Observações"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <h2>Marcadores</h2>

        <ContainerTags>
          {
            tags && tags.map((tag, index) => (
              <MovieItem 
                key={String(index)} 
                value={tag} 
                onClick={() => handleRemoveTag(tag)}
              />
            ))
          }
          <MovieItem 
            placeholder="Novo marcador" 
            isNew 
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            onClick={handleAddTag}/>
        </ContainerTags>

        <div>
          {
            isEditable &&
            <Button title="Excluir Filme" isDelete onClick={() => handleDeleteMovie(idMovie)}/>
          }
          <Button title={isEditable? 'Salvar Alterações': 'Salvar'} onClick={handleNewMovie}/>
        </div>

      </main>
    </Container>
  )
}