import '/src/components/layout/SectionUniversoBugatti/SectionUniversoBugatti.css';
import '/src/components/layout/StyleTextos.css';

function SectionUniversoBugatti() {
  return (

    <section className="mt-universo slidercolor-2 welcome-section">
      <div className="container mt-5">
        <div className="row">

          <h2 id='bugattiuniverse' className='mt-0 mb-5 h2-name text-center'>BUGATTI UNIVERSO</h2>
          <div className="col text-center ">
            <div className="ft-zoom">
              <img src="/src/assets/bugatti/BugattiUniverse/Champagne/home_champagne.jpg" className='img-fluid' height="auto" alt="" />
            </div>
            <div className="col mt-3">
              <a className='life-St-no-hover' href="/Champagne">Champagne</a>
            </div>
          </div>
          <div className="col text-center">
            <div className="ft-zoom">
              <img src="/src/assets/bugatti/BugattiUniverse/relocerto.jpg" className='img-fluid' height="auto" alt="" />
            </div>
            <div className="col mt-3">
              <a className='life-St-no-hover ' href="/Relogio">RÉLOGIO</a>
            </div>
          </div>
          <div className="col-md-4 text-center ft-respon">
            <div className="ft-zoom">
              <img src="/src/assets/bugatti/BugattiUniverse/fabricacerta.jpg" className='img-fluid ft-zoom' height="auto" alt="" />
            </div>
            <div className="col mt-3">
              <a className='life-St-no-hover' href="/Fabrica"> FÁBRICA</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionUniversoBugatti;