import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Product from '../../Products/Product';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    alignSelf: 'flex-start',
  },
  details: {
    alignSelf: 'flex-start',
  },
  actionLink: {
    flexGrow: 1,
  },
  spacing: {
    marginBottom: theme.spacing(2),
  },
}));

const DealOfDay = props => {
  const classes = useStyles();
  return (
    <section>
      <Card className={classes.root}>
        <CardHeader title="Deal of the day" className={classes.heading} />
        <CardContent className={classes.content}>
          <Product {...props} showDetails />
        </CardContent>
        <Divider />
        <Link to="/deals-of-the-day">
          <CardActions>
            <Typography className={classes.actionLink} color="textSecondary">
              See all deals
            </Typography>
            <IconButton>
              <ArrowForwardIosIcon />
            </IconButton>
          </CardActions>
        </Link>
      </Card>
      <div className={classes.spacing}></div>
    </section>
  );
};

DealOfDay.defaultProps = {
  name: 'Metal Elastic Pants',
  price: '0.99',
};

export default DealOfDay;
