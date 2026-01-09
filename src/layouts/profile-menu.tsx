"use client";

import { Title, Text, Avatar, Button, Popover } from "rizzui";
import cn from "@/utils/class-names";
import { routes } from "@/config/routes";
// import { signOut } from 'next-auth/react';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  {
    name: "My Profile",
    href: routes.profile,
  },
  {
    name: "Account Settings",
    href: routes.forms.profileSettings,
  },
  {
    name: "Activity Log",
    href: "#",
  },
];

function DropdownMenu({ user, onLogout }: { user: any; onLogout: () => void }) {
  return (
    <div className="w-64 text-left rtl:text-right">
      <div className="flex items-center border-b border-gray-300 px-6 pb-5 pt-6">
        <Avatar
          src={user?.profilePic || "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-11.webp"}
          name={user?.name || "User"}
        />
        <div className="ms-3">
          <Title as="h6" className="font-semibold">
            {user?.name || "User"}
          </Title>
          <Text className="text-gray-600">{user?.email || "user@example.com"}</Text>
        </div>
      </div>
      <div className="grid px-3.5 py-3.5 font-medium text-gray-700">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group my-0.5 flex items-center rounded-md px-2.5 py-2 hover:bg-gray-100 focus:outline-none hover:dark:bg-gray-50/50"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-300 px-6 pb-6 pt-5">
        <Button
          className="h-auto w-full justify-start p-0 font-medium text-gray-700 outline-none focus-within:text-gray-600 hover:text-gray-900 focus-visible:ring-0"
          variant="text"
          onClick={onLogout}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default function ProfileMenu({
  buttonClassName,
  avatarClassName,
  username = false,
}: {
  buttonClassName?: string;
  avatarClassName?: string;
  username?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Load user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Failed to parse user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
    setIsOpen(false);
    router.push('/');
  };

  // If not logged in, show login button
  if (!isLoggedIn || !user) {
    return (
      <button
        onClick={() => router.push('/landingpage')}
        className="text-sm font-medium text-gray-700 hover:text-gray-900 bg-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
      >
        Login
      </button>
    );
  }

  return (
    <Popover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      shadow="sm"
      placement="bottom-end"
    >
      <Popover.Trigger>
        <button
          className={cn(
            "w-9 shrink-0 rounded-full outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:translate-y-px sm:w-10",
            buttonClassName,
          )}
        >
          <Avatar
            src={user?.profilePic || "https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-11.webp"}
            name={user?.name || "User"}
            className={cn("!h-9 w-9 sm:!h-10 sm:!w-10", avatarClassName)}
          />
          {!!username && (
            <span className="username hidden text-gray-200 md:inline-flex dark:text-gray-700">
              Hi, {user?.name || "User"}
            </span>
          )}
        </button>
      </Popover.Trigger>

      <Popover.Content className="z-[9999] p-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100">
        <DropdownMenu user={user} onLogout={handleLogout} />
      </Popover.Content>
    </Popover>
  );
}
