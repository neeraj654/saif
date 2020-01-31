import React, { Component } from 'react'

export class Maincontainer extends Component {
    render() {
        return (
            <div>
                 { this.props.children }
            </div>
        )
    }
}







/*const Maincontainer = ({ children, noNavbar, noFooter }) => (
      <Container>
<TableRow>
    <Navbar/>
    <TableCell className="main-content p-0"
        lg="10"
        md="9"
        sm="12"
        tag="main">

    </TableCell>
</TableRow>
      </Container>
);
Maincontainer.propTypes = {
    
    noNavbar: PropTypes.bool,
     
    noFooter: PropTypes.bool
  };
  
  Maincontainer.defaultProps = {
    noNavbar: false,
    noFooter: false
  };





export default  Maincontainer;*/