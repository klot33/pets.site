import dog from '../image/dog.jpg'
import mouse from '../image/mouse.jpg'
import monkey from '../image/maxresdefault.jpg'

function Slider() {
    return ( 
        <div>
  <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
  <div id="carouselExampleIndicators" className="carousel slide m-auto w-75 p-2" style={{background: 'linear-gradient(135deg, #320cdd, #528edd)', borderRadius: 10}} data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={dog} className="d-block mx-auto rounded-5" alt="Собака" style={{width: 300}} />
        <div className="text-center mt-3 text-light">
          <h2 className="text-center">Найдена собака</h2>
          <p>Собака белая, была утеряна в Красногвардейском районе</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={mouse} className="d-block mx-auto rounded-5" alt="Мышь" style={{width: 300}} />
        <div className="text-center mt-3 text-light">
          <h2 className="text-center">Найдена мышь</h2>
          <p>Мышь серая, была утеряна в Центральном районе</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={monkey} className="d-block mx-auto rounded-5" alt="Горилла" style={{width: 300, height: 300}} />
        <div className="text-center mt-3 text-light">
          <h2 className="text-center">Найдена горила</h2>
          <p>Горилла, была утеряна в Красногвардейском районе</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Предыдущий</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Следующий</span>
    </button>
  </div>
</div>

     );
}

export default Slider;