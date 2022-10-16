import AnimeCreate from './AnimeCreate'
import AnimeTable from './AnimeTable';
import { useEffect, useState } from 'react';
const AnimeIndex = () => {
    const [animes, setAnime] = useState(null);

    const handleDelete = (id) => {
        const newAnime = animes.filter(anime => anime.id !== id);
        setAnime(newAnime);
    }

    useEffect(() => {
        fetch('http://localhost:8000/animes')
        .then (res => {
           return res.json();
        })
        .then (data => {
            setAnime(data);
        })
    }, []);

    return (
        <div class="m-5">
        <div class="row">
            <div class="col-md-3">
                <AnimeCreate />
            </div>
            <div class="col-md-9">
                {animes && <AnimeTable animes={animes} handleDelete={handleDelete} />}
            </div>
        </div>
    </div>

    );
}
 
export default AnimeIndex;