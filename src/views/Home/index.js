import HomeImage from '../../assets/home.png';

const Home = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-2/5">
                <img
                    src={HomeImage}
                    alt="Movie chairs"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-3/5 flex justify-center items-center flex-col px-10">
                <h2 className="text-4xl font-bold font-lato">Find your movie...</h2>
                <input className='bg-special-gray font-lato w-full my-3 h-10 p-1' />
                <div>
                    <button>
                        Limpiar
                    </button>
                    <button>
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Home;