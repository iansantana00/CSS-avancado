import './App.css';
import styled from 'styled-components';

// Cor do Título / sublinhar com underline
const Titulo = styled.h1`
color: #31e636;
text-decoration: underline;
`;

const Subtitulo = styled.h2`
color: green;
font-size: 30px;
`;

const Artigo = styled.section`
color: #9393e3;
`;

const Titulo2 = styled.h1`
color: blue;
font-size: 25px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Titulo>Meu site</Titulo>
      <Subtitulo>Subtitulo</Subtitulo>
      <Artigo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl ipsum, tempor sed nulla nec, interdum varius purus. Curabitur lobortis, augue maximus porta consectetur, erat dui pharetra tellus, sit amet rutrum mauris turpis ac tellus. Curabitur varius velit tortor, a mollis justo scelerisque ullamcorper. Cras diam velit, condimentum nec tempus vestibulum, facilisis sit amet risus. In hac habitasse platea dictumst. Sed blandit lectus ac blandit elementum. Nam sed dictum massa. Quisque metus velit, aliquet eleifend dolor feugiat, condimentum efficitur arcu. Ut et ex eu mi iaculis mollis. Etiam ut quam ac mi pulvinar dapibus at eu urna. Nunc posuere metus purus, at feugiat orci consectetur eget. Praesent ultricies suscipit ex ut imperdiet. Nullam fringilla ipsum vitae odio pharetra ultricies.</Artigo>
      <Titulo2>Segunda Parte</Titulo2>
      <Artigo>Curabitur et lectus tincidunt, feugiat diam eget, gravida ligula. Cras in pretium justo. Nulla pretium tincidunt convallis. Nunc risus ipsum, faucibus sed scelerisque vitae, ullamcorper non leo. Cras malesuada porta libero, ac mattis augue efficitur eu. Cras non porta odio. Maecenas in porttitor nibh, id facilisis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus sollicitudin odio vel vestibulum. Mauris et leo in libero cursus fermentum rhoncus ut velit. Donec iaculis risus non justo dictum faucibus. Nunc a nibh mauris. Praesent bibendum, nisi mollis gravida rhoncus, felis ligula scelerisque metus, in bibendum quam felis ac neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Artigo>
      </header>
    </div>
  );
}

export default App;
