import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../components/Inputs/Input";
import { mainAPI } from "../../../services/MainService";
import { useSnackbar } from 'notistack'
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";

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
export type AuthFormFields = {
  name?: string;
  email: string;
  password: string;
}
type Inputs = 'name' | 'email' | 'password'

const Auth: FC<Props> = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const { register, handleSubmit, formState: { errors } } = useForm<AuthFormFields>();
  const [signupUser, {}] = mainAPI.useSignupUserMutation()
  const [loginUser, {}] = mainAPI.useLoginUserMutation()
  const { type } = useParams()

  const userApiCall = (func: MutationTrigger<any>, data: AuthFormFields) => {
    func(data).unwrap().then(res => {
      console.log('res', res)
    }).catch(err => {
      enqueueSnackbar(err.data.message, {variant: 'error'})
    })
  }

  const onSubmit: SubmitHandler<AuthFormFields> =  (data) => {
    if(type === 'signup') {
      userApiCall(signupUser, data)
    } else {
      userApiCall(loginUser, data)
    }

  };
  console.log('rendered')
  return (
    <Box>
      <Box>
        <Button variant={'outlined'}>
          <Link to={'/'}>HOME</Link>
        </Button>
        <Button variant={'outlined'}>
          {type === 'signup' ?
            <Link to={'/auth/login'}>
              GO TO LOGIN PAGE
            </Link>
            :
            <Link to={'/auth/signup'}>
              GO TO REG PAGE
            </Link>
          }
        </Button>
      </Box>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)} sx={classes.form}>
        {
          type === 'signup' ?
            <Box>
              {
                ['name', 'email', 'password'].map((item: Inputs) => {
                  return <Box sx={classes.input} key={item}>
                    <Input<AuthFormFields>
                      label={item}
                      placeholder={`Enter your ${item}`}
                      register={register}
                      variant='outlined'
                      rules={{ required: `You must enter your ${item}.` }}
                      errorMessage={errors && errors[item]?.message}
                    />
                  </Box>
                })
              }
            </Box>

            :
            <Box>
              {
                ['email', 'password'].map((item: Inputs) => {
                  return <Box sx={classes.input} key={item}>
                    <Input<AuthFormFields>
                      label={item}
                      placeholder={`Enter your ${item}`}
                      register={register}
                      variant='outlined'
                      rules={{ required: `You must enter your ${item}.` }}
                      errorMessage={errors && errors[item]?.message}
                    />
                  </Box>
                })
              }
            </Box>
        }
        <Box>
          <Button sx={{marginTop: '24px'}} variant={'contained'} type={'submit'}>{type === 'signup' ? 'Register' : 'Login'}</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Auth);