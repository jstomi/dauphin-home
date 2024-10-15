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
            const scrollThreshold = limit + 100 /* menu.bottom */ + 100 /* title element height */;

            const menu = menuRef.current;
            const menuPosition = menu?.getBoundingClientRect().top;

            // @ts-ignore
            if (menuPosition < limit && !menu?.classList.contains("fixed")) {
                menu?.classList.add('fixed');
            } else if (menu?.classList.contains("fixed") && this.scrollY < screenHeight - scrollThreshold) {
                menu?.classList.remove('fixed');
            }

            // @ts-ignore
            const activeSectionElement = document.elementFromPoint(10, menuPosition + 100);

            // @ts-ignore
            const activeSection = activeSectionElement.classList[1] || activeSectionElement.parentElement.classList[1] || activeSectionElement.parentElement.parentElement.classList[1] || activeSectionElement.parentElement.parentElement.parentElement.classList[1]
            const activeSectionIndex = titles.current.findIndex((e) => e === activeSection);
            const activeSectionTitle = titles.current[activeSectionIndex];

            console.log(activeSectionElement)

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
                     onClick={() => window.location.href = '/studio'}>STUDIO
                </div>
                <div className="menu-title"
                     onClick={() => window.location.href = '/productions'}>PRODUCTIONS
                </div>
                <div className="menu-title"
                     onClick={() => window.location.href = '/spaces'}>SPACES
                </div>
                <div className="menu-title"
                     onClick={() => window.location.href = 'https://1cd0da-52.myshopify.com'}>FONDATION
                </div>
            </div>

            <div className="section STUDIO">
                <img className="section-image" src="/background/bg-studio.jpg"
                     onClick={() => window.location.href = '/studio'}/>
            </div>

            <div className="section PRODUCTIONS">
                <img className="section-image" src="/background/bg-prod.png"
                     onClick={() => window.location.href = '/productions'}/>
            </div>

            <div className="section SPACES">
                <img className="section-image" src="/background/bg-spaces.png"
                     onClick={() => window.location.href = '/spaces'}/>
            </div>

        </div>
    );
}
