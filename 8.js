function App (props) {
    const inputRef = React.useRef(null);
  
    console.log('До отрисовки', inputRef.current);
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
  
      console.log('После отрисовки', inputRef.current);
  
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

  Обратите внимание, что DOM-элемент будет только в случае, когда компонент отрисован. В противном случае, в свойстве current будет null.