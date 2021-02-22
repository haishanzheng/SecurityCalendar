import CustomData from './CustomData';
import { nanoid } from 'nanoid';

export default class KaoHe {
  constructor() {
    this.categories = [];
  }


  addCategory(title) {
    this.nowCategory = {title: title, rules: [], id: nanoid()};
    this.categories.push(this.nowCategory);
  }

  addRule(r) {
    this.nowRule = {...r, stricts: [], id: nanoid()};
    this.nowCategory.rules.push(this.nowRule);
  }

  addStrict(s) {
    this.nowRule.stricts.push({...s, id: nanoid()});
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
    let rules = this.getAllDueDate();
    rules.push({isDivid: true, title: '========今天========', dueDate: new Date(), stricts: {}, category: { title: '' }, id: -1})
    rules.sort((a, b) => a.dueDate - b.dueDate);
    return rules;
  }

  static isDateZeroReport(date) {
    return CustomData.isDateZeroReport(date);
  }
}
