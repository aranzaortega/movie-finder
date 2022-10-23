const Error = ({error}) => {
    return (
        <div className="flex items-center justify-center h-full">
            <p className="text-xl">{error.error}</p>
        </div>
    );
}

export default Error;