import React, { PureComponent } from 'react';
import AppNavigation from '../navigation/AppNavigation';

export default class RootContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pagenum: 1,
        };
    }

    onSetPageNum = (num) => {
        this.setState({ pagenum: num });
    }
    onGetPageNum = () => {
        return this.state.pagenum;
    }

    render() {
        return (
            <AppNavigation screenProps={{
                pagenum: this.state.pagenum,
                onSetPageNum: this.onSetPageNum,
                onGetPageNum: this.onGetPageNum,
            }}/>
        );
    }
}
