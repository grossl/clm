import * as antd from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';


export function Calendar() {
    const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
      console.log(value.format('YYYY-MM-DD'), mode);
    };
  
    return <antd.Calendar onPanelChange={onPanelChange} />;

  }