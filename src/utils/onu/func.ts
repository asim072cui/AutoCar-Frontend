import { DEFAULT_AVATARS } from '@/constants/avatar';
import { MenuItem, Permission } from '@/types';
import dayjs from 'dayjs';
import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js';

export function filterMenuItems(
  menuItems: MenuItem[],
  permissions: Permission[]
): MenuItem[] {
  const filteredMenuItems: MenuItem[] = [];

  menuItems.forEach((menuItem) => {
    if (menuItem.type === 'public') {
      filteredMenuItems.push(menuItem);
    } else {
      if (menuItem.dropdownItems) {
        const filteredDropdownItems = menuItem.dropdownItems.filter(
          (dropDownItem) => {
            return permissions.some((permission) => {
              return (
                permission.resource === dropDownItem.resource &&
                (Array.isArray(dropDownItem.actions)
                  ? dropDownItem.actions.some((action) =>
                      permission.actions.includes(action)
                    )
                  : permission.actions.includes(dropDownItem?.actions || ''))
              );
            });
          }
        );
        if (filteredDropdownItems.length > 0) {
          filteredMenuItems.push({
            ...menuItem,
            dropdownItems: filteredDropdownItems,
          });
        }
      } else {
        if (
          permissions.some((permission) => {
            return (
              permission.resource === menuItem.resource &&
              (Array.isArray(menuItem.actions)
                ? menuItem.actions.some((action) =>
                    permission.actions.includes(action)
                  )
                : permission.actions.includes(menuItem?.actions || ''))
            );
          })
        ) {
          filteredMenuItems.push(menuItem);
        }
      }
    }
  });

  return filteredMenuItems;
}

export const formatAmount = (amount: any) => {
  if (amount == null || isNaN(Number(amount))) return '-';
  let formatedAmount = amount;

  // const usdFormat = new Intl.NumberFormat('en-Us',{
  //   style:'currency',
  //   // currency: 'USD'
  // })

  // return usdFormat.format(amount)

  // let formatedAmount = Math.ceil(Number(amount));
  if (Number(formatedAmount) === 0) return '-';

  formatedAmount = Number(formatedAmount).toFixed(2);
  let [integerPart, decimalPart] = formatedAmount?.toString()?.split('.');

  integerPart = integerPart?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (!decimalPart) {
    decimalPart = '00';
  } else {
    decimalPart = decimalPart?.padEnd(2, '0');
  }

  return integerPart + '.' + decimalPart;
};

export const formatDateNoTimezone = (dateInput: any, format = 'YYYY-MM-DD') => {
  if (!dateInput) return '';
  return moment.utc(dateInput).format(format);
};

export const formatDate = (dateStr: any) => {
  if (!dateStr) return 'No Date';
  const date = dayjs(dateStr);
  const formattedDate = date.format('MM-DD-YYYY');
  const formattedTime = date.format('hh:mm A');
  return `${formattedDate} at ${formattedTime}`;
};

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

export const getLatestRevisions = (attachments: any[] = []) => {
  const revisionNumbers: any = attachments
    .map((item) => {
      const revNum = item.revision?.replace('Rev.', '');
      return isNaN(Number(revNum)) ? null : Number(revNum);
    })
    .filter((num) => num !== null);
  if (revisionNumbers.length === 0) return [];
  const maxRevision = Math.max(...revisionNumbers);
  if (maxRevision === 0) {
    return [];
  }
  return attachments.filter(
    (item) => Number(item.revision?.replace('Rev.', '')) === maxRevision
  );
};

