'use client'

export default function Studio() {

    return (
        <div className="page">
            <div id="menu" className="menu fixed">
                <div className="menu-title active"
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


            <div className="center-left">
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
                        <div className="studio-menu-element-image">
                            <img src="/assets/studio/1.png"/>
                        </div>
                    </div>

                    <div className="studio-menu-element">
                        <div className="studio-menu-element-title">More</div>
                        <div className="studio-menu-element-year">2022</div>
                        <div className="studio-menu-element-image">
                            <img src="/assets/studio/1.png"/>
                        </div>
                    </div>

                    <div className="studio-menu-element">
                        <div className="studio-menu-element-title">Architecte</div>
                        <div className="studio-menu-element-year">2021</div>
                        <div className="studio-menu-element-image">
                            <img src="/assets/studio/1.png"/>
                        </div>
                    </div>

                    <div className="studio-menu-element">
                        <div className="studio-menu-element-title">A Roof For Silence</div>
                        <div className="studio-menu-element-year">2021</div>
                        <div className="studio-menu-element-image">
                            <img src="/assets/studio/1.png"/>
                        </div>
                    </div>

                    <div className="studio-menu-element">
                        <div className="studio-menu-element-title">Barre</div>
                        <div className="studio-menu-element-year">2023</div>
                        <div className="studio-menu-element-image">
                            <img src="/assets/studio/1.png"/>
                        </div>
                    </div>

                    <div className="studio-menu-element">
                        <div className="studio-menu-element-title">CcCccc</div>
                        <div className="studio-menu-element-year">2021</div>
                        <div className="studio-menu-element-image">
                            <img src="/assets/studio/1.png"/>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
