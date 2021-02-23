import React from "react";
import { Card } from "antd";
import { Table } from "antd";
import { DateTime } from "luxon";
import Rule from "./Rule";

const { Column } = Table;

export default class DueDateTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allDueDateRules: props.allDueDateRules };
  }

  render() {
    return (
      <Card title="通用关键时间点">
        <Table
          pagination={false}
          dataSource={this.state.allDueDateRules}
          rowKey="id"
        >
          <Column
            title="到期日"
            render={(rule) =>
              DateTime.fromJSDate(rule.dueDate).toFormat("yyyy/LL/dd")
            }
          />
          <Column
            title="时间间隔"
            render={(rule) =>
              rule.isDivid ? "" : DateTime.fromJSDate(rule.dueDate).toRelative()
            }
          />
          <Column
            title="考核条目描述"
            render={(rule) =>
              rule.isDivid ? <>{rule.title}</> : <Rule rule={rule} />
            }
          />
          <Column title="考核类别" render={(rule) => rule.category.title} />
        </Table>
      </Card>
    );
  }
}
