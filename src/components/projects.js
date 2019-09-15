import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardActions, CardText, CardTitle, Button, CardMenu, IconButton } from "react-mdl"; 


class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://facebook.github.io/react/logo-og.png) center /  cover'}}>React Project #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </CardText>
                    <CardActions border>
                        <Button colored>Get Started</Button>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )  
        }
        else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is Angular</h1></div>
            )
        }
        else if(this.state.activeTab === 2) {
            return(
                <div><h1>This is VueJs</h1></div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div><h1>This is MySql</h1></div>
            )
        }
    }
   
    render() {
        return ( 
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJs</Tab>
                    <Tab>MySql</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;