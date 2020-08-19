import React from 'react';
import { NullFieldBind, IFieldBind, FormFieldProps } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { Input, InputProps } from './Input';
import { Label, LabelProps } from './Label';
import { Help, HelpProps } from './Help';
import { Success, SuccessProps } from './Success';
import { Error, ErrorProps } from './Error';

type Props = FormFieldProps<boolean> & {
    // Add your other top level props here.
    // foo: number
}

interface ICheckboxComposition {
    Label: React.FC<LabelProps>
    Help: React.FC<HelpProps>
    Input: React.FC<InputProps>
    Error: React.FC<ErrorProps>
    Success: React.FC<SuccessProps>
}

interface ICheckboxContext {
    bind: IFieldBind<boolean>

    // Add your other props  here that should be made available to consumers
    // foo: number
}

export const CheckboxContext = React.createContext<ICheckboxContext>({
    bind: new NullFieldBind<boolean>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

/**
 * A single checkbox and label
 * 
 * ### Subcomponents
 * 
 * * `Checkbox.Input` (required) – Input field for the `Checkbox`. 
 *  * **Props** – Accepts [`checkbox` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox), React event handler attributes, and all common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
 * * `Checkbox.Label` (required) - Label for the `Checkbox`
 *  * **Props** – Accepts [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).
 * * `Checkbox.Help` – Help text for the `Checkbox`
 * * `Checkbox.Error` (required if `Checkbox` requires validation) – Provides instructions on how to resolve the validation error; will display when `error` is set in `Checkbox`
 * * `Checkbox.Success` – Feedback for when the set meets the validation rules; will display when `success` is set in `Checkbox`
 * 
 */
const Checkbox: React.FC<Props> & ICheckboxComposition = ({
    children,
    ...props // everything else is of FormFieldProps<string>
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <CheckboxContext.Provider value={{ bind }}>
            <div className='custom-control custom-checkbox'>
                {children}
            </div>
        </CheckboxContext.Provider>
    )
}

Checkbox.Input = Input;
Checkbox.Label = Label;
Checkbox.Help = Help;
Checkbox.Success = Success;
Checkbox.Error = Error;

export default Checkbox;

// Compound Component pattern adapted from https://blog.martindidiego.com/compound-components-typescript/