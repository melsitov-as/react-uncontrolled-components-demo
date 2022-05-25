function App (props) {
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

  Для решения этой задачи нам придётся воспользоваться другом пропсом — defaultValue. Он специально создан, чтобы была возможность устанавливать значение по умолчанию для элементов форм.