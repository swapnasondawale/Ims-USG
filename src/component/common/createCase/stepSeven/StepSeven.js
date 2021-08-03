import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StepSeven.css';
import { ButtonComponent, InputField, MaterialCard, SelectorButton } from '../../../../shared';


class StepSeven extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
                <div>
                    <div className="addPolicyDetailsHeader">
                        <span className="heading">Agency/Representative</span>
                    </div>
                                

                <div className="addPolicyDetailsBody">
                    <div style={{ 'paddingLeft': '46px' }}></div>
                    <div className="inputItem">
                        <span className="input-fields2">
                            <SelectorButton 
                            selectedButton={1}
                             selectorButtonWidth={320} selectorButtonHeight={104}
                                buttonName='Automated Assignment' iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={235} selectorButtonHeight={104}
                                buttonName='Assign Agency' border='1.8px solid' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#43A1F6'} />

                        </span>
                    </div>

                    <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={394} selectorButtonHeight={104}
                                buttonName='Assign Independant Representative' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>
                </div>

                                <br />
                                <br />
                                <br />
                                <br />
                 
                    <div className="addPolicyDetailsHeader">
                        <span className="heading">Billing Type</span>
                    </div>
                

                <div className="addPolicyDetailsBody">
                    <div style={{ 'paddingLeft': '46px' }}></div>
                    <div className="inputItem">
                        <span className="input-fields2">
                            <SelectorButton 
                            selectedButton={1}
                             selectorButtonWidth={179} selectorButtonHeight={104}
                                buttonName='Lorem Ipsum' iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={148} selectorButtonHeight={104}
                                buttonName='Doler Sit' border='1.8px solid' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#43A1F6'} />

                        </span>
                    </div>

                    <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={166} selectorButtonHeight={104}
                                buttonName='Amet Doler' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>

                     <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={129} selectorButtonHeight={104}
                                buttonName='Lorem' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>
                </div>

                <br />
                <br />

                <div className="addPolicyDetailsHeader">
                        <span className="heading">Form Type</span>
                    </div>
                
                 <div className="addPolicyDetailsBody">
                    <div style={{ 'paddingLeft': '46px' }}></div>
                    <div className="inputItem">
                        <span className="input-fields2">
                            <SelectorButton 
                            selectedButton={1}
                             selectorButtonWidth={166} selectorButtonHeight={104}
                                buttonName='Lorem Ipsum' iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="input-fields2">
                             <SelectorButton
                                selectorButtonWidth={151} selectorButtonHeight={104}
                                buttonName='doler Sit' border='1.8px solid' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#43A1F6'} />

                        </span>
                    </div>

                    <div className="inputItem">
                         <span className="input-fields2">
                             <SelectorButton
                                selectorButtonWidth={179} selectorButtonHeight={104}
                                buttonName='Amet Doler' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>

                     <div className="inputItem">
                         <span className="input-fields2">
                             <SelectorButton
                                selectorButtonWidth={146} selectorButtonHeight={104}
                                buttonName='Lorem' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>
                     <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={174} selectorButtonHeight={104}
                                buttonName='Lorem' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>
                     <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={209} selectorButtonHeight={104}
                                buttonName='+ Add New Form' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>                    
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="addPolicyDetailsHeader">
                    <span className="heading">Agency/Representative</span>
                </div>
                <div className="addPolicyDetailsBody">
                    <div style={{ 'paddingLeft': '46px' }}></div>
                    <div className="inputItem">
                        <span className="input-fields2">
                            <SelectorButton 
                            selectedButton={1}
                             selectorButtonWidth={320} selectorButtonHeight={104}
                                buttonName='Automated Assignment' iconName='' boxShadow='none' border='0.8px solid #D2E3E9' backgroundColor='rgba(255,255,255,0.2)' borderColor={'#D2E3E9'} />

                        </span>
                    </div>

                    <div className="inputItem">
                        <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={235} selectorButtonHeight={104}
                                buttonName='Assign Agency' border='1.8px solid' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#43A1F6'} />

                        </span>
                    </div>

                    <div className="inputItem">
                         <span className="input-fields2">

                            <SelectorButton
                                selectorButtonWidth={394} selectorButtonHeight={104}
                                buttonName='Assign Independant Representative' border='0.8px solid #D2E3E9' boxShadow='none' backgroundColor='rgba(255,255,255,0.2)' iconName='' borderColor={'#D2E3E9'} />

                        </span>
                     </div>
                </div>
             <br />
             <br />   
             <br />
             <br /> 
             <br />
             <br />      
            </div>

            );
    }
}

StepSeven.propTypes = {

};

export default StepSeven;