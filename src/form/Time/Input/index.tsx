import React, { useState, useEffect, useRef, useContext, useCallback } from 'react';
import { Context } from '..';
import { Print } from '../../../internal/FormCommon/Utility';

import { getHourValue, getMinuteValue, getMeridiemValue } from '../helpers';

import HourInput from './HourInput';
import MinutesInput from './MinutesInput';
import MeridiemInput from './MeridiemInput';

import SRDescriptions from './SRDescriptions';

export type InputProps = {
    /** Default time value (optional) - must be an hour:minutes string in 24h format  */
    defaultValue?: string;

    /** Explicit value (optional) - must be an hour:minutes string in 24h format */
    value?: string;

    /** 
     * Callback called when the time is updated. 
     * Returns the time in a 24h format, e.g. `14:05` 
     */
    onChange?: (newValue: string) => void;

    id?: string;
    name?: string;
    className?: string;
    readOnly?: boolean;
    required?: boolean;
    onBlur?: () => void;
}

export const Input: React.FC<InputProps> = (props) => {
    // Most commonly used props
    const { defaultValue, value, onChange } = props;

    const { bind } = useContext(Context);

    const [hour, setHour] = useState<string>(getHourValue(defaultValue));
    const [minutes, setMinutes] = useState<string>(getMinuteValue(defaultValue));
    const [meridiem, setMeridiem] = useState<string>(getMeridiemValue(defaultValue));

    const hourRef = useRef<HTMLInputElement>(null);
    const minutesRef = useRef<HTMLInputElement>(null);
    const meridiemRef = useRef<HTMLInputElement>(null);

    const makeNewTime = useCallback(() => {
        let newTime;
        if (hour && minutes && meridiem) {
            const hourInt = parseInt(hour);
            newTime = (meridiem === 'AM' ? hourInt : (hourInt === 12) ? 12 : hourInt + 12).toString() + ':' + minutes;
        }

        return newTime;
    }, [hour, minutes, meridiem]);

    useEffect(() => {
        const newTime = makeNewTime();

        // Fire onChange handler IFF there's a time and the 
        // time does not differ from the driving `value` prop
        if (hour && minutes && meridiem && newTime && newTime !== value && onChange) {
            onChange(newTime);
        }
    }, [hour, minutes, meridiem, value, onChange, makeNewTime]);

    // Detect when the parent component updates the controlling value
    // and update internal states - without firing onChange
    useEffect(() => {
        if (value) {
            setHour(getHourValue(value));
            setMinutes(getMinuteValue(value))
            setMeridiem(getMeridiemValue(value));
        }
    }, [value]);

    // Select the input text
    const handleClick = (e: React.MouseEvent) => (e.target as HTMLInputElement).select();

    // Callback onBlur when the user exits the component
    // https://gist.github.com/pstoica/4323d3e6e37e8a23dd59
    const handleInternalBlur = (e: React.FocusEvent) => {
        const currentTarget = e.currentTarget;

        // Check the newly focused element in the next tick of the event loop
        setTimeout(() => {
            // Check if the new activeElement is a child of the original container
            if (!currentTarget.contains(document.activeElement)) {
                props.onBlur && props.onBlur();
            }
        }, 0);
    }

    const name = bind.name || props.name;
    const readOnly = bind.readOnly || props.readOnly;
    const required = bind.required || props.required;

    const classNames = `input-group ${props.className ? props.className : ''} ${props.className ? props.className : ''} ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'} ${readOnly ? 'readonly' : ''}`;

    return (
        <div className={classNames}
            onBlur={handleInternalBlur}
        >
            <span className='input-group-prefix'>
                <span className='fa fa-clock-o' aria-hidden='true'></span>
            </span>

            {readOnly &&
                <Print
                    id={props.id || bind.id}
                    name={name}
                    value={hour && minutes && meridiem && `${hour}:${minutes} ${meridiem}`}
                />
            }

            {!readOnly &&
                <div className='form-control'>
                    <HourInput
                        ref={hourRef}
                        id={props.id || bind.id}
                        hour={hour}
                        setHour={setHour}
                        setMeridiem={setMeridiem}
                        handleClick={handleClick}
                        minutesRef={minutesRef}
                        meridiemRef={meridiemRef}
                        readOnly={readOnly}
                        required={required}
                        invalid={bind.error ? true : false}
                    />

                    <span>:</span>

                    <MinutesInput
                        ref={minutesRef}
                        id={props.id || bind.id}
                        minutes={minutes}
                        setMinutes={setMinutes}
                        handleClick={handleClick}
                        hourRef={hourRef}
                        meridiemRef={meridiemRef}
                        readOnly={readOnly}
                        required={required}
                        invalid={bind.error ? true : false}
                    />

                    <MeridiemInput
                        ref={meridiemRef}
                        id={props.id || bind.id}
                        meridiem={meridiem}
                        setMeridiem={setMeridiem}
                        handleClick={handleClick}
                        hourRef={hourRef}
                        minutesRef={minutesRef}
                        readOnly={readOnly}
                        required={required}
                        invalid={bind.error ? true : false}
                    />
                </div>
            }

            <SRDescriptions
                readOnly={readOnly}
                id={props.id || bind.id}
                hour={hour}
                minutes={minutes}
                meridiem={meridiem}
            />
        </div>
    )
};
