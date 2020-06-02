
import React, { useState, useEffect, useCallback } from 'react';

// @ts-ignore
import RDatePicker from 'react-datepicker';
import TimeField from '../TimeField';

export interface Props {
    /**
     * Default value
     */
    defaultValue?: Date;

    /**
     * onChange handler (required) - a state setter for the parent component
     */
    onChange: (date: Date) => Function;

    /**
     * Apply a filter function to disallow certain dates
     */
    filterDate?(date: Date): boolean;

    /**
     * Minimum selectable date
     */
    minDate?: Date;

    /**
     * Maximum selectable date
     */
    maxDate?: Date;

    /**
     * Disable field
     */
    disabled?: boolean;
}

/**
 * Provides a date picker and time input for a datetime field.
 *
 * This is a wrapper around [react-datepicker](https://reactdatepicker.com) and [TimeField](#timefield).
 * 
 * For Date-only fields, use [DatePicker](#datepicker).
 * For Time-only fields, use [TimeField](#timefield).
 */
const DateTimePicker: React.FC<Props> = ({ defaultValue, onChange, filterDate, minDate, maxDate, disabled }) => {
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        setDate(defaultValue);
    }, [defaultValue]);

    const handleChange = (newDate: Date) => {
        setDate(newDate);
        onChange(newDate);
    }

    const TimeFieldWrapper = ({ value, onChange }) => {
        return (
            /**
             * This needs fixed - the onChange function passed in here
             * repeatedly calls setState in the react-datepicker inputTime
             * component, which causes the app to crash. I'm probably 
             * missing something really obvious; I just can't figure it out.
             * See https://github.com/Hacker0x01/react-datepicker/blob/master/src/inputTime.jsx#L20
             */
            <TimeField
                label="Time:"
                inline
                defaultValue={value}
                onChange={onChange}
            />
        )
    };

    return (
        <div className="input-group datetimepicker">
            <span className="input-group-prefix">
                <i className='fa fa-calendar-o' aria-hidden="true"></i>
                <i className='fa fa-clock-o' aria-hidden="true"></i>
            </span>

            <RDatePicker
                selected={date}
                className='form-control datetime'
                onChange={handleChange}
                filterDate={filterDate}
                minDate={minDate}
                maxDate={maxDate}
                timeInputLabel=""
                showTimeInput
                customTimeInput={<TimeFieldWrapper />}
                dateFormat='MM/dd/yyyy h:mm aa'
                disabled={disabled}
            />
        </div>
    );
}

export default DateTimePicker;
