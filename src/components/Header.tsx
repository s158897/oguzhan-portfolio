import { posts } from "../data/portfolio";

interface HeaderProps {
    page: string;
}

const Header = ({ page }: HeaderProps) => {
    return (
        <header className="header">
            <a className="wordmark" href="#/">
                oguzhan
                <span>.</span>
            </a>
            <nav aria-label="Hoofdnavigatie">
                <a href="#/" aria-current={page === "home" ? "page" : undefined}>Home</a>
                <a href="#/over" aria-current={page === "about" ? "page" : undefined}>Over mij</a>
                <a href="#/blog" aria-current={page === "blog" ? "page" : undefined}>
                    Stageblog{" "}
                    <span className="nav-count">{posts.length.toString().padStart(2, "0")}</span>
                </a>
            </nav>
            <span className="header-note">
                <i />
                {" "}Developer in wording
            </span>
        </header>
    );
};

export default Header;

