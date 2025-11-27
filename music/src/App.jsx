import Header from "./components/Header";
import ThemeProvider from "./components/ThemeProvider";
import { useTheme } from "./components/useTheme";
import { FaGlobe } from 'react-icons/fa';
import "./App.css";

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div className={`app ${theme}`}>
      <Header />
      <main>
        <h1> Animales Exóticos del Mundo</h1>
        <p className="intro">Descubre las criaturas más fascinantes y extraordinarias de nuestro planeta</p>
        
        <div className="animals-grid">
          <div className="card animal-card">
            <div className="animal-image">
              <img src="https://i.pinimg.com/originals/67/53/f2/6753f24661fe517fa69b19a2834aafe8.gif" alt="Camaleón" />
            </div>
            <h2>Camaleón Pantera</h2>
            <p>Originario de Madagascar, este reptil puede cambiar de color para camuflarse y comunicarse. Puede mover sus ojos independientemente para observar en diferentes direcciones.</p>
            <span className="habitat">Hábitat: Bosques tropicales</span>
          </div>

          <div className="card animal-card">
            <div className="animal-image">
              <img src="https://i.gifer.com/9MMg.gif" alt="Loro" />
            </div>
            <h2>Guacamayo Azul</h2>
            <p>Ave de colores vibrantes nativa de América del Sur. Conocida por su inteligencia y capacidad para imitar sonidos humanos. Forma vínculos de por vida con su pareja.</p>
            <span className="habitat">Hábitat: Selvas amazónicas</span>
          </div>

          <div className="card animal-card">
            <div className="animal-image">
              <img src="https://content.nationalgeographic.com.es/medio/2024/10/23/leopardo-de-las-nieves_00000000_ff65706b_241023095201_1200x630.webp" alt="Leopardo" />
            </div>
            <h2>Leopardo de las Nieves</h2>
            <p>Felino solitario adaptado a vivir en las montañas más altas de Asia Central. Su grueso pelaje lo protege de temperaturas extremas de hasta -40°C.</p>
            <span className="habitat">Hábitat: Montañas del Himalaya</span>
          </div>

          <div className="card animal-card">
            <div className="animal-image">
              <img src="https://i.pinimg.com/originals/af/90/d9/af90d93efc08c46b8fa454997e406950.gif" alt="Axolotl" />
            </div>
            <h2>Axolotl</h2>
            <p>Salamandra acuática mexicana con increíble capacidad de regeneración. Puede regenerar extremidades, órganos e incluso partes del cerebro.</p>
            <span className="habitat">Hábitat: Lagos de México</span>
          </div>

          <div className="card animal-card">
            <div className="animal-image">
              <img src="https://i.redd.it/z0ay69dh9jfb1.jpg" alt="Canguro" />
            </div>
            <h2>Canguro Arborícola</h2>
            <p>A diferencia de sus primos terrestres, estos marsupiales viven en los árboles de las selvas de Nueva Guinea. Excelentes trepadores con colas muy largas para equilibrio.</p>
            <span className="habitat">Hábitat: Selvas de Nueva Guinea</span>
          </div>

          <div className="card animal-card">
            <div className="animal-image">
              <img src="https://i.pinimg.com/originals/06/c0/7c/06c07cd55476c3452b0d764ccb0b901e.gif" alt="Nutria" />
            </div>
            <h2>Nutria Gigante</h2>
            <p>El miembro más grande de la familia de las comadrejas. Estos animales sociales cazan en grupos y pueden medir hasta 1.8 metros de longitud.</p>
            <span className="habitat">Hábitat: Ríos amazónicos</span>
          </div>
        </div>

        <section className="info-section">
          <h2>
            <FaGlobe size={24} style={{ marginRight: '10px', color: '#007bff' }} /> 
                Conservación de Especies
              </h2>
          <p>Muchos animales exóticos están en peligro de extinción debido a la pérdida de hábitat, el cambio climático y la caza furtiva. Es crucial proteger estos ecosistemas únicos para las futuras generaciones.</p>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;