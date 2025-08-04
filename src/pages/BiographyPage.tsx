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
                <h2>Early Life & Education</h2>
                <p>
                    Born and raised in a small town, I discovered my passion for
                    technology at an early age. My journey began with simple
                    programming experiments and evolved into a deep fascination
                    with web development and software engineering.
                </p>
                <p>
                    I pursued my education in Computer Science, where I
                    developed a strong foundation in algorithms, data
                    structures, and software design principles. This academic
                    background continues to inform my approach to
                    problem-solving and code architecture.
                </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Professional Journey</h2>
                <p>
                    My professional career has been marked by continuous
                    learning and adaptation to emerging technologies. I've
                    worked across various domains, from frontend development to
                    full-stack applications, always striving to create
                    meaningful and impactful solutions.
                </p>
                <p>
                    Throughout my career, I've collaborated with diverse teams,
                    contributed to open-source projects, and mentored junior
                    developers. These experiences have shaped my understanding
                    of both technical excellence and effective collaboration.
                </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Technical Skills & Expertise</h2>
                <p>
                    My technical expertise spans across modern web technologies,
                    including React, TypeScript, Node.js, and cloud platforms. I
                    specialize in building scalable, maintainable applications
                    that prioritize user experience and performance.
                </p>
                <p>
                    I'm passionate about staying current with industry trends
                    and best practices, regularly exploring new frameworks and
                    methodologies. This commitment to continuous learning
                    enables me to deliver cutting-edge solutions that meet
                    evolving business needs.
                </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Personal Interests & Philosophy</h2>
                <p>
                    Beyond coding, I'm passionate about hiking, photography, and
                    exploring new technologies. These interests help me maintain
                    a balanced perspective and often inspire creative solutions
                    to technical challenges.
                </p>
                <p>
                    I believe in the power of technology to solve real-world
                    problems and improve people's lives. My philosophy centers
                    around writing clean, maintainable code that not only works
                    but also brings joy to those who use and maintain it.
                </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
                <h2>Future Goals & Vision</h2>
                <p>
                    Looking ahead, I'm excited about the potential of emerging
                    technologies like artificial intelligence, machine learning,
                    and decentralized systems. I envision creating innovative
                    solutions that bridge the gap between complex technology and
                    intuitive user experiences.
                </p>
                <p>
                    My long-term goal is to contribute to projects that have a
                    positive social impact, whether through educational
                    technology, environmental sustainability, or community
                    development. I believe that technology should serve as a
                    force for good in the world.
                </p>
            </section>
        </div>
    );
};

export default BiographyPage;
