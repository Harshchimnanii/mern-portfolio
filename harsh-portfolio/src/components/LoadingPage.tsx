

interface LoadingPageProps {
  city: string | null;
}

export default function LoadingPage({ city }: LoadingPageProps) {
  const text = "Harsh's Portfolio";
  const letters = text.split('');
  const angleStep = 180 / (letters.length - 1);

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes swirl {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 
              0 0 30px rgba(255, 150, 100, 0.6),
              0 0 60px rgba(200, 100, 255, 0.4),
              0 0 90px rgba(100, 150, 255, 0.3),
              inset 0 0 30px rgba(255, 200, 150, 0.3);
          }
          100% {
            box-shadow: 
              0 0 40px rgba(255, 150, 100, 0.8),
              0 0 80px rgba(200, 100, 255, 0.6),
              0 0 120px rgba(100, 150, 255, 0.4),
              inset 0 0 40px rgba(255, 200, 150, 0.4);
          }
        }

        @keyframes flame {
          0%, 100% {
            transform: scaleY(1) scaleX(1);
            opacity: 0.6;
          }
          25% {
            transform: scaleY(1.1) scaleX(0.95);
            opacity: 0.7;
          }
          50% {
            transform: scaleY(0.95) scaleX(1.05);
            opacity: 0.5;
          }
          75% {
            transform: scaleY(1.05) scaleX(0.98);
            opacity: 0.65;
          }
        }

        @keyframes textGlow {
          0% {
            text-shadow: 
              0 0 10px rgba(255, 150, 100, 0.8),
              0 0 20px rgba(255, 120, 80, 0.6),
              0 0 30px rgba(255, 100, 60, 0.4),
              0 0 40px rgba(255, 80, 40, 0.3);
          }
          100% {
            text-shadow: 
              0 0 20px rgba(255, 150, 100, 1),
              0 0 30px rgba(255, 120, 80, 0.8),
              0 0 40px rgba(255, 100, 60, 0.6),
              0 0 50px rgba(255, 80, 40, 0.5),
              0 0 60px rgba(255, 60, 20, 0.4);
          }
        }

        .orb-container {
          position: relative;
          width: 250px;
          height: 250px;
          width: 250px;
          height: 250px;
        }

        .portfolio-text {
          position: absolute;
          width: 100%;
          height: 100%;
          animation: rotate 4s linear infinite;
          z-index: 10;
        }

        .portfolio-text span {
          position: absolute;
          left: 50%;
          top: 50%;
          font-size: 22px;
          font-weight: 700;
          font-family: Arial, sans-serif;
          color: #fff;
          text-shadow: 
            0 0 8px rgba(255, 150, 100, 0.8),
            0 0 15px rgba(255, 120, 80, 0.6),
            0 0 20px rgba(255, 100, 60, 0.4);
          animation: textGlow 2s ease-in-out infinite alternate;
          transform-origin: center;
        }

        .orb-tail {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid transparent;
          border-left-color: rgba(255, 120, 50, 0.9);
          animation: rotate 2s linear infinite;
          filter: blur(1px);
        }

        .orb-tail::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-left-color: rgba(255, 150, 80, 0.7);
          animation: rotate 2.5s linear infinite;
          filter: blur(2px);
        }

        .flame {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(ellipse at 50% 60%,
            rgba(255, 150, 80, 0.4) 0%,
            rgba(255, 100, 150, 0.3) 30%,
            transparent 60%);
          animation: flame 2.5s ease-in-out infinite;
          transform-origin: center bottom;
        }

        .orb {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, 
            rgba(255, 200, 150, 0.9) 0%,
            rgba(200, 100, 255, 0.8) 25%,
            rgba(100, 150, 255, 0.6) 50%,
            rgba(50, 100, 200, 0.4) 75%,
            transparent 100%);
          animation: pulse 3s ease-in-out infinite, rotate 4s linear infinite;
        }

        .orb::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 80%;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 40%,
            rgba(255, 150, 100, 0.8) 0%,
            rgba(255, 100, 200, 0.6) 30%,
            transparent 70%);
          animation: swirl 4s linear infinite;
        }

        .orb::after {
          content: '';
          position: absolute;
          top: 20%;
          left: 20%;
          width: 60%;
          height: 60%;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 50%,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(200, 150, 255, 0.3) 40%,
            transparent 70%);
          animation: swirl 3s linear infinite reverse;
        }

        .glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: 
            0 0 30px rgba(255, 150, 100, 0.6),
            0 0 60px rgba(200, 100, 255, 0.4),
            0 0 90px rgba(100, 150, 255, 0.3),
            inset 0 0 30px rgba(255, 200, 150, 0.3);
          animation: glow 2s ease-in-out infinite alternate;
        }

        .text-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 56px;
          font-weight: bold;
          font-family: Arial, sans-serif;
          color: #fff;
          text-shadow: 
            0 0 10px rgba(255, 150, 100, 0.8),
            0 0 20px rgba(255, 120, 80, 0.6),
            0 0 30px rgba(255, 100, 60, 0.4),
            0 0 40px rgba(255, 80, 40, 0.3);
          animation: textGlow 2s ease-in-out infinite alternate;
          z-index: 10;
          pointer-events: none;
        }
      `}</style>

      <div className="orb-container">
        <div className="portfolio-text">
          {letters.map((letter, index) => {
            const angle = -90 + (index * angleStep);
            const radius = 135;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const rotation = angle + 90;

            return (
              <span
                key={index}
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotation}deg)`,
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
        <div className="orb-tail"></div>
        <div className="flame"></div>
        <div className="orb"></div>
        <div className="glow"></div>
        <div className="text-center">HP</div>
      </div>

      {city && (
        <div style={{
          marginTop: '2rem',
          color: 'white',
          fontSize: '1.5rem',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
          textShadow: '0 0 10px rgba(255, 150, 100, 0.5)',
          zIndex: 20
        }}>
          The weather in {city} is just beautiful as this website
        </div>
      )}
    </div>
  );
}
