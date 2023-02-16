import '/src/components/layout/Footer/Footer.css';

function Footer (){
  return (
<div className="footercolor ">
  <div className="container ">
    <footer class="text-center  text-white" >
      <div class="container p-4">
        <h5>Contatos</h5> 
        <section class="mb-4 ">
          <a id='backToTop' class="btn btn-outline-light btn-floating m-1" href="#navBack" role="button"><i class="fa-solid fa-arrow-up"></i></a>
          <a class="btn btn-outline-light btn-floating m-1" href="mailto:contatowebiago@gmail.com" role="button" ><i class="fab fa-google"></i></a>
          <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/painiago" role="button" target="_blank"><i class="fab fa-instagram"></i></a>
          <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/iagonascimento" role="button" target="_blank"><i class="fab fa-linkedin-in "></i></a>
          <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/painiago" role="button" target="_blank"><i class="fab fa-github"></i></a>
        <p className='font-text-footer mt-2'>contatowebiago@gmail.com</p>
        </section>
      </div>
<div class="container ">
  <div className="row">
    <div className="col-md-6 mb-5 text-center" id="no-marge-footer">
      <a href="\PoliticaPrivacidade" className='text-pv text-modify'>
        Política de privacidade
           </a>
          </div>
          <div className="col-md-6 mb-5 text-center" id="no-marge-footer2">
          <span className='ml-5 text-pv '>© 2023 Copyright: <span className=''> Iago Nascimento</span></span>
        </div>
      </div>   
  </div>
</footer>
</div>
</div>
  );
}
export default Footer;