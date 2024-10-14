'use client'

import {useEffect, useRef} from "react";

export default function Home() {

    const menuRef = useRef<HTMLDivElement>()
    const titles = useRef<string[]>([])

    useEffect(() => {
        window.scrollTo(0, 0)
        // @ts-ignore
        titles.current = Array.from(menuRef.current.children)
            .map(titleElement => titleElement.innerHTML);

        window.addEventListener("scroll", function () {
            const screenHeight = window.innerHeight;
            const limit = 50;
            const scrollThreshold = limit + 100 /* menu.bottom */ + 79 /* title element height */;

            const menu = menuRef.current;
            const menuPosition = menu?.getBoundingClientRect().top;

            // @ts-ignore
            if (menuPosition < limit && !menu?.classList.contains("fixed")) {
                menu?.classList.add('fixed');
            } else if (menu?.classList.contains("fixed") && this.scrollY < screenHeight - scrollThreshold) {
                menu?.classList.remove('fixed');
            }

            // @ts-ignore
            const activeSectionElement = document.elementFromPoint(10, menuPosition + 79);
            // @ts-ignore
            const activeSection = activeSectionElement.classList[1] || activeSectionElement.parentElement.classList[1] || activeSectionElement.parentElement.parentElement.classList[1] || activeSectionElement.parentElement.parentElement.parentElement.classList[1]
            const activeSectionIndex = titles.current.findIndex((e) => e === activeSection);
            const activeSectionTitle = titles.current[activeSectionIndex];

            // @ts-ignore
            Array.from(menuRef.current.children)
                .forEach((titleElement) => {
                    if (titleElement.innerHTML === activeSectionTitle) {
                        titleElement.classList.add("active")
                    } else {
                        titleElement.classList.remove("active");
                    }
                })
        })


    }, []);

    return (
        <div>
            <div className="background"></div>
            <div className="main-title"
                 onClick={() => window.location.href = 'https://charlottedauphin.world/pages/info'}>CHARLOTTE DAUPHIN
            </div>
            {/* @ts-ignore */}
            <div id="menu" ref={menuRef} className="menu">
                <div className="menu-title"
                     onClick={() => window.location.href = 'https://charlottedauphin.world/pages/home'}>STUDIO
                </div>
                <div className="menu-title"
                     onClick={() => window.location.href = 'https://www.imdb.com/title/tt30268321'}>PRODUCTIONS
                </div>
                <div className="menu-title"
                     onClick={() => window.location.href = 'https://dauphin.paris/fr/pages/e-space'}>SPACES
                </div>
                <div className="menu-title">FONDATION</div>
            </div>

            <div className="section STUDIO">
                <img src="/background/bg-studio.jpg"
                     onClick={() => window.location.href = 'https://charlottedauphin.world/pages/humann-prize'}/>
            </div>
            <div className="section STUDIO center-left">
                <div className="text-introduction">
                    <div>Le studio de Charlotte Dauphin se distingue par ses créations variées et ses collaborations,
                        formant parfois un
                        collectif artistique à géométrie variable. Il fusionne des domaines tels que la performance, le
                        cinéma, la mise en
                        scène, le design, et la sculpture.
                    </div>
                    <div>
                        Le concept d’OTA (Office Technique Artistique) incarne cette dynamique, agissant comme un
                        véritable laboratoire
                        créatif. Chaque projet met en lumière les interactions entre architecture, espace, matière,
                        corps et mouvement,
                        offrant des expériences visuelles uniques dans un univers en constante évolution.
                    </div>
                </div>

                <div className="studio-images">
                    <img className="one" src="/assets/studio/intro/studio-1.png"/>
                    <img className="two" src="/assets/studio/intro/studio-2.png"/>
                    <img className="three" src="/assets/studio/intro/studio-3.png"/>
                    <img className="four" src="/assets/studio/intro/studio-4.png"/>
                    <img className="five" src="/assets/studio/intro/studio-5.png"/>
                    <img className="six" src="/assets/studio/intro/studio-6.png"/>
                    <img className="seven" src="/assets/studio/intro/studio-7.png"/>
                </div>
            </div>

            <div className="section STUDIO">
                <div className="studio-menu">

                    <div className="studio-menu-element">
                        <div className="studio-menu-element-title">An Attempt To Know</div>
                        <div className="studio-menu-element-year">2010</div>
                    </div>

                    <div className="studio-menu-element">
                        <div className="studio-menu-element-title">More</div>
                        <div className="studio-menu-element-year">2022</div>
                    </div>

                    <div className="studio-menu-element">
                        <div className="studio-menu-element-title">Architecte</div>
                        <div className="studio-menu-element-year">2021</div>
                    </div>

                    <div className="studio-menu-element">
                        <div className="studio-menu-element-title">A Roof For Silence</div>
                        <div className="studio-menu-element-year">2021</div>
                    </div>

                    <div className="studio-menu-element">
                        <div className="studio-menu-element-title">Barre</div>
                        <div className="studio-menu-element-year">2023</div>
                    </div>

                    <div className="studio-menu-element">
                        <div className="studio-menu-element-title">CcCccc</div>
                        <div className="studio-menu-element-year">2021</div>
                    </div>


                </div>
            </div>


            <div className="section PRODUCTIONS">
                <div className="grid-production">

                    <div className="grid-element">
                        <div className="grid-image">
                            <img src="/assets/production/maya/maya-main.jpg"/>
                            <a className="hover-text" href="#maya">
                                <div>Réalisatrice et scénariste :</div>
                                <div>Mia Hansen-Løve</div>
                            </a>
                        </div>
                        <div className="grid-title-line">MAYA</div>
                        <div className="grid-title-line">2018</div>
                    </div>

                    <div className="grid-element">
                        <div className="grid-image">
                            <img src="/assets/production/diamant-noir/diamant-main.jpg"/>
                            <a className="hover-text" href="#diamant">
                                <div>Réalisation :</div>
                                <div>Arthur Harari</div>
                            </a>
                        </div>
                        <div className="grid-title-line">DIAMANT NOIR</div>
                        <div className="grid-title-line">2016</div>
                    </div>

                    <div className="grid-element">
                        <div className="grid-image">
                            <img src="/assets/production/bergman/bergman-main.jpg"/>
                            <a className="hover-text" href="#bergman">
                                <div>Réalisation et scénario :</div>
                                <div>Mia Hansen-Løve</div>
                            </a>
                        </div>
                        <div className="grid-title-line">BERGMAN ISLAND</div>
                        <div className="grid-title-line">2021</div>
                    </div>


                </div>


                <div id="maya" className="production-section">
                    <div className="production-banner">
                        <iframe width="100%" height="600"
                                src="https://www.youtube.com/embed/aflOWd8e4C0">
                        </iframe>
                    </div>
                    <div className="production-text">
                        <div className="production-title">MAYA</div>
                        <div className="production-content">
                            <div className="content-text">
                                Film français réalisé par Mia Hansen-Løve, sorti en 2018.
                            </div>
                            <div className="content-text">Gabriel, trentenaire, fait partie des deux journalistes
                                enlevés en Syrie. Ils passent quatre mois en
                                captivité et sont libérés en décembre 2012. Après une série d’interrogatoires et
                                d’examens cliniques,
                                il retrouve sa famille, dont son père et Noamie, son ancienne petite amie. Sa mère —
                                avec
                                qui il a coupé les ponts — vit en Inde, pays où il a grandi. Après quelques semaines, il
                                part pour
                                Goa, retrouve sa maison d’enfance, et rencontre une jeune Indienne prénommée Maya.
                            </div>
                        </div>

                        <div className="production-lines">
                            <div className="production-line">
                                <div>RÉALISATION ET SCÉNARIO</div>
                                <div>Mia Hansen-Løve</div>
                            </div>
                            <div className="production-line">
                                <div>PHOTOGRAPHIE</div>
                                <div>Hélène Louvart</div>
                            </div>
                            <div className="production-line">
                                <div>MONTAGE</div>
                                <div>Marion Monnier</div>
                            </div>
                            <div className="production-line">
                                <div>DÉCORS</div>
                                <div>Mila Préli</div>
                            </div>
                            <div className="production-line">
                                <div>COSTUMES</div>
                                <div>Judith de Luze</div>
                            </div>
                        </div>

                        <div className="production-main-image">
                            <img src="/assets/production/maya/AFFICHE.jpg"/>
                        </div>


                    </div>
                    <div className="production-image">
                        <img src="/assets/production/maya/IMAGE%201.jpg"/>
                    </div>
                    <div className="production-image">
                        <img src="/assets/production/maya/IMAGE%202.jpg"/>
                    </div>
                    <div className="production-image">
                        <img src="/assets/production/maya/IMAGE%203.jpg"/>
                    </div>
                    <div className="production-image">
                        <img src="/assets/production/maya/IMAGE%204.jpg"/>
                    </div>
                    <div className="production-image">
                        <img src="/assets/production/maya/IMAGE%205.jpg"/>
                    </div>
                </div>

                <div id="diamant" className="production-section">

                    <div className="production-banner">
                        <iframe width="100%" height="500"
                                src="https://www.youtube.com/embed/tH9GZmnE0OA">
                        </iframe>
                    </div>
                    <div className="production-text">
                        <div className="production-title">DIAMANT NOIR</div>
                        <div className="production-content">
                            <div className="content-text">Film dramatique franco-belge réalisé par Arthur Harari, sorti
                                en 2016.
                            </div>
                            <div className="content-text"> Pier Ulmann vit de petits boulots et de cambriolages qu’il
                                commet avec Kevin pour le compte
                                de
                                Rachid. Un jour, il apprend la mort de son père dont il n’avait plus de nouvelles depuis
                                plusieurs
                                années. Pier décide de se venger du mauvais traitement de son père par son grand-père et
                                son
                                oncle. Il renoue alors avec sa famille paternelle qui travaille dans le milieu des
                                diamantaires à
                                Anvers.
                            </div>

                        </div>

                        <div className="production-lines">
                            <div className="production-line">
                                <div>RÉALISATION ET SCÉNARIO</div>
                                <div>Arthur Harari</div>
                            </div>
                            <div className="production-line">
                                <div>PHOTOGRAPHIE</div>
                                <div>Tom Harari</div>
                            </div>
                            <div className="production-line">
                                <div>MONTAGE</div>
                                <div>Laurent Sénéchal</div>
                            </div>
                            <div className="production-line">
                                <div>DÉCORS</div>
                                <div>Véronique Sacrez</div>
                            </div>
                            <div className="production-line">
                                <div>COSTUMES</div>
                                <div>Sophie Lifshitz</div>
                            </div>
                        </div>

                        <div className="production-main-image">
                            <img src="/assets/production/diamant-noir/AFFICHE.jpg"/>
                        </div>


                    </div>
                    <div className="production-image">
                        <img src="/assets/production/diamant-noir/IMAGE%201.jpg"/>
                    </div>
                    <div className="production-image">
                        <img src="/assets/production/diamant-noir/IMAGE%202.jpg"/>
                    </div>
                    <div className="production-image">
                        <img src="/assets/production/diamant-noir/IMAGE%203.jpg"/>
                    </div>
                    <div className="production-image">
                        <img src="/assets/production/diamant-noir/IMAGE%204.jpg"/>
                    </div>
                    <div className="production-image">
                        <img src="/assets/production/diamant-noir/IMAGE%205.jpg"/>
                    </div>
                </div>

                <div id="bergman" className="production-section">

                    <div className="production-banner">
                        <iframe width="100%" height="500"
                                src="https://www.youtube.com/embed/nrlVHVid-20">
                        </iframe>
                    </div>
                    <div className="production-text">
                        <div className="production-title">BERGMAN ISLAND</div>
                        <div className="production-content">
                            <div className="content-text">
                                Film suédo-germano-belgo-français réalisé par Mia Hansen-Løve sorti en 2021.
                            </div>
                            <div className="content-text">
                                Deux cinéastes s’installent le temps d’un été sur l’île suédoise de
                                Fårö pour écrire. Entre balades, projections et discussions sur
                                Bergman qui y vécut, le couple découvre l’île et ses paysages
                                sauvages. Dans ce décor réalité et scénario s’entremêlent dans
                                une douce atmosphère.
                            </div>

                        </div>

                        <div className="production-lines">
                            <div className="production-line">
                                <div>RÉALISATION ET SCÉNARIO</div>
                                <div>Mia Hansen-Løve</div>
                            </div>
                            <div className="production-line">
                                <div>PHOTOGRAPHIE</div>
                                <div>Denis Lenoir</div>
                            </div>
                            <div className="production-line">
                                <div>MONTAGE</div>
                                <div>Marion Monnier</div>
                            </div>
                            <div className="production-line">
                                <div>DÉCORS</div>
                                <div>Béatrice Strand</div>
                            </div>
                            <div className="production-line">
                                <div>COSTUMES</div>
                                <div>Judith de Luze</div>
                            </div>
                        </div>

                        <div className="production-main-image">
                            <img src="/assets/production/bergman/affiche.webp"/>
                        </div>


                    </div>
                    <div className="production-image">
                        <img src="/assets/production/bergman/IMAGE%201.jpg"/>
                    </div>
                    <div className="production-image">
                        <img src="/assets/production/bergman/IMAGE%202.jpg"/>
                    </div>
                    <div className="production-image">
                        <img src="/assets/production/bergman/IMAGE%203.jpg"/>
                    </div>
                    <div className="production-image">
                        <img src="/assets/production/bergman/IMAGE%204.jpg"/>
                    </div>
                    <div className="production-image">
                        <img src="/assets/production/bergman/IMAGE%205.jpg"/>
                    </div>

                </div>
            </div>
            <div className="section PRODUCTIONS">
                <div className="block-title">ELEANOR THE GREAT</div>
                <div className="block-text">
                    <div>AFTER SEVENTY YEARS WITH BEST FRIEND, ELEANOR MOVES TO NEW YORK CITY FOR A FRESH START. MAKING
                        NEW
                        FRIENDS
                        AT NINETY PROVES DIFFICULT. LONGING FOR CONNECTION, SHE BEFRIENDS 19-YEAR-OLD,
                    </div>

                    <div> LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. MAECENAS EU AUCTOR SAPIEN, NON
                        FINIBUS
                        LIGULA. UT
                        ULTRICIES VITAE LACUS AC PHARETRA. CURABITUR MAXIMUS MASSA FELIS, ULLAMCORPER CONSEQUAT JUSTO
                        MAXIMUS AT.
                        MORBI NISI TELLUS, FACILISIS SIT AMET ANTE A, VENENATIS PULVINAR NULLA, ALIQUAM BIBENDUM DOLOR
                        NON FELIS
                        SODALES ELEIFEND. DONEC EU LECTUS EST. SUSPENDISSE ALIQUAM LOREM EU MASSA TEMPOR, QUIS EFFICITUR
                        ENIM
                        TRISTIQUE. AENEAN DICTUM NISI SED ELEMENTUM VARIUS. AENEAN ET PHARETRA IPSUM. MAURIS SED ERAT
                        SAGITTIS,
                        SEMPER METUS AT, POSUERE QUAM. SUSPENDISSE SIT AMET SUSCIPIT ERAT. PRAESENT LUCTUS LIBERO AC
                        LACUS
                        ALIQUET,
                        ID VARIUS ELIT SCELERISQUE. MORBI ET MAXIMUS URNA. FUSCE TRISTIQUE IPSUM IN LIGULA SAGITTIS,
                        EGET
                        PORTTITOR
                        AUGUE ULTRICIES. DUIS LOBORTIS, LOREM NEC IMPERDIET PULVINAR, LIBERO ANTE CONVALLIS MAGNA,
                        VOLUTPAT
                        CONSEQUAT ORCI NULLA ET NUNC.
                    </div>

                    <div className="block-line"><b>DIRECTOR</b> SCARLETT JOHANSSON</div>
                    <div className="block-line"><b>WRITER</b> TORY KAMEN</div>
                    <div className="block-line"><b>STARS</b> CHIWETEL EJIOFOR, JUNE SQUIBB, JESSICA HECHT</div>
                    <div className="block-line"><b>PRODUCER</b> CHARLOTTE DAUPHIN</div>

                </div>
                <img src="/background/bg-prod.png"/>

            </div>

            <div className="section SPACES">
                <div className="spaces-menu">
                    <input type="radio" id="imgX" name="spaces-image"/>
                    <div className="spaces-menu-element">
                        <input type="radio" id="img1" name="spaces-image"/>
                        <label htmlFor="img1" className="spaces-menu-element-title">MARIGNAN</label>
                        <div className="spaces-menu-element-city">Paris</div>
                        <label htmlFor="imgX" className="spaces-menu-element-infos">
                            <div className="title">MARIGNAN</div>
                            <div>Deux cinéastes s’installent le temps d’un été sur l’île suédoise de
                                Fårö pour écrire. Entre balades, projections et discussions sur
                                Bergman qui y vécut, le couple découvre l’île et ses paysages
                                sauvages. Dans ce décor réalité et scénario s’entremêlent dans
                                une douce atmosphère.
                            </div>

                            <div className="lines">
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                            </div>
                        </label>
                    </div>

                    <div className="spaces-menu-element">
                        <input type="radio" id="img2" name="spaces-image"/>
                        <label htmlFor="img2" className="spaces-menu-element-title raye">PONT STREET</label>
                        <div className="spaces-menu-element-city">Londres</div>
                        <label htmlFor="imgX" className="spaces-menu-element-infos">
                            <div className="title">PONT STREET</div>
                            <div>Deux cinéastes s’installent le temps d’un été sur l’île suédoise de
                                Fårö pour écrire. Entre balades, projections et discussions sur
                                Bergman qui y vécut, le couple découvre l’île et ses paysages
                                sauvages. Dans ce décor réalité et scénario s’entremêlent dans
                                une douce atmosphère.
                            </div>

                            <div className="lines">
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                            </div>
                        </label>
                    </div>

                    <div className="spaces-menu-element">
                        <input type="radio" id="img3" name="spaces-image"/>
                        <label htmlFor="img3" className="spaces-menu-element-title">THEOULE</label>
                        <div className="spaces-menu-element-city">Theoule-sur-mer</div>
                        <label htmlFor="imgX" className="spaces-menu-element-infos">
                            <div className="title">THEOULE</div>
                            <div>Deux cinéastes s’installent le temps d’un été sur l’île suédoise de
                                Fårö pour écrire. Entre balades, projections et discussions sur
                                Bergman qui y vécut, le couple découvre l’île et ses paysages
                                sauvages. Dans ce décor réalité et scénario s’entremêlent dans
                                une douce atmosphère.
                            </div>

                            <div className="lines">
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                            </div>
                        </label>
                        <div className="spaces-menu-element-image">
                            <img src="/assets/spaces/theoule.png"/>
                        </div>
                    </div>

                    <div className="spaces-menu-element">
                        <input type="radio" id="img4" name="spaces-image"/>
                        <label htmlFor="img4" className="spaces-menu-element-title raye">VENDOME</label>
                        <div className="spaces-menu-element-city">Paris</div>
                        <label htmlFor="imgX" className="spaces-menu-element-infos">
                            <div className="title">VENDOME</div>
                            <div>Deux cinéastes s’installent le temps d’un été sur l’île suédoise de
                                Fårö pour écrire. Entre balades, projections et discussions sur
                                Bergman qui y vécut, le couple découvre l’île et ses paysages
                                sauvages. Dans ce décor réalité et scénario s’entremêlent dans
                                une douce atmosphère.
                            </div>

                            <div className="lines">
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                                <div className="line">
                                    <div>LIEUX</div>
                                    <div>Paris</div>
                                </div>
                            </div>
                        </label>
                        <div className="spaces-menu-element-image">
                            <img src="/assets/spaces/vendome.png"/>
                        </div>
                    </div>

                </div>
            </div>


            <div className="section SPACES"><img src="/background/placeholder.jpg"/></div>
        </div>
    );
}
