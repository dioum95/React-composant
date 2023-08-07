function WelcomeFunc ({props, children}) {
    return <div> 
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
}

class Welcome extends React.Component {
    render() {
        return <div> 
            <h1>Bonjour {this.props.name}</h1>
            <p>
                {this.props.children}
            </p>
        </div>
    }
}

class Clock extends React.Component{

    constructor (props) {
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }
    
    ComponentDidMount (){
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    ComponentwillUnmount(){
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState({date: new Date()})
    }

    render() {
        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}   
        </div>
    }
} 

class Incrementer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {n: props.start}
        this.timer = null
    }

    ComponentDidMount() {
        window.setInterval(this.increment.bind(this), 1000)
    }

    ComponentwillUnmount() {
        window.clearInterval(this.timer)
    }

    increment () {
        this.setState(function(state, props){
            return {n: state.n + 1}
        })
    }

    render() {
        return <div>Valeur : {this.state.n}</div>
    }
}

function Home() {
    return <div>
        <Welcome name="Dioum" />
        <Welcome name="Fall" />
        <Clock />
        <Incrementer start={10}/>
    </div>
}


ReactDOM.render(<Home/>, document.querySelector('#app'))  
