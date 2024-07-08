'use client'

import {useEffect, useRef} from "react";

export default function Home() {

    const menuRef = useRef<HTMLDivElement>()
    const titles = useRef<string[]>([])

    useEffect(() => {
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
            const activeSection = activeSectionElement.classList[1] || activeSectionElement.parentElement.classList[1] || activeSectionElement.parentElement.parentElement.classList[1]
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
            <div className="main-title">CHARLOTTE DAUPHIN</div>
            {/* @ts-ignore */}
            <div id="menu" ref={menuRef} className="menu">
                <div className="menu-title"
                     onClick={() => window.location.href = 'https://charlottedauphin.world/pages/humann-prize'}>STUDIO
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
            <div className="section SPACES"><img src="/background/placeholder.jpg"/></div>
            <div className="section FONDATION"><img src="/background/placeholder.jpg"/></div>
        </div>
    );
}
