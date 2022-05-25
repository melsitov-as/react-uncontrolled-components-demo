function App(props) {
    const inputRef = React.useRef(null);
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
  
      console.log(inputRef.current);
  
      console.log('Данные формы', {});
    };
  
    return (
      <form
        ref={inputRef}
        onSubmit={handleSubmit}
        className="form"
      >
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

  В обработчике события нажатия на кнопку обратимся к ref-объекту. В свойстве current будет ссылка на DOM-элемент.