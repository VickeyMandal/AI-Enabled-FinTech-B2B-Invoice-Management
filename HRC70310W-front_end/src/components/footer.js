import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    Container: {
        background: "#2D4250",
        display: 'flex',
        height: "50px",
        flexDirection: "columns",
        width: '100%',
        position: 'block',
        left: '0',
        bottom: '0',
    },
    Footer: {
        color:'white',
        width: '100%',
        marginTop: '13px',
        textAlign:'center',
    }

}));



export default function Footer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.Container}>
                <p className={classes.Footer}>© 2022 Highradius Corporation. All Rights Reserved.</p>
            </div>

        </React.Fragment>


    );
}