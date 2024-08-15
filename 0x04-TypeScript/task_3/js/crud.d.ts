import {RowId, RowElement} from './interface.ts';

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowId): number;
declare function updateRow(rowId, row): number;
