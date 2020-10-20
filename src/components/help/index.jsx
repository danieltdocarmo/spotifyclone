import React from 'react';
import { Container, Tabs, Tab, Typography, Box } from '@material-ui/core';
import { makeStyles, withTheme} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import './index.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#2E2E2E',
      color : 'white',
      display: 'flex',
      padding : 60,
      height: '75vh',
      border: '20px solid white'
    },
    tabs: {
      borderRight: `5px solid ${theme.palette.divider}`,
      width : 900
    },
  }));
  
  export default function Help() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <div >
      <div className={classes.root} >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Como efetuar o pagamento?" {...a11yProps(0)} />
          <Tab label="Não consigo instalar meu app!" {...a11yProps(1)} />
          <Tab label="Sua dúida ira aparecer aqui!" {...a11yProps(2)} />
          <Tab label="Sua dúida ira aparecer aqui!" {...a11yProps(3)} />
          <Tab label="Sua dúida ira aparecer aqui!" {...a11yProps(4)} />
          <Tab label="Sua dúida ira aparecer aqui!" {...a11yProps(5)} />
          <Tab label="Sua dúida ira aparecer aqui!" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
        Cada linha de um poema representa um verso, já a estrofe é o conjunto de versos. Neste caso, a frase 
        "Vou-me embora pra Pasárgada" é um verso, assim como "Lá sou amigo do rei" é outro verso, e assim por diante. 
        O conjunto dos quatro versos formam uma estrofe.
        </TabPanel>
        <TabPanel value={value} index={1}>
        substantivo masculino Cada uma das linhas de um poema, independentemente da métrica em que estão compostas. Reunião de palavras medidas segundo certas regras (cesura, rima etc.). [Literatura] Conjunto das composições poéticas, por oposição à prosa; o gênero poético; a poesia.
        </TabPanel>
        <TabPanel value={value} index={2}>
        Cada linha de um poema representa um verso, já a estrofe é o conjunto de versos. Neste caso, a frase "Vou-me embora pra Pasárgada" é um verso, assim como "Lá sou amigo do rei" é outro verso, e assim por diante. O conjunto dos quatro versos formam uma estrofe.
        </TabPanel>
        <TabPanel value={value} index={3}>
        Cada linha de um poema representa um verso, já a estrofe é o conjunto de versos. Neste caso, a frase "Vou-me embora pra Pasárgada" é um verso, assim como "Lá sou amigo do rei" é outro verso, e assim por diante. O conjunto dos quatro versos formam uma estrofe.
        </TabPanel>
        <TabPanel value={value} index={4}>
        Cada linha de um poema representa um verso, já a estrofe é o conjunto de versos. Neste caso, a frase "Vou-me embora pra Pasárgada" é um verso, assim como "Lá sou amigo do rei" é outro verso, e assim por diante. O conjunto dos quatro versos formam uma estrofe.
        </TabPanel>
        <TabPanel value={value} index={5}>
        Cada linha de um poema representa um verso, já a estrofe é o conjunto de versos. Neste caso, a frase "Vou-me embora pra Pasárgada" é um verso, assim como "Lá sou amigo do rei" é outro verso, e assim por diante. O conjunto dos quatro versos formam uma estrofe.
        </TabPanel>
        <TabPanel value={value} index={6}>
        Cada linha de um poema representa um verso, já a estrofe é o conjunto de versos. Neste caso, a frase "Vou-me embora pra Pasárgada" é um verso, assim como "Lá sou amigo do rei" é outro verso, e assim por diante. O conjunto dos quatro versos formam uma estrofe.
        </TabPanel>
      </div>
      </div>
    );
  }