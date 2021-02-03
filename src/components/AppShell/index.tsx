import PageBody from '@components/PageBody'
import React, { createContext, useCallback, useContext, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton'
import { useMenuClasses } from './styles';
import Icon from '@material-ui/core/Icon';

import Fab from '@material-ui/core/Fab';

export const AppMenuContext = createContext({} as { open: boolean, toggleMenu: (next: boolean) => void })

export const useAppMenu = () => useContext(AppMenuContext);

interface AppSheelProps {
  pageTitle: string;
  addNewLink?: string;
  backLink?: string;
}

const AppShell: React.FC<AppSheelProps> = (props) => {

  const { pageTitle, addNewLink, backLink, children } = props;

  const classes = useMenuClasses();
  const [open, setOpen] = useState(false);
  const toggleMenu = useCallback(
    (nextOpen: boolean) => {
      setOpen(nextOpen)
    },
    []
  )
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
      </Head>
      <PageBody className={classes.root}>
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={() => toggleMenu(false)}
          className={classes.menu}
          classes={{
            paper: classes.menuPaper
          }}
        >
          <List>
            {[
              { title: 'Tratamentos', link: '/treatment-suggestion', icon: '' },
              { title: 'Coberturas', link: '/coverages', icon: '' },
              { title: 'Estágios', link: '/stages', icon: '' },
              { title: 'Usuários', link: '/users', icon: '' },
            ].map((item) => {
              const { icon, link, title } = item;
              return (
                <Link href={link}>
                  <ListItem button key={title}>
                    <ListItemIcon>
                      <Icon>{icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              )
            })}
          </List>
        </Drawer>
        <main className={classes.root}>
          <AppBar position="absolute">
            <Toolbar>
              {backLink
                ? (
                  <Link href={backLink}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                      <Icon>arrow_back</Icon>
                    </IconButton>
                  </Link>
                )
                : (
                  <IconButton onClick={() => toggleMenu(!open)} edge="start" color="inherit" aria-label="menu">
                    <Icon>menu</Icon>
                  </IconButton>
                )}
              <Typography variant="h6" noWrap>
                {pageTitle}
              </Typography>
              {addNewLink && (
                <Link href={addNewLink} >
                  <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                    <Icon>add</Icon>
                  </Fab>
                </Link>
              )}
            </Toolbar>
          </AppBar>
          <Paper elevation={0} className={classes.paper}>
            <AppMenuContext.Provider value={{ open, toggleMenu }} >
              {children}
            </AppMenuContext.Provider>
          </Paper>
        </main>
      </PageBody>
    </>
  )
}

export default AppShell
