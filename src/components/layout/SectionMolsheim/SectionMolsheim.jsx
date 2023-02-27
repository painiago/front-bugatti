import '../../layout/StyleTextos.css';
import '../../layout/SectionMolsheim/SectionMolsheim.css';

function SectionMolsheim (){
  return(
<section>
  <div className="container-xxl zero-padding mt-mol-1">
    <div className="row ">
      <div className="col" >
       <h2 id='moshelim' className='h2-name text-center mb-5' >MOLSHEIM</h2>
        <img src="/src/assets/bugatti/chiron.jpg" align="left"  height="auto" className="img-fluid photo-efect" alt="Imagem responsiva" />
        <h3 className='d-inline paris-1 mt-4 ml-3' >MOLSHEIM, FRANCE </h3>
          <div className="">
              <p className="font-style1 mt-mol" >A SENSE</p>
              <p className="font-style-molsheim ml-5 ">of Style!</p>
              </div> 
              <div className="ml-1 mt-mol text-center">       
              <a href="/Moshelim" className='life-St-no-hover ' >VER MAIS  
              <img className='ml-2' src="/src/assets/proximo.png" width="15px" height="auto" alt="proximo" />          
            </a>
          
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
export default SectionMolsheim;