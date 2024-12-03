import '../pages/css/my.css'
import '../pages/css/search.css'
function SearchPets() {
    return ( 
      <main className="container mt-5">
  <h2 className="text-center mb-4">Добавить объявление о животном</h2>
  <form id="addPetForm">
    <div className="mb-3">
      <label htmlFor="animalType" className="form-label">Вид животного</label>
      <input type="text" className="form-control" id="animalType" placeholder="Введите вид животного (например, кошка, собака)" required />
    </div>
  </form></main>
     );
}

export default SearchPets;