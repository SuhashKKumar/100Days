const PrimaryDescription = ({ description, extraStyle="" }) => {
    return (
        <p className={`text-xl text-center text-gray-400 leading-snug ${extraStyle}`}>{description}</p>
    );
};

export default PrimaryDescription;
