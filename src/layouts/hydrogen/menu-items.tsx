import { routes } from "@/config/routes";
import { DUMMY_ID } from "@/config/constants";
import { IoCarSport } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { MdCarRental } from "react-icons/md";
import { FaCarCrash } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr"
import {
  PiShoppingCartDuotone,
  PiHeadsetDuotone,
  PiPackageDuotone,
  PiChartBarDuotone,
  PiCurrencyDollarDuotone,
  PiSquaresFourDuotone,
  PiGridFourDuotone,
  PiFeatherDuotone,
  PiChartLineUpDuotone,
  PiMapPinLineDuotone,
  PiUserGearDuotone,
  PiBellSimpleRingingDuotone,
  PiUserDuotone,
  PiEnvelopeSimpleOpenDuotone,
  PiStepsDuotone,
  PiCreditCardDuotone,
  PiTableDuotone,
  PiBrowserDuotone,
  PiHourglassSimpleDuotone,
  PiUserCircleDuotone,
  PiShootingStarDuotone,
  PiRocketLaunchDuotone,
  PiFolderLockDuotone,
  PiBinocularsDuotone,
  PiHammerDuotone,
  PiNoteBlankDuotone,
  PiUserPlusDuotone,
  PiShieldCheckDuotone,
  PiLockKeyDuotone,
  PiChatCenteredDotsDuotone,
  PiCalendarPlusDuotone,
  PiEnvelopeDuotone,
  PiCurrencyCircleDollarDuotone,
  PiBriefcaseDuotone,
  PiHouseLineDuotone,
  PiAirplaneTiltDuotone,
  PiFolder,
  PiCaretCircleUpDownDuotone,
  PiListNumbersDuotone,
  PiCoinDuotone,
  PiUserSquareDuotone,
  PiShapesDuotone,
  PiNewspaperClippingDuotone,
} from "react-icons/pi";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: "Overview",
  },
  // label end
  {
    name: "Dashboard Overview",
    href: "/admin",
    icon: <PiFolder />,
  },
  {
    name: "User Management",
    href: "/user-management",
    icon: <PiBriefcaseDuotone />,
  },
  {

    name: "Appointments",
    href: "/appointment-management",
    icon: <PiShapesDuotone />,
   },
  {
    name: "Comments",
    href: "/comments-management",
    icon: <PiCurrencyCircleDollarDuotone />,
  },
  {
    name: "Feedback",
    href: routes.logistics.dashboard,
    icon: <PiPackageDuotone />,
  },
  {
    name: "Employee Management",
    href: "/employee-management",
    icon: <GrUserWorker />,
  },
  {
    name: "Analytics",
    href: routes.analytics,
    icon: <PiChartBarDuotone />,
  },
  {
    name: "Support",
     href: "/admin-chat",
    icon: <PiHeadsetDuotone />,
  },
  {
    name: "Car Dashboard",
    href: "#",
    icon: <IoCarSport />,
    dropdownItems: [
      {
        name: "Reservation List",
        href: "/car-list",
        icon: <RiFileList3Line />,
      },
      {
        name: "Rent Car Details",
        href: "/bookingdetail-management",
        icon: <MdCarRental />,
      },
      {
        name: "BUY Car Details",
        href: "/buy-cardetail",
        icon: <FaCarCrash />,
      },
   
      // {
      //   name: "Create Order",
      //   href: routes.eCommerce.createOrder,
      // },
      // {
      //   name: "Edit Order",
      //   href: routes.eCommerce.editOrder(DUMMY_ID),
      // },
      // {
      //   name: "Reviews",
      //   href: routes.eCommerce.reviews,
      // },
      // {
      //   name: "Shop",
      //   href: routes.eCommerce.shop,
      // },
      // {
      //   name: "Cart",
      //   href: routes.eCommerce.cart,
      // },
      // {
      //   name: "Checkout & Payment",
      //   href: routes.eCommerce.checkout,
      // },
    ],
  },
];
