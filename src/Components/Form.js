import React from "react";
import { Card, TextField } from "@mui/material";
import Button from '@mui/material/Button';

const Form= () => {
    return (
        <>
            <Card  style={{ width: 400, display: 'flex', flexDirection: 'column', padding:'20px' }}>
                <h1 style={{textAlign: 'center'}}>Form</h1>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <br />
                <TextField id="outlined-basic" label="Roll NO" variant="outlined" />
                <br />
                <TextField id="outlined-basic" label="Class" variant="outlined" />
                <br />
                <Button variant="contained">Submit</Button>
            </Card>

        </>
    )
}

export default Form;