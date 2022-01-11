import { useState } from 'react';
import axios from 'axios';


function SearchGifs() {
    const [input, setInput] = useState('');
    const [gifs, setGifs] = useState([]);



    const handleSearch = () => {
        if (!input) return;

        axios.get(`gifs/search?input=${input}`).then((res) => {
            setGifs(res.data);
        }).catch((err) => {
            console.log(err);
        })
    };


    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleSearch}>seach</button>
            <div className='gifs-container'>
                {gifs.map((gif, index) => {
                    return (
                        <div key={index} className='gif-container' style={{ display: 'grid', alignContent: 'center' }}>
                            <img src={gif.images.fixed_width.url} />
                            <button>save</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchGifs;