import React, { Context } from 'react';
import { IFilter, SearchTerms, SearchOffset, SearchLimit, SortFields } from '.';
/** A set of common states shared by search components */
export interface ISearchContext<TResponse> {
    /** Read-only copy of the current search terms */
    terms: SearchTerms;
    /** Read-only copy of current search filters */
    filters: IFilter[];
    /** Current sort rules */
    sort: SortFields | undefined;
    /** Current search offset */
    offset: SearchOffset;
    /** Current search limit */
    limit: SearchLimit;
    /** Search is being executed */
    searching: boolean;
    /** Response from search. Structure depends on the backend. */
    response?: TResponse;
    /** Error */
    error?: string;
    /** Ref of the div that wraps around the children of the SearchProvider */
    ref: React.RefObject<HTMLDivElement>;
    /** Update search terms */
    setTerms(value: SearchTerms): void;
    /** Update sort rules */
    setSort(sort: SortFields | undefined): void;
    addFilter(filter: IFilter): void;
    /** Get a filter by name, returning defaultValue if it isn't set */
    getFilter<T extends IFilter>(name: string, defaultValue?: T): T | undefined;
    /** Check if a filter with the given name exists */
    hasFilter(name: string): boolean;
    /** Delete a filter with the given name */
    deleteFilter(name: string): void;
    /** Replace the whole set of search filters with a new set */
    replaceFilters(filters: IFilter[]): void;
    /** Update the search offset */
    setOffset(offset: SearchOffset): void;
    /** Update the search limit */
    setLimit(limit: SearchLimit): void;
    /** Set searching state */
    setSearching(searching: boolean): void;
    /** Set response payload */
    setResponse(results?: TResponse): void;
    /** Set error */
    setError(error?: string): void;
}
/** Shorthand for typing a React Context storing search data */
export declare type SearchContext<TResponse> = Context<ISearchContext<TResponse>>;
/**
 * Create a new dynamic SearchContext tied to a named provider
 */
export declare function initDynamicContext<TResponse>(provider: string, data: ISearchContext<TResponse>): SearchContext<TResponse>;
/**
 * Destroy a dynamic SearchContext by name
 */
export declare function destroyDynamicContext(provider: string): void;
/**
 * Get a dynamic SearchContext tied to a named provider.
 *
 * @throws {Error} if the provider is not yet registered through a SearchProvider component
 */
export declare function getDynamicContext<TResponse>(provider: string): SearchContext<TResponse>;
//# sourceMappingURL=SearchContext.d.ts.map