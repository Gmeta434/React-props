import "./box.css"

export default function Box (props) {
    return (
        <div id="box">
            <div className="container">
                <div className="img">
                    <img src={props.img.src} />
                </div>
                <div className="information">
                    <p className="location">📍 {props.parkName}  <a href={props.gmaps}>See Gmaps</a></p>
                    <h1 className="state">{props.state}</h1>
                    <h3 className="date">{props.date}</h3>
                    <p className="info">{props.info}</p>
                </div>
            </div>
        </div>
    )
}