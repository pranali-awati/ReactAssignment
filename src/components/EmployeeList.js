import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EmployeeTile from './EmployeeTile';
import Grid from '@mui/material/Grid';

function EmployeeList(){
    const [empList, setEmployeeList] = useState([]);
    useEffect(() => {
        //Fetch list of Employees on initial load
        axios.get('https://randomuser.me/api/?results=10')
        .then((response) => {
            setEmployeeList(response.data.results);
        })
    }, []);
    return (
        <Grid container spacing={2} sx={{p: 2}}>
            <EmployeeTile employeeList={empList}></EmployeeTile>
        </Grid>
    )
}

export default EmployeeList;
