function App(props) {
    const handleSubmit = (evt) => {
      evt.preventDefault();
  
      console.log('Данные формы', {});
    };
  
    return (
      <form onSubmit={handleSubmit} className="form">
        <p className="form-field">
          <label htmlFor="email">Электронная почта</label>
          <input
            name="email"
            id="email"
            type="email"
            defaultValue={props.email || ''}
          />
        </p>
        <button className="form-submit">Подписаться на новости</button>
      </form>
    );
  };
  
  export default App;

  Отлично, у нас есть форма. Её можно заполнить и даже отправить, только пока пустую. Давайте это исправим. Для этого нам нужно познакомиться с хуком useRef.