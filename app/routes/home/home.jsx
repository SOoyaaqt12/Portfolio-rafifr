import laravelTexturePlacehoder from '~/assets/laravel-web-placeholder.jpg';
import laravelTextureLarge from '~/assets/laravel-web-large.jpg';
import laravelTexture from '~/assets/laravel-web.jpg';
import fadilTexture from '~/assets/fadil.png';
import fadilTextureLarge from '~/assets/fadil-large.png';
import fadilTexturePlaceholder from '~/assets/fadil-placeholder.png';
import jakiTextureLarge from '~/assets/jaki-phone-large.png';
import jakiTexturePlaceholder from '~/assets/jaki-phone-placeholder.png';
import jakiTexture from '~/assets/jaki-phone.png';
import jakiProfileLarge from '~/assets/jaki-profile-large.png';
import jakiProfilePlaceholder from '~/assets/jaki-profile-placeholder.png';
import jakiProfile from '~/assets/jaki-profile.png';
import portfoliohtmlTextureLarge from '~/assets/html-css-portfolio-large.jpeg';
import portfoliohtmlTexturePlaceholder from '~/assets/html-css-portfolio-placeholder.jpeg';
import portfoliohtmlTexture from '~/assets/html-css-portfolio.jpeg';
import tugaskuhomeTexture from '~/assets/tugaskuHome.png';
import tugaskuhomeTextureLarge from '~/assets/tugaskuHome-large.png';
import tugaskuhomeTexturePlaceholder from '~/assets/tugaskuHome-placeholder.png';
import tugaskuagendaTexture from '~/assets/tugaskuagenda.png';
import tugaskuagendaTextureLarge from '~/assets/tugaskuagenda-large.png';
import tugaskuagendaTexturePlaceholder from '~/assets/tugaskuagenda-placeholder.png';
import techxperienceTexture from '~/assets/techxperience.png';
import techxperienceTextureLarge from '~/assets/techxperience-large.png';
import techxperienceTexturePlaceholder from '~/assets/techxperience-placeholder.png';
import techxperiencehomeTexture from '~/assets/techxperiencehome.png';
import techxperiencehomeTextureLarge from '~/assets/techxperiencehome-large.png';
import techxperiencehomeTexturePlaceholder from '~/assets/techxperiencehome-placeholder.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectfour = useRef();
  const projectfive = useRef();
  const projectsix = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectfour, projectfive, projectsix, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Library Management with Laravel and Tailwind CSS"
        description="Desain Website menggunakan framework Laravel dan Tailwind CSS"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${laravelTexture} 1280w, ${laravelTextureLarge} 2560w`,
              placeholder: laravelTexturePlacehoder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Jaki Clone Aplication with React Native and Tailwind CSS"
        description="Desain dan pembuatan aplikasi clone Jaki menggunakan React Native dan Tailwind CSS"
        buttonText="View Repo"
        buttonLink="https://github.com/SOoyaaqt12/expo-app-latest"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${jakiTexture} 375w, ${jakiTextureLarge} 750w`,
              placeholder: jakiTexturePlaceholder,
            },
            {
              srcSet: `${jakiProfile} 375w, ${jakiProfileLarge} 750w`,
              placeholder: jakiProfilePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Portfolio Website with HTML and CSS"
        description="Desain dan pembuatan website portfolio menggunakan HTML dan CSS"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${portfoliohtmlTexture} 800w, ${portfoliohtmlTextureLarge} 1920w`,
              placeholder: portfoliohtmlTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectfour}
        visible={visibleSections.includes(projectfour.current)}
        index={4}
        title="Fadil's portfolio with React and Remix"
        description="Desain Website menggunakan framework Remix dengan bahasa Typescript"
        buttonText="View website"
        buttonLink="https://portfolio-fadil.vercel.app"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${fadilTexture} 1280w, ${fadilTextureLarge} 2560w`,
              placeholder: fadilTexturePlaceholder,
            },
            {
              srcSet: `${techxperiencehomeTexture} 1280w, ${techxperiencehomeTextureLarge} 2560w`,
              placeholder: techxperiencehomeTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
      id="project-5"
      sectionRef={projectfive}
      visible={visibleSections.includes(projectfive.current)}
      index={5}
      title="TugasKu"
      description="Desain dan pembuatan aplikasi agenda pelajaran menggunakan React Native dan Backend menggunakan PHP"
      buttonText="Install Aplikasi"
      buttonLink="https://expo.dev/accounts/daffarafdhan/projects/TugasKu/builds/dae0a98e-6255-465f-abee-b0c6b0ec6685"
      model={{ 
        type: 'phone',
        alt: 'Aplikasi TugasKu'
        , textures: [
          {
            srcSet: `${tugaskuhomeTexture} 375w, ${tugaskuhomeTextureLarge} 750w`,
            placeholder: tugaskuhomeTexturePlaceholder,
          },
          {
            srcSet: `${tugaskuagendaTexture} 375w, ${tugaskuagendaTextureLarge} 750w`,
            placeholder: tugaskuagendaTexturePlaceholder,
          },
        ],
      }}
      />
      <ProjectSummary
      id="project-6"
      alternate
      sectionRef={projectsix}
      visible={visibleSections.includes(projectsix.current)}
      index={6}
      title="Techxperience"
      description="Membuat Aplikasi Belajar Menggunakan React Native dan juga Tailwind CSS"
      buttonText="Install Aplikasi"
      buttonLink="https://github.com/SOoyaaqt12/Techxperience"
      model={{ 
        type: 'phone',
        alt: 'Aplikasi Techxperience'
        , textures: [
          {
            srcSet: `${techxperienceTexture} 375w, ${techxperienceTextureLarge} 750w`,
            placeholder: techxperienceTexturePlaceholder,
          },
        ],
       }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
