import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Product from '../../Products/Product';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    margin: theme.spacing(0, 0, 2, 0),
  },
  image: {
    alignSelf: 'center',
  },
  list: {
    display: 'flex',
    overflow: 'scroll',
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
}));

const ProductPage = ({ product, similarProducts }) => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={1} className={classes.root}>
        <Link to={`/vendors/${product.vendor}`}>
          <Typography color="textSecondary">{product.vendor}</Typography>
        </Link>
        <Typography variant="h5">{product.name}</Typography>
        <img src={product.thumbImgUrl} className={classes.image} />
        <Typography variat="subtitle2">{product.description}</Typography>
        <Typography variant="h6">
          Price: <sup>$</sup>
          {product.price}
        </Typography>
        <Button
          color="primary"
          size="large"
          variant="contained"
          className={classes.marginTop}
        >
          Add to Cart
        </Button>
      </Paper>

      <Paper elevation={1} className={classes.root}>
        <Typography variant="h6">You might also like</Typography>
        <List className={classes.list}>
          {similarProducts.map(prod => (
            <ListItem key={prod.id}>
              <Product {...prod} imageWidth={100} showDetails />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Paper elevation={1} className={classes.root}>
        <Typography variant="h6">Product reviews</Typography>
        {product.reviews.length ? (
          product.reviews.map(rev => (
            <Typography variant="body1" paragraph>
              {rev.body}
            </Typography>
          ))
        ) : (
          <Typography>No reviews for this product yet</Typography>
        )}
      </Paper>
    </>
  );
};

export default ProductPage;
