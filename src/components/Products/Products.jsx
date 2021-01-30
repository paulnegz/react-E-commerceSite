import React from "react";
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running shoes', price: '5', image:'https://images.unsplash.com/photo-1597892657493-6847b9640bac?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
//     { id: 2, name: 'Macbook', description: 'apple Macbook', price: '1000', image:'https://images.unsplash.com/photo-1531934788018-04c3cd417b80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9va3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// ];


const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    
    return(
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart}  />
            </Grid>
            ))}
        </Grid>
    </main>
    )


}
export default Products;