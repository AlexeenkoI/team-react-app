import React, { Component } from 'react';

import { Spinner } from 'react-preloading-component';

function Preloader(){
    return(<section id="main-content">
        <section className="wrapper">
            <div className="agileits-w3layouts-stats">
                <Spinner/>
            </div>
        </section>
    </section>);
}
export default Preloader;