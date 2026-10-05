import Arrow from "./Arrow";

const NotFoundPage = () => {
    return (
        <section className="page-heading">
            <h1>Even de weg kwijt?</h1>
            <p>Deze pagina bestaat niet.</p>
            <a className="button" href="#/">
                Terug naar home{" "}
                <Arrow />
            </a>
        </section>
    );
};

export default NotFoundPage;
