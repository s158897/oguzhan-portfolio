import { profile } from "../data/portfolio";
import Arrow from "./Arrow";

const AboutPage = () => {
    return (
        <>
            <section className="page-heading">
                <div className="eyebrow">DE PERSOON ACHTER DE CODE</div>
                <h1>
                    Hey, ik ben{" "}
                    <em>{profile.name}.</em>
                </h1>
                <p>Nieuwsgierig naar hoe dingen werken. En hoe ze beter kunnen.</p>
            </section>
            <section className="about-grid">
                <div className="portrait">
                    {profile.photo ? <img src={profile.photo} alt={`Portret van ${profile.name}`} /> : <>
                        <span className="portrait-monogram">O.</span>
                        <span>Hier komt mijn eigen foto</span>
                    </>}
                </div>
                <div className="about-copy">
                    <h2>Een beetje over mij.</h2>
                    <p>Ik ben een developer in wording. Op deze plek verzamel ik mijn werk en houd ik bij wat ik tijdens mijn stage leer. Zo ontstaat er een beeld van mijn ontwikkeling, één opdracht en één inzicht tegelijk.</p>
                    <h3>Mijn profiel</h3>
                    <dl>
                        <div>
                            <dt>Naam</dt>
                            <dd>{profile.name}</dd>
                        </div>
                        <div>
                            <dt>Opleiding</dt>
                            <dd>{profile.education || "Nog aan te vullen"}</dd>
                        </div>
                        <div>
                            <dt>Rol</dt>
                            <dd>{profile.role || "Nog aan te vullen"}</dd>
                        </div>
                    </dl>
                    <div className="social-links">
                        {profile.linkedin ? <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                            LinkedIn{" "}
                            <Arrow diagonal />
                        </a> : <span>LinkedIn · volgt</span>}
                        {profile.github ? <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                            GitHub{" "}
                            <Arrow diagonal />
                        </a> : <span>GitHub · volgt</span>}
                    </div>
                </div>
            </section>
            <section className="internship">
                <div>
                    <div className="eyebrow">MIJN STAGE</div>
                    <h2>Leren in een echt team.</h2>
                    <p>Ik volg Programmeren aan AP Hogeschool en loop stage bij Deskdrive. Ik werk aan een omgeving waarmee een AI-agent veilig klantgegevens kan opvragen. Daarvoor gebruik ik onder andere PostgreSQL, Docker en Spring Boot. In mijn weekverslagen schrijf ik over wat lukt, waar ik op vastloop en wat ik leer.</p>
                </div>
                <dl>
                    <div>
                        <dt>Stagebedrijf</dt>
                        <dd>{profile.company || "Wordt nog toegevoegd"}</dd>
                    </div>
                    <div>
                        <dt>Locatie</dt>
                        <dd>{profile.location || "Wordt nog toegevoegd"}</dd>
                    </div>
                    <div>
                        <dt>Werkzaamheden</dt>
                        <dd>{profile.role || "Volgen bij de start van de stage"}</dd>
                    </div>
                </dl>
            </section>
        </>
    );
};

export default AboutPage;
