import React from 'react';

import { Container, TextField, Typography, FormControlLabel, 
    Checkbox, FormControl, Radio, FormLabel, RadioGroup, Button } from '@material-ui/core'

import './index.css';


import Logo from '../../assets/icons/spotify.svg';

export default function Registration() {
    return (
        <div className="registration-container">
            <Container className="form-container" maxWidth="sm">
                <img src={Logo} className="img-logo" alt="logo-spotify" />
                <Typography variant="h4" >Inscreva-se grátis e comece a curtir!</Typography>
                <Typography variant="subtitle1" >Inscreva-se com seu endereco de e-mail.</Typography>
                <Container maxWidth="sm" className="form-container-children">
                    <form>
                        <TextField id="standard-basic" label="Qual o seu e-mail?" placeholder="Insira aqui seu e-mail." fullWidth />
                        <TextField id="standard-basic" label="Confirme seu e-mail?" placeholder="Inserir seu e-mail novamente" fullWidth />
                        <TextField id="standard-basic" label="Crie uma senha?" placeholder="Digite aqui um senha com 8 digitos" fullWidth />
                        <TextField id="date" label="Digite sua data de nascimento." type="date" fullWidth InputLabelProps={{
                            shrink: true,
                        }}></TextField>

                        <FormControl component="fieldset">
                            <FormLabel component="legend">Digite seu gênero</FormLabel>
                            <RadioGroup row aria-label="Gênero" name="gender" color="primary">
                                <FormControlLabel value="Homem" control={<Radio />} color="primary" label="Homem" />
                                <FormControlLabel value="Mulher" control={<Radio />} color="primary" label="Mulher" />
                                <FormControlLabel value="Não bínario" control={<Radio />} color="primary" label="Não bínario" />
                            </RadioGroup>
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox name="checkbox" color="primary" />}
                            label="Você aceita nosso termos e condiçoes de uso?"
                        />
                        <Button type="submit" color="primary" variant="contained" fullWidth size="large" >Enviar dados</Button>

        
                    </form>


                </Container>
            </Container>
        </div>
    );
}