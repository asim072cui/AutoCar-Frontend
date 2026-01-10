'use client';

import { Title, Text, Avatar, Button, Popover } from 'rizzui';
import cn from '@/utils/class-names';
import { routes } from '@/config/routes';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface AuthUser {
  name: string;
  email: string;
  profilePic?: string;
}

const menuItems = [
  { name: 'My Profile', href: routes.profile },
  { name: 'Account Settings', href: routes.forms.profileSettings },
  { name: 'Activity Log', href: '#' },
];

/* ======================
   DROPDOWN MENU
====================== */
function DropdownMenu({
  user,
  onLogout,
}: {
  user: AuthUser;
  onLogout: () => void;
}) {
  return (
    <div className="w-64 text-left rtl:text-right">
      <div className="flex items-center border-b border-gray-300 px-6 pb-5 pt-6">
        <Avatar
          src={
            user.profilePic ||
            'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-11.webp'
          }
          name={user.name}
        />
        <div className="ms-3">
          <Title as="h6" className="font-semibold">
            {user.name}
          </Title>
          <Text className="text-gray-600">{user.email}</Text>
        </div>
      </div>

      <div className="grid px-3.5 py-3.5 font-medium text-gray-700">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="my-0.5 rounded-md px-2.5 py-2 hover:bg-gray-100"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="border-t border-gray-300 px-6 pb-6 pt-5">
        <Button variant="text" onClick={onLogout}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}

/* ======================
   PROFILE MENU
====================== */
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
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsed: AuthUser = JSON.parse(storedUser);
        setUser(parsed);
        setIsLoggedIn(true);
      } catch {
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
    router.push('/');
  };

  if (!isLoggedIn || !user) {
    return (
      <button
        onClick={() => router.push('/landingpage')}
        className="px-4 py-2 text-sm font-medium"
      >
        Login
      </button>
    );
  }

  return (
    <Popover isOpen={isOpen} setIsOpen={setIsOpen} placement="bottom-end">
      <Popover.Trigger>
        <button className={cn('rounded-full', buttonClassName)}>
          <Avatar
            src={
              user.profilePic ||
              'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-11.webp'
            }
            name={user.name}
            className={avatarClassName}
          />
          {username && <span>Hi, {user.name}</span>}
        </button>
      </Popover.Trigger>

      <Popover.Content className="p-0">
        <DropdownMenu user={user} onLogout={handleLogout} />
      </Popover.Content>
    </Popover>
  );
}
