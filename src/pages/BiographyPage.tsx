import React from "react";

const BiographyPage: React.FC = () => {
    return (
        <div
            style={{
                lineHeight: "1.6",
                padding: "1rem",
            }}
        >
            <section style={{ marginBottom: "2rem" }}>
                <h2>Personal</h2>
                <p>
                    I'm deeply interested in music and have played in bands for
                    years. In San Francisco, I'm part of Dog Band, and I used to
                    play with Box Factory in Richmond, VA. I play bass guitar
                    and synthesizers, write songs, and do paid gigs. You can
                    find some of my music on{" "}
                    <a
                        href="https://open.spotify.com/user/1233014125?si=f2ce41d5274d4992"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1DB954", textDecoration: "none" }}
                    >
                        Spotify
                    </a>
                    .
                </p>
                <p>
                    <img
                        src="/src/assets/inline/couple.jpeg"
                        alt="Rikesh and Natalie"
                        style={{
                            width: "400px",
                            height: "400px",
                            borderRadius: "8px",
                            margin: "0 15px 15px 0",
                            float: "right",
                            objectFit: "cover",
                        }}
                    />
                    I was a radio DJ at WREK 91.1 FM in Atlanta, working as a
                    part-time operator for music discovery programs, training
                    junior operators, and maintaining broadcast equipment. This
                    experience taught me about curation and connecting with
                    diverse audiences.
                </p>
                <p>
                    I'm also interested in photography and digital art. I dabble
                    in animation and other visual arts. You can see some of my
                    photography work in the gallery section of this site. I
                    volunteered at the Shenandoah Valley Discovery Museum,
                    working on children's science exhibits, technology and
                    environmental workshops, and fundraising assistance.
                </p>
                <p>
                    I currently live in San Francisco with my girlfriend
                    Natalie. I'm planning to work at a small tech startup and
                    actively participate in the local music and photography
                    spaces. The city's creative community has been a great place
                    to continue pursuing my interests in music, photography, and
                    technology while working.
                </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Education</h2>
                <p>
                    I studied Computer Science at Georgia Institute of
                    Technology, graduating in 2020. During my time there, I
                    worked as an undergraduate research assistant in the
                    Augmented Environments Lab, researching how augmented
                    reality could enhance audience engagement in performing
                    arts. I built an iOS app and digital set that reacted to
                    actor and audience behavior using Unity, C#, and ARKit.
                </p>
                <p>
                    I also interned at VML Apps, working in an Agile setting to
                    build responsive, native UI for the official NBA Android app
                    using Java and Kotlin. At Chick-fil-A's Technology
                    Innovation Center, I explored XR applications in the food
                    industry, prototyping AR apps and tools using Magic Leap
                    One, Unity, C#, Lumin SDK, and AWS.
                </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Professional Experience</h2>
                <p>
                    After graduating, I joined Roblox Corporation where I've
                    spent the last five years. I started on the App Foundation
                    Team, helping adapt the Roblox mobile app to work
                    cross-platform on PC and VR. This work increased new user
                    retention by over 2%. I also helped acquire around 800k DAUs
                    by building all app home page UI when expanding to Xbox and
                    Playstation.
                </p>
                <p>
                    <img
                        src="/src/assets/inline/roblox.gif"
                        alt="Rikesh and Natalie"
                        style={{
                            width: "400px",
                            height: "200px",
                            borderRadius: "8px",
                            margin: "0 15px 15px 0",
                            float: "left",
                            objectFit: "cover",
                        }}
                    />
                    I moved to the UI Systems and Accessibility Team, where I
                    improved accessibility for between 20 and 40 million users
                    by adding gamepad and keyboard navigation support to all
                    core user flows on desktop and mobile. I owned{" "}
                    <a
                        href="https://devforum.roblox.com/t/focus-navigation-library-release-gamepad-and-keyboard-helpers-for-lua/3410716/27"
                        target="_blank"
                        style={{ color: "#1DB954", textDecoration: "none" }}
                    >
                        Focus Navigation
                    </a>
                    , our gamepad support library, and Otter, our animation
                    library. I built Foundation, a Luau-based React component
                    library from scratch, inspired by Radix UI and Tailwind. I
                    also helped engineer the company's first Design System,
                    including the Token pipeline.
                </p>
                <p>
                    I've mentored four seasons of interns and represented Roblox
                    at recruiting events and career fairs. I built a time spent
                    session-tracking system in the Roblox client that improved
                    analytics accuracy by about 14%.
                </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Personal Projects</h2>
                <p>
                    I've built several personal projects. UrbaNav is a HoloLens
                    AR app that projects a walkable, interactive Atlanta city
                    map for users, built using Unity, C#, Blender, and
                    OpenStreetMaps. Student Debt Simulator 2100 is a retro
                    stealth game built with Unreal Engine 4, C++, and Blender,
                    inspired by Metal Gear Solid for the original PlayStation.
                    StitchNG is a desktop app built with C++ that generates
                    fantasy character names based on popular syllable
                    combinations in 7 languages.
                </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Philosophy</h2>
                <p>
                    Through my work, I aim to advocate for a more intuitive,
                    less intrusive, and healthier use of technology in everyday
                    life. I believe software is too powerful of a tool to be
                    handled carelessly, and that developing it requires holistic
                    thinking about not only business but also society and
                    culture.
                </p>
                <p>
                    I'm constantly learning to be data-informed of what can be
                    measured and culturally informed of what cannot. I draw on
                    influences from outside the industry, notably from travel,
                    geography, music, broadcasting, and nature.
                </p>
            </section>
        </div>
    );
};

export default BiographyPage;
