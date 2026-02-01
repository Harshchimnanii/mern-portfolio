import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export type WeatherType = 'Clear' | 'Cloudy' | 'Rain' | 'Storm' | 'Snow' | 'Blizzard' | 'Thunderstorm' | 'Fog' | 'Drizzle' | 'Overcast' | 'Night' | 'Aurora';

interface WeatherEffectsProps {
    type: WeatherType;
}

const WeatherEffects: React.FC<WeatherEffectsProps> = ({ type }) => {
    const [particles, setParticles] = useState<number[]>([]);

    useEffect(() => {
        // Reset particles on type change
        setParticles(Array.from({ length: 50 }, (_, i) => i));
    }, [type]);

    const renderEffect = () => {
        switch (type) {
            case 'Rain':
            case 'Drizzle':
            case 'Storm':
            case 'Thunderstorm':
                return (
                    <div className="weather-overlay rain-container">
                        {particles.map((i) => (
                            <div key={i} className={`rain-drop ${type === 'Storm' || type === 'Thunderstorm' ? 'heavy' : 'light'}`}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDuration: `${0.5 + Math.random() * 0.5}s`,
                                    animationDelay: `${Math.random() * 2}s`
                                }}
                            />
                        ))}
                        {(type === 'Storm' || type === 'Thunderstorm') && <div className="lightning" />}
                    </div>
                );
            case 'Snow':
            case 'Blizzard':
                return (
                    <div className="weather-overlay snow-container">
                        {particles.map((i) => (
                            <div key={i} className="snowflake"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    animationDuration: `${3 + Math.random() * 5}s`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    opacity: Math.random()
                                }}
                            >❄</div>
                        ))}
                    </div>
                );
            case 'Cloudy':
            case 'Overcast':
            case 'Fog':
                return (
                    <div className="weather-overlay cloud-container">
                        <div className="cloud c1"></div>
                        <div className="cloud c2"></div>
                        <div className="fog-layer"></div>
                    </div>
                );
            case 'Clear':
                return (
                    <div className="weather-overlay sun-container">
                        <div className="sun"></div>
                        <div className="ray r1"></div>
                        <div className="ray r2"></div>
                        <div className="ray r3"></div>
                        <div className="ray r4"></div>
                    </div>
                );
            case 'Night':
            case 'Aurora':
                return (
                    <div className="weather-overlay night-container">
                        {particles.slice(0, 20).map((i) => (
                            <div key={i} className="star"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 2}s`
                                }}
                            />
                        ))}
                        {type === 'Aurora' && <div className="aurora-borealis"></div>}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="weather-effects-wrapper" style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <style>{`
                .weather-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; }
                
                /* Rain */
                .rain-drop {
                    position: absolute;
                    top: -20px;
                    width: 1px;
                    height: 15px;
                    background: rgba(255, 255, 255, 0.6);
                    animation: fall linear infinite;
                }
                .rain-drop.heavy { height: 25px; background: rgba(255, 255, 255, 0.8); }
                @keyframes fall {
                    to { transform: translateY(100vh); }
                }

                /* Lightning */
                .lightning {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(255, 255, 255, 0.2);
                    opacity: 0;
                    animation: flash 5s infinite;
                }
                @keyframes flash {
                    90% { opacity: 0; }
                    91% { opacity: 0.8; }
                    92% { opacity: 0; }
                    93% { opacity: 0.8; }
                    94% { opacity: 0; }
                }

                /* Snow */
                .snowflake {
                    position: absolute;
                    top: -20px;
                    color: white;
                    font-size: 10px;
                    animation: snowfall linear infinite;
                }
                @keyframes snowfall {
                    to { transform: translateY(100vh) rotate(360deg); }
                }

                /* Clouds/Fog */
                .cloud {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.4);
                    border-radius: 50%;
                    filter: blur(20px);
                }
                .c1 { top: 10%; left: 10%; width: 200px; height: 100px; animation: float 10s infinite alternate; }
                .c2 { top: 20%; right: 20%; width: 300px; height: 150px; animation: float 15s infinite alternate-reverse; }
                .fog-layer {
                    position: absolute;
                    bottom: 0; width: 100%; height: 40%;
                    background: linear-gradient(to top, rgba(200, 200, 200, 0.3), transparent);
                    filter: blur(10px);
                }
                @keyframes float {
                    from { transform: translateX(-20px); }
                    to { transform: translateX(20px); }
                }

                /* Sun */
                .sun {
                    position: absolute;
                    top: 50px; right: 50px;
                    width: 100px; height: 100px;
                    background: #fdb813;
                    border-radius: 50%;
                    box-shadow: 0 0 40px #fdb813;
                    animation: sunpulse 4s infinite alternate;
                }
                @keyframes sunpulse {
                    from { transform: scale(1); box-shadow: 0 0 40px #fdb813; }
                    to { transform: scale(1.1); box-shadow: 0 0 60px #fdb813; }
                }

                /* Stars */
                .star {
                    position: absolute;
                    width: 2px; height: 2px;
                    background: white;
                    border-radius: 50%;
                    animation: twinkle 2s infinite alternate;
                }
                @keyframes twinkle {
                    from { opacity: 0.2; }
                    to { opacity: 1; }
                }

                /* Aurora */
                .aurora-borealis {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 50%;
                    background: linear-gradient(90deg, rgba(0,255,0,0.2), rgba(0,0,255,0.2));
                    filter: blur(50px);
                    animation: aurora 10s infinite alternate;
                    transform-origin: top;
                }
                @keyframes aurora {
                    from { transform: scaleY(1) skewX(0deg); }
                    to { transform: scaleY(1.5) skewX(10deg); }
                }
            `}</style>
            <AnimatePresence>
                {renderEffect()}
            </AnimatePresence>
        </div>
    );
};

export default WeatherEffects;
