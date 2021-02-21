import React from 'react';
import ReactDOM from 'react-dom';
import { Tooltip } from 'antd';
import { Popover } from 'antd';
import Calendar from 'rc-year-calendar';
import KaoHe from '../logic/KaoHe';

Calendar.locales['zh'] = {
    days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    daysShort: ["日", "一", "二", "三", "四", "五", "六"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六"],
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    weekShort: '周',
    weekStart: 0
};


export default class DueDateTable extends React.Component {
    handleDayEnter(e) {
        if (e.events.length === 0) {
            return;
        }

        const element = e.element.firstChild;
        const content = (
            <div>
                {e.events.map((event, index) =>
                    <p key={index}>{event.name}</p>
                )}
            </div>
        );
        ReactDOM.render(
            <Popover content={content} title="当天事项">
                <span>{element.innerText}</span>
            </Popover>,
            element,
        );
    }

    handleDayLeave() {
    }

    render() {
        return (
            <Calendar
                enableContextMenu={true}
                enableRangeSelection={true}
                dataSource={this.props.calendarEvents}
                language='zh'
                customDayRenderer={(element, currentDate) => {
                    if (KaoHe.isDateZeroReport(currentDate)) {
                        element.style.backgroundColor = 'rgba(169, 109, 173, 1)';
                        element.style.color = 'white';
                        element.style.borderRadius = '15px';
                    }

                    const today = new Date();
                    if (currentDate.getTime() === new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime()) {
                        element.style.backgroundColor = 'rgba(210, 77, 87, 1)';
                        element.style.color = 'white';
                        element.style.borderRadius = '15px';
                        ReactDOM.render((
                            <Tooltip title="今天">
                                {element.innerText}
                            </Tooltip>
                        ), element)
                    }

                }}
                onDayEnter={e => this.handleDayEnter(e)}
                onDayLeave={() => this.handleDayLeave()}
            />
        )
    }
}