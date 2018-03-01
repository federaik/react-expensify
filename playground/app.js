class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        console.log('component did mount, fucker');
    }
    componentDidUpdate(prevProps, prevState){
        console.log('component did update', prevProps, prevState);
    }
    componentWillUnmount(){

    }
    render(){
        return (
            <div>
                <Header />
                <Sidebar />
                <Body />
                <button onClick={() => {  this.setState((prevState) => ({ count: prevState.count + 1 }))  }}>add one</button>
                {this.state.count}
            </div>
        )
    }
}
const Header = (props) => {
    return (
        <div id="header">
            <h1>{props.title}</h1>
        </div>
    )
}

class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.handleSayHi = this.handleSayHi.bind(this);
        this.state = {
            greet: undefined
        }
    }

    handleSayHi(){
        this.setState(() => ({ greet: 'Hi' }));
    }

    render(){
        return (
            <div>
                sidebar
                <button onClick={this.handleSayHi}>Say Hi</button>
                <div>{this.state.greet}</div>
            </div>
        )
    }
}

class Body extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.state = {
            options: [ 'Op1', 'Op2', 'Op3' ]
        }
    }
    handleRemoveOption(optionIndex){
        this.setState((prevState) => ({ options: prevState.options.filter((op, i) => i !== optionIndex )  }))
    }
    render(){
        return (
            <div style={this.props.style}>
                <ul>
                {
                    this.state.options.map((op, key) => {
                        return <li key={key}>{op}  <button onClick={(e) => { this.handleRemoveOption(key) }}>-</button></li>
                    })
                }    
                </ul>
            </div>
        )
    }
}

Body.defaultProps = {
    style: {
        background: 'lightblue'
    }
}

Header.defaultProps = {
    title: "Indecision App"
};



ReactDOM.render(<IndecisionApp />, document.getElementById("app"));