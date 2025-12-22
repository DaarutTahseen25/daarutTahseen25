import * as React from "react";

const Table = React.forwardRef(({ className = "", ...props }, ref) => (
  <div className="relative w-full overflow-x-auto">
    <div className="inline-block min-w-full align-middle">
      <table
        ref={ref}
        className={`w-full caption-bottom text-sm ${className}`}
        {...props}
      />
    </div>
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef(({ className = "", ...props }, ref) => (
  <thead
    ref={ref}
    className={`border-b border-gray-200 ${className}`}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef(({ className = "", ...props }, ref) => (
  <tbody
    ref={ref}
    className={`divide-y divide-gray-200 ${className}`}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef(({ className = "", ...props }, ref) => (
  <tfoot
    ref={ref}
    className={`border-t border-gray-200 bg-gray-50 ${className}`}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef(({ className = "", ...props }, ref) => (
  <tr
    ref={ref}
    className={`transition-colors hover:bg-gray-50/50 
    [&>td:first-child]:pl-3 md:[&>td:first-child]:pl-6 
    [&>th:first-child]:pl-3 md:[&>th:first-child]:pl-6 
    [&>td:last-child]:pr-3 md:[&>td:last-child]:pr-6 
    [&>th:last-child]:pr-3 md:[&>th:last-child]:pr-6 
    ${className}`}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef(({ className = "", ...props }, ref) => (
  <th
    ref={ref}
    className={`h-11 px-3 md:px-6 text-left align-middle font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap ${className}`}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef(({ className = "", ...props }, ref) => (
  <td
    ref={ref}
    className={`px-3 md:px-6 py-3 md:py-4 align-middle text-gray-700 text-xs md:text-sm ${className}`}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
};
