import './App.css'
import './styles.scss';
import Welcome from './components/Welcome';
import Cloud from './components/Cloud';
import Computing from './components/Computing';
import Architecture from './components/Architecture';
import Providers from './components/Providers';
import Virtualization from './components/Virtualization';

function App() {

  // Cheat codes - Sources
  window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyS' && event.altKey) {
      window.location.href = 'https://github.com/offensive-vk/AwesomeCloud/';
    }
  }); 

  // Cheat codes - Author
  window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyV' && event.altKey && event.shiftKey) {
        if(confirm("Wanna meet the Author?")) {
          window.location.href = 'https://github.com/offensive-vk/';
        }
        else {
          alert("As your wish.")
        }
    }
  });

  return (
    <>
    <Welcome />
    <Cloud />
    <Computing />
    <Architecture />
    <Providers />
    <Virtualization />
    </>
  )
}

export default App;