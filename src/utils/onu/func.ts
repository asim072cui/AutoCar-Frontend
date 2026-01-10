import { DEFAULT_AVATARS } from '@/constants/avatar';
import { MenuItem, Permission } from '@/types';
import dayjs from 'dayjs';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import {
  format,
  parse,
  isToday,
  isYesterday,
  isThisWeek,
  isThisMonth,
  isThisYear,
} from 'date-fns';
import moment from 'moment';
import toast from 'react-hot-toast';

/* =========================
   MENU FILTER
========================= */
export function filterMenuItems(
  menuItems: MenuItem[],
  permissions: Permission[]
): MenuItem[] {
  return menuItems.reduce<MenuItem[]>((acc, menuItem) => {
    if (menuItem.type === 'public') {
      acc.push(menuItem);
      return acc;
    }

    if (menuItem.dropdownItems) {
      const filtered = menuItem.dropdownItems.filter((item) =>
        permissions.some(
          (permission) =>
            permission.resource === item.resource &&
            (Array.isArray(item.actions)
              ? item.actions.some((a) => permission.actions.includes(a))
              : permission.actions.includes(item.actions ?? ''))
        )
      );

      if (filtered.length) {
        acc.push({ ...menuItem, dropdownItems: filtered });
      }
      return acc;
    }

    if (
      permissions.some(
        (permission) =>
          permission.resource === menuItem.resource &&
          (Array.isArray(menuItem.actions)
            ? menuItem.actions.some((a) => permission.actions.includes(a))
            : permission.actions.includes(menuItem.actions ?? ''))
      )
    ) {
      acc.push(menuItem);
    }

    return acc;
  }, []);
}

/* =========================
   AMOUNT
========================= */
export const formatAmount = (amount: number | string | null | undefined): string => {
  if (amount == null || isNaN(Number(amount)) || Number(amount) === 0) return '-';

  const formatted = Number(amount).toFixed(2);
  const [intPart, decPart] = formatted.split('.');

  return `${intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.${decPart}`;
};

/* =========================
   DATE HELPERS
========================= */
export const formatDateNoTimezone = (
  dateInput: string | Date | null | undefined,
  formatStr = 'YYYY-MM-DD'
): string => {
  if (!dateInput) return '';
  return moment.utc(dateInput).format(formatStr);
};

export const formatDate = (dateStr: string | Date | null): string => {
  if (!dateStr) return 'No Date';
  const date = dayjs(dateStr);
  return `${date.format('MM-DD-YYYY')} at ${date.format('hh:mm A')}`;
};

/* =========================
   PROJECT MODE
========================= */
export function convertAppMode(projectMode?: string) {
  switch (projectMode) {
    case 'process':
      return 'both';
    case 'initiative':
      return 'internal_only';
    case 'external_project':
      return 'construction_only';
    default:
      return null;
  }
}

/* =========================
   ATTACHMENTS
========================= */
interface Attachment {
  revision?: string;
}

export const getLatestRevisions = (attachments: Attachment[] = []): Attachment[] => {
  const revisions = attachments
    .map((a) => Number(a.revision?.replace('Rev.', '')))
    .filter((n) => !isNaN(n));

  if (!revisions.length) return [];

  const max = Math.max(...revisions);
  if (max === 0) return [];

  return attachments.filter(
    (a) => Number(a.revision?.replace('Rev.', '')) === max
  );
};

/* =========================
   MEDIA TYPE
========================= */
export const getSimpleMediaType = (url: string): string | null => {
  if (!url) return null;
  const ext = url.split('.').pop()?.toLowerCase();
  if (!ext) return null;

  const map: Record<string, string> = {
    jpg: 'image',
    jpeg: 'image',
    png: 'image',
    gif: 'image',
    webp: 'image',
    svg: 'image',
    mp4: 'video',
    mov: 'video',
    avi: 'video',
    webm: 'video',
    mp3: 'audio',
    wav: 'audio',
    ogg: 'audio',
    pdf: 'pdf',
    doc: 'document',
    docx: 'document',
    xls: 'document',
    xlsx: 'document',
    csv: 'document',
    txt: 'document',
    ppt: 'document',
    pptx: 'document',
  };

  return map[ext] ?? null;
};

/* =========================
   AVATAR
========================= */
export const getRandomAvatar = (): string =>
  DEFAULT_AVATARS[Math.floor(Math.random() * DEFAULT_AVATARS.length)];

/* =========================
   MESSAGE TYPES
========================= */
export interface Message {
  id?: string;
  _id?: string;
  content: string;
  images?: string[];
  sender: string;
  displayCreatedAt: string;
}

/* =========================
   MESSAGE DATE FORMAT
========================= */
export function formatMessageDate(dateString: string): string {
  try {
    const date = parse(dateString, 'MM-dd-yyyy HH:mm:ss', new Date());

    if (isToday(date)) return 'Today';
    if (isYesterday(date)) return 'Yesterday';
    if (isThisWeek(date)) return format(date, 'EEEE');
    if (isThisMonth(date)) return format(date, 'EEEE, do');
    if (isThisYear(date)) return format(date, 'MMMM do');

    return format(date, 'MMMM do, yyyy');
  } catch {
    return 'Unknown date';
  }
}

/* =========================
   GROUP MESSAGES
========================= */
export const groupMessagesByDate = (
  messages: Message[]
): Record<string, Message[]> => {
  const groups: Record<string, Message[]> = {};

  messages.forEach((msg) => {
    const date = new Date(msg.displayCreatedAt);
    date.setHours(0, 0, 0, 0);

    const label = isToday(date)
      ? 'Today'
      : isYesterday(date)
      ? 'Yesterday'
      : date
          .toLocaleDateString('en-GB')
          .replace(/\//g, '-');

    (groups[label] ||= []).push(msg);
  });

  return groups;
};

/* =========================
   PROJECT TOTAL
========================= */
interface Invoice {
  [key: string]: number | string | null | undefined;
}

interface ProjectRow {
  invoices?: Invoice[];
}

export const calculateProjectTotal = (
  projectRow: ProjectRow,
  field: string
): number => {
  if (!projectRow.invoices) return 0;

  return projectRow.invoices.reduce((sum, inv) => {
    const val = inv[field];
    if (typeof val === 'number') return sum + (isNaN(val) ? 0 : val);
    if (typeof val === 'string') {
      const n = parseFloat(val.replace(/[^0-9.-]/g, ''));
      return sum + (isNaN(n) ? 0 : n);
    }
    return sum;
  }, 0);
};

/* =========================
   PHONE FORMAT
========================= */
export function formatPhoneNumberAuto(phone: string | number | null): string {
  if (!phone) return '';
  const str = phone.toString().replace(/[^\d+]/g, '');

  const parsed = parsePhoneNumberFromString(
    str.startsWith('+') ? str : `+${str}`
  );

  return parsed?.isValid()
    ? parsed.formatInternational()
    : phone.toString();
}

/* =========================
   DOWNLOAD
========================= */
interface MediaItem {
  _id: string;
  mediaId?: {
    url?: string;
    fileName?: string;
  };
}

export const handleSingleDownload = async (
  item: MediaItem,
  setIsDownloading: (id: string | null) => void
) => {
  try {
    setIsDownloading(item._id);
    const link = document.createElement('a');
    link.href = item.mediaId?.url ?? '';
    link.download = item.mediaId?.fileName ?? 'file';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('File downloaded successfully');
  } catch {
    toast.error('Failed to download file');
  } finally {
    setIsDownloading(null);
  }
};
