const SectionTitle = ({ heading }) => {
    return (
        <div>
            <div
                className="md:w-4/12 mx-auto text-center my-2">
                <h3
                    className="text-3xl uppercase border-y-4 py-4">
                    {heading}
                </h3>
            </div>
        </div>
    );
};

export default SectionTitle;