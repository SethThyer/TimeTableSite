import React from "react";
import dayInfo from '../tools/DateCalc'

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        const uri = `http://localhost:5000/find/${dayInfo.schoolWeek}/${dayInfo.dayWeek}`;
        
        fetch(uri)
        .then(res => res.json())
        .then(json => {
            this.setState({ data: json });
        })
        .catch(error => {
            console.log(error)
            error = "ERROR: " + JSON.stringify(error);
        });
    }

    


    render() {
        if (this.state.data == null) return (
            <p className="heading">fetching data...</p>
        );

        return (
            <div>
                <div className="grid">
                    <div className="grid-item">Period 1</div>
                    <div className="grid-item">Period 2</div>
                    <div className="grid-item">Period 3</div>
                    <div className="grid-item">Period 4</div>
                    <div className="grid-item">Period 5</div>
                    <div className="grid-item">Period 6</div>
                </div>
            </div>
        );
    }
}

export default Body;