import { type BlogPost } from "../types";
import Arrow from "./Arrow";

interface BlogListProps {
    posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
    return (
        <div className="post-grid">
            {posts.map((item) => (
                <a className="post-card" href={`#/blog/${item.slug}`} key={item.slug}>
                    <div className={`post-art ${item.color}`} aria-hidden="true">
                        <span className="art-label">NOTITIES UIT DE PRAKTIJK</span>
                        <span className="art-number">{item.number}</span>
                        <span className="art-symbol">
                            {item.number === "01" ? "{ }" : item.number === "02" ? "</>" : "↗"}
                        </span>
                    </div>
                    <div className="post-meta">
                        <span>{item.category}</span>
                        <span>Week {Number(item.number)} · {item.time} lezen</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <div className="post-tags" aria-label="Tags">
                        {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <span className="read-link">
                        Lees het verhaal{" "}
                        <Arrow />
                    </span>
                </a>
            ))}
        </div>
    );
};

export default BlogList;

