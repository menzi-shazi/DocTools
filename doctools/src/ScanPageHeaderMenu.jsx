import { Group, Button, Divider, Box, Burger, Drawer, ScrollArea, rem, useMantineTheme, } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';

export function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const theme = useMantineTheme();

    return (<Box >
      <header className={classes.header} >
        <Group justify="space-between" h="100%">
          DocTools

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Scan
            </a>
            <a href="#" className={classes.link}>
              Merge
            </a>
            <a href="#" className={classes.link}>
              Convert
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm"/>
        </Group>
      </header>
      <Drawer opened={drawerOpened} onClose={closeDrawer} size="100%" padding="md" title="Navigation" hiddenFrom="sm" zIndex={1000000}>
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Scan
          </a>
          <a href="#" className={classes.link}>
            Convert
          </a>
          <a href="#" className={classes.link}>
            Merge
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>);
}