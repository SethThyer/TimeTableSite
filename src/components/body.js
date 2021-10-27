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
        .then((res) => res.json())
        .then((json) => {
            this.setState({ data: json });
        })
        .catch(error => {
            error = "ERROR: " + error;
            console.log(error);
        });
    }

    


    render() {
        if (this.state.data == null) return (
            <div>
                <p className="heading">fetching data...</p>
                <div className="footerfill" />  
            </div>
            
        );

        //{this.state.data.classes.p0.startTime}
        return (
            <div>
                <div className="grid">
                    <div className="grid-item">Period 1
                        <div className="timeon"> 
                        20:00
                        </div>
                        <p className="text"> 
                            {this.state.data.classes.p0.class}
                        </p>
                        <div className="time"> 
                        23:00
                        </div>
                    </div>
                    <div className="grid-item">Period 2
                        <div className="time"> 
                        20:00
                        </div>
                        <p className="text"> 
                            {this.state.data.classes.p1.class}
                        </p>
                        <div className="time"> 
                        20:00
                        </div>
                    </div>
                    <div className="grid-item">Period 3
                        <div className="time"> 
                        20:00
                        </div>
                        <p className="text"> 
                            {this.state.data.classes.p2.class}
                        </p>
                        <div className="time"> 
                        20:00
                        </div>
                    </div>
                    <div className="grid-item">Period 4
                        <div className="time"> 
                        20:00
                        </div>
                        <p className="text"> 
                            {this.state.data.classes.p3.class}
                        </p>
                        <div className="time"> 
                        20:00
                        </div>
                    </div>
                    <div className="grid-item">Period 5
                        <div className="time"> 
                        20:00
                        </div>
                        <p className="text"> 
                            {this.state.data.classes.p4.class}
                        </p>
                        <div className="time"> 
                        20:00
                        </div>
                    </div>
                    <div className="grid-item">Period 6
                        <div className="time"> 
                        20:00
                        </div>
                        <p className="text"> 
                            {this.state.data.classes.p5.class}
                        </p>
                        <div className="time"> 
                        20:00
                        </div>
                    </div>
                </div>
                <div className="footerfill" /> 
            </div>
        );
    }
}

export default Body;