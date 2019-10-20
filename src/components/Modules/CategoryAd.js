import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import fashionBanner from '../../images/fashionBanner.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 0,
  },
  image: {
    width: '100%',
    borderRadius: theme.shape.borderRadius,
  },
  spacing: {
    marginBottom: theme.spacing(2),
  },
}));

const CategoryAd = ({ categoryName, image, slug }) => {
  const classes = useStyles();
  return (
    <section>
      <Card className={classes.root}>
        <CardHeader title={`Shop ${categoryName}`} />
        <CardContent>
          <Link to={`/${slug}`}>
            <img
              src={image}
              alt={`Shop ${categoryName}`}
              className={classes.image}
            />
          </Link>
        </CardContent>
      </Card>
      <div className={classes.spacing}></div>
    </section>
  );
};

CategoryAd.defaultProps = {
  categoryName: 'Fashion',
  image: fashionBanner,
  slug: '',
};

export default CategoryAd;
