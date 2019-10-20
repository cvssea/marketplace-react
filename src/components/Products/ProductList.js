import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridContainer, GridItem } from '../../containers/Grid';
import HomePage from '../Pages/Home';
import Product from './Product';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  title: {
    padding: theme.spacing(1),
  },
  banner: {
    width: '100%',
  },
  spacing: {
    marginBottom: theme.spacing(2),
  },
}));

const ProductsPage = ({ category, products, search }) => {
  const classes = useStyles();
  return (
    <>
      <Paper square>
        {category && (
          <>
            <img
              src={category.imageUrl}
              alt={category.title}
              className={classes.banner}
            />
            <Typography
              variant="h5"
              color="textSecondary"
              className={classes.title}
            >
              {category.title}
            </Typography>
          </>
        )}
        {search &&
          (products.length ? (
            <Typography
              variant="h5"
              color="textSecondary"
              className={classes.title}
            >
              Search results
            </Typography>
          ) : (
            <>
              <Typography
                variant="h5"
                color="textSecondary"
                className={classes.title}
              >
                No results match your search
              </Typography>
              <HomePage />
            </>
          ))}
      </Paper>
      <section style={{ padding: 10 }}>
        <GridContainer justify="space-evenly" spacing={2}>
          {products.map(prod => (
            <GridItem key={prod.id} xs={6} zeroMinWidth>
              <Product {...prod} showDetails />
            </GridItem>
          ))}
        </GridContainer>
      </section>
      <div className={classes.spacing}></div>
    </>
  );
};

export default ProductsPage;
