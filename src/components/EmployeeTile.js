import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const EmployeeTile = (props) => {
    return (
        props.employeeList.map((employee)=> {
            return (
            <Grid item xs={3} key={employee.id.value + employee.name.first}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <img src={employee.picture.medium}/>
                        <Typography >
                            Name: {employee.name.first + ' ' + employee.name.last}
                        </Typography>
                        <Typography variant="body2">
                            Gender: {employee.gender.charAt(0).toUpperCase() + employee.gender.slice(1)}
                        <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">View Details</Button>
                    </CardActions>
                </Card>
            </Grid>
            )
        })   
    )
}

export default EmployeeTile;