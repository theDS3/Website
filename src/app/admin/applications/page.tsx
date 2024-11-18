'use client';

import { useEffect, useState, useCallback } from 'react';
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
} from "@nextui-org/react";
import { env } from '@/env/client.mjs';
import { VerticalDotsIcon } from '@/public/VerticalDotsIcons';


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
  "IN REVIEW": "warning",
  "RECEIVED ACCEPTANCE": "success",
  "ACCEPTED": "success",
  "RECEIVED HACKER PACKAGE": "success",
  "REJECTED": "danger",
};

const appColumns = [
  {
    uid: "name",
    name: "NAME",
  },
  {
    uid: "school",
    name: "SCHOOL",
  },
  {
    uid: "status",
    name: "STATUS",
  },
  {
    uid: "timestamp",
    name: "TIMESTAMP",
  },
  {
    uid: "actions",
    name: "ACTIONS",
  }
];

export default function Applications() {
  const [documents, setDocuments] = useState<{ apps: App[]; total: number }>({
    apps: [],
    total: 0,
  });
  const [filterValue, setFilterValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const hasSearchFilter = Boolean(filterValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllApplications = async () => {
      try {
        const response = await fetch(`/api/admin/apps`, fetchOptions);
        if (response.ok) {
          const applications = await response.json();
          console.log(applications);
          setDocuments(applications);
        } else {
          throw new Error('Failed to fetch applications');
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAllApplications();
  }, []);

  const renderCell = useCallback((app: App, columnKey: string) => {
      const value = app[columnKey as keyof App];
      const cellValue = value instanceof Date ? value.toISOString() : value;

    switch (columnKey) {
      case "name":
        return (
          <User
            description={app.email}
            name={`${app.firstName} ${app.lastName}`}
          >
            {app.email}
          </User>
        );
      case "timestamp":
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
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[app.status]}
            size="md"
            variant={app.status === "RECEIVED HACKER PACKAGE" ? "bordered" : (app.status === "RECEIVED ACCEPTANCE" ? "dot" : "flat")}
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
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
    <main className='relative mt-28 px-7'>
      <h1 className='text-white text-4xl font-bold mb-10'>Datathon Applications</h1>
      <Table 
        aria-label="Application table for datathon participants"
        isHeaderSticky
        classNames={{}}
      >
        <TableHeader>
          {appColumns.map((column) => (
            <TableColumn
              key={column.uid}
              className='text-lg'
              align={column.uid === 'actions' ? 'center' : 'start'}
            >
              {column.name}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody 
          emptyContent={'No applications found'} 
          items={documents.apps}
          isLoading={isLoading}
          loadingContent={<Spinner color="secondary" label="Loading Applications..."/>}
        >
        {(app) => (
          <TableRow key={app._id}>
            {(columnKey) => <TableCell>{renderCell(app, columnKey as string)}</TableCell>}
          </TableRow>
        )}
        </TableBody>
      </Table>
    </main>
  );
}
