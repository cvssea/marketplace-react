import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    textDecoration: 'none',
  },
  image: {
    width: '100%',
  },
}));

const Product = ({
  thumbImgUrl,
  imageWidth,
  id,
  name,
  price,
  slug,
  chipLabel,
  showDetails,
}) => {
  const classes = useStyles();
  return (
    <Link to={`/products/${slug}/${id}`} className={classes.link}>
      <Card className={classes.root}>
        <CardContent>
          <img
            src={thumbImgUrl}
            style={imageWidth && { width: imageWidth }}
            className={classes.image}
          />
        </CardContent>
        {chipLabel && <Chip label={chipLabel} />}
        {showDetails && (
          <CardHeader
            title={name}
            subheader={
              <Typography>
                <sup>$</sup>
                {price}
              </Typography>
            }
            titleTypographyProps={{ variant: 'body2', wrap: 'nowrap' }}
            subheaderTypographyProps={{ variant: 'subtitle1' }}
          />
        )}
      </Card>
    </Link>
  );
};

export default Product;
