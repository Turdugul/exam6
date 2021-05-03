import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer'

const initialState = [
    {
        id: 1,
        title: "Syngan kylych",
        price: 120,
        content: "Lorekalshfkjahdfkjahkajhjaf  afjalkfalk.",
        img: "https://i.ytimg.com/vi/Xtw1ACPJoac/maxresdefault.jpg",

    },
    {
        id: 1,
        title: "Kelkel",
        price: 123420,
        content: "Lorekalshfkjahdfkjahkajhjaf  afjalkfalk.",
        img: "data:image/jpeg;base64,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",

    },
    {
        id: 1,
        title: "Jamilya",
        price: 124540,
        content: "Lorekalshfkjahdfkjahkajhjaf  afjalkfalk.",
        img: "https://all-the-books.ru/upload/resize_cache/iblock/8a9/350_539_14ea206e1adc774c374d982cab5ef0488/dzhamilya.jpg",

    },
    {
        id: 1,
        title: "Idiot",
        price: 1500,
        content: "Lorekalshfkjahdfkjahkajhjaf  afjalkfalk.",
        img: "https://m.media-amazon.com/images/I/41XO98tJ7HL._SL500_.jpg",

    },
    {
        id: 1,
        title: "A thousand splendid suns",
        price: 123420,
        content: "Lorekalshfkjahdfkjahkajhjaf  afjalkfalk.",
        img: "https://images-na.ssl-images-amazon.com/images/I/81DFcrQgjrL.jpg",

    },
    {
        id: 1,
        title: "Evgenii Onegin",
        price: 124540,
        content: "Lorekalshfkjahdfkjahkajhjaf  afjalkfalk.",
        img: "https://m.media-amazon.com/images/I/51GkVUsntyL.jpg",

    },
    {
        id: 1,
        title: "Animal Farm",
        price: 10,
        content: "Lorekalshfkjahdfkjahkajhjaf  afjalkfalk.",
        img: "https://images-na.ssl-images-amazon.com/images/I/91iKjJnXCJL.jpg",

    },
    {
        id: 1,
        title: "Odysseus",
        price: 500,
        content: "Срфджылаждфла",
        img: "http://www.100bestbooks.ru/pictures/books/Homer_Odyssey.jpg",

    },
]

const App = () => {
    const [books, setBooks] = useState(initialState)
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>

                <div className="container border shadow-sm rounded pb-4">
                    <h1>Books</h1>
                    <div className="row">

                        {books.map((item)=>(
                            <div className="col-3">
                            <div className="card books-item">
                                <img className="card-img-top" src={item.img} alt="" />
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p className="card-text">Pric: {item.price}c</p>
                                </div>
                            </div>
                        </div>
                        ))}


                        
                    </div>
                </div>
                
            </main>
            <Footer/>
        </div>
    );
};

export default App;