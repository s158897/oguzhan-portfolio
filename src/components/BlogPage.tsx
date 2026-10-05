import { posts } from "../data/portfolio";
import BlogList from "./BlogList";

interface BlogPageProps {
    filter: string;
    onFilterChange: (filter: string) => void;
}

const BlogPage = ({ filter, onFilterChange }: BlogPageProps) => {
    const tags = ["Alles", ...new Set(posts.flatMap((post) => post.tags))];
    const filteredPosts = posts.filter((post) => filter === "Alles" || post.tags.includes(filter));

    return (
        <>
            <section className="page-heading">
                <div className="eyebrow">NOTITIES UIT DE PRAKTIJK</div>
                <h1>
                    Achter de{" "}
                    <em>code.</em>
                </h1>
                <p>Mijn WPL-stage bij Deskdrive, week per week. Wat lukt, waar ik op vastloop en wat ik daarvan leer.</p>
            </section>
            <section className="blog-list">
                <div className="filters" role="group" aria-label="Filter blogposts op tag">
                    {tags.map((tag) => (
                        <button key={tag} type="button" aria-pressed={filter === tag} onClick={() => onFilterChange(tag)}>
                            {tag}
                        </button>
                    ))}
                </div>
                <p className="sample-note" role="status">
                    {filteredPosts.length} {filteredPosts.length === 1 ? "verslag" : "verslagen"}
                    {filter !== "Alles" && ` met de tag ${filter}`} · Nieuwste week eerst
                </p>
                <BlogList posts={filteredPosts} />
            </section>
        </>
    );
};

export default BlogPage;


