import '@mantine/core/styles.css';
import { HeaderMegaMenu } from './ScanPageHeaderMenu';
import { Camera } from './Camera';
import { FooterCentered } from './Footer';

import { MantineProvider } from '@mantine/core';

export default function App() {
  return <MantineProvider>
    <HeaderMegaMenu />
    <Camera />
    <FooterCentered />
  </MantineProvider>;
}