import React from 'react'
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Box, Paper, useMediaQuery, ButtonBase } from '@material-ui/core';
import partner1 from '../images/collegeLogo/Ram.png'
import partner2 from '../images/collegeLogo/iiit.png'
import partner3 from '../images/collegeLogo/pes.png'
import partner4 from '../images/collegeLogo/bms.png'
import partner5 from '../images/collegeLogo/bnm.png'
import partner6 from '../images/collegeLogo/bit.png'
import partner7 from '../images/collegeLogo/dsce.jpeg'
import partner8 from '../images/collegeLogo/iisc.png'
import partner9 from '../images/collegeLogo/vit.jpeg'
import partner10 from '../images/collegeLogo/svits.png'
import partner11 from '../images/collegeLogo/ait.jpg'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minHeight:'150px',
    },
    image: {
        width: 370,
        height: 380,
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
//const style={
 /// padding: '50px'!,
  //transition: 'transform 0.5s',
  //marginRight: '20px auto' ,
 // margin: '20px',
 // boxShadow: 'black',
 // hover:{
 //   transform: 'scale(1.23)'
 // }
//}
export function CollegeCard() { 
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
        css={{ maxWidth: 'auto' }}>
        <Box 
        
        flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper +" card-hover-elevate"} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner1} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper +" card-hover-elevate"} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner2} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper +" card-hover-elevate"} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner3} />
            </ButtonBase>
            </Paper>
        </Box>
        
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper +" card-hover-elevate"} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner4} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper +" card-hover-elevate"} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner5} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper +" card-hover-elevate"} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner6} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper +" card-hover-elevate"} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner7} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper +" card-hover-elevate"} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner8} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper +" card-hover-elevate"} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner9} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper +" card-hover-elevate"} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner10} />
            </ButtonBase>
            </Paper>
        </Box>
        <Box flexBasis={mdup ? "33%": "50%"}>
        <Paper className={classes.paper +" card-hover-elevate"} variant="outlined">
        <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={partner11} />
            </ButtonBase>
            </Paper>
        </Box>
      </Box>
    </div>
  );
}
