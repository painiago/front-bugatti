import '/src/components/layout/SectionLifeStyle/SectionLifeStyle.css';
import '/src/components/layout/StyleTextos.css';

function SectionLifeStyle() {
  return (
    <section className='welcome-section-xx '>
      <div className="container-xxl zero-padding">
          <h2 id="lifestyle" className='h2-name text-center mb-5' > LIFESTYLE</h2>
          <img src="/src/assets/bugatti/14.jpg" align="left" class="img-fluid img-fluid-1" alt="Imagem responsiva" />
        <div className="row" >
          <div className="col-md-11 mt-descri">
          <h3 className='paris-1 text-center mt-3' >PARIS, 25 SEPTEMBER 2022</h3>
          <p className='paris-2 text-center' > Cvety Vassileva - @cvety_vassileva</p>
          <p className='paris-3 text-center mt-3'>
            CHANTILLY ARTS & ELEGANCE RICHARD MILLE</p>
            </div>
        </div>
        
        <div className="row">
          <div className="col  text-center mt-link">       
              <a href="/LifeStyle" className='life-St-no-hover mt' >VER MAIS  
                <img className='ml-2' src="/src/assets/proximo.png" width="15px" height="auto" alt="proximo" />          
             </a>
          </div>
       </div> 
     </div>

      {/* ---------- */}
      <section className='container-xxl zero-padding mb-5 '>
        <div className="row mt-5">
          <div className="col">
            <img src="/src/assets/bugatti/22.jpg" align="right" class=" img-fluid img-fl" alt="Imagem responsiva" />
            <div className='mt-5 text-center ' >
              <p class="font-1 ">Elf-discipline</p>
              <p class="font-2 d-inline text-center">is a key to success!</p>
            </div>
            <div className='text-center mt-3'>
              <div className="col-md-6" >
                <img src="/src/assets/proximo.png" width="15px" height="auto" alt="proximo" />
                <p className=' d-inline' > Focus</p>
              </div>
              <div className="text-center">
                <div className="col-md-6">
                  <img src="/src/assets/proximo.png" width="15px" height="auto" alt="proximo" />
                  <p className=' d-inline'> Discipline</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="col-md-6 mt-5 ">
                <a href="/LifeStyle" className='life-St-no-hover  text-justify-center' >VER MAIS
                  <img className='ml-2' src="/src/assets/proximo.png" width="15px" height="auto" alt="proximo" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </section>
  );
}
export default SectionLifeStyle;