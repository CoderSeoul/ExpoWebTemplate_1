import React,{useEffect,useRef} from "react";
import {StyledTabs} from './_style';

class Tabs extends React.Component {
    constructor(props) {
        super();
        this.state = {
            activeTab: 0,
            data: props.data
        }
  
        this.changeTabOnClick = this.changeTabOnClick.bind(this);
    }
  
    changeTabOnClick(index) {
        this.setState({
            activeTab: index
        });
    }
  
    render() {
        return (
            <StyledTabs>
                <TabHeader data={this.state.data}
                              click={this.changeTabOnClick}
                              activeId={this.state.activeTab} />
                <TabContent data={this.state.data}
                               activeId={this.state.activeTab} />
            </StyledTabs>
        )
    }
  }
  
  class TabHeader extends React.Component {
    doClick(index, event) {
        this.props.click(index);
    }
  
    render() {
        let activeClass = this.props.activeId;
  
        let tabs = this.props.data.map((item, index) => {
            return <li className={(activeClass === index ? 'active' : '')}>
                        <a onClick={this.doClick.bind(this, index)} ><span>{item.name}</span></a>
                    </li>
        });
  
        return (
            <ul className="tabs-header">{tabs}</ul>
        )
    }
  
  }
  
  class TabContent extends React.Component {
    render() {
        let activeClass = this.props.activeId;
  
        let content = this.props.data.map((item, index) => {
            return <div  className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} >{item.text}</div>
        });
  
        return (
            <div className="tabs-content">{content}</div>
        );
    }
  }
  

export default Tabs;

