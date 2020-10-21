import React from 'react';
import { TreeTable as PTreeTable } from 'primereact/treetable';
import TreeNode from 'primereact/components/treenode/TreeNode';
import Column, { ColumnProps } from './Column';

interface ITreeTableComposition {
    Column: React.FC<ColumnProps>;
}

type Props = {
    id?: string;
    value?: TreeNode[];
    header?: any;
    footer?: any;
    style?: object;
    className?: string;
    tableStyle?: object;
    tableClassName?: string;
    expandedKeys?: any;
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
    selectionMode?: string;
    selectionKeys?: any;
    contextMenuSelectionKey?: any;
    metaKeySelection?: boolean;
    propagateSelectionUp?: boolean;
    propagateSelectionDown?: boolean;
    autoLayout?: boolean;
    rowClassName?(rowData: any): object;
    loading?: boolean;
    loadingIcon?: string;
    tabIndex?: string;
    scrollable?: boolean;
    scrollHeight?: string;
    reorderableColumns?: boolean;
    headerColumnGroup?: any;
    footerColumnGroup?: any;
    frozenHeaderColumnGroup?: any;
    frozenFooterColumnGroup?: any;
    frozenWidth?: string;
    resizableColumns?: boolean;
    columnResizeMode?: string;
    emptyMessage?: string;
    filters?: object;
    globalFilter?: any;
    filterMode?: string;
    filterLocale?: string;
    onFilter?(filters: any[]): void;
    onExpand?(e: { originalEvent: Event, node: TreeNode }): void;
    onCollapse?(e: { originalEvent: Event, node: TreeNode }): void;
    onToggle?(e: { originalEvent: Event, value: any }): void;
    onPage?(e: { first: number, rows: number }): void;
    onSort?(e: { sortField: string, sortOrder: number, multiSortMeta: any }): void;
    onSelect?(e: { originalEvent: Event, node: TreeNode }): void;
    onUnselect?(e: { originalEvent: Event, node: TreeNode }): void;
    onRowClick?(e: { originalEvent: Event, node: TreeNode }): void;
    onSelectionChange?(e: { originalEvent: Event, value: any }): void;
    onContextMenuSelectionChange?(e: { originalEvent: Event, value: any }): void;
    onColumnResizeEnd?(e: { element: HTMLElement, delta: number }): void;
    onColReorder?(e: { dragIndex: number, dropIndex: number, columns: any }): void;
    onContextMenu?(e: { originalEvent: Event, node: any }): void;
}

const TreeTable: React.ForwardRefRenderFunction<PTreeTable, Props> & ITreeTableComposition = (props, ref) => {
    return <PTreeTable {...props} ref={ref}>
        {props.children}
    </PTreeTable>
}

TreeTable.Column = Column;

export default React.forwardRef(TreeTable);
