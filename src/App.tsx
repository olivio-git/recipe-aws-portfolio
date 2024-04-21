import './App.css';
import reactLogo from './assets/react.svg';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000000] via-[#000000] to-[#434343] flex flex-col items-center justify-center group">
      <div className="flex justify-center">
        <img
          src={reactLogo}
          className="h-32 cursor-pointer filter ease-in-out  animate-bounce drop-shadow-sm decoration-purple-100 "
          alt="React logo"
          style={{ backgroundColor: 'transparent' }} // Asegúrate de que el fondo sea transparente
        />
      </div>
      <h1 className="text-4xl font-light animate-pulse text-white mt-8 cursor-pointer">
        oliviodev.com is being built
      </h1>
    </div>
  );
 }
 
 export default App;
 
