import '../pages/css/add_pet.css'
function AddPets() {
    return ( 
        <main className="container mt-5">
  <h2 className="text-center mb-4">Добавить объявление о животном</h2>
  <form id="addPetForm">
    <div className="mb-3">
      <label htmlFor="animalType" className="form-label">Вид животного</label>
      <input type="text" className="form-control" id="animalType" placeholder="Введите вид животного (например, кошка, собака)" required />
    </div>
    <div className="mb-3">
      <label htmlFor="animalDescription" className="form-label">Описание</label>
      <textarea className="form-control" id="animalDescription" rows={3} placeholder="Введите описание животного" required defaultValue={""} />
    </div>
    <div className="mb-3">
      <label htmlFor="chipNumber" className="form-label">Номер чипа (если есть)</label>
      <input type="text" className="form-control" id="chipNumber" placeholder="Введите номер чипа" />
    </div>
    <div className="mb-3">
      <label htmlFor="area" className="form-label">Район</label>
      <input type="text" className="form-control" id="area" placeholder="Введите район, где найдено или потеряно животное" required />
    </div>
    <div className="mb-3">
      <label htmlFor="date" className="form-label">Дата</label>
      <input type="date" className="form-control" id="date" required />
    </div>
    <div className="mb-3">
      <label htmlFor="petImage" className="form-label">Изображение животного</label>
      <input type="file" className="form-control" id="petImage" accept="image/*" />
    </div>
    {/* Новое поле для выбора регистрации */}
    <div className="form-check mb-3">
      <input type="checkbox" className="form-check-input" id="autoRegister" />
      <label className="form-check-label" htmlFor="autoRegister">Зарегистрировать меня автоматически</label>
    </div>
    {/* Блок с полями пароля */}
    <div className="password-section">
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Пароль</label>
        <input type="password" className="form-control" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}" placeholder="Введите пароль" required />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Подтверждение пароля</label>
        <input type="password" className="form-control" id="confirmPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}" placeholder="Повторите пароль" required />
      </div>
    </div>
    <button type="submit" className="btn btn-primary w-100">Добавить объявление</button>
  </form>
  <div id="successMessage" className="alert alert-success mt-4" style={{display: 'none'}}>
    Объявление успешно добавлено!
  </div>
</main>

     );
}

export default AddPets;