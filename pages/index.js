import styles from "../styles/Index.module.css";
import Image from "next/image";
export default function Index() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Petar Gatev</h1>
          <p className={styles.subtitle}>Software developer</p>
        </div>
        <nav className={styles.navLinks}>
          <a className={styles.navLink}>
            <Image
              src="/linkedin.png"
              width={48}
              height={48}
              alt="linkedin profile"
              title="LinkedIn profile"
            />
          </a>
          <a className={styles.navLink}>
            <Image
              src="/cv.png"
              width={48}
              height={48}
              alt="CV"
              title="Download CV"
            />
          </a>
        </nav>
      </header>
      <main>
        <div className={styles.hero}>
          <div className={styles.cloud1}></div>
          <div className={styles.cloud2}></div>
          <div className={styles.cloud3}></div>
          <h2 className={styles.tagline}>Software developer based in Sofia.</h2>
        </div>
        <div className={styles.sections}>
          <section className={styles.section}>
            <h2>About</h2>
            <p>
              A software developer with over a year of experience in software
              development. I currently work as an engineer for{" "}
              <a
                href="https://microinvest.net/"
                target="_blank"
                rel="noopener, noreferrer"
              >
                Microinvest
              </a>
              , developing accounting and commerce software. I develop a
              Scrum-like internal web app for the company. In my free time I
              seek a broader set of skills by diving into frontend technologies.
            </p>
          </section>
          <section className={styles.section}>
            <h2>Experience</h2>
            <div>
              <div className={styles.employment}>
                <h3>
                  <strong>Software Engineer</strong>
                </h3>

                <h3>Microinvest, Sofia:</h3>
                <h3>July 2021 - Present</h3>
              </div>
              <p>During my employment I've been involved in:</p>
              <ul className={styles.products}>
                <li>
                  <strong>Jira-clone for our software testing process</strong> -
                  JavaScript, React, ASP .NET
                </li>
                <li>
                  <strong>Sendera</strong> - Extracts data from documents using
                  OCR. I work with the following technologies: C#, WPF
                </li>
                <li>
                  <strong>Price Checker</strong> - C#, Xamarin
                </li>
              </ul>
            </div>
          </section>
          <section className={styles.section}>
            <h2>Skills</h2>
            <ul className={styles.skills}>
              <li>
                <Image
                  style={{ borderRadius: "1rem" }}
                  src="/js-logo.png"
                  width={100}
                  height={100}
                  alt="javascript"
                />
              </li>
              <li>
                <Image
                  src="/csharp-logo.png"
                  width={100}
                  height={100}
                  alt="c sharp"
                />
              </li>
              <li>
                <Image
                  src="/html-logo.png"
                  width={100}
                  height={100}
                  alt="html"
                />
              </li>
              <li>
                <Image src="/css-logo.png" width={100} height={100} alt="css" />
              </li>
              <li>
                <Image
                  src="/react-logo.png"
                  width={100}
                  height={100}
                  alt="react"
                />
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className={styles.footer}>
        <h2>Contact</h2>
        <p>
          You can reach me on{" "}
          <a href="mailto:gatev.peter@gmail.com">gatev.peter@gmail.com</a>.
        </p>
      </footer>
    </>
  );
}
