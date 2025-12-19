import styles from './App.module.css';
import Form from './components/Form/Form.tsx';

function App() {
  const fetchWeather = async () => {
    // tu lógica para llamar el API y setear estado
  };
  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
    
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />

      </div>
    </>
  )
}

export default App
