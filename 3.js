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
            defaultValue={props.email || ``}
          />
        </p>
        <button className="form-submit">Подписаться на новости</button>
      </form>
    );
  };
  
  export default App;

  import App from "./components/app.jsx";

ReactDOM.render(<App email="keks@htmlacademy.ru" />, document.getElementById(`root`));

Проверим на практике. Передадим в компонент App начальное значение для поля ввода. Пусть им станет email Кекса. Обратите внимание, значение в поле появилось и мы можем его редактировать.