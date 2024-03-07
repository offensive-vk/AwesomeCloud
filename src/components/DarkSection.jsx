import PropTypes from 'prop-types';

function DarkSection({ children }) {
    return (
        <section 
            className="dark container flex flex-col items-center justify-center w-full h-screen text-white bg-black sm:w-auto lg:auto"
        >
            {children}
        </section>
    );
}

DarkSection.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DarkSection;