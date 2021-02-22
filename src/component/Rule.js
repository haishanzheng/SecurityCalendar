import React from 'react';
import { Checkbox } from 'antd';

export default class Rule extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rule: props.rule };
    }

    render() {
        return (
            <>
                <Checkbox checked={this.state.rule.isDone}>
                    {this.state.rule.title}
                    {this.state.rule.stricts.length === 0 ? '' : (
                        <>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                    {this.state.rule.stricts.map((strict) => (
                                <span style={{ color: '#8c8c8c', fontSize: '5px' }} key={strict.id}>
                                    <Checkbox checked={strict.isDone} style={{ transform: 'scale(0.5)' }} />{strict.title}&nbsp;&nbsp;
                                </span>
                            ))}
                        </>
                    )}
                </Checkbox>
                { this.state.rule.description && this.state.rule.description}
            </>
        )
    }
}
