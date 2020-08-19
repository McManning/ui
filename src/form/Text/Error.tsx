import React, { useContext } from 'react';
import ErrorCommon from '../../internal/FormCommon/Components/Error';
import { TextContext } from '.';

export type ErrorProps = React.HTMLAttributes<HTMLDivElement> & {

}

export const Error: React.FC<ErrorProps> = (props) => {
    const { bind } = useContext(TextContext);

    if (bind.error) {
        return (
            <ErrorCommon {...props}>
                {props.children ?? bind.error}
            </ErrorCommon>
        );
    }

    return null;
}