export const getSimpleMediaType = (url: string): string | null => {
  if (!url) return null;
  const extension = url?.split('.').pop()?.toLowerCase();

  if (!extension) return null;

  const typeMap: Record<string, string> = {
    // Images
    jpg: 'image',
    jpeg: 'image',
    png: 'image',
    gif: 'image',
    webp: 'image',
    svg: 'image',

    // Videos
    mp4: 'video',
    mov: 'video',
    avi: 'video',
    webm: 'video',
    mkv: 'video',

    // Audio
    mp3: 'audio',
    wav: 'audio',
    ogg: 'audio',

    // Documents
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

  return typeMap[extension] || null;
};

export function getRandomAvatar(): string {
  const randomIndex = Math.floor(Math.random() * DEFAULT_AVATARS.length);
  return DEFAULT_AVATARS[randomIndex];
}
import {
  format,
  parseISO,
  parse,
  isToday,
  isYesterday,
  isThisWeek,
  isThisMonth,
  isThisYear,
} from 'date-fns';
import moment from 'moment';
// import { getBatchDownloadUrls, getSignedS3Url } from '@/apis/user';
import toast from 'react-hot-toast';
export interface Message {
  id?: string;
  _id?: string;
  content: string;
  images?: string[];
  sender: string;
  displayCreatedAt: string;
  conversationId?: string;
  edited?: boolean;
  read?: boolean;
  readAt?: string;
  reactions?: string[];
  triggerIntent?: string;
  msgType?: string;
  carouselData?: any;
  buttons?: any;
  message?: any;
}
/**
 * Formats a date for display in a user-friendly way
 * @param dateString ISO date string
 * @returns Formatted date string with relative terms when appropriate
 */
export function formatMessageDate(dateString: string): string {
  try {
    // const date = parseISO(dateString);
    const date = parse(dateString, 'MM-dd-yyyy HH:mm:ss', new Date());
    // Use more user-friendly relative terms for recent dates
    if (isToday(date)) {
      return 'Today';
    } else if (isYesterday(date)) {
      return 'Yesterday';
    } else if (isThisWeek(date)) {
      // For this week, show the day name
      return format(date, 'EEEE'); // e.g., "Monday", "Tuesday"
    } else if (isThisMonth(date)) {
      // For this month, show day and date
      return format(date, 'EEEE, do'); // e.g., "Monday, 15th"
    } else if (isThisYear(date)) {
      // For this year, show month and day
      return format(date, 'MMMM do'); // e.g., "April 15th"
    } else {
      // For older dates, show the full date
      return format(date, 'MMMM do, yyyy'); // e.g., "April 15th, 2022"
    }
  } catch (error) {
    console.error('Error formatting message date:', error);
    return 'Unknown date';
  }
}
/**
 * Groups messages by date for better display with user-friendly date labels
 * @param messages Array of messages
 * @returns Object with user-friendly date labels as keys and arrays of messages as values
 */

// export const groupMessagesByDate = (messages: any[]) => {
//   const groups: { [key: string]: any[] } = {};
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
//   const yesterday = new Date(today);
//   yesterday.setDate(yesterday.getDate() - 1);

//   messages.forEach((message) => {
//     let date;
//     const apiDate = message.displayCreatedAt;
//     let parsedDate;
//     if (typeof apiDate === 'string') {
//       if (apiDate.includes('-')) {
//         // Handle format "DD-MM-YYYY HH:mm:ss"
//         const [datePart] = apiDate.split(' ');
//         const [day, month, year] = datePart.split('-').map(num => parseInt(num));
//         parsedDate = new Date(year, month - 1, day);
//       } else {
//         // Handle ISO string format
//         parsedDate = new Date(apiDate);
//       }
//     } else {
//       parsedDate = new Date(apiDate);
//     }

//     parsedDate.setHours(0, 0, 0, 0);
//     const messageDay = parsedDate.getDate();
//     const messageMonth = parsedDate.getMonth();
//     const messageYear = parsedDate.getFullYear();
//     const todayDay = today.getDate();
//     const todayMonth = today.getMonth();
//     const todayYear = today.getFullYear();

//     if (messageDay === todayDay &&
//         messageMonth === todayMonth &&
//         messageYear === todayYear) {
//       date = 'Today';
//     } else if (messageDay === todayDay &&
//                messageMonth === todayMonth &&
//                messageYear === todayYear) {
//       date = 'Yesterday';
//     } else {
//       date = parsedDate.toLocaleDateString('en-GB', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//       }).replace(/\//g, '-');
//     }

//     if (!groups[date]) {
//       groups[date] = [];
//     }
//     groups[date].push(message);
//   });

//   // Sort groups
//   const sortedGroups: { [key: string]: any[] } = {};
//   if (groups['Today']) sortedGroups['Today'] = groups['Today'];
//   if (groups['Yesterday']) sortedGroups['Yesterday'] = groups['Yesterday'];

//   Object.keys(groups)
//     .filter(key => !['Today', 'Yesterday'].includes(key))
//     .sort()
//     .forEach(key => {
//       sortedGroups[key] = groups[key];
//     });

//   return sortedGroups;
// };

export const groupMessagesByDate = (messages: any[]) => {
  const groups: { [key: string]: any[] } = {};

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  messages.forEach((message) => {
    let dateLabel;
    const apiDate = message.displayCreatedAt;
    let parsedDate: Date;

    if (typeof apiDate === 'string') {
      if (apiDate.includes('-') && apiDate.includes(' ')) {
        // Handle format "MM-DD-YYYY HH:mm:ss"
        const [datePart] = apiDate.split(' ');
        const [month, day, year] = datePart.split('-').map(Number);
        parsedDate = new Date(year, month - 1, day);
      } else {
        // Assume ISO or fallback
        parsedDate = new Date(apiDate);
      }
    } else {
      parsedDate = new Date(apiDate);
    }

    // Normalize date
    const messageDate = new Date(parsedDate);
    messageDate.setHours(0, 0, 0, 0);

    if (messageDate.getTime() === today.getTime()) {
      dateLabel = 'Today';
    } else if (messageDate.getTime() === yesterday.getTime()) {
      dateLabel = 'Yesterday';
    } else {
      dateLabel = messageDate
        .toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .replace(/\//g, '-'); // "DD-MM-YYYY"
    }

    if (!groups[dateLabel]) {
      groups[dateLabel] = [];
    }
    groups[dateLabel].push(message);
  });

  // Sorting grouped dates (excluding Today and Yesterday)
  const sortedGroups: { [key: string]: any[] } = {};
  if (groups['Today']) sortedGroups['Today'] = groups['Today'];
  if (groups['Yesterday']) sortedGroups['Yesterday'] = groups['Yesterday'];

  const otherDates = Object.keys(groups)
    .filter((key) => key !== 'Today' && key !== 'Yesterday')
    .sort((a, b) => {
      const [dayA, monthA, yearA] = a.split('-').map(Number);
      const [dayB, monthB, yearB] = b.split('-').map(Number);
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);
      return dateB.getTime() - dateA.getTime(); // descending
    });

  otherDates.forEach((key) => {
    sortedGroups[key] = groups[key];
  });

  return sortedGroups;
};
export const calculateProjectTotal = (projectRow: any, field: string) => {
  try {
    if (!projectRow?.invoices || !Array.isArray(projectRow.invoices)) {
      return 0;
    }

    return projectRow.invoices.reduce((total: number, invoice: any) => {
      if (!invoice || typeof invoice !== 'object') return total;

      const value = invoice[field];
      if (value === null || value === undefined) return total;

      // Handle string numbers
      if (typeof value === 'string') {
        const numValue = parseFloat(value.replace(/[^0-9.-]/g, ''));
        return total + (isNaN(numValue) ? 0 : numValue);
      }

      // Handle numbers
      if (typeof value === 'number') {
        return total + (isNaN(value) ? 0 : value);
      }

      return total;
    }, 0);
  } catch (error) {
    console.error(`Error calculating project total for field ${field}:`, error);
    return 0;
  }
};

// export function formatPhoneNumberAuto(phone: any) {
//   if (!phone) return '';

//   try {
//     let phoneStr = phone.toString().trim();
//     phoneStr = phoneStr.replace(/[\s\-\(\)]/g, '');
//     if (!phoneStr.startsWith('+')) {
//       phoneStr = '+' + phoneStr;
//     }
//     const phoneNumber = parsePhoneNumberFromString(phoneStr);
//     console.log(phoneNumber, 'phoneNumber check');
//     if (phoneNumber && phoneNumber.isValid()) {
//       const country = phoneNumber.country;
//       const countryCode = phoneNumber.countryCallingCode;
//       if (!country || countryCode === '1') {
//         const national = phoneNumber.nationalNumber;
//         return `+${countryCode} (${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;
//       }

//       switch (country) {
//         case 'US':
//         case 'CA': // US/Canada
//           const national = phoneNumber.nationalNumber;
//           return `+${countryCode} (${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;

//         case 'PK': // Pakistan
//           return phoneNumber.formatInternational().replace(/\s+/g, ' ');

//         case 'IN': // India
//           return phoneNumber.formatInternational().replace(/\s+/g, ' ');

//         case 'GB': // UK
//           return phoneNumber.formatInternational().replace(/\s+/g, ' ');

//         case 'RU': // Russia
//           return phoneNumber.formatInternational().replace(/\s+/g, ' ');

//         case 'DE': // Germany
//           return phoneNumber.formatInternational().replace(/\s+/g, ' ');

//         case 'FR': // France
//           return phoneNumber.formatInternational().replace(/\s+/g, ' ');
//         default:
//           if (countryCode === '1') {
//             const national = phoneNumber.nationalNumber;
//             return `+${countryCode} (${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;
//           } else if (!countryCode) {
//             const national = phoneNumber.nationalNumber;
//             return `+${countryCode} (${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;
//           } else {
//             return phoneNumber.formatInternational().replace(/\s+/g, ' ');
//           }
//       }
//     } else {
//       const country = phoneNumber?.country;
//       const countryCode = phoneNumber?.countryCallingCode;
//       if ((!country || countryCode === '1') && phoneNumber?.nationalNumber) {
//         const national = phoneNumber.nationalNumber;
//         return `+${countryCode} (${national?.slice(0, 3)}) ${national?.slice(3, 6)}-${national?.slice(6)}`;
//       }
//       // const formatter = new AsYouType();
//       // return formatter.input(phoneStr);
//     }
//   } catch (error) {
//     console.error('Error formatting phone number:', error);
//     return phone;
//   }
// }

export function formatPhoneNumberAuto(phone: any) {
  if (!phone) return '';

  try {
    // If already in standard format, return as is
    if (typeof phone === 'string' && /^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
      return phone;
    }

    // Clean the phone string
    let phoneStr = phone.toString().trim();

    // Special case: If it's already a formatted US number without country code
    if (/^\(\d{3}\) \d{3}-\d{4}$/.test(phoneStr)) {
      return phoneStr;
    }

    // If it's a simple 10-digit US number without formatting
    if (/^\d{10}$/.test(phoneStr)) {
      return `(${phoneStr.slice(0, 3)}) ${phoneStr.slice(3, 6)}-${phoneStr.slice(6)}`;
    }

    // Remove common separators for processing
    phoneStr = phoneStr.replace(/[\s\-\(\)\.\:\/]/g, '');
    // Add + prefix if missing
    if (!phoneStr.startsWith('+')) {
      phoneStr = '+' + phoneStr;
    }

    // Parse the phone number
    const phoneNumber = parsePhoneNumberFromString(phoneStr);

    // Handle valid phone numbers
    if (phoneNumber && phoneNumber.isValid()) {
      const country = phoneNumber.country;
      const countryCode = phoneNumber.countryCallingCode;

      // Format North American numbers consistently
      if (countryCode === '1') {
        const national = phoneNumber.nationalNumber;
        // Ensure we have enough digits for proper formatting
        if (national.length >= 10) {
          return `+${countryCode} (${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;
        }
      }

      // For all other countries, use international format with consistent spacing
      return phoneNumber.formatInternational().replace(/\s+/g, ' ');
    }
    // Handle unparseable numbers
    else {
      // Last attempt for 10-digit numbers that might be US/CA
      if (/^\d{10}$/.test(phoneStr.replace(/^\+/, ''))) {
        const digits = phoneStr.replace(/^\+/, '');
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
      }

      // If we received any information from the parser, try to use it
      if (phoneNumber?.nationalNumber) {
        const national = phoneNumber.nationalNumber;
        const countryCode = phoneNumber?.countryCallingCode || '';

        if (countryCode === '1' && national.length >= 10) {
          return `+${countryCode} (${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;
        }
      }

      // If all else fails, return the original
      return phone;
    }
  } catch (error) {
    console.error('Error formatting phone number:', error);
    return phone; // Return original on error
  }
}

export const handleSingleDownload = async (
  item: any,
  setIsDownloading: any
) => {
  console.log('Download initiated for item:', item);
  try {
    setIsDownloading(item._id);
    const extractS3Key = (s3Url: string): string => {
      try {
        const url = new URL(s3Url);
        return url.pathname.substring(1);
      } catch (error) {
        console.error('Invalid URL format:', error);
        return s3Url.split('/').slice(3).join('/');
      }
    };
    const fileKey: any = extractS3Key(item.mediaId?.url);
    // const response = await getSignedS3Url(fileKey);
    // if (!response?.success) {
    //   throw new Error('Failed to get signed URL');
    // }
    // const downloadUrl = response?.data?.downloadUrl;
    // const fileResponse = await fetch(downloadUrl);
    // if (!fileResponse.ok) {
    //   throw new Error('Failed to fetch file for download');
    // }

    // const blob = await fileResponse.blob();
    // const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    // link.href = url;
    link.download = item?.mediaId?.fileName || 'downloaded_file';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // URL.revokeObjectURL(url);
    toast.success('File downloaded successfully');

    setIsDownloading(null);
  } catch (error) {
    setIsDownloading(null);
    toast.error('Failed to download file');
    console.error('Error downloading the file:', error);
  }
};
export const handleDownloadAll = async (items: any, setIsDownloading: any) => {
  console.log('Download initiated for items:', items);
  try {
    setIsDownloading(true);
    const extractS3Key = (s3Url: string): string => {
      try {
        const url = new URL(s3Url);
        return url.pathname.substring(1);
      } catch (error) {
        console.error('Invalid URL format:', error);
        return s3Url.split('/').slice(3).join('/');
      }
    };
    const fileKeys: any = items
      .map((item: any) => item?.mediaId?.url)
      .filter(Boolean)
      .map(extractS3Key);
    if (!fileKeys.length) {
      toast.error('No valid files to download');
      setIsDownloading(false);
      return;
    }

    // const response = await getBatchDownloadUrls(fileKeys);
    // if (!response?.success) {
    //   throw new Error('Failed to get batch download URLs');
    // }
    // const successful = response.data?.successful || [];
    // if (successful.length === 0) {
    //   toast.error('No files available for download');
    //   setIsDownloading(false);
    //   return;
    // }

    // for (const file of successful) {
    //   const fileResponse = await fetch(file.downloadUrl);
    //   if (!fileResponse.ok) continue;
    //   const blob = await fileResponse.blob();
    //   const url = URL.createObjectURL(blob);
    //   const link = document.createElement('a');
    //   link.href = url;
    //   link.download = file.fileName || 'downloaded_file';
    //   link.style.display = 'none';
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    //   URL.revokeObjectURL(url);
    // }

    // toast.success(`${successful.length} file(s) downloaded successfully`);
    setIsDownloading(false);
  } catch (error) {
    setIsDownloading(false);
    toast.error('Failed to download files');
    console.error('Error downloading files:', error);
  }
};
