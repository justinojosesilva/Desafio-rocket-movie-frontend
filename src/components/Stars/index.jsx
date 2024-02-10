import { Container } from "./styles";

export function Stars({ actives, ...rest }) {
  return (
    <Container {...rest }>
      {star(actives)}
    </Container>
  )
}

function star(actives) {
  let stars = []
  let rest = 5 - actives
  if (actives > 0) {
    for (let i = 0; i < actives; i++) {
      stars.push(<span key={i+1}>&#9733;</span>)
    }
  }
  for (let i = 0; i < rest; i++) {
    stars.push(<span key={i+5}>	&#9734;</span>)
  }
  return stars
}