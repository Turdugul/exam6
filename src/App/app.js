import React, { useEffect, useState } from 'react';
import ProductItem from "../component/ProductItem";
import Navbar from '../component/Navbar';
import { Route } from "react-router-dom";
import {Link} from 'react-router-dom';
import About from '../component/About';
import Contacts from '../component/Contacts';
import Register from '../component/Register';
import ProductDetail from '../component/ProductDetail';
import ProductList from '../component/ProductList';
import Footer from '../component/Footer';

import ReadMoreReact from "read-more-react"


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
                <Route path="/" exact>
                    <div>
                    </div>

                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/contacts" exact>
                    <Contacts />
                </Route>
                <Route path="/register" exact>
                    <Register/>
                </Route>
                <Route path="/product/:id" exact>
                <ProductDetail/>
                </Route>
                <div>
        
        </div>

                

            </main>


            <Footer />
        </div>
    );
};

export default App;