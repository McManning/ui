import React, { useRef, useImperativeHandle } from 'react';
import { DataTable as PDataTable } from 'primereact/datatable';
import Column, { ColumnProps } from './Column';

interface IDataTableComposition {
    Column: React.FC<ColumnProps>;
}

interface DataTableHandles {
    reset(): void;
    exportCSV(): void;
    filter<T>(value: T, field: string, mode: string): void;
    resetColumnOrder(): void;
    closeEditingCell(): void;
}

type Props = {
    id?: string;
    value?: any[];
    header?: any;
    footer?: any;
    style?: object;
    className?: string;
    tableStyle?: object;
    tableClassName?: string;
    paginator?: boolean;
    paginatorPosition?: string;
    alwaysShowPaginator?: boolean;
    paginatorTemplate?: string;
    paginatorLeft?: any;
    paginatorRight?: any;
    pageLinkSize?: number;
    rowsPerPageOptions?: number[];
    currentPageReportTemplate?: string;
    first?: number;
    rows?: number;
    totalRecords?: number;
    lazy?: boolean;
    sortField?: string;
    sortOrder?: number;
    multiSortMeta?: any[];
    sortMode?: string;
    defaultSortOrder?: number;
    removableSort?: boolean;
    emptyMessage?: any;
    selectionMode?: string;
    selection?: any;
    contextMenuSelection?: any;
    compareSelectionBy?: string;
    dataKey?: string;
    metaKeySelection?: boolean;
    headerColumnGroup?: any;
    footerColumnGroup?: any;
    frozenHeaderColumnGroup?: any;
    frozenFooterColumnGroup?: any;
    expandedRows?: any[];
    resizableColumns?: boolean;
    columnResizeMode?: string;
    reorderableColumns?: boolean;
    filters?: object;
    globalFilter?: any;
    filterLocale?: string;
    scrollable?: boolean;
    scrollHeight?: string;
    virtualScroll?: boolean;
    virtualScrollDelay?: number;
    virtualRowHeight?: number;
    frozenWidth?: string;
    frozenValue?: any[];
    csvSeparator?: string;
    exportFilename?: string;
    rowGroupMode?: string;
    autoLayout?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    tabIndex?: string;
    stateKey?: string;
    stateStorage?: string;
    groupField?: string;
    editMode?: string;
    expandableRowGroups?: boolean;
    rowHover?: boolean;
    showSelectionElement?(e: { data: any }): boolean;
    showReorderElement?(e: { data: any }): boolean;
    onSelectionChange?(e: { originalEvent: Event, value: any }): void;
    onContextMenuSelectionChange?(e: { originalEvent: Event, value: any }): void;
    rowExpansionTemplate?(data: any): JSX.Element | undefined;
    onRowToggle?(e: { data: any[] }): void;
    rowClassName?(rowData: any): object;
    rowGroupHeaderTemplate?(data: any, index: number): React.ReactNode | undefined;
    rowGroupFooterTemplate?(data: any, index: number): React.ReactNode | undefined;
    onColumnResizeEnd?(e: { element: HTMLElement, delta: number }): void;
    onSort?(e: { sortField: string, sortOrder: number, multiSortMeta: any }): void;
    onPage?(e: { first: number, rows: number }): void;
    onFilter?(e: { filters: any }): void;
    onVirtualScroll?(e: { first: number, rows: number }): void;
    onRowClick?(e: { originalEvent: Event, data: any, index: number }): void;
    onRowDoubleClick?(e: { originalEvent: Event, data: any, index: number }): void;
    onRowSelect?(e: { originalEvent: Event, data: any, type: string }): void;
    onRowUnselect?(e: { originalEvent: Event, data: any, type: string }): void;
    onRowExpand?(e: { originalEvent: Event, data: any }): void;
    onRowCollapse?(e: { originalEvent: Event, data: any }): void;
    onContextMenu?(e: { originalEvent: Event, data: any }): void;
    onColReorder?(e: { originalEvent: Event, dragIndex: number, dropIndex: number, columns: any }): void;
    onRowReorder?(e: { originalEvent: Event, value: any, dragIndex: number, dropIndex: number }): void;
    onValueChange?(value: any[]): void;
    rowEditorValidator?(rowData: any): boolean;
    onRowEditInit?(e: { originalEvent: Event, data: any, index: number }): void;
    onRowEditSave?(e: { originalEvent: Event, data: any, index: number }): void;
    onRowEditCancel?(e: { originalEvent: Event, data: any, index: number }): void;
    exportFunction?(e: { data: any, field: string }): any;
    customSaveState?(state: any): void;
    customRestoreState?(): any;
    onStateSave?(state: any): void;
    onStateRestore?(state: any): void;
}

const DataTable: React.ForwardRefRenderFunction<DataTableHandles, Props> & IDataTableComposition = (props, ref) => {
    const localRef = useRef<PDataTable | null>(null);

    // Expose PrimeReact DataTable methods to the incoming ref
    useImperativeHandle(ref, (): DataTableHandles => ({
        reset: () => {
            localRef?.current?.reset();
        },
        exportCSV: () => {
            localRef?.current?.exportCSV();
        },
        filter: (value, field, mode) => {
            localRef?.current?.filter(value, field, mode);
        },
        resetColumnOrder: () => {
            localRef?.current?.resetColumnOrder();
        },
        closeEditingCell: () => {
            localRef?.current?.closeEditingCell();
        }
    }), [localRef]);

    return (
        <PDataTable {...props} ref={localRef}>
            {props.children}
        </PDataTable>
    )
}

DataTable.Column = Column;

export default React.forwardRef(DataTable);