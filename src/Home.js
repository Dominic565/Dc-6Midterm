
import AnimeIndex from './AnimeIndex';

const Home = () => {

    //const [name, setName] = useState('allan');


    // useEffect(() => {
    //     console.log('use effect ran');
    // }, [name]);
    return (
        <div className="home">
            <AnimeIndex />
            {/* <button className="btn btn-primary" onClick={() => setName('justine')}>Change name</button>
            <p>{name}</p> */}
        </div>
    );
}
 
export default Home;