"use client";

import { ReactElement, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Popover, Title, Badge, Checkbox } from "rizzui";
import TruckSolidIcon from "@/components/icons/truck-solid";
import BrushSolidIcon from "@/components/icons/brush-solid";
import CubeSolidIcon from "@/components/icons/cube-solid";
import FileStackIcon from "@/components/icons/file-stack";
import CloudTaskIcon from "@/components/icons/cloud-task";
import ShoppingBagSolidIcon from "@/components/icons/shopping-bag-solid";
import BulbSolidIcon from "@/components/icons/bulb-solid";
import ParcelMapIcon from "@/components/icons/parcel-map";
import Link from "next/link";
import { useMedia } from "@/hooks/use-media";
import SimpleBar from "@/components/ui/simplebar";
import { PiCheck } from "react-icons/pi";

dayjs.extend(relativeTime);

type NotificationItem = {
  id?: number;
  name: string;
  icon: ReactElement;
  unRead: boolean;
  sendTime: string;
};

const data: NotificationItem[] = [
  {
    id: 1,
    name: "Invitation for crafting engaging designs",
    icon: <BrushSolidIcon />,
    unRead: true,
    sendTime: "2023-06-01T09:35:31.820Z",
  },
  {
    id: 2,
    name: "Isomorphic dashboard redesign",
    icon: <CubeSolidIcon />,
    unRead: true,
    sendTime: "2023-05-30T09:35:31.820Z",
  },
  {
    id: 3,
    name: "3 New Incoming Project Files:",
    icon: <FileStackIcon />,
    unRead: false,
    sendTime: "2023-06-01T09:35:31.820Z",
  },
  {
    id: 4,
    name: "Swornak purchased isomorphic",
    icon: <ShoppingBagSolidIcon />,
    unRead: false,
    sendTime: "2023-05-21T09:35:31.820Z",
  },
  {
    id: 5,
    name: "Task #45890 merged with #45890 in Ads Pro Admin Dashboard",
    icon: <CloudTaskIcon />,
    unRead: true,
    sendTime: "2023-06-01T09:35:31.820Z",
  },
  {
    id: 6,
    name: "3 new application design concepts added",
    icon: <BulbSolidIcon />,
    unRead: true,
    sendTime: "2023-05-15T09:35:31.820Z",
  },
  {
    id: 7,
    name: "Your order has been placed",
    icon: <ParcelMapIcon />,
    unRead: false,
    sendTime: "2023-05-16T09:35:31.820Z",
  },
  {
    name: "Order has been shipped to #123221",
    icon: <TruckSolidIcon />,
    unRead: false,
    sendTime: "2023-05-01T09:35:31.820Z",
  },
];

type NotificationsListProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NotificationsList({ setIsOpen }: NotificationsListProps) {
  return (
    <div className="w-[320px] text-left sm:w-[360px] 2xl:w-[420px] rtl:text-right">
      <div className="mb-3 flex items-center justify-between ps-6">
        <Title as="h5">Notifications</Title>
        <Checkbox label="Mark All As Read" />
      </div>

      <SimpleBar className="max-h-[420px]">
        <div className="grid cursor-pointer grid-cols-1 gap-1 ps-4">
          {data.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-md px-2 py-2 pe-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded bg-gray-100/70 p-1 dark:bg-gray-50/50 [&>svg]:w-5">
                {item.icon}
              </div>

              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center">
                <div>
                  <Title
                    as="h6"
                    className="mb-0.5 w-11/12 truncate text-sm font-semibold"
                  >
                    {item.name}
                  </Title>
                  <span className="text-xs text-gray-500">
                    {dayjs(item.sendTime).fromNow(true)}
                  </span>
                </div>

                <div className="ms-auto">
                  {item.unRead ? (
                    <Badge renderAsDot size="lg" color="primary" />
                  ) : (
                    <span className="inline-block rounded-full bg-gray-100 p-0.5">
                      <PiCheck className="w-[9px]" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SimpleBar>

      <Link
        href="#"
        onClick={() => setIsOpen(false)}
        className="block px-6 pt-3 text-center hover:underline"
      >
        View All Activity
      </Link>
    </div>
  );
}

export default function NotificationDropdown({
  children,
}: {
  children: ReactElement;
}) {
  const isMobile = useMedia("(max-width: 480px)", false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      shadow="sm"
      placement={isMobile ? "bottom" : "bottom-end"}
    >
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content className="z-[9999] px-0 pb-4 pe-6 pt-5 dark:bg-gray-100">
        <NotificationsList setIsOpen={setIsOpen} />
      </Popover.Content>
    </Popover>
  );
}
