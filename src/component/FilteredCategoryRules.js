import React from 'react';
import { Card } from 'antd';
import { List } from 'antd';
import Rule from './Rule';


export default class DueDateTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: props.title, categories: props.categories };
    }

    render() {
        return (
            <Card title={this.state.title}>
                {this.state.categories.map((category) => (
                    <List
                        key={category.id}
                        header={<div>{category.title}</div>}
                        footer={<div></div>}
                        bordered
                        dataSource={category.rules}
                        renderItem={(rule) => (
                            <List.Item>
                                <Rule rule={rule} />
                            </List.Item>
                        )
                        }
                    />
                )
                )}
            </Card>
        )
    }
}