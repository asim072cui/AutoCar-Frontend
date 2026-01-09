'use client';

import {
  Checkbox,
  Title,
  Text,
  Badge,
  Avatar,
  Dropdown,
  Tooltip,
} from 'rizzui';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';
import { IoPencil } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { RiSendPlaneLine } from 'react-icons/ri';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { LuArchive } from 'react-icons/lu';
import { createColumnHelper } from '@tanstack/react-table';
import moment from 'moment';
import { formatDateNoTimezone } from '@/utils/onu/func';


interface TableMeta {
  handleEdit?: (rows: any[]) => void;
  handleView?: (row: any, index: any) => void;
  handleSingleDeleteRow?: (id: string) => void;
  handleCommentShow?: (row: any) => void;
  onfavouriteChange?: (id: string) => void;
  getIsFavourite?: (id: string) => boolean;
}

const columnHelper = createColumnHelper<any>();
  const handleView = (row: any, index: any) => {

    {
          table.options?.meta?.handleView &&
            table.options?.meta?.handleView(row, index);
     }
      };
    export const defaultColumns = [

  columnHelper.accessor('select', {
    id: 'select',
    header: ({ table }: any) => (
      <div className="flex items-center">
       <Checkbox
          className=""
          inputClassName={` w-4 h-4 dark:border  dark:border-white `}
          iconClassName="font-bold text-sm h-4 w-4 mx-auto stroke-current stroke-[2px]"
          aria-label="Select all rows"
          checked={table.getIsAllPageRowsSelected()}
          onChange={() => table.toggleAllPageRowsSelected()}
        />
      </div>
    ),
    cell: ({ row , index }: any) => (
      <div className="flex items-center gap-2">
        <Checkbox
          aria-label="Select row"
          inputClassName={` w-4 h-4 dark:border  dark:border-white `}
          iconClassName="font-bold text-sm h-4 w-4 mx-auto stroke-current stroke-[2px]"
          checked={row.getIsSelected()}
          onChange={() => row.toggleSelected()}
        />
        <Dropdown placement="bottom-start">
          <Dropdown.Trigger>
            <BsThreeDots
              size={16}
              className="text-gray-500 cursor-pointer hover:text-primary"
            />
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <div
                  className="mb-2 cursor-pointer pt-2"
                  onClick={() => handleView(row.original, index)}
                >
                  <Dropdown.Item>
                    <FaRegEye className="mr-2 h-4 w-4" />
                    View
                  </Dropdown.Item>
                </div>
            <Dropdown.Item>
              <HiOutlineArchiveBox className="mr-2 h-4 w-4" /> Archive
            </Dropdown.Item>
            <Dropdown.Item>
              <MdDeleteOutline className="mr-2 h-4 w-4 text-red-500" />
              <span className="text-red-500">Delete</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    ),
    enableSorting: false,
    size: 80,
  }),

  // === User Column ===
  columnHelper.accessor('User', {
    id: 'user',
    header: 'Contact',
    size: 250,
    cell: (info) => {
      const user = info?.row?.original || {};
      return (
        <div className="flex items-center">
          <Avatar
            src={user?.profilePicture || '/Avatar/avatar1.jpg'}
            name={user?.fullName || 'User Avatar'}
            className="h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-gray-100 object-cover shadow-xl"
          />
          <div className="ml-3">
            <Title
              as="h6"
              className="mb-0.5 line-clamp-1 text-sm font-medium"
            >
              {user?.fullName}
            </Title>
            <Text className="text-xs text-gray-500">{user?.email}</Text>
          </div>
        </div>
      );
    },
    enableSorting: false,
  }),

  // === Role Column ===
  columnHelper.accessor('Role', {
    id: 'role',
    header: 'Role',
    size: 100,
    cell: (info) => <Text>{info?.row?.original?.role}</Text>,
    enableSorting: false,
  }),

  // === Last Activity Column (Optional Example) ===
  columnHelper.accessor('LastActivity', {
    id: 'lastActivity',
    header: 'Last Activity',
    size: 180,
    cell: (info) => {
      const last = info?.row?.original?.createdAt || null;
      if (!last) return <Text className="text-xs text-gray-400">—</Text>;
      return (
        <Text className="text-xs text-gray-600">
          {moment(last).fromNow()} <br />
          <span className="text-[11px] text-gray-400">
            {formatDateNoTimezone(last, 'MMM DD, YYYY hh:mm A')}
          </span>
        </Text>
      );
    },
    enableSorting: false,
  }),
];
