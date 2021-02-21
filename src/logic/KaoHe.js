import CustomData from './CustomData';

export default class KaoHe {
  constructor() {
    this.categories = [];
  }

  addCategory(title) {
    this.nowCategory = {title: title, rules: []};
    this.categories.push(this.nowCategory);
  }

  addRule(r) {
    this.nowRule = r;
    this.nowRule.stricts = []
    this.nowCategory.rules.push(this.nowRule);
  }

  addStrict(s) {
    this.nowRule.stricts.push(s);
  }

  getAllDueDate() {
    let rules = [];
    this.categories.forEach(category => {
      category.rules.forEach(rule => {
        if (rule.dueDate) {
          rule.category = category;
          rules.push(rule);
        }
      })
    });
    return rules;
  }

  getAllDueDateSorted() {
    let rules = [];
    this.categories.forEach(category => {
      category.rules.forEach(rule => {
        if (rule.dueDate) {
          rule.category = category;
          rules.push(rule);
        }
      })
    });
    rules.push({isDivid: true, title: '========今天========', dueDate: new Date(), category: { title: '' }})
    rules.sort((a, b) => a.dueDate - b.dueDate);
    return rules;
  }

  static isDateZeroReport(date) {
    return CustomData.isDateZeroReport(date);
  }
}
