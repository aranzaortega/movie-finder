const List = ({data, onListItemClick}) => {
    return (
        // data?.map(movie => (
        //     <div key={movie.id}>
        //         <div>
        //             <image
        //                 alt={movie.titleText.text}
        //                 src={movie.primaryImage?.url}
        //             />
        //         </div>
        //         <div><p>{movie.titleText.text}</p></div>
        //         <div><button>See more</button></div>
        //     </div>
        // ))
        <div key={data.imdbID} className="flex flex-row w-full mt-16" style={{ minWidth: 650 }}>
                <div className="w-1/6">
                    <img alt={data.Title} src={data.Poster}
                    className="w-32" />
            </div>
            <div className="w-5/6 flex flex-col items-start py-1 px-4">
                <p className="font-lato text-3xl">{data.Title}</p>
                <div className="flex h-full items-end">
                    <button className="border-2 border-red-400 rounded-md
                        w-48 h-10 text-xl text-red-400 hover:bg-red-400 hover:text-white"
                        onClick={onListItemClick} >
                        See more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default List;