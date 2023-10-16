import React, { useEffect } from "react";
import DevfolioButton from "./devfolioButton";

export default function CoverContent() {

    return (
        <div>
             
        <div className="cover-content">
            <div className="title">
                <h1>Engage 3.0</h1>
            </div>

            <div className="subtitle">Hack &#183; Engage &#183; Build</div>
            <DevfolioButton/>
        </div>
       
        </div>

    );
}
