import React, { Fragment } from "react";
import Header from '../../components/Header';
import Footer from "../Footer";
 import Routers from '../../routers/Router'; // Comment out to debug

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <div>
            <Routers />
        </div>
            <Footer />
        </Fragment>
    );
};

export default Layout;
