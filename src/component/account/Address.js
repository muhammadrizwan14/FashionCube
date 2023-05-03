import { Button, Stack } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import AddAddress from './Dialog';
const Address = () => {
  return (
    <>
    <h4>Address book</h4>
    <Stack sx={{backgroundColor:"white"}} height={{xs:"20vh",md:"40vh"}} justifyContent={"center"} alignItems={"center"}>
        <p>Save your delivery and billing address here.</p>
    {/* <Button variant="contained" startIcon={<AddIcon />}>
        Add New Delevry Address
      </Button> */}
      <AddAddress/>
    </Stack>
 </>
  )
}

export default Address