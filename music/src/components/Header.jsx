import { useTheme } from './useTheme'

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <header>
            <div className="header-content">
                <h2>🌿 Mundo Exótico</h2>
                <p className="header-subtitle">  
                    Explorando la fauna salvaje</p>
            </div>
            <button onClick={toggleTheme}>
                {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
            </button>
        </header>
    )
}

export default Header;