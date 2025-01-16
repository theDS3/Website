'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { Key } from '@react-types/shared';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Spinner,
  Pagination,
  Divider,
} from '@nextui-org/react';
import { env } from '@/env/client.mjs';
import { VerticalDotsIcon } from '@/public/VerticalDotsIcons';
import { SearchIcon } from '@/public/SearchIcon';
import { ChevronDownIcon } from '@/public/ChevronDownIcon';
import { PlusIcon } from '@/public/PlusIcon';

const fetchOptions = {
  headers: {
    'Content-Type': 'application/json',
    'ds3-secret': env.NEXT_PUBLIC_VALIDATION_SECRET,
  },
};

interface App {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const statusColorMap: { [key: string]: any } = {
  'IN REVIEW': 'warning',
  'RECEIVED ACCEPTANCE': 'success',
  ACCEPTED: 'success',
  'RECEIVED HACKER PACKAGE': 'success',
  REJECTED: 'danger',
};

const statusOptions = [
  {
    uid: 'in review',
    name: 'IN REVIEW',
  },
  {
    uid: 'received acceptance',
    name: 'RECEIVED ACCEPTANCE',
  },
  {
    uid: 'accepted',
    name: 'ACCEPTED',
  },
  {
    uid: 'received hacker package',
    name: 'RECEIVED HACKER PACKAGE',
  },
  {
    uid: 'rejected',
    name: 'REJECTED',
  },
];

const appColumns = [
  {
    uid: 'name',
    name: 'NAME',
  },
  {
    uid: 'school',
    name: 'SCHOOL',
  },
  {
    uid: 'status',
    name: 'STATUS',
  },
  {
    uid: 'timestamp',
    name: 'TIMESTAMP',
  },
  {
    uid: 'actions',
    name: 'ACTIONS',
  },
];

export default function Applications() {
  const [documents, setDocuments] = useState<{ apps: App[]; total: number }>({
    apps: [],
    total: 0,
  });
  const [filterValue, setFilterValue] = useState('');
  const [statusFilter, setStatusFilter] = useState<
    'all' | Iterable<Key> | undefined
  >('all');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const hasSearchFilter = Boolean(filterValue);

  useEffect(() => {
    const getAllApplications = async () => {
      try {
        const response = await fetch(`/api/admin/apps`, fetchOptions);
        if (response.ok) {
          const applications = await response.json();
          setDocuments(applications);
          setIsLoading(false);
        } else {
          throw new Error('Failed to fetch applications');
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAllApplications();
  }, [documents]);

  const changeStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/apps`, {
        method: 'PATCH',
        headers: {
          ...fetchOptions.headers,
        },
        body: JSON.stringify({ participantId: id, newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      // Update local state after the API call, think need to change
      setDocuments((prev) => ({
        ...prev,
        apps: prev.apps.map((app) =>
          app._id === id ? { ...app, status: newStatus } : app,
        ),
      }));
      console.log(`Status updated to ${newStatus}`);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  /*
  Generic emailing function

  @param {string} emailType - for which email template to use
  @param {string[]} emails - list of emails to send
  */
  async function sendEmail(
    emailType: string,
    emails: string[],
  ): Promise<string> {
    try {
      const response = await fetch(`/api/participant/emails/${emailType}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emails }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `Failed to send ${emailType} emails`);
      }

      const results = await response.json();
      console.log(`Results for ${emailType} emails:`, results);
      return `${emailType.charAt(0).toUpperCase() + emailType.slice(1)} emails sent successfully!`;
    } catch (err: any) {
      console.error(`Error sending ${emailType} emails:`, err);
      throw new Error(
        `Network error while sending ${emailType} emails. Please try again.`,
      );
    }
  }

  // Handle acceptance emails
  const HandleAcceptedEmails = async () => {
    const acceptedEmails = documents.apps
      .filter((app) => app.status === 'ACCEPTED')
      .map((app) => app.email);

    if (acceptedEmails.length === 0) {
      console.log('No accepted emails to send.');
      return;
    }

    try {
      const result = await sendEmail('acceptance', acceptedEmails);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle package emails
  const HandlePackageEmails = async () => {
    const packageEmails = documents.apps
      .filter((app) => app.status === 'RECEIVED ACCEPTANCE')
      .map((app) => app.email);

    if (packageEmails.length === 0) {
      console.log('No package emails to send.');
      return;
    }

    try {
      const result = await sendEmail('hacker-package', packageEmails);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredItems = useMemo(() => {
    let filteredApps = [...documents.apps];

    if (hasSearchFilter) {
      filteredApps = filteredApps.filter((app) =>
        app.email.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    if (
      statusFilter !== 'all' &&
      statusFilter &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredApps = filteredApps.filter((app) =>
        Array.from(statusFilter).includes(app.status.toLowerCase()),
      );
    }

    return filteredApps;
  }, [documents.apps, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e: any) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue('');
    setPage(1);
  }, []);

  const tableOperationsContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by email..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={onClear}
            onValueChange={onSearchChange}
          />

          <div className="flex gap-3">
            <Button
              color="secondary"
              onPress={() => HandleAcceptedEmails()}>
              Send Acceptance Emails
            </Button>
            <Button
              color="secondary"
              onPress={() => HandlePackageEmails()}>
              Send Packages
            </Button>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Status Filter"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}>
                {statusOptions.map((status) => (
                  <DropdownItem
                    key={status.uid}
                    className="capitalize">
                    {status.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              color="primary"
              endContent={<PlusIcon />}>
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {documents.apps.length} users
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent justify-end outline-none px-1 text-default-400 text-small"
              onChange={onRowsPerPageChange}
              defaultValue={rowsPerPage}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    onRowsPerPageChange,
    documents.apps.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const tablePaginationContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}>
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  const renderCell = useCallback((app: App, columnKey: string) => {
    const value = app[columnKey as keyof App];
    const cellValue = value instanceof Date ? value.toISOString() : value;

    switch (columnKey) {
      case 'name':
        return (
          <User
            description={app.email}
            name={`${app.firstName} ${app.lastName}`}>
            {app.email}
          </User>
        );
      case 'timestamp':
        return (
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Created At:</span>
              <span className="border px-2 mx-1 py-1 rounded-2xl border-gray-300 bg-stone-900 inline-block max-w-max">
                {new Date(app.createdAt).toLocaleDateString('en-GB')}
                {`  ${new Date(app.createdAt).toLocaleTimeString('en-GB', { hour12: false })}`}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-semibold">Updated At:</span>
              <span className="border px-2 mx-1 py-1 rounded-2xl border-gray-300 bg-stone-900 inline-block max-w-max">
                {new Date(app.updatedAt).toLocaleDateString('en-GB')}
                {`  ${new Date(app.updatedAt).toLocaleTimeString('en-GB', { hour12: false })}`}
              </span>
            </div>
          </div>
        );
      case 'status':
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[app.status]}
            size="md"
            variant={
              app.status === 'RECEIVED HACKER PACKAGE'
                ? 'bordered'
                : app.status === 'RECEIVED ACCEPTANCE'
                  ? 'dot'
                  : 'flat'
            }>
            {cellValue}
          </Chip>
        );
      case 'actions':
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onPress={() => changeStatus(app.id, 'ACCEPTED')}>
                  Accept
                </DropdownItem>
                <DropdownItem onPress={() => changeStatus(app.id, 'IN REVIEW')}>
                  Reject
                </DropdownItem>
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <main className="relative mt-28 px-7 py-3">
      <h1 className="text-white text-4xl font-bold mb-10">
        Datathon Applications
      </h1>
      <Table
        aria-label="Application table for datathon participants"
        isHeaderSticky
        bottomContent={tablePaginationContent}
        bottomContentPlacement="outside"
        topContent={tableOperationsContent}
        topContentPlacement="outside">
        <TableHeader columns={appColumns}>
          {appColumns.map((column) => (
            <TableColumn
              key={column.uid}
              className="text-lg"
              align={column.uid === 'actions' ? 'center' : 'start'}>
              {column.name}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody
          emptyContent={'No applications found'}
          items={items}
          isLoading={isLoading}
          loadingContent={
            <Spinner
              color="secondary"
              label="Loading Applications..."
            />
          }>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey as string)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </main>
  );
}
