import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// onChange prop의 타입을 정의합니다.
interface DatepickerComponentProps {
  value: Date | null; // 선택된 날짜 상태
  onChange: (date: Date | null) => void; // 날짜 변경 핸들러
}

const DatepickerComponent: React.FC<DatepickerComponentProps> = ({
  value,
  onChange,
}) => {
  return (
    <DatePicker
      className="rounded-md border border-gray-300 p-2 transition-all hover:border-gray-400"
      selected={value || new Date()}
      onChange={onChange}
      minDate={new Date()}
      dateFormat="yyyy년 MM월 dd일"
    />
  );
};

export default DatepickerComponent;
