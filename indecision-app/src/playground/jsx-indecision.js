// JSX - JavaScript XML
// is a JavaScript syntax extension provided through the react framework

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'two']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
        renderApp();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderApp();
};

let decision = undefined

const onMakeDecision = () => {
    decision = app.options[Math.floor(Math.random() * app.options.length)];
    renderApp();
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderApp = () => {
    const template = (
        <div className="container">
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
            <br />
            {decision && <p>{decision}</p>}
            <br />
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" autoFocus />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();