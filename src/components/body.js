import data from '../tools/data'

const Body = () => {
    console.log(data('1', 'Wednesday'));
    return (
        <body>
            <div className="grid">
                <div className="grid-item">Period 1</div>
                <div className="grid-item">Period 2</div>
                <div className="grid-item">Period 3</div>
                <div className="grid-item">Period 4</div>
                <div className="grid-item">Period 5</div>
                <div className="grid-item">Period 6</div>
            </div>
        </body>
    );
}

export default Body;