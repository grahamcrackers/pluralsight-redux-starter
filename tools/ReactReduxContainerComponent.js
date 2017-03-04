// React Redux Container Component <---- Consider making a template

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render(){
        return(
            <div></div>
        );
    }
}

ManageCoursePage.propTypes = {
    //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {        
        actions: bindActionCreators(actions, dispatch) //eslint-disable-line no-undef
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);