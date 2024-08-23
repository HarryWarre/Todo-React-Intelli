import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

export default function BasicInput() {
  return (
    <>
      <Typography level='h3'>Basic TextField</Typography>
      <Box
        component='form'
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete='off'>
        {/* TextField */}
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />

        {/* Fill input form */}
        <TextField id='filled-basic' label='Filled' variant='filled' />
        {/* Standard input form */}
        <TextField id='standard-basic' label='Standard' variant='standard' />
      </Box>

      <Typography level='h3'>Form</Typography>
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete='off'>
        <div>
          <TextField required label='Required' />
          <TextField disabled label='Disabled' />
          <TextField
            id='outlined-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
          />
          <TextField
            id='outlined-read-only-input'
            label='Read Only'
            defaultValue={"Value default"}
            InputProps={{ readOnly: true }}
          />
        </div>
        <Typography level='h3'>Error TextField</Typography>
        <div>
          <TextField
            id='filled-number-error'
            label='Number'
            type='Number'
            InputLabelProps={{ shrink: true }}
            variant='filled'
          />
          <TextField id='outlined-search' label='Search field' type='search' />
          <TextField
            color='secondary'
            id='outlined-helperText-error'
            label='Helper text'
            defaultValue='Default Value'
            helperText='Some important text'
          />
        </div>
      </Box>

      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete='off'>
        <div>
          <TextField required label='Required' error />

          <TextField
            error
            id='outlined-password-input-error'
            label='Password'
            type='password'
            autoComplete='current-password'
          />
          <TextField
            error
            id='outlined-read-only-input-error'
            label='Read Only'
            defaultValue={"Value default"}
            InputProps={{ readOnly: true }}
            helperText='Some important text'
          />
        </div>
      </Box>
    </>
  );
}
