import { RiAddLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Container, Card, AddMovie, Footer } from "./styles";
import { Header } from "../../components/Header"
import { Stars } from "../../components/Stars"
import { Tag } from "../../components/Tag"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { useSearch } from "../../hooks/search";

export function Home() {
  const [ movies, setMovies ] = useState([])
  const { search } = useSearch()
  
  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`)
      setMovies(response.data)
    }
    fetchMovies()
  }, [search])

  return (
    <Container>
      <Header />
      <main>
        <div className="title">
          <h1>Meus filmes</h1>
          <AddMovie to="/create">
            <RiAddLine/>
            Adicionar filme
          </AddMovie>
        </div>

        {
          movies && movies.map(movie => (
            <Card key={movie.id}>
              <div className="titleCard">
                <Link to={`/preview/${movie.id}`}>
                  <h2>{movie.title}</h2>
                </Link>
                <Link to={`/create/${movie.id}`}>
                  <FaEdit />
                </Link>
              </div>
              <div className="stars">
                <Stars actives={movie.rating}/>
              </div>
              <p>
              {movie.description}
              </p>
              <div className="tags">
                {
                  movie.tags && movie.tags.map(tag => (
                    <Tag key={tag.id} title={tag.name}/>
                  ))
                }
              </div>
            </Card>

          ))
        }

      </main>
      <Footer />
    </Container>
  )
}