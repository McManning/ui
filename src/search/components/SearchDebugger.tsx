
import React, { useState } from "react";
import { Button } from "../..";
import useSearch from "../hooks/useSearch";

import './SearchDebugger.scss';

type Props = {
    /** SearchProvider `id` to attach the debugger to */
    provider: string
}

/**
 * Print out the current state of search data. 
 * 
 * Useful for testing new components and state changes.
 */
const SearchDebugger: React.FC<Props> = ({ provider }) => {
    const [show, setShow] = useState(false);
    const { terms, filters, sort } = useSearch(provider);
    
    return (
        <div className="search-debugger">
            <Button theme="link" onClick={() => setShow(!show)}>
                🧪 Toggle Search Debugger
            </Button>

            {show && 
            <div>
                <strong>Full Text Terms</strong>
                <p>{terms}</p>

                <strong>Filters</strong>
                <pre>
                    {JSON.stringify(filters, undefined, 2)}
                </pre>

                <strong>Sort</strong>
                <pre>
                    {JSON.stringify(sort, undefined, 2)}
                </pre>
            </div>
            }
        </div>
    )
}

export default SearchDebugger;
