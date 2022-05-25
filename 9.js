function App(props) {
    const inputRef = React.useRef(null);
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
  
      console.log(
        'Данные формы',
        new FormData(inputRef.current).get('email')
      );
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

  Теперь, когда мы знаем, как обращаться к DOM, дело за малым — получить данные с DOM-элемента формы. Например, с помощью знакомой уже FormData.

Таким образом работают неконтролируемые формы в React. Браузер отвечает за всё поведение, а мы с помощью технологии ref, когда это необходимо, можем получить данные из настоящего DOM-дерева.

Важное уточнение, ref нужны не только для реализации неконтролируемых форм, а в любых случаях, когда нам нужно получить доступ к DOM из React. Например, для управления HTML5 плеером или подключения сторонней карты в проект.