import { type BlogPost } from "../types";
import { posts } from "../data/portfolio";
import Arrow from "./Arrow";

interface BlogDetailProps {
    post: BlogPost;
}

const BlogDetail = ({ post }: BlogDetailProps) => {
    const postIndex = posts.findIndex((item) => item.slug === post.slug);
    const nextPost = posts[(postIndex + 1) % posts.length];

    return (
        <article className="article">
            <a className="text-link" href="#/blog">← Terug naar het blog</a>
            <div className="eyebrow">{post.category} · {post.time} lezen</div>
            <h1>{post.title}</h1>
            <p className="article-lead">{post.excerpt}</p>
            <div className="post-tags" aria-label="Tags">
                {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>

            {post.sections.map(([title, body]) => (
                <section key={title}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </section>
            ))}
            {post.photos?.map((photo) => (
                <figure className="blog-photo" key={photo.src}>
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                    {photo.caption && <figcaption>{photo.caption}</figcaption>}
                </figure>
            ))}
            {post.codeBlocks?.map((snippet) => (
                <section className="blog-code" key={snippet.title}>
                    <h2>{snippet.title}</h2>
                    <span className="code-language">{snippet.language}</span>
                    <pre><code>{snippet.code}</code></pre>
                    {snippet.explanation && <p>{snippet.explanation}</p>}
                </section>
            ))}
            <a className="button" href={`#/blog/${nextPost.slug}`}>
                Volgend verhaal{" "}
                <Arrow />
            </a>
        </article>
    );
};

export default BlogDetail;

