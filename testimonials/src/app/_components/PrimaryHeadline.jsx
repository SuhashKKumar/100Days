const PrimaryHeadline = ({ text, extraStyle="" }) => (
    <h1 className={`text-[2.5rem] font-extrabold text-center leading-tight md:text-[3.5rem] ${extraStyle}`}>
        {text}
    </h1>
);

export default PrimaryHeadline;
