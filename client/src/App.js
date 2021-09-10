import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Button,
    Card,CardBody,CardTitle
} from 'reactstrap';

import './css/bootstrap.min.css';

import './App.css';

class App extends Component {

     rendertiles() {

        const array = []

        for(var i = 0; i < window.screen.availWidth  + window.screen.availHeight; i ++){
          array.push({index: i })
        }

        function rotate(val){
           var x = document.getElementById(val);
           if (x.className === "column") {
             x.className = 'column-rotate';
           } else {
             x.className = 'column';
           }
        }

        function randomColor(){
          return  "#" + Math.floor(Math.random()*16777215).toString(16)
        }

        function reset(){
          array.forEach(function (item) {
            var x = document.getElementById(item.index);
            if (x.className === "column-rotate") {
              x.className = 'column';
            }
          })
        }

        return (
          <Card className="main-card mb-12">
            <CardBody>
                <CardTitle> Tile Renderer</CardTitle>
                <Row>
                <Col sm={12}>
                    <table className  = "table">
                      <tbody>
                        <tr>
                          <td className = "tdLeft" valign = "middle" align = "center">
                            <Button id = {"reset"} className="btn-wide mb-6 mr-6" size="lg" color = "primary" onClick = {() => reset()}>Reset All</Button>
                          </td>
                          <td className = "tdRight" valign = "middle" align = "center">
                            <div className = "header"> Cummulative number of squares created  : { window.screen.availWidth  + window.screen.availHeight} </div>
                              <div className="row">
                                  {array.map(val =>
                                      <div id = {val.index} className={'column'}  style={{ backgroundColor: randomColor()  }}   onClick={() => rotate(val.index)}>
                                      </div>
                                  )}
                              </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </Row>
                </CardBody>
            </Card>
        )
    }

    render() {
      return (
          <ReactCSSTransitionGroup
              component="div"
              transitionName="TabsAnimation"
              transitionAppear={true}
              transitionAppearTimeout={0}
              transitionEnter={false}
              transitionLeave={false}>
              {this.rendertiles()}

          </ReactCSSTransitionGroup>
      )

  }
}

export default App;
