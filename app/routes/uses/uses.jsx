import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Penggunaan"
          description="Daftar lengkap alat, aplikasi, perangkat keras, dan masih banyak lagi yang saya gunakan setiap hari untuk merancang dan membuat kode."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Desain</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> adalah alat utama saya untuk desain UI saat ini. Beralih dari Sketch pada tahun 2020 dan tidak pernah menoleh ke belakang.
                  </ListItem>
                  <ListItem>
                  Setiap animasi yang saya buat dibuat di Canva. Jika ada yang punya saran, silakan <Link href="/contact">kirim pesan kepada saya</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Pengembangan</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Saya menggunakan <Link href="https://code.visualstudio.com/">VSCodium</Link> sebagai editor teks saya, dengan tema CyberPunk2077 dan Operator Mono sebagai jenis huruf pilihan saya.
                  </ListItem>
                  <ListItem>
                    GoogleChrome adalah browser utama saya untuk pengembangan dan penggunaan umum.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link>, <Link href="https://getbootstrap.com/">Bootstrap</Link> dan <Link href="https://tailwindcss.com/">Tailwindcss</Link> adalah perpustakaan Javascript dan CSS pilihan saya. Model yang berpusat pada komponen adalah hal pertama yang benar-benar masuk akal bagi saya sebagai seorang desainer.
                  </ListItem>
                  <ListItem>
                    Untuk efek 3D dan image shader saya menggunakan{' '}
                    <Link href="https://threejs.org/">three.js</Link>. Ini memiliki sedikit kurva pembelajaran tetapi Anda dapat melakukan beberapa hal yang sangat hebat dengannya.
                  </ListItem>
                  <ListItem>
                    Untuk aminasi Javascript, saya menggunakan{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link> dan <Link href="https://ui.aceternity.com/">Aceternity UI</Link>, ini cara yang bagus untuk menambahkan animasi ke React.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Sistem</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>Laptop</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Windows 11</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Google Chrome</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>1920p IPS 60hz ASUS Vivobook Go</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
