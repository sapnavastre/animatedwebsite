import React from 'react';
import { NavLink } from 'react-router-dom';
/*import web from "../src/images/img.png";*/


const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto mb-4">
                <div className="card">
                    <img src={props.imgsrc} className="img-fluid card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <NavLink to="" className="btn btn-primary">Go To</NavLink>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Card;
