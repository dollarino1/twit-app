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
export type LoginFormFields = {
  email: string;
  password: string;
}

const Login: FC<Props> = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormFields>();
  const [loginUser, {}] = mainAPI.useLoginUserMutation()

  const onSubmit: SubmitHandler<LoginFormFields> =  (data) => {
    loginUser(data).unwrap().then(res => {
      console.log('res', res)
    }).catch(err => {
      enqueueSnackbar(err.data.message, {variant: 'error'})
    })
  };
  console.log('rendered login')
  return (
    <Box>
      <Box>
        <Button variant={'outlined'}>
          <Link to={'/'}>HOME</Link>
        </Button>
        <Button variant={'outlined'}>
          <Link to={'/registration'}>GO TO REG PAGE</Link>
        </Button>
      </Box>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)} sx={classes.form}>
        <Box sx={classes.input}>
          <Input<LoginFormFields>
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
          <Input<LoginFormFields>
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
          <Button sx={{marginTop: '24px'}} variant={'contained'} type={'submit'}>Login</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Login);

