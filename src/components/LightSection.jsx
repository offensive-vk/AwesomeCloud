import PropTypes from 'prop-types';

function LightSection({ children }) {
    return (
        <section 
            className="dark container flex flex-col items-center justify-center w-full h-screen bg-white text-black sm:w-auto lg:auto"
        >
            { children }
        </section>
    );
}

LightSection.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LightSection;