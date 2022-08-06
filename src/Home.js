import React from 'react';
import './bootstrap.min.css';

function HomeSlider(){
    return (
  
      <section>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://img.freepik.com/free-vector/iot-technology-digital-banner-internet-things-smart-home-device-network-with-icons-futuristic-innovation-industry-vector-concept-illustration-technology-digital-electricity-internet_102902-4698.jpg?w=1380" className="d-block w-100" alt="..."/>
      </div>
    </div>
  </div>
  </section>
  );
  
  }
  
function HomeB(){
    return (
      <section>
  <div className="container row py-5 mx-auto">
      <div className="col-md-6">
        <h5 className="card-title mb-3">DEXTERONIX TECHNOLOGIES PVT LTD</h5>
        <p>is a
  company that has been formed by a group of
  students having vivid experience and exposure in
  IoT, AI and Electronics. It is a young company
  based in Greater Noida, Delhi NCR. It has been
  conceived with a vision to improve the daily lives
  of people using AI and IoT and as an organization, we place a high emphasis on working in
  partnership with customers.</p>
      </div>
      <div className="col-md-6">
        <p>We change to match the public needs as our
  professionals take the time to understand the real
  time problems and needs suggest re-engineering
  proces ses and develop cos t effec tive and
  appropriate solutions.</p>
  <p>With experience, we have learnt that to provide
  any solution, we need creativity and lots of
  inspired thinking our hard working and
  experienced professionals along with the ‘lets get
  it done’ attitude of the fresh talent is constantly
  pushing the limits. Our values of Service, Integrity, Growth and Continually increasing Competence
  govern our behavior towards all our stakeholders.</p>
      </div>
    </div>
    <div className="container mx-auto">
      <div className="text-md-center py-5">
        <h1>OUR PRODUCTS AND SOLUTIONS</h1>
      </div>
  
      <div className="row px-auto py-5">
        <div className="col-md-6">
          <span className="placeholder col-6 h-100 bg-success"></span>
        </div>
        <div className="col-md-6">
          <h5 className="card-title placeholder-glow">
        <span className="placeholder col-6"></span>
      </h5>
         <p className="card-text placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span>
      </p>
      <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
        </div>
      </div>
  
      <div className="row px-auto py-5">
        <div className="col-md-6">
          <h5 className="card-title placeholder-glow">
        <span className="placeholder col-6"></span>
      </h5>
         <p className="card-text placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span>
      </p>
      <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
        </div>
        <div className="col-md-6">
          
          <span className="placeholder col-6 h-100 bg-success"></span>
        </div>
      </div>
      
      <div className="row px-auto py-5">
        <div className="col-md-6">
          <span className="placeholder col-6 h-100 bg-success"></span>
        </div>
        <div className="col-md-6">
          <h5 className="card-title placeholder-glow">
        <span className="placeholder col-6"></span>
      </h5>
         <p className="card-text placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span>
      </p>
      <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
        </div>
      </div>
      
    </div>
  </section>
      );
  }

function Home(){
    return (
        <main className='py-5'>
        <HomeSlider />
        <HomeB />
        </main>
    );
}

export default Home;