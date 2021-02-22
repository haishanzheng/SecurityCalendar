import { DateTime, Interval } from "luxon";
import KaoHe from './KaoHe';

export default class CustomData {
    static initKaoHe() {
        const kh = new KaoHe();

        let currentYear = new Date().getFullYear();

        kh.addCategory('一、■■■■■■■');
        kh.addRule({ title: '1. ■■■■■■■■■■■■■■■■■■■■■', isSubmitWhenChange: true, isDone: true });
        kh.addStrict({ title: '签字', isDone: false });
        kh.addStrict({ title: '加盖公章', isDone: false });
        kh.addStrict({ title: '邮寄', isDone: false });
        kh.addRule({ title: '2. ■■■■■■■■■■■■■■■■', isSubmitWhenChange: true, isDone: true });
        kh.addStrict({ title: '红头', isDone: false });
        kh.addStrict({ title: '加盖公章', isDone: false });

        kh.addCategory('二、■■■■■■■■■■■■■■■■■■■');
        kh.addRule({ title: '4. ■■■■会议', dueDate: new Date(currentYear, 3 - 1, 31) });
        kh.addStrict({ title: '红头', isDone: false });
        kh.addStrict({ title: '■■■', isDone: false });
        kh.addRule({ title: '4. ■■■■会议', dueDate: new Date(currentYear, 6 - 1, 30) });
        kh.addStrict({ title: '红头', isDone: false });
        kh.addStrict({ title: '■■■', isDone: false });
        kh.addRule({ title: '4. ■■■■会议', dueDate: new Date(currentYear, 9 - 1, 30) });
        kh.addStrict({ title: '红头', isDone: false });
        kh.addStrict({ title: '■■■', isDone: false });
        kh.addRule({ title: '4. ■■■■会议', dueDate: new Date(currentYear, 11 - 1, 30) });
        kh.addStrict({ title: '红头', isDone: false });
        kh.addStrict({ title: '■■■', isDone: false });
        kh.addRule({ title: '4. 网络■■■■会议', dueDate: new Date(currentYear, 12 - 1, 1) });
        kh.addStrict({ title: '红头', isDone: false });
        kh.addStrict({ title: '■■■', isDone: false });
        kh.addRule({ title: '5. ■■■■■■■■■■■■■■■', dueDate: new Date(currentYear, 3 - 1, 31) });
        kh.addStrict({ title: '红头', isDone: false });
        kh.addStrict({ title: '文号', isDone: false });
        kh.addStrict({ title: '加盖公章', isDone: false });
        kh.addRule({ title: '6. ■■■■■■■■■■■■■■■', dueDate: new Date(currentYear, 12 - 1, 1) });
        kh.addStrict({ title: '红头', isDone: false });
        kh.addStrict({ title: '加盖公章', isDone: false });

        kh.addCategory('三、■■■■■■■■■■■■■■■■■■');
        kh.addRule({ title: '7. ■■■■■■■■■■■■■■■■■■■■■', isSubmitWhenChange: true, isDone: false });
        kh.addRule({ title: '8. ■■■■■■■■■■■■■■■■■■', isSubmitWhenChange: true, isDone: false });
        kh.addRule({ title: '9. ■■■■■■■■■■■■■■■■■■■■■', isIrregular: true });
        kh.addStrict({ title: '纸质', isDone: false });
        kh.addStrict({ title: '加盖公章', isDone: false });

        kh.addCategory('四、■■■■■■■■■■■■');
        kh.addRule({ title: '10. ■■■■■■■■■■■■■■■', isIrregular: true });
        kh.addRule({ title: '11. ■■■■■■■■■■■■■■■■■■', isSubmitWhenChange: true, isDone: false });
        kh.addRule({ title: '11. ■■■■■■■■■■■■■■■■■■', isIrregular: true });
        kh.addStrict({ title: '合同、协议', isDone: false });
        kh.addRule({ title: '12. ■■■■■■■■■■■■■■■■■■', isIrregular: true });

        kh.addCategory('五、■■■■■■■■■■■■■■■');
        kh.addRule({ title: '13. ■■■■■■■■■■■■■■■', isCustomDate: true });
        kh.addStrict({ title: '■■■■■■', isDone: true });
        kh.addStrict({ title: '■■■■■■', isDone: false });

        kh.addCategory('七、■■■■■■');
        kh.addRule({ title: '15. ■■■■■■■■■■■■■■■■■■■■■', dueDate: new Date(currentYear, 9 - 1, 10) });
        kh.addStrict({ title: '加盖公章', isDone: false });

        kh.addCategory('八、■■■■■■■■■■■■');
        kh.addRule({ title: '16. ■■■■■■■■■■■■■■■' })

        kh.addCategory('九、■■■■■■■■■');
        kh.addRule({ title: '17. ■■■■■■■■■', isSubmitWhenChange: true, isDone: false })
        kh.addStrict({ title: '红头', isDone: false });
        kh.addStrict({ title: '文号', isDone: false });
        kh.addStrict({ title: '加盖公章', isDone: false });

        kh.addRule({ title: '17. ■■■■■■■■■', isCustomDate: true })
        kh.addRule({ title: '18. ■■■■■■■■■■■■■■■', isIrregular: true });

        kh.addCategory('十、■■■■■■■■■■■■');
        kh.addRule({ title: '19. ■■■■■■■■■■■■■■■', isIrregular: true })
        kh.addStrict({ title: '合同、协议', isDone: false });
        kh.addStrict({ title: '（1）■■■■■■■■■■■■■■■', isDone: false });
        kh.addStrict({ title: '（2）■■■■■■■■■■■■■■■', isDone: false });
        kh.addStrict({ title: '（3）■■■■■■■■■■■■■■■■■■■■■', isDone: false });
        kh.addStrict({ title: '（4）■■■■■■■■■■■■■■■', isDone: false });
        kh.addStrict({ title: '（5）■■■■■■■■■■■■■■■', isDone: false });
        kh.addStrict({ title: '■■■■■■', isDone: false });
        kh.addStrict({ title: '加盖公章', isDone: false });

        kh.addCategory('十一、■■■■■■■■■■■■');
        kh.addRule({ title: '20. ■■■■■■■■■■■■', dueDate: new Date(currentYear, 9 - 1, 30) });
        kh.addStrict({ title: '■■■■■■■■■', isDone: false });
        kh.addStrict({ title: '■■■■■■■■■', isDone: false });
        kh.addStrict({ title: '证明材料', isDone: false });
        kh.addRule({ title: '21. ■■■■■■■■■■■■■■■', isIrregular: true });
        kh.addStrict({ title: '■■■■■■', isDone: false });

        return kh;
    }

