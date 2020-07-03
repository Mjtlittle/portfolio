import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
} from '@material-ui/core'

import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
})

const ProjectCard = ({ title, src, description }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={title}
          height='140'
          image={src}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          href='https://www.google.com'
          color='primary'
          aria-label='link'
        >
          <LinkIcon />
        </IconButton>
        <Button color='primary'>Github</Button>
      </CardActions>
    </Card>
  )
}

ProjectCard.defaultProps = {
  title: 'Example Project',
  description: 'This is an example project',
  src: '',
}

export default ProjectCard
