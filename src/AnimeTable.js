const AnimeTable = ({animes, handleDelete}) => {

    return (
        <div className="anime-list">
            <h2>List of Anime</h2>
            <table className="table table-striped border border-light">
                <thead>
                    <tr>
                    <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Episode</th>
                        <th>Year Released</th>
                    </tr>
                </thead>
                <tbody>
                    {animes.map((anime) =>
                        <tr key={anime.id}>
                            <td>{anime.title}</td>
                            <td>{anime.description}</td>
                            <td>{anime.episode}</td>
                            <td>{anime.year_released}</td>
                            <td><a className="btn" onClick={() => handleDelete(anime.id)} ><i class="fa fa-times-circle" aria-hidden="true"></i></a></td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
}
 
export default AnimeTable;