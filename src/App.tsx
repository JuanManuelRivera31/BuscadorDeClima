import styles from './App.module.css';
import Form from './components/Form/Form.tsx';
import Spinner from './components/Spinner/Spinner.tsx';
import WeatherDetail from './components/WeatherDetail/WeatherDetail.tsx';
import useWeather from './hooks/useWeather.ts';

function App() {
  
  const { weather, loading, fetchWeather, hasWeatherData } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
    
      <div className={styles.container}>
        <Form 
          fetchWeather={fetchWeather} 
        />
        {loading && <Spinner />}

        {hasWeatherData &&
        <WeatherDetail weather={weather} />
        }
        
      </div>
    </>
  )
}

export default App
