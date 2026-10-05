import { profile, posts } from "../data/portfolio";
import Arrow from "./Arrow";
import BlogList from "./BlogList";

const HomePage = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-copy">
                    <div className="eyebrow">
                        <span className="small-line" />
                        {" "}PORTFOLIO & STAGEBLOG
                    </div>
                    <h1>
                        Leren door te doen.
                        <br />
                        Bouwen met{" "}
                        <em>aandacht.</em>
                    </h1>
                    <p className="intro">Hey, ik ben {profile.name}. Een developer in wording, met oog voor detail en de nieuwsgierigheid om uit te zoeken hoe iets werkt.</p>
                    <p className="hero-description">Hier neem ik je mee in mijn stage: wat ik bouw, waar ik tegenaan loop en wat ik onderweg leer.</p>
                    <div className="hero-actions">
                        <a className="button" href="#/blog">
                            Volg mijn stage{" "}
                            <Arrow />
                        </a>
                        <a className="text-link" href="#/over">
                            Meer over mij{" "}
                            <Arrow diagonal />
                        </a>
                    </div>
                    <div className="hero-footnote">
                        <span>Een kijkje achter de code.</span>
                        <span>En in mijn leerproces.</span>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="visual-top">
                        <span>IN ONTWIKKELING</span>
                        <span>↗</span>
                    </div>
                    <div className="code-drawing" aria-hidden="true">
                        <span className="code-bracket">{"{"}</span>
                        <div>
                            <span className="code-comment">// stap voor stap</span>
                            <span>
                                leren
                                <span className="code-dot">.</span>
                            </span>
                            <span>
                                bouwen
                                <span className="code-dot">.</span>
                            </span>
                            <span>
                                groeien
                                <span className="code-dot">.</span>
                            </span>
                        </div>
                        <span className="code-bracket closing">{'}'}</span>
                    </div>
                    <div className="visual-bottom">
                        <span className="visual-cross">+</span>
                        <span>
                            Nieuwsgierig blijven.
                            <br />
                            Ook als het even niet werkt.
                        </span>
                    </div>
                    <span className="paper-note">
                        work in progress{" "}
                        <span>✳</span>
                    </span>
                </div>
            </section>
            <section className="context-strip" aria-label="Over deze website">
                <span className="strip-index">01 / HET IDEE</span>
                <h2>
                    Van de les naar
                    <br />
                    de praktijk.
                </h2>
                <p>Deze website is mijn logboek tijdens de stage. Voor mijn mentor en begeleider, maar ook voor iedereen die benieuwd is hoe ik als developer groei. Met ruimte voor het resultaat én de weg ernaartoe.</p>
                <a href="#/over" aria-label="Meer over mijn stage">
                    <Arrow diagonal />
                </a>
            </section>
            <section className="blog-section">
                <div className="section-heading">
                    <div>
                        <div className="eyebrow">HET LOGBOEK</div>
                        <h2>Wat me bezighoudt.</h2>
                    </div>
                    <a className="text-link" href="#/blog">
                        Alle blogposts{" "}
                        <Arrow />
                    </a>
                </div>
                <p className="sample-note">Mijn stage bij Deskdrive, week per week. De nieuwste week staat bovenaan.</p>
                <BlogList posts={posts} />
            </section>
            <section className="closing-note">
                <span className="asterisk">✳</span>
                <div>
                    <h2>Het hoeft niet in één keer goed.</h2>
                    <p>Als ik maar blijf proberen, vragen stellen en een stap verder kom.</p>
                </div>
                <a className="text-link" href="#/over">
                    Dit ben ik{" "}
                    <Arrow diagonal />
                </a>
            </section>
        </>
    );
};

export default HomePage;