    static isDateZeroReport(date) {
        let currentYear = new Date().getFullYear();

        return false ||
            Interval.fromDateTimes(
                DateTime.local(currentYear, 2, 1),
                DateTime.local(currentYear, 2, 10 + 1)
            ).contains(date) ||
            Interval.fromDateTimes(
                DateTime.local(currentYear, 3, 1),
                DateTime.local(currentYear, 3, 10 + 1)
            ).contains(date) ||
            Interval.fromDateTimes(
                DateTime.local(currentYear, 5, 1),
                DateTime.local(currentYear, 5, 10 + 1)
            ).contains(date) ||
            Interval.fromDateTimes(
                DateTime.local(currentYear, 9, 1),
                DateTime.local(currentYear, 9, 10 + 1)
            ).contains(date) ||
            Interval.fromDateTimes(
                DateTime.local(currentYear, 12, 1),
                DateTime.local(currentYear, 12, 10 + 1)
            ).contains(date);

    }

    static customMemo() {
        return `
        <p>
          3. ■■■■■■■■■■■■■■■<br />
          14. ■■■■■■■■■■■■■■■■■■<br />
          以上事项无需处理。</p>
        <p>
          16. ■■■■■■■■■■■■■■■<br />
          20. ■■■■■■■■■■■■■■■■■■■■■<br />
        </p>
        <p>本内容请保密。勿大量外传。</p>
`;
    }
}
