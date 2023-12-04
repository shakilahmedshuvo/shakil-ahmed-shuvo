const SectionTitle = ({ heading }) => {
    return (
        <div className="mx-8 lg:mx-0">
            <div
                className="md:w-4/12 mx-auto text-center">
                <h3
                    className="text-xl lg:text-3xl uppercase border-y-2 lg:border-y-4 lg:py-4 py-3">
                    {heading}
                </h3>
            </div>
        </div>
    );
};

export default SectionTitle;