import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../estilos/login.css';

// Componente Login: Maneja autenticación (registro e inicio de sesión)
const Login = () => {
 
  // email y password: Almacena el valor de los inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // isSignUp: Controla si estamos en modo registro (true) o login (false)
  const [isSignUp, setIsSignUp] = useState(false);
  
  // error: Mensaje de error a mostrar al usuario
  const [error, setError] = useState('');
  
  // loading: Estado de carga durante peticiones a la API
  const [loading, setLoading] = useState(false);
  
    
  // useAuth: Hook personalizado para acceder a las funciones de autenticación
  // signIn ->  Función para iniciar sesión
  // signUp ->  Función para registrarse
  const { signIn, signUp } = useAuth();
  
  // Hook de React Router para navegar entre rutas
  const navigate = useNavigate();

  /**
   * handleSubmit: Maneja el envío del formulario   * 
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Cancelamos el comportamiento por defecto del formulario
    
    // Limpia errores anteriores y activa estado de carga
    setError('');
    setLoading(true);

    try {
      let result; // Variable para almacenar resultado de la operación
      
      // Lógica para REGISTRO (sign up)
      if (isSignUp) {
        result = await signUp(email, password);
        
        // Si el registro es exitoso (sin errores)
        if (!result.error) {
          alert('¡Registro exitoso! Por favor verifica tu email.');
          setIsSignUp(false); // Cambia a modo login después del registro
        }
      } 
      // Lógica para inicio de sesión (LOGIN - sign in)
      else {
        result = await signIn(email, password);
        
        // Si el inicio de sesión es exitoso
        if (!result.error) {
          navigate('/'); // Redirige al usuario a la página principal
        }
      }

      // Si hubo un error en la operación, lo mostramos
      if (result.error) {
        setError(result.error.message);
      }
    } catch (err) {
      // Manejo de errores inesperados (errores de red, etc.)
      setError('Ocurrió un error inesperado');
    } finally {
      // Siempre desactiva el estado de carga, independientemente del resultado
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Título dinámico que cambia según el modo (registro/login) */}
        <h2>{isSignUp ? 'Registrarse' : 'Iniciar Sesión'}</h2>
        
        {/* Muestra mensaje de error si existe */}
        {error && <div className="error-message">{error}</div>}
        
        {/* Formulario principal */}
        <form onSubmit={handleSubmit}>
          {/* Grupo para el campo de email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualiza estado al escribir
              required // Campo obligatorio
              placeholder="tu@email.com"
            />
          </div>
          
          {/* Grupo para el campo de contraseña */}
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualiza estado al escribir
              required // Campo obligatorio
              placeholder="••••••••"
              minLength="6" // Mínimo 6 caracteres
            />
          </div>
          
          {/* Botón de envío del formulario */}
          <button 
            type="submit" 
            disabled={loading} // Deshabilita el botón durante la carga
            className="login-button"
          >
            {/* Texto dinámico según estado de carga y modo */}
            {loading ? 'Cargando...' : (isSignUp ? 'Registrarse' : 'Iniciar Sesión')}
          </button>
        </form>
        
        {/* Pie del formulario con botón para cambiar entre login/registro */}
        <div className="login-footer">
          <button 
            type="button"
            onClick={() => setIsSignUp(!isSignUp)} // Cambia entre modos
            className="toggle-button"
          >
            {/* Texto dinámico según el modo actual */}
            {isSignUp 
              ? '¿Ya tienes cuenta? Inicia sesión' 
              : '¿No tienes cuenta? Regístrate'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;