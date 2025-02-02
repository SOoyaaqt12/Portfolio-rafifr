import profileImgLarge from '~/assets/gw-large.jpg';
import profileImgPlaceholder from '~/assets/gw-placeholder.jpg';
import profileImg from '~/assets/gw.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Halo Semua" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Nama Saya Rafif, saya tinggal di Bogor dan berstatus menjadi pelajar di{' '}
      <Link href="https://smkpesat.sch.id/">SMK INFORMATIKA PESAT</Link>. proyek saya termasuk kedalam desain UI, prototyping UI, dan membuat fullstack website. saya sudah merasa nyaman dengan kode sehingga memungkinkan saya membuat prototipe dan memvalidasi pengalaman dengan cepat. Jika Anda tertarik dengan alat dan perangkat lunak yang saya gunakan, lihat halaman <Link href="/uses">penggunaan saya</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    Di waktu luang saya suka berlatih Jiu Jitsu Brasil, bermain video game, dan{' '}
      <Link href="https://open.spotify.com/user/31nvnaosj26bn4wvfw5tqtejsqve?si=89c1b1324d8b486b">dan mendengarkan lagu melalui spotify saya</Link>. Saya selalu siap untuk mendengar
      tentang proyek baru, jadi jangan ragu untuk menghubungi saya.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Hubungi Saya Sekarang
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
