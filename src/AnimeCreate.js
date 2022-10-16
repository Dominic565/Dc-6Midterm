const AnimeCreate = () => {
    return (

        <form>
                <div className="card">
                    <div className="card-header">
                        <h2>Anime</h2>
                    </div>
                    <div className="card-body">
                        <div className="mt-4">
                            <label>Anime Title</label>
                            <input className="form-control" placeholder="Enter Anime Title" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Description</label>
                            <input className="form-control" placeholder="Enter Description" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Episode</label>
                            <input className="form-control" placeholder="How many Episoce" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Year Released</label>
                            <input className="form-control" type="date" required />
                        </div>
                        <div className="mt-4">
                            <button id="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
    );
}
 
export default AnimeCreate;