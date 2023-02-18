import '/src/components/layout/SectionFichaTec/SectionFichaTec.css';
import '/src/components/layout/StyleTextos.css';



function SectionFichaTec (){
  return(
<section className='container-fluid section-fundo-color'>
  <section className='container '>
    <div className=" margin-tp "> 
      <div className="container mt-5 ">
        <div className="row ">
         <div className="col text-center mt-5 " >   
          <h2>
            <span>BUGATTI CHIRON - </span>
            <span>ENGINE</span>
            </h2>  
        </div>
      </div>
      <div className="row mt-5 d-flex justify-content-center ">
        <div className="col-6 mt-2 mb-2 ml-2 d-flex justify-content-center">
              <img className='motor-icon d-inline' align="left" src="/src/assets/motor.svg" alt="motor" />
              <p className='ml-2 position-inline font-text'>
                W16 8.0,<br /> Quad-turbo <br /> 
                1.500 hp <br /> 163,15 mkgf </p>  
        </div>
        <div className="col-5 mt-2 mb-2 ml-1 d-flex justify-content-center">
              <img className='transmissao-icon' align="left" src="/src/assets/transmissao.png" alt="transmissao" />
              <p className='ml-1 mt-3 position-inline font-text text-center'>
                7 Velocidades</p>  
        </div>
        <div className="col-6 mt-2 mb-2 ml-2 d-flex justify-content-center">
              <img className='carro-icon d-inline' align="left" src="/src/assets/bug.png" alt="" />
              <p className='ml-1 position-inline font-text'>
                <br />1.996 kg <br />Vel - 474 km</p>  
                
        </div>
      </div>
    </div>


                  {/* BUGATTI DIVO */}
  <section className='margin-tp'>
    <div className="container ">
      <div className="row">
        <div className="col text-center" >   
          <h2>
            <span>BUGATTI DIVO - </span>
            <span>ENGINE</span>
            </h2>  
        </div>
      </div>
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-6 mt-2 mb-2 ml-2 d-flex justify-content-center">
              <img className='motor-icon d-inline ' align="left"  src="/src/assets/motor.svg" alt="motor" />
              <p className='ml-2  position-inline font-text'>
                W16 8.0,<br /> Quad-turbo <br /> 
                1.479 hp <br /> 163,15 mkgf </p>  
        </div>
        <div className="col-5 mt-2 mb-2 ml-1 d-flex justify-content-center">
              <img className='transmissao-icon d-inline' align="left" src="/src/assets/transmissao.png" alt="transmissao" />
              <p className='ml-1 mt-3 position-inline text-center  font-text'>
                7 Velocidades</p>  
        </div>
        <div className="col-6 mt-2 mb-5 ml-2 d-flex justify-content-center">
              <img className='carro-icon d-inline' align="left" src="/src/assets/bug.png" alt="" />
              <p className='ml-1 position-inline font-text'>
              <br />1.961 kg <br />Vel - 380 km</p>  
        </div>
      </div>
    </div>
    {/* <div className="container ">
        <div className="col  text-center mt-3"> 
          <a href="#" className='life-St-no-hover'>VER MAIS 
          <img className='ml-2 mb-1' src="/src/assets/proximo.png"  width="15px" height="auto" lt="proximo" />
          </a> 
          </div> 
      </div> */}
    </section>
</div>
</section>
</section>
  );
}
export default SectionFichaTec;