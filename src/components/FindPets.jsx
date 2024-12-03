import cat from '../image/scale_1200.jfif'
import koza from '../image/koza.jpg'
import dog from '../image/dog.jpg'
import parrot from '../image/Parrot.jpg'
import rabbit from '../image/rabbit.jpg'

function FindPets() {
    return ( 
        <div>
  <h2 className="text-center text-white bg-primary m-4 p-3 rounded-3">Карточки найденных животных</h2>
  <div className="d-flex flex-wrap justify-content-center">
    {/* Карточка 1 */}
    <div className="card m-3" style={{width: '18rem', borderRadius: 10, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'}}>
      <img src={cat} className="card-img-top rounded-3" alt="рисунок животного" style={{height: 200, objectFit: 'cover'}} />
      <div className="card-body">
        <h5 className="card-title">Кошка</h5>
        <p className="card-text"><strong>id:</strong> 14</p>
        <p className="card-text"><strong>Описание:</strong> Потерялась кошка, пушистая, серая. Любит играть, ласковая.</p>
        <p className="card-text"><strong>Номер чипа:</strong> ca-001-spb</p>
        <p className="card-text"><strong>Район:</strong> Василеостровский</p>
        <p className="card-text"><strong>Дата:</strong> 24-03-2020</p>
      </div>
    </div>
    {/* Карточка 2 */}
    <div className="card m-3" style={{width: '18rem', borderRadius: 10, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'}}>
      <img src={koza} className="card-img-top rounded-3" alt="рисунок животного" style={{height: 200, objectFit: 'cover'}} />
      <div className="card-body">
        <h5 className="card-title">Коза</h5>
        <p className="card-text"><strong>id:</strong> 18</p>
        <p className="card-text"><strong>Описание:</strong> Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.</p>
        <p className="card-text"><strong>Номер чипа:</strong> go-011-spb</p>
        <p className="card-text"><strong>Район:</strong> Центральный</p>
        <p className="card-text"><strong>Дата:</strong> 14-03-2022</p>
      </div>
    </div>
    {/* Карточка 3 */}
    <div className="card m-3" style={{width: '18rem', borderRadius: 10, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'}}>
      <img src={dog} className="card-img-top rounded-3" alt="рисунок животного" style={{height: 200, objectFit: 'cover'}} />
      <div className="card-body">
        <h5 className="card-title">Собака</h5>
        <p className="card-text"><strong>id:</strong> 22</p>
        <p className="card-text"><strong>Описание:</strong> Потерялась собака, черная, среднего размера. Очень дружелюбная.</p>
        <p className="card-text"><strong>Номер чипа:</strong> do-003-moscow</p>
        <p className="card-text"><strong>Район:</strong> Пресненский</p>
        <p className="card-text"><strong>Дата:</strong> 12-07-2023</p>
      </div>
    </div>
    {/* Карточка 4 */}
    <div className="card m-3" style={{width: '18rem', borderRadius: 10, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'}}>
      <img src={parrot} className="card-img-top rounded-3" alt="рисунок животного" style={{height: 200, objectFit: 'cover'}} />
      <div className="card-body">
        <h5 className="card-title">Попугай</h5>
        <p className="card-text"><strong>id:</strong> 27</p>
        <p className="card-text"><strong>Описание:</strong> Попугай с ярким зеленым оперением, улетел с балкона.</p>
        <p className="card-text"><strong>Номер чипа:</strong> pa-010-spb</p>
        <p className="card-text"><strong>Район:</strong> Петроградский</p>
        <p className="card-text"><strong>Дата:</strong> 21-08-2024</p>
      </div>
    </div>
    {/* Карточка 5 */}
    <div className="card m-3" style={{width: '18rem', borderRadius: 10, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'}}>
      <img src={rabbit} className="card-img-top rounded-3" alt="рисунок животного" style={{height: 200, objectFit: 'cover'}} />
      <div className="card-body">
        <h5 className="card-title">Кролик</h5>
        <p className="card-text"><strong>id:</strong> 34</p>
        <p className="card-text"><strong>Описание:</strong> Потерян кролик, белый с черными пятнами. Очень активный.</p>
        <p className="card-text"><strong>Номер чипа:</strong> ra-005-kazan</p>
        <p className="card-text"><strong>Район:</strong> Ново-Савиновский</p>
        <p className="card-text"><strong>Дата:</strong> 02-09-2024</p>
      </div>
    </div>
  </div>
</div>

     );
}

export default FindPets;