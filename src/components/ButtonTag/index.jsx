import { Container } from "./styles";

export function ButtonTag({ title, icon:Icon, ...rest}) {
  return (
    <Container {...rest}>
      {title}
      {Icon && <Icon />}
    </Container>
  )
}