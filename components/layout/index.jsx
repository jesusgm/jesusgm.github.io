import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import NavBar from "../../components/nav-bar/";

const name = "Jesús Gándara Martínez";
export const siteTitle = "Hi, I'm Jesús";

const data = {
  "@context": "http://schema.org",
  "@type": "Person",
  description:
    "Jesús Gándara Martínez. Desarrollador de software. HTML5, CSS3, JavaScript, ES5, React, Svelte, Frameworks JS, PHP, GIT, Scrum,...",
  email: "mailto:jesusalxen@gmail.com",
  image:
    "https://jesusgm.github.io/curriculum-vitae/cv/build/static/media/profileimage.2adb9eeb.jpeg",
  jobTitle: "Senior front developer",
  name: "Jesús Gándara Martínez",
  url: "http://jesusgm.github.io",
  memberOf: {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "AtSistemas",
    url: "http://www.atsistemas.com",
  },
};

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="referrer" content="always" />
        <meta
          name="description"
          content="Jesús Gándara Martínez. Desarrollador de software. HTML5, CSS3, JavaScript, ES5, React, Svelte, Frameworks JS, PHP, GIT, Scrum,..."
        />
        <meta
          name="keywords"
          content="Jesús Gándara Martínez, Jesús Gándara, Jesús, jesus gandara martinez,jesus gandara, jesus, engineer, it, desarrollador, developer, software, frontend, react, HTML5, CSS3, JavaScript, ES5, React, Svelte, Frameworks JS, PHP, GIT, Scrum,..."
        />

        <meta
          name="twitter:card"
          content="https://jesusgm.github.io/curriculum-vitae/cv/build/static/media/profileimage.2adb9eeb.jpeg"
        />
        <meta name="twitter:site" content="https://jesusgm.github.io/" />
        <meta name="twitter:creator" content="@jesus_gan_mar" />
        <meta
          name="twitter:title"
          content="Jesús Gándara Martínez | Software Developer | Portfolio"
        />
        <meta
          name="twitter:description"
          content="Jesús Gándara Martínez. Desarrollador de software. HTML5, CSS3, JavaScript, ES5, React, Svelte, Frameworks JS, PHP, GIT, Scrum,..."
        />
        <meta
          name="twitter:image"
          content="https://jesusgm.github.io/curriculum-vitae/cv/build/static/media/profileimage.2adb9eeb.jpeg"
        />

        <meta name="referrer" content="always" />
        <meta
          name="description"
          content="Jesús Gándara Martínez. Desarrollador de software. HTML5, CSS3, JavaScript, ES5, React, Svelte, Frameworks JS, PHP, GIT, Scrum,..."
        />
        <meta
          name="keywords"
          content="Jesús Gándara Martínez, Jesús Gándara, Jesús, jesus gandara martinez,jesus gandara, jesus, engineer, it, desarrollador, developer, software, frontend, react, HTML5, CSS3, JavaScript, ES5, React, Svelte, Frameworks JS, PHP, GIT, Scrum,..."
        />

        <meta property="og:title" content="Jesús Gándara Martínez" />
        <meta property="og:url" content="https://jesusgm.github.io/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://jesusgm.github.io/curriculum-vitae/cv/build/static/media/profileimage.2adb9eeb.jpeg"
        />
        <meta
          property="og:description"
          content="Jesús Gándara Martínez. Desarrollador de software. HTML5, CSS3, JavaScript, ES5, React, Svelte, Frameworks JS, PHP, GIT, Scrum,..."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS feed for blog posts"
          href="https://jesusgm.github.io/rss.xml"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            {/* <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            /> */}
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            {/* <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpeg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link> */}
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <NavBar />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
