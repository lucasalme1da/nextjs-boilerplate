import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src={'/img/logo.svg'}
      alt="Imagem de um átomo em um hexágono rosa claro com o texto React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Imagem de um homem de cabelo preto e camiseta branca de costas, sentado à uma mesa cinza com um grande monitor de fundo azul com linhas brancas na sua frente e dois monitores pequenos de fundo branco com linhas azuis dos lados esquerdo e direito."
    />
  </S.Wrapper>
)

export default Main
