// CSS
import '/src/components/layout/Header/Header.css';
import '/src/components/layout/ConfigColorsOthers.css';
import '/src/components/layout/StyleTextos.css';


function Header (){
  return (
<>
  <section  className="welcome-section-2 ">
    <div className="text-1 container" id='text'>
      <div className="row">
        <div class=" divLeft  ">
            <div class="textDiv mt-4">
              <div className="justify-content-md-center " >
                <h1 class="ml-2 h1-name md-ia"><i id="spaceText" ></i > EXPERIENCE THE BUGATTI CHIRON</h1>
                  <div className="col-7 offset-md-0 ">
                    <h3 className='mb-5  h5-md md-ib'>Bugatti 
                    Chiron, muito além do limite </h3>
                <a href="#!" class=" offset-md-2 botao-dev">SAIBA MAIS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className='container-xxl zero-padding bg-66'>
        <img src="/src/assets/bugatti/2.jpg"/>
      </div>
</section> 

<div className="container-xxl zero-padding text-center" id='brutal' >  
   <p className='brutal bru' id="bru">Chiron - Motor : W 16 /100km: low 44.650 / medium 24.800 / high 21.290 / extra high 21.570 / combined 25.190 ; CO2 emissions, combined, g / km: 571.636; efficiency class: G</p>
 </div>
</>

  );
}
export default Header;