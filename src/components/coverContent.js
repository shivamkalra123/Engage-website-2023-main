import React, { useEffect } from "react";
import A from '../components/devfolioButton'

export default function CoverContent() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div>
        <div className="cover-content">
            <div className="title">
                <h1>Engage 3.0</h1>
            </div>

            <div className="subtitle">Hack &#183; Engage &#183; Build</div>
            <A/>
        </div>
       
        </div>

    );
}
