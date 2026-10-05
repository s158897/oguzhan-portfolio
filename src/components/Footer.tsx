import Arrow from "./Arrow";

const Footer = () => {
    return (
        <footer>
            <a className="wordmark" href="#/">
                oguzhan
                <span>.</span>
            </a>
            <span>Een portfolio dat met me meegroeit.</span>
            <a href="#/blog">
                Lees mijn stageblog{" "}
                <Arrow diagonal />
            </a>
        </footer>
    );
};

export default Footer;
