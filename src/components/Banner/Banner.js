import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 0,
  },
  link: {
    textDecoration: 'none',
  },
  content: {
    padding: theme.spacing(1, 1, 1, 2),
  },
  media: {
    width: '60%',
    height: 'auto',
    backgroundSize: 'contain',
  },
  spacing: {
    marginBottom: theme.spacing(2),
  },
}));

const Banner = ({ text, image, slug }) => {
  const classes = useStyles();

  return (
    <section>
      <Paper className={classes.root}>
        <div className={classes.content}>
          <Link to={`/${slug}`} className={classes.link}>
            <Typography
              align="right"
              color="textSecondary"
              className={classes.content}
              variant="h6"
            >
              {text}
            </Typography>
          </Link>
        </div>

        <img
          src={image}
          alt="lots of shopping bags"
          className={classes.media}
        />
      </Paper>
      <div className={classes.spacing}></div>
    </section>
  );
};

Banner.defaultProps = {
  slug: '',
};

export default Banner;
