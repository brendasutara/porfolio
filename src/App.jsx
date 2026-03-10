import { Navbar } from "./sections/Navbar";

const App = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <section id="inicio" className="min-h-screen">
        <h1 className="text-8xl text-wrap uppercase p-10">inicio</h1>
      </section>
      <section id="servicios" className="min-h-screen bg-pink-100">
        <h1 className="text-8xl text-wrap uppercase p-10">servicios</h1>
      </section>
      <section id="sobre mi" className="min-h-screen">
        <h1 className="text-8xl text-wrap uppercase p-10">sobre mi</h1>
      </section>
      <section id="trabajos" className="min-h-screen">
        <h1 className="text-8xl text-wrap uppercase p-10">trabajos</h1>
      </section>
      <section id="contacto" className="min-h-screen  bg-pink-100">
        <h1 className="text-8xl text-wrap uppercase p-10">contacto</h1>
      </section>
    </div>
  );
};

export default App;
