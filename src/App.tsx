import { useEffect, useRef, useState, type MouseEvent } from "react";
import "./App.css";
import { posts } from "./data/portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import BlogDetail from "./components/BlogDetail";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
    const [route, setRoute] = useState<string>(window.location.hash.slice(1) || "/");
    const [filter, setFilter] = useState<string>("Alles");
    const mainRef = useRef<HTMLElement | null>(null);
    const selectedPost = posts.find((post) => route === `/blog/${post.slug}`);

    let page = "missing";
    if (route === "/") {
        page = "home";
    } else if (route === "/over") {
        page = "about";
    } else if (route === "/blog" || selectedPost) {
        page = "blog";
    }

    useEffect(() => {
        const handleNavigate = () => {
            setRoute(window.location.hash.slice(1) || "/");
            window.scrollTo(0, 0);
            mainRef.current?.focus();
        };
        window.addEventListener("hashchange", handleNavigate);
        return () => {
            window.removeEventListener("hashchange", handleNavigate);
        };
    }, []);

    useEffect(() => {
        let title = "Developer in wording";
        if (selectedPost) {
            title = selectedPost.title;
        } else if (page === "about") {
            title = "Over mij";
        } else if (page === "blog") {
            title = "Stageblog";
        }
        document.title = title + " — Oguzhan";
    }, [page, selectedPost]);

    const handleSkipToContent = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        mainRef.current?.focus();
    };

    return (
        <>
            <a className="skip-link" href="#main" onClick={handleSkipToContent}>Naar de inhoud</a>
            <Header page={page} />
            <main id="main" ref={mainRef} tabIndex={-1}>
                {page === "home" && <HomePage />}
                {page === "about" && <AboutPage />}
                {page === "blog" && !selectedPost && <BlogPage filter={filter} onFilterChange={setFilter} />}
                {selectedPost && <BlogDetail post={selectedPost} />}
                {page === "missing" && <NotFoundPage />}
            </main>
            <Footer />
        </>
    );
};

export default App;
