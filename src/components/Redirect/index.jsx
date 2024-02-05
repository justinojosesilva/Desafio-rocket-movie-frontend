import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Redirect({ title, icon:Icon, ...rest}) {
  return (
    <Container>
      <Link {...rest}>
        {Icon && <Icon />}
        {title}
      </Link>
    </Container>
  )
}