import './App.css';
import Header from './components/Header'
import Container from './components/Container'
import Description from './components/Description'
import Image from './components/Image'
import watch1 from './assets/watch1.jpeg'
import watch2 from './assets/watch2.jpeg'
import watch3 from './assets/watch3.jpg'
import watch4 from './assets/watch4.jpeg'
import watch5 from './assets/watch5.jpg'


function App() {
  return (
    <div className="App">
      <Header />
      <Container className={"main-container"} >
        <Container className={"image-container"} >
          <Image source={watch1} name={"main-pic"}/>
          <Image source={watch2} name={"small-pic"} />
          <Image source={watch3} name={"small-pic"} />
          <Image source={watch4} name={"small-pic"}  />
          <Image source={watch5} name={"small-pic"}  />
        </Container>
        <Description name={"main-description"} title={"Watch One"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>

      </Container>
    </div>
  );
}

export default App;
