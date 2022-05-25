function App(props) {
    const inputRef = React.useRef(null);
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
  
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
            defaultValue={props.email || ``}
          />
        </p>
        <button className="form-submit">Подписаться на новости</button>
      </form>
    );
  };
  
  export default App;

  Теперь воспользуемся ref-объектом и свяжем его с нужным React-элементом. В нашем примере таковым элементом является input. Для этого воспользуемся пропсом ref.