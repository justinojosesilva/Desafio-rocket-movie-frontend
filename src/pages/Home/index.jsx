import { RiAddLine } from "react-icons/ri";
import { Container, Card, AddMovie } from "./styles";
import { Header } from "../../components/Header"
import { Stars } from "../../components/Stars"
import { Tag } from "../../components/Tag"
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div>
          <h1>Meus filmes</h1>
          <AddMovie to="/create">
            <RiAddLine/>
            Adicionar filme
          </AddMovie>
        </div>

        
          <Card>
            <Link to="/preview">
             <h2>Interestellar</h2>
            </Link>
            <Stars actives={4}/>

            <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em 
            futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. 
            Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um 
            fantasma que tenta se comunicar com ela. 
            </p>
            <div>
              <Tag title="Ficção Cientifica"/>
              <Tag title="Drama"/>
              <Tag title="Família"/>
            </div>
          </Card>
        

        <Card>
          <Link to="/preview">
            <h2>Interestellar</h2>
          </Link>
          <Stars actives={4}/>

          <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em 
          futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. 
          Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um 
          fantasma que tenta se comunicar com ela. 
          </p>
          <div>
            <Tag title="Ficção Cientifica"/>
            <Tag title="Drama"/>
            <Tag title="Família"/>
          </div>
        </Card>

        <Card>
          <Link to="/preview">
            <h2>Interestellar</h2>
          </Link>
          <Stars actives={4}/>

          <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em 
          futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. 
          Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um 
          fantasma que tenta se comunicar com ela. 
          </p>
          <div>
            <Tag title="Ficção Cientifica"/>
            <Tag title="Drama"/>
            <Tag title="Família"/>
          </div>
        </Card>

      </main>
    </Container>
  )
}