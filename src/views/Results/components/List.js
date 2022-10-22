const List = ({data}) => {
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
        <div key={data.id}>
                 <div>
                     <img
                        alt={data.Title}
                        src={data.Poster}
                    />
                </div>
                <div><p>{data.Title}</p></div>
                <div><button>See more</button></div>
            </div>
    );
};

export default List;