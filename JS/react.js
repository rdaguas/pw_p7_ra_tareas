// Crear un elemento con React
const App = () => {
    return React.createElement('h1', null, '¡Hola Mundo con React!');
  };
  
  // Renderizar el componente en el contenedor #root
  const root = ReactDOM.createRoot(document.getElementById('react'));
  root.render(React.createElement(App));
  