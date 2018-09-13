import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
class Contact extends React.Component {
  render () {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={3}></Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fas fa-phone-square" aria-hidden="true"></i>
                    0334-4447853
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fab fa-whatsapp-square"></i>
                    0344-4223540
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fas fa-envelope"></i>
                    tahamazari@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
          <Cell col={3}></Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
