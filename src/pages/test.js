
import Layout from "../components/layout";
import React from "react";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    async componentDidMount() {
        var res = await (await fetch(
            "https://jsonplaceholder.typicode.com/users")).json()
        console.log(res)
        this.setState({
            items: res,
            DataisLoaded: true
        });
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <Layout><div><h1> Pleses wait</h1> </div></Layout>;

        return (
            <Layout>
                <div className="App">
                    <h1> Test Api</h1>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id} >
                                {`${item.name} ${item.id}`}
                            </li>
                        ))
                        }</ul>
                </div>
            </Layout>
        );
    }
}

export const Head = () => (<><title>"Posts" </title>
    <meta name="description" content="posts" />
</>)

export default App;