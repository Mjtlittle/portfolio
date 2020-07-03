import React from 'react'

import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  useScrollTrigger,
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import MoreIcon from '@material-ui/icons/MoreVert'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

function ElevationScroll(props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  })
)

const Topbar = () => {
  const { name } = useSiteMetadata()

  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h6'>
            {name}
          </Typography>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Contact</Button>
          <Button color='inherit'>Projects</Button>
          <Button color='inherit'>Blog</Button>
          <IconButton
            aria-label='display more actions'
            edge='end'
            color='inherit'
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      From Topbar
    </React.Fragment>
  )
}

export default Topbar
