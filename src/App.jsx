import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
  const [formStatus, setFormStatus] = useState('')

  const accesorios = [
    { nombre: 'Cúpulas', icon: '🛡️' },
    { nombre: 'Grips', icon: '✋' },
    { nombre: 'Fender', icon: '🔧' },
    { nombre: 'Portaplacas', icon: '📋' },
    { nombre: 'Maniguetas', icon: '🎯' },
    { nombre: 'Manubrios', icon: '🎪' },
    { nombre: 'Estabilizadores de Barras', icon: '⚙️' },
    { nombre: 'Direccionales', icon: '🚦' },
    { nombre: 'Cocullos', icon: '👤' },
    { nombre: 'Luces', icon: '💡' },
    { nombre: 'Tornillería de Lujo', icon: '⭐' },
    { nombre: 'Espejos', icon: '🪞' },
  ]

  const servicios = [
    { nombre: 'Personalización en Calcas', icon: '🎨' },
    { nombre: 'Instalación de Accesorios', icon: '🔩' },
    { nombre: 'Modificaciones Estéticas', icon: '✨' },
  ]

  const handleWhatsApp = () => {
    window.open('https://wa.me/573125113557', '_blank')
  }

  const handleGoogleMaps = () => {
    window.open('https://maps.google.com/?q=tu+ubicacion', '_blank')
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('enviando')
    
    try {
      const response = await fetch('https://formspree.io/f/myzqoojl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          mensaje: formData.mensaje,
          _subject: 'Nuevo mensaje de A TOPE DE REVOLUCIONES',
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setFormStatus('exito')
        setFormData({ nombre: '', email: '', mensaje: '' })
        setTimeout(() => setFormStatus(''), 3000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus(''), 3000)
      }
    } catch (error) {
      console.error('Error:', error)
      setFormStatus('error')
      setTimeout(() => setFormStatus(''), 3000)
    }
  }

  return (
    <div className="app">
      {/* Fondo animado de motos */}
      <div className="animated-background">
        <div className="moto-float moto-1">
          <span>🏍️</span>
        </div>
        <div className="moto-float moto-2">
          <span>🏍️</span>
        </div>
        <div className="moto-float moto-3">
          <span>🏍️</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-section">
            <h1 className="logo">A TOPE DE REVOLUCIONES</h1>
          </div>
          
          <div className="nav-menu">
            <button 
              className={`nav-link ${activeSection === 'accesorios' ? 'active' : ''}`}
              onClick={() => setActiveSection('accesorios')}
            >
              Accesorios
            </button>
            <button 
              className={`nav-link ${activeSection === 'servicios' ? 'active' : ''}`}
              onClick={() => setActiveSection('servicios')}
            >
              Servicios
            </button>
            <button 
              className={`nav-link ${activeSection === 'ubicacion' ? 'active' : ''}`}
              onClick={() => setActiveSection('ubicacion')}
            >
              Ubicación
            </button>
            <button 
              className={`nav-link ${activeSection === 'contacto' ? 'active' : ''}`}
              onClick={() => setActiveSection('contacto')}
            >
              Contacto
            </button>
          </div>

          <button className="whatsapp-btn" onClick={handleWhatsApp} title="Contactar por WhatsApp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.537 0-2.852-.503-3.887-1.449L5.7 3.645 2.617 9.39c-.936 1.595-1.446 3.518-1.446 5.565 0 5.487 4.471 9.958 9.958 9.958 1.928 0 3.757-.55 5.335-1.589l5.746 3.686 5.745-3.686c1.039-1.578 1.589-3.407 1.589-5.335 0-5.487-4.471-9.958-9.958-9.958"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Sección Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Bienvenido a A TOPE DE REVOLUCIONES</h2>
          <p>Accesorios, Instalación y Modificación Estética de Motos</p>
        </div>
      </section>

      {/* Sección Accesorios */}
      {activeSection === 'accesorios' && (
        <section className="accesorios-section">
          <h2>Nuestros Accesorios</h2>
          <div className="accesorios-grid">
            {accesorios.map((accesorio, index) => (
              <div key={index} className="accesorio-card">
                <div className="accesorio-icon">{accesorio.icon}</div>
                <h3>{accesorio.nombre}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sección Servicios */}
      {activeSection === 'servicios' && (
        <section className="servicios-section">
          <h2>Nuestros Servicios</h2>
          <div className="servicios-grid">
            {servicios.map((servicio, index) => (
              <div key={index} className="servicio-card">
                <div className="servicio-icon">{servicio.icon}</div>
                <h3>{servicio.nombre}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sección Ubicación */}
      {activeSection === 'ubicacion' && (
        <section className="ubicacion-section">
          <h2>Ubícanos</h2>
          <div className="ubicacion-content">
            <p>Haz clic en el icono de Google Maps para encontrarnos</p>
            <button className="maps-btn" onClick={handleGoogleMaps}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
              Abrir en Google Maps
            </button>
          </div>
        </section>
      )}

      {/* Sección Contacto */}
      {activeSection === 'contacto' && (
        <section className="contacto-section">
          <h2>Contáctanos</h2>
          <form className="contacto-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleFormChange}
                required
                placeholder="Tu nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electronico *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                placeholder="tu@correo.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleFormChange}
                required
                placeholder="Cuéntanos qué necesitas..."
                rows="5"
              />
            </div>
            <button type="submit" className="submit-btn" disabled={formStatus === 'enviando'}>
              {formStatus === 'enviando' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            {formStatus === 'exito' && <p className="form-success">¡Mensaje enviado exitosamente! 🎉</p>}
            {formStatus === 'error' && <p className="form-error">Error al enviar el mensaje. Intenta de nuevo.</p>}
          </form>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 A TOPE DE REVOLUCIONES. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
