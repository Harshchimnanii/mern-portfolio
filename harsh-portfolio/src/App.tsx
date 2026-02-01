import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AIAssistant from './components/AIAssistant'
import WhatsAppButton from './components/WhatsAppButton'
import LoadingPage from './components/LoadingPage'
import WeatherEffects from './components/WeatherEffects'
import type { WeatherType } from './components/WeatherEffects'
// import './App.css'

function App() {
  const [showAI, setShowAI] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [city, setCity] = useState<string | null>(null)
  const [weatherBg, setWeatherBg] = useState<string>('')
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  const [currentWeatherType, setCurrentWeatherType] = useState<WeatherType | null>(null)

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    // Initial black background
    document.body.style.background = '#0d1117'
    document.body.style.backgroundImage = 'none'

    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        const data = await response.json()
        const weatherCode = data.current_weather.weathercode

        let type: WeatherType = 'Clear';
        if (weatherCode <= 1) type = 'Clear';
        else if (weatherCode <= 3) type = 'Cloudy';
        else if (weatherCode <= 48) type = 'Fog';
        else if (weatherCode <= 55) type = 'Drizzle';
        else if (weatherCode <= 67) type = 'Rain';
        else if (weatherCode <= 77) type = 'Snow';
        else if (weatherCode <= 82) type = 'Storm';
        else if (weatherCode <= 86) type = 'Blizzard';
        else if (weatherCode <= 99) type = 'Thunderstorm';

        setCurrentWeatherType(type);
        updateBackground(type);
      } catch (error) {
        console.error("Error fetching weather:", error)
      }
    }

    const getLocation = () => {
      // First try IP-based location for city name (usually faster/easier for generic city name)
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          if (data.city) {
            setCity(data.city)
            fetchWeather(data.latitude, data.longitude)
          } else {
            throw new Error("City not found in IP data");
          }
        })
        .catch(() => {
          // Fallback to geolocation
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
              const { latitude, longitude } = position.coords;
              fetchWeather(latitude, longitude);

              // Try reverse geocoding to get city name
              try {
                const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                const data = await response.json();
                if (data.city) {
                  setCity(data.city);
                } else if (data.locality) {
                  setCity(data.locality);
                } else {
                  setCity("Your Location");
                }
              } catch (e) {
                setCity("Your Location");
              }
            }, () => {
              // If permission denied or error
              setCity("Earth");
            });
          }
        })
        .finally(() => {
          // Keep loading screen for a minimum time to show animation
          setTimeout(() => setIsLoading(false), 3000)
        })
    }

    getLocation()
  }, [])

  const updateBackground = (type: WeatherType) => {
    let bgStyle = '';
    switch (type) {
      case 'Clear': bgStyle = 'linear-gradient(to bottom, #1e3c72, #2a5298)'; break;
      case 'Cloudy': bgStyle = 'linear-gradient(to bottom, #485563, #29323c)'; break;
      case 'Rain': bgStyle = 'linear-gradient(to bottom, #0f2027, #2c5364)'; break;
      case 'Storm': bgStyle = 'linear-gradient(to bottom, #0f2027, #243b55)'; break;
      case 'Snow': bgStyle = 'linear-gradient(to bottom, #83a4d4, #b6fbff)'; break;
      case 'Blizzard': bgStyle = 'linear-gradient(to bottom, #E0EAFC, #CFDEF3)'; break;
      case 'Thunderstorm': bgStyle = 'linear-gradient(to bottom, #141E30, #243B55)'; break;
      case 'Fog': bgStyle = 'linear-gradient(to bottom, #3E5151, #DECBA4)'; break;
      case 'Drizzle': bgStyle = 'linear-gradient(to bottom, #4b6cb7, #182848)'; break;
      case 'Overcast': bgStyle = 'linear-gradient(to bottom, #bdc3c7, #2c3e50)'; break;
      case 'Night': bgStyle = 'linear-gradient(to bottom, #000428, #004e92)'; break;
      case 'Aurora': bgStyle = 'linear-gradient(to bottom, #000000, #434343)'; break;
      default: bgStyle = '#0d1117';
    }
    setWeatherBg(bgStyle);
  };

  const handleManualWeatherSelect = (type: WeatherType) => {
    setUseDarkTheme(false); // Enable weather theme mode
    setCurrentWeatherType(type);
    updateBackground(type);
  };

  useEffect(() => {
    if (useDarkTheme) {
      document.body.style.background = '#0d1117'
      document.body.style.backgroundImage = 'none'
    } else if (weatherBg) {
      document.body.style.background = weatherBg
      document.body.style.backgroundAttachment = 'fixed'
    }
  }, [useDarkTheme, weatherBg])

  if (isLoading) {
    return <LoadingPage city={city} />
  }

  return (
    <div className="App">
      {!useDarkTheme && currentWeatherType && <WeatherEffects type={currentWeatherType} />}

      <Navbar onWeatherSelect={handleManualWeatherSelect} currentWeather={currentWeatherType} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <WhatsAppButton />
      <AIAssistant isOpen={showAI} onClose={() => setShowAI(false)} />

      {/* Theme Toggle Button */}
      {weatherBg && (
        <motion.button
          className="theme-toggle-btn"
          onClick={() => setUseDarkTheme(!useDarkTheme)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: 1000,
            padding: '10px 15px',
            borderRadius: '50px',
            border: 'none',
            background: 'var(--accent)',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>{useDarkTheme ? '🌤️ Weather Theme' : '🌑 Dark Theme'}</span>
        </motion.button>
      )}

      <motion.button
        className="ai-toggle-btn"
        onClick={() => setShowAI(!showAI)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span className="ai-icon">🤖</span>
        <span className="ai-text">AI Assistant</span>
      </motion.button>
    </div>
  )
}

export default App
