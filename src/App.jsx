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
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.413-1.761-1.579-2.059-.165-.297-.017-.458.124-.606.127-.126.297-.328.446-.492.149-.164.198-.279.298-.465.099-.186.05-.348-.025-.487-.075-.138-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.99 1.511 9.841 9.841 0 00-3.168 2.543 9.85 9.85 0 00-2.107 3.855 9.845 9.845 0 00-.35 4.612 9.855 9.855 0 00.98 3.624l-.55 1.995 2.049-.537a9.853 9.853 0 003.82.76h.004c5.438 0 9.863-4.425 9.863-9.864 0-2.634-1.023-5.112-2.882-6.97 1.859-1.859 2.883-4.348 2.883-6.974 0-5.438-4.425-9.862-9.863-9.862zm0 0M12.007 2C6.568 2 2.144 6.424 2.144 11.863c0 1.882.445 3.729 1.293 5.415L2.35 23.5l6.561-1.721c1.723.91 3.67 1.391 5.696 1.391 5.439 0 9.863-4.424 9.863-9.863C21.87 6.424 17.446 2 12.007 2z"/>
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/>
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
