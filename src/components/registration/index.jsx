import React from 'react';

import { Container, TextField, Typography, FormControlLabel, 
    Checkbox, FormControl, Radio, FormLabel, RadioGroup, Button } from '@material-ui/core'

import './index.css';


import Logo from '../../assets/icons/spotify.svg';

export default function Registration() {

    const [helperText, setHelperText] = React.useState('');
    const [error, setError] = React.useState(false);
    
  
    let form = {}
   function handlerForm(e){
        e.preventDefault()
        form = {
            name: e.target.name.value,
            email : e.target.email.value,
            checkEmail : e.target.checkEmail.value,
            password : e.target.password.value,
            date : e.target.date.value,
            genre : e.target.genre.value,
            terms : e.target.terms.checked
        }

        if(form.email === form.checkEmail){
            alert('Usuario cadastrado com sucesso!');
            window.location.reload(false);
        }else{

            setHelperText('Email não confere com o anterior!');
            setError(true);
        
        }


   }
   
    return (
        <div className="registration-container">
            <Container className="form-container" maxWidth="sm">
                <img src={Logo} className="img-logo" alt="logo-spotify" />
                <Typography variant="h4" >Inscreva-se grátis e comece a curtir!</Typography>
                <Typography variant="subtitle1" >Inscreva-se com seu endereco de e-mail.</Typography>
                <Container maxWidth="sm" className="form-container-children">
                    <form onSubmit={handlerForm}>
                        <TextField id="name" label="Qual seu nome?" helperText="Digite somente o primeiro nome" placeholder="Digite aqui seu nome." required fullWidth/>
                        <TextField id="email" label="Qual o seu e-mail?" placeholder="Insira aqui seu e-mail." required fullWidth />
                        <TextField id="checkEmail" error={error} helperText={helperText} label="Confirme seu e-mail?" placeholder="Inserir seu e-mail novamente" required fullWidth />
                        <TextField id="password" type="password"label="Crie uma senha?" placeholder="Digite aqui um senha com 8 digitos" required fullWidth />
                        <TextField id="date" label="Digite sua data de nascimento." type="date" required fullWidth InputLabelProps={{
                            shrink: true,
                        }}></TextField>

                        <FormControl  required component="fieldset">
                            <FormLabel component="legend">Digite seu gênero</FormLabel>
                            <RadioGroup row aria-label="Gênero" name="gender" color="primary">
                                <FormControlLabel  value="Homem" control={<Radio id="genre"/>} color="primary" label="Homem" />
                                <FormControlLabel  value="Mulher" control={<Radio id="genre"/>} color="primary" label="Mulher" />
                                <FormControlLabel  value="Não bínario" control={<Radio id="genre"/>} color="primary" label="Não bínario" />
                            </RadioGroup>
                        </FormControl>
                        <FormControlLabel
                            id="terms"
                            control={<Checkbox  id="terms" name="checkbox" color="primary" />}
                            label="Você aceita nosso termos e condiçoes de uso?"
                        />
                        <Button type="submit" 
                        color="primary" 
                        variant="contained" 
                        fullWidth size="large"
                        >Enviar dados</Button>

        
                    </form>


                </Container>
            </Container>
        </div>
    );
}