import React from 'react'
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Box, Paper, useMediaQuery, ButtonBase } from '@material-ui/core';
import partner1 from '../images/company/intugine.png'
import partner2 from '../images/company/dbst.png'
import partner3 from '../images/company/opscale.png'
import partner4 from '../images/company/quartic.png'
import partner5 from '../images/company/saveo.png'
import partner6 from '../images/company/thedroid.png'
import partner7 from '../images/company/kubric.png'
import partner8 from '../images/company/sde.png'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minHeight:'100px',
    },
    image: {
        width: 228,
        height: 228,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        filter: 'greyscale'
      },
  }),
);

export function CompanyCard() { 
  const classes = useStyles();
  const theme = useTheme();
  const mdup = useMediaQuery(theme.breakpoints.up('md'));
  const smdown = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <div>
             
            <Box
        display="flex"
        flexWrap="wrap"
        flexDirection={smdown ? "column": "row"}
        
        m={1}
        bgcolor="background.paper"
        css={{ maxWidth: 'auto' }}>
        <Box 
        
        flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner1} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner2} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner3} />
            </ButtonBase>
            </Paper>
        </Box>
        
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner4} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner5} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner6} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner7} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner8} />
            </ButtonBase>
            </Paper>
        </Box>
        
      </Box>
    </div>
  );
}
