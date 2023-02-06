import './App.css';
import Header from './components/Header'
import Container from './components/Container'
import Description from './components/Description'
import Image from './components/Image'
import watch1 from './assets/watch1.jpeg'


function App() {
  return (
    <div className="App">
      <Header />
      <Container >
        <Image source={watch1} name={"main-pic"}/>
        <Description name={"main-description"} title={"Watch One"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
      </Container>
    </div>
  );
}

export default App;
