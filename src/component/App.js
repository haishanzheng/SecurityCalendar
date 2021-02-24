import React from "react";
import { Row, Col } from "antd";

import CustomData from "../logic/CustomData";
import DueDateTable from "./DueDateTable";
import FilteredCategoryRules from "./FilteredCategoryRules";
import Memo from "./Memo";
import KaoHeCalendar from "./KaoHeCalendar";

import "./App.css";

export default class App extends React.Component {
  initKaoHe() {
    this.kh = CustomData.initKaoHe();
  }

  getFilteredCategory(filterCallback) {
    let customDateRulesCategories = [];
    for (let c of this.kh.categories) {
      let rs = [];
      for (let r of c.rules) {
        if (filterCallback(r)) {
          rs.push(r);
        }
      }
      if (rs.length > 0) {
        let d = { ...c };
        d.rules = rs;
        customDateRulesCategories.push(d);
      }
    }
    return customDateRulesCategories;
  }

  constructor(props) {
    super(props);

    this.initKaoHe();

    let calendarEvents = [];
    this.kh.getAllDueDate().forEach((rule) => {
      calendarEvents.push({
        name: rule.title,
        startDate: rule.dueDate,
        endDate: rule.dueDate,
      });
    });

    this.state = {
      calendarEvents,
      customDateRulesCategories: this.getFilteredCategory(
        (rule) => rule.isCustomDate
      ),
      submitWhenChangeCategories: this.getFilteredCategory(
        (rule) => rule.isSubmitWhenChange
      ),
      irregularCategories: this.getFilteredCategory((rule) => rule.isIrregular),
      categories: this.kh.categories,
      allDueDateRules: this.kh.getAllDueDateSorted(),
    };
  }

  render() {
    return (
      <>
        <Row>
          <Col span={6}>
            <KaoHeCalendar calendarEvents={this.state.calendarEvents} />
          </Col>
          <Col span={18}>
            <Row>
              <Col span={12}>
                <DueDateTable allDueDateRules={this.state.allDueDateRules} />
                <Memo />
              </Col>
              <Col span={5}>
                <FilteredCategoryRules
                  title="个性化时间点"
                  categories={this.state.customDateRulesCategories}
                />
                <FilteredCategoryRules
                  title="有变化才提交"
                  categories={this.state.submitWhenChangeCategories}
                />
              </Col>
              <Col span={7}>
                <FilteredCategoryRules
                  title="长期坚持"
                  categories={this.state.irregularCategories}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <div>&nbsp;</div>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <FilteredCategoryRules
              title="全部"
              categories={this.state.categories}
            />
          </Col>
        </Row>
      </>
    );
  }
}
