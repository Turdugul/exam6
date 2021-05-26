import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import { Route } from "react-router-dom";
import About from '../component/About';
import Contacts from '../component/Contacts';
import Register from '../component/Register';
import ProductDetail from '../component/ProductDetail';
import ProductList from '../component/ProductList';
import Footer from '../component/Footer';





const App = () => {

    // const [books, setBooks] = useState([])
    // useEffect(() => {
    //         setBooks({product});
    // }, [])

    return (

        <div>
            <header>
                <Navbar />
            </header>

            <main>
                <div className="container bg-light border shadow-sm">
                    <div className="banner-image">
                        <div className="banner">
                            <h1>LEARN, LEARN AND LEARN</h1>

                        </div>

                    </div>
                    <Route path="/" exact>
                        <ProductList/>
                    </Route>

                    <Route path="/about" exact>
                        <About />
                    </Route>
                    <Route path="/contacts" exact>
                        <Contacts />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/product/:id" exact>
                        <ProductDetail />
                    </Route>
                    

                </div>

            </main>


            <Footer />
        </div>
    );
};

export default App;