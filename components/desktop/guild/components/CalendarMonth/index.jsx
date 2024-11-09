import React, { memo } from 'react';
import style from 'css/desktop.module.css';

const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}

const CalendarMonth = ({ date, data, onPrevMonth, onNextMonth }) => {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const formattedMonth = String(currentMonth).padStart(2, '0');

    const monthDays = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay();
    const today = new Date();

    const isNextMonthAllowed = currentYear < today.getFullYear() || (currentYear === today.getFullYear() && currentMonth < today.getMonth() + 1);

    // 현재 월의 날짜 배열 생성
    let daysArray = Array.from({ length: monthDays }, (_, i) => i + 1);
    for (let i = 0; i < firstDayOfMonth; i++) {
        daysArray.unshift(null);
    }

    return (
        <>
            <div className={[style.inner, style.scroll_custom].join(' ')}>
                <div className={style.year_btn}>
                    <button type="button" onClick={onPrevMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24">
                            <path id="패스_48055" data-name="패스 48055"
                                  d="M19.765,12l-7.75-7.756L4.234,12H0L12.015,0,24,12Z"
                                  transform="translate(0 24) rotate(-90)"/>
                        </svg>
                    </button>
                    <span className={style.year}>{currentYear}.{formattedMonth}월</span>
                    <button type="button" onClick={onNextMonth} disabled={!isNextMonthAllowed}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24">
                            <path id="패스_48055" data-name="패스 48055"
                                  d="M19.765,12l-7.75-7.756L4.234,12H0L12.015,0,24,12Z"
                                  transform="translate(12) rotate(90)"/>
                        </svg>
                    </button>
                </div>
                <div>
                    <div className={style.calendar}>
                        <table>
                            <caption className={style.sound_only}>달력</caption>
                            <thead>
                            <tr>
                                <th>일</th>
                                <th>월</th>
                                <th>화</th>
                                <th>수</th>
                                <th>목</th>
                                <th>금</th>
                                <th>토</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Array.from({ length: Math.ceil(daysArray.length / 7) }).map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Array.from({ length: 7 }).map((_, colIndex) => {
                                        const currentDay = daysArray[rowIndex * 7 + colIndex];
                                        const formattedDay = String(currentDay).padStart(2, '0');
                                        const ymd = `${currentYear}-${formattedMonth}-${formattedDay}`;

                                        const summary = data[ymd];

                                        return (
                                            <td key={colIndex}>
                                                <div className={[style.day, date === ymd ? style.today : null].join(' ')}>
                                                    {currentDay && <span>{currentDay}</span>}
                                                </div>

                                                {(currentDay && summary) &&
                                                    <>
                                                        <span className={style.num}>{summary.total_count}건</span>
                                                        <span className={style.profit}>{summary.total_amount}</span>
                                                    </>
                                                }
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(CalendarMonth);
