import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../components/Inputs/Input";
import { mainAPI } from "../../../services/MainService";
import { useSnackbar } from 'notistack'

const classes = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    marginBottom: '12px'
  }
}

interface Props {

}
export type RegistrationFormFields = {
  name: string;
  email: string;
  password: string;
}

const Registration: FC<Props> = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormFields>();
  const [signupUser, {}] = mainAPI.useSignupUserMutation()

  const onSubmit: SubmitHandler<RegistrationFormFields> =  (data) => {
      signupUser(data).unwrap().then(res => {
        console.log('res', res)
      }).catch(err => {
        enqueueSnackbar(err.data.message, {variant: 'error'})
      })
  };
  console.log('rendered')
  return (
    <Box>
      <Box>
        <Button variant={'outlined'}>
          <Link to={'/'}>HOME</Link>
        </Button>
        <Button variant={'outlined'}>
          <Link to={'/login'}>GO TO LOGIN PAGE</Link>
        </Button>
      </Box>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)} sx={classes.form}>
        <Box sx={classes.input}>
          <Input<RegistrationFormFields>
            label={'name'}
            placeholder={'Enter your name'}
            register={register}
            variant='outlined'
            rules={{ required: 'You must enter your name.' }}
            errorMessage={errors && errors?.name?.message}
          />
        </Box>
        <Box sx={classes.input}>
          <Input<RegistrationFormFields>
            label={'email'}
            placeholder={'Enter your e-mail'}
            type={'email'}
            register={register}
            variant='outlined'
            rules={{ required: 'You must enter your email.' }}
            errorMessage={errors && errors?.email?.message}
          />
        </Box>
        <Box sx={classes.input}>
          <Input<RegistrationFormFields>
            label={'password'}
            placeholder={'Enter your password'}
            type={'password'}
            register={register}
            variant='outlined'
            rules={{ required: 'You must enter your password.' }}
            errorMessage={errors && errors?.password?.message}
          />
        </Box>
        <Box>
          <Button sx={{marginTop: '24px'}} variant={'contained'} type={'submit'}>Register</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Registration);
