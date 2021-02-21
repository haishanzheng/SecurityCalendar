import React from 'react';
import { Card } from 'antd';
import CustomData from '../logic/CustomData';


export default class DueDateTable extends React.Component {
    render() {
        return (
            <Card
                title="备注"
                headStyle={{ backgroundColor: 'rgba(171, 183, 183, 1)', border: 0 }}
                bodyStyle={{ backgroundColor: 'rgba(232, 232, 232, 1)', border: 0 }}
            >
                <div dangerouslySetInnerHTML={{ __html: CustomData.customMemo() }}></div>
            </Card>
        )
    }
}
