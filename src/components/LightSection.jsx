import PropTypes from 'prop-types';

function LightSection({ children }) {
    return (
        <section
            className="light container flex flex-col items-center justify-center w-full min-h-screen bg-white text-black sm:w-full lg:w-auto md:w-3/4"
        >
            {children}
        </section>
    );
}

LightSection.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LightSection;