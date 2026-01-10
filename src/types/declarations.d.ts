// Add module declarations to resolve TypeScript errors
declare module '@/utils/currency' {
  export function formatCurrency(
    amount: number | string,
    locale?: string,
    currency?: string
  ): string;
}

declare module '@/components/ui/checkbox' {
  import { ReactNode } from 'react';

  export interface CheckboxProps {
    label?: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'danger' | 'info' | 'success' | 'warning';
    className?: string;
    error?: string;
    isParent?: boolean;
    id?: string;
    name?: string;
    value?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
  }

  const Checkbox: React.ForwardRefExoticComponent<
    CheckboxProps & React.RefAttributes<HTMLInputElement>
  >;
  export default Checkbox;
}

declare module '@/components/ui/dialog' {
  import { ReactNode } from 'react';

  export interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
  }

  export function Dialog(props: DialogProps): JSX.Element;
}

declare module '@/components/filter-drawer' {
  import { ReactNode } from 'react';

  interface FilterOption {
    id: string;
    title: string;
    options?: Array<{
      name: string;
      value: string;
    }>;
    selected?: any[];
    component?: ReactNode;
    onChange?: (values: any[]) => void;
  }

  interface FilterDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: () => void;
    onClear: () => void;
    filters: FilterOption[];
    className?: string;
  }

  const FilterDrawer: React.FC<FilterDrawerProps>;
  export default FilterDrawer;
}

declare module '@/components/controlled-table' {
  import { TableProps } from 'rizzui';
  import { ReactNode } from 'react';

  interface ControlledTableProps {
    isLoading?: boolean;
    showLoadingText?: boolean;
    filterElement?: ReactNode;
    filterOptions?: ReactNode;
    data: unknown[];
    columns: any[];
    paginatorOptions?: {
      pageSize: number;
      current: number;
      total: number;
      setPageSize?: (pageSize: number) => void; // Added setPageSize property
      onChange?: (pageNumber: number) => void;
    };
    sortConfig?: {
      key: string;
      direction: string;
    };
    checkedItems?: string[];
    handleSelectAll?: (checked: boolean) => void;
    handleRowSelect?: (checked: boolean, id: string) => void;
    onCheckedItemsChange?: (checkedItems: string[]) => void;
    noDataText?: string;
    children?: ReactNode;
    tableLayout?: 'auto' | 'fixed';
    scroll?: { x?: number; y?: number };
    rowKey?: string | ((record: any) => string | number); // Updated to allow function
    variant?: 'modern' | 'classic' | 'minimal' | 'elegant';
    className?: string;
    onPaginate?: (pageNumber: number) => void;
    onSort?: (key: string, direction: string) => void;
    tableFooter?: ReactNode;
  }

  const ControlledTable: React.FC<ControlledTableProps & TableProps>;
  export default ControlledTable;
}
declare module 'react-file-viewer';
