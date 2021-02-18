import React, { useEffect, useState } from 'react'
import ShowProduct from '../components/ShowProduct'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    mydesign:{
        border: '2px solid grey',
        borderRadius: ' 50px 20px',
     
    }
}));

function Product() {
    const classes = useStyles();
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(prod => {
                console.log(prod)
                setproducts(prod)

            })
    }, [])
    console.log(products)
    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    {products.map((product) => (
                        <Grid item xs={3} className={classes.mydesign}>
                            <paper className={classes.paper}><ShowProduct product={product} /></paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}

export default Product