import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/html-css-portfolio-large.jpeg';
import sliceAppPlaceholder from '~/assets/html-css-portfolio-placeholder.jpeg';
import sliceApp from '~/assets/html-css-portfolio.jpeg';
import sliceBackgroundBarLarge from '~/assets/plan-large.jpeg';
import sliceBackgroundBarPlaceholder from '~/assets/plan-placeholder.jpeg';
import sliceBackgroundBar from '~/assets/plan.jpeg';
import sliceBackgroundLarge from '~/assets/bg-portopage-large.jpeg';
import sliceBackgroundPlaceholder from '~/assets/bg-portopage-placeholder.jpeg';
import sliceBackground from '~/assets/bg-portopage.jpeg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/portophone2-large.jpg';
import sliceSidebarAnnotationsPlaceholder from '~/assets/portophone2-placeholder.jpg';
import sliceSidebarAnnotations from '~/assets/portophone2.jpg';
import sliceSidebarLayersLarge from '~/assets/phoneporto1-large.jpg';
import sliceSidebarLayersPlaceholder from '~/assets/phoneporto1-placeholder.jpg';
import sliceSidebarLayers from '~/assets/phoneporto1.jpg';
import sliceSlidesLarge from '~/assets/portokontak-large.png';
import sliceSlidesPlaceholder from '~/assets/portokontak-placeholder.png';
import sliceSlides from '~/assets/portokontak.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Portofolio';
const description =
  'Proyek ini melibatkan perancangan cara yang lebih baik bagi saya untuk menunjukan hasil dari target kompetensi saya.';
const roles = ['User Research', 'UX Design', 'Interface Design'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://portofolio-rafifr.vercel.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Untuk Semua Device</ProjectSectionHeading>
              <ProjectSectionText>
                Projek portofolio ini melibatkan perancangan cara yang lebih baik bagi saya untuk menampilkan visual yang responsif dan menarik bagi pengguna. Saya ingin menunjukkan hasil dari target kompetensi saya, dan memperlihatkan kemampuan saya dalam merancang dan mengembangkan aplikasi web yang dapat diakses oleh semua perangkat.
              </ProjectSectionText>
              <ProjectSectionText>
                Solusi saya adalah memungkinkan semua orang dapat melihat hasil yang saya telah saya kembangkan, dan mereka dapat menilai kemampuan saya.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Komunikasi</ProjectSectionHeading>
              <ProjectSectionText>
                Untuk membuat sebuah proyek, saya tidak bisa mengerjakannya sendiri. Saya membutuhkan bantuan dari orang lain, dan saya harus berkomunikasi dengan mereka. Saya harus menjelaskan apa yang saya inginkan, dan apa yang saya butuhkan. Saya harus mendengarkan masukan mereka, dan saya harus menjelaskan apa yang saya lakukan, saya menyediakan halaman kontak untuk kolaborasi dan komunikasi bersama saya.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Detail yang berarti</ProjectSectionHeading>
              <ProjectSectionText>
                Tanggapan anda sangat berarti bagi saya, saya membutuhkan masukan dari anda untuk memperbaiki diri saya. Saya menyediakan fitur untuk memberikan tanggapan kepada saya, dan saya akan sangat berterima kasih jika anda memberikan tanggapan kepada saya.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                Hasil proyek
              </ProjectSectionHeading>
              <ProjectSectionText>
                Anotasi kolaboratif real-time memfasilitasi kolaborasi yang lebih baik antar pelajar, dan lebih mudah menjalankan latihan kelompok dengan fitur lapisan bersama yang baru. Peserta didik memberikan umpan balik yang menyenangkan untuk bekerja sama dan melihat apa yang dilakukan orang lain, dan menyukai betapa interaktif dan mudahnya penggunaan aplikasi tersebut.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
