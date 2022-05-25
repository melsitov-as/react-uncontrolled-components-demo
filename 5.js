function App(props) {
    const inputRef = React.useRef(null);
    console.log(inputRef);
  
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

  Вызов useRef вернёт ref-объект. У этого объекта есть свойство current. Оно инициализируется аргументом переданным в useRef значение. Важная особенность объекта: React гарантирует сохранение объекта в течении времени жизни компонента.