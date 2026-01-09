import { LiaCommentsDollarSolid } from "react-icons/lia";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { BiCommentAdd } from "react-icons/bi";
import { BiAddToQueue } from "react-icons/bi";
import { FaGithub } from "react-icons/fa"
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { BiClinic, BiTimer } from "react-icons/bi";
import { TbCalendarTime } from "react-icons/tb";
import { FaCarBattery, FaCogs, FaOilCan, FaTachometerAlt } from "react-icons/fa";
import { GiCarWheel, GiSuspensionBridge, GiSteeringWheel } from "react-icons/gi";
import { FaCalendarAlt, FaTools, FaWrench, FaCheckCircle, FaCreditCard } from "react-icons/fa";

import { FaYoutube, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { TbFileDollar } from "react-icons/tb";
import { MdMoreTime } from "react-icons/md";
import { BiBible } from "react-icons/bi";
import { MdOutlineVerified } from "react-icons/md";
import { title } from "process";
import { GiAutoRepair } from "react-icons/gi";
import { MdTireRepair } from "react-icons/md";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { CiBezier } from "react-icons/ci";
import { MdCarRepair } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";

const Landingpage = {
   Services : [
    {
      id: "01",
      name: "Engine Repair",
      img: "/image/labour1.png",
    },
    {
      id: "02",
      name: "Brake Repair",
      img: "/image/labour2.png",
    },
    {
      id: "03",
      name: "Transmission Repair",
      img: "/image/labour3.png",
    },
    {
      id: "04",
      name: "Suspension Repair",
      img: "/image/labour4.png",
    },
     {
      id: "05",
      name: "Oil Change",
      img: "/image/labour2.png",
    },
     {
      id: "06",
      name: "Tune Up",
      img: "/image/labour1.png",
    },
     {
      id: "07",
      name: "Electrical Services",
      img: "/image/labour3.png",
    },
     {
      id: "08",
      name: "Tire Services",
      img: "/image/labour4.png",
    },
  ],
  serviceDetails: {
    "Engine Repair": {
      title: "Professional Engine Repair Services",
      subtitle: "Complete Engine Solutions",
      description: "Our comprehensive engine repair service is designed to diagnose and fix all types of engine problems. From minor tune-ups to complete engine rebuilds, our certified technicians use advanced diagnostic tools to identify issues and provide reliable solutions.",
      image: "/image/carss.png",
      features: [
        { text: "Engine Diagnostics", icon: "01", desc: "Advanced computerized diagnostics to identify engine problems accurately." },
        { text: "Engine Rebuild", icon: "02", desc: "Complete engine rebuild services using high-quality parts and components." },
        { text: "Timing Belt Service", icon: "03", desc: "Timing belt replacement and adjustment to ensure proper engine timing." },
        { text: "Performance Tuning", icon: "04", desc: "Engine performance optimization to improve power and fuel efficiency." },
      ],
      pricing: [
        { title: 'Basic Engine Tune-Up', description: 'Start from.', price: '150' },
        { title: 'Engine Diagnostics', description: 'Start from.', price: '95' },
        { title: 'Timing Belt Replacement', description: 'Start from.', price: '450' },
        { title: 'Complete Engine Rebuild', description: 'Start from.', price: '2500' },
      ],
      faq: [
        {
          id: "engine-symptoms",
          question: "What are signs that my engine needs repair?",
          answer: "Common signs include strange noises, reduced power, excessive smoke, rough idling, and warning lights on the dashboard."
        },
        {
          id: "engine-cost",
          question: "How much does engine repair typically cost?",
          answer: "Costs vary depending on the issue. Minor repairs start from $150, while major rebuilds can cost $2000-$5000."
        },
        {
          id: "engine-time",
          question: "How long does engine repair take?",
          answer: "Simple repairs take 1-2 hours, while complete engine rebuilds can take 3-5 days depending on parts availability."
        },
      ]
    },
    "Brake Repair": {
      title: "Expert Brake Repair Services",
      subtitle: "Safe & Reliable Braking",
      description: "Your safety is our priority. Our brake repair service includes comprehensive inspection, diagnosis, and repair of all brake components. We ensure your braking system operates at peak performance for maximum safety.",
      image: "/image/carss.png",
      features: [
        { text: "Brake Pad Replacement", icon: "01", desc: "High-quality brake pad installation for optimal stopping power." },
        { text: "Brake Rotor Service", icon: "02", desc: "Rotor resurfacing or replacement to ensure smooth braking." },
        { text: "Brake Fluid Service", icon: "03", desc: "Complete brake fluid flush and replacement for system integrity." },
        { text: "Brake System Inspection", icon: "04", desc: "Comprehensive brake system inspection for safety assurance." },
      ],
      pricing: [
        { title: 'Brake Pad Replacement', description: 'Start from.', price: '180' },
        { title: 'Brake Rotor Replacement', description: 'Start from.', price: '250' },
        { title: 'Brake Fluid Flush', description: 'Start from.', price: '85' },
        { title: 'Complete Brake Service', description: 'Start from.', price: '350' },
      ],
      faq: [
        {
          id: "brake-symptoms",
          question: "How do I know if my brakes need repair?",
          answer: "Signs include squeaking or grinding noises, longer stopping distances, brake pedal feels soft or hard, or brake warning light."
        },
        {
          id: "brake-frequency",
          question: "How often should I replace brake pads?",
          answer: "Typically every 30,000-50,000 miles, but it depends on driving habits and conditions."
        },
        {
          id: "brake-safety",
          question: "Is it safe to drive with brake problems?",
          answer: "No, brake issues should be addressed immediately as they directly affect your safety and the safety of others."
        },
      ]
    },
    "Transmission Repair": {
      title: "Complete Transmission Services",
      subtitle: "Smooth Power Transfer",
      description: "Our transmission repair service covers both automatic and manual transmissions. We provide expert diagnosis, repair, and maintenance to ensure smooth gear shifting and optimal vehicle performance.",
      image: "/image/carss.png",
      features: [
        { text: "Transmission Diagnostics", icon: "01", desc: "Advanced diagnostic testing to identify transmission issues accurately." },
        { text: "Fluid & Filter Service", icon: "02", desc: "Complete transmission fluid and filter replacement service." },
        { text: "Clutch Replacement", icon: "03", desc: "Professional clutch replacement for manual transmissions." },
        { text: "Transmission Rebuild", icon: "04", desc: "Complete transmission rebuild using quality parts and components." },
      ],
      pricing: [
        { title: 'Transmission Fluid Change', description: 'Start from.', price: '120' },
        { title: 'Transmission Diagnostics', description: 'Start from.', price: '145' },
        { title: 'Clutch Replacement', description: 'Start from.', price: '850' },
        { title: 'Transmission Rebuild', description: 'Start from.', price: '2800' },
      ],
      faq: [
        {
          id: "transmission-symptoms",
          question: "What are signs of transmission problems?",
          answer: "Common signs include slipping gears, delayed engagement, unusual noises, leaking fluid, and burning smell."
        },
        {
          id: "transmission-maintenance",
          question: "How often should I service my transmission?",
          answer: "Transmission fluid should be changed every 30,000-60,000 miles depending on your vehicle and driving conditions."
        },
        {
          id: "transmission-cost",
          question: "How much does transmission repair cost?",
          answer: "Costs range from $120 for fluid changes to $3000+ for complete rebuilds, depending on the issue."
        },
      ]
    },
    "Suspension Repair": {
      title: "Professional Suspension Services",
      subtitle: "Smooth & Comfortable Ride",
      description: "Our suspension repair service ensures your vehicle provides a comfortable ride and maintains proper handling. We service all suspension components including shocks, struts, springs, and related parts.",
      image: "/image/carss.png",
      features: [
        { text: "Shock Absorber Service", icon: "01", desc: "Professional shock absorber inspection, repair, and replacement." },
        { text: "Strut Replacement", icon: "02", desc: "Complete strut assembly replacement for improved ride quality." },
        { text: "Spring Service", icon: "03", desc: "Coil spring and leaf spring inspection and replacement service." },
        { text: "Suspension Alignment", icon: "04", desc: "Precision wheel alignment for optimal tire wear and handling." },
      ],
      pricing: [
        { title: 'Shock Absorber Replacement', description: 'Start from.', price: '280' },
        { title: 'Strut Assembly Service', description: 'Start from.', price: '450' },
        { title: 'Wheel Alignment', description: 'Start from.', price: '95' },
        { title: 'Complete Suspension Service', description: 'Start from.', price: '680' },
      ],
      faq: [
        {
          id: "suspension-symptoms",
          question: "How do I know if my suspension needs repair?",
          answer: "Signs include bouncy ride, uneven tire wear, vehicle pulling to one side, and excessive noise over bumps."
        },
        {
          id: "suspension-safety",
          question: "Can I drive with bad suspension?",
          answer: "While possible, it's not recommended as it affects handling, braking, and tire wear, compromising safety."
        },
        {
          id: "suspension-lifespan",
          question: "How long do suspension components last?",
          answer: "Typically 50,000-100,000 miles, but varies based on driving conditions and vehicle type."
        },
      ]
    },
    "Oil Change": {
      title: "Professional Oil Change Services",
      subtitle: "Engine Protection & Performance",
      description: "Regular oil changes are essential for engine health and longevity. Our oil change service includes high-quality oil, filter replacement, and comprehensive vehicle inspection to keep your engine running smoothly.",
      image: "/image/carss.png",
      features: [
        { text: "Premium Oil Selection", icon: "01", desc: "Choice of conventional, synthetic blend, or full synthetic oil options." },
        { text: "Oil Filter Replacement", icon: "02", desc: "High-quality oil filter replacement with every oil change service." },
        { text: "Fluid Level Check", icon: "03", desc: "Comprehensive check of all fluid levels and top-off as needed." },
        { text: "Multi-Point Inspection", icon: "04", desc: "Complimentary vehicle inspection with every oil change service." },
      ],
      pricing: [
        { title: 'Conventional Oil Change', description: 'Start from.', price: '35' },
        { title: 'Synthetic Blend Oil', description: 'Start from.', price: '45' },
        { title: 'Full Synthetic Oil', description: 'Start from.', price: '65' },
        { title: 'High Mileage Oil', description: 'Start from.', price: '55' },
      ],
      faq: [
        {
          id: "oil-frequency",
          question: "How often should I change my oil?",
          answer: "Conventional oil: every 3,000-5,000 miles. Synthetic oil: every 7,500-10,000 miles. Check your owner's manual."
        },
        {
          id: "oil-type",
          question: "What type of oil should I use?",
          answer: "Depends on your vehicle, age, mileage, and driving conditions. We'll recommend the best option for your car."
        },
        {
          id: "oil-importance",
          question: "Why are regular oil changes important?",
          answer: "Oil lubricates engine parts, reduces friction, and removes contaminants. Regular changes prevent engine damage."
        },
      ]
    },
     "Tune Up": {
      title: "Professional Oil Change Services",
      subtitle: "Engine Protection & Performance",
      description: "Regular oil changes are essential for engine health and longevity. Our oil change service includes high-quality oil, filter replacement, and comprehensive vehicle inspection to keep your engine running smoothly.",
      image: "/image/tire.jpg",
      features: [
        { text: "Premium Oil Selection", icon: "01", desc: "Choice of conventional, synthetic blend, or full synthetic oil options." },
        { text: "Oil Filter Replacement", icon: "02", desc: "High-quality oil filter replacement with every oil change service." },
        { text: "Fluid Level Check", icon: "03", desc: "Comprehensive check of all fluid levels and top-off as needed." },
        { text: "Multi-Point Inspection", icon: "04", desc: "Complimentary vehicle inspection with every oil change service." },
      ],
      pricing: [
        { title: 'Conventional Oil Change', description: 'Start from.', price: '35' },
        { title: 'Synthetic Blend Oil', description: 'Start from.', price: '45' },
        { title: 'Full Synthetic Oil', description: 'Start from.', price: '65' },
        { title: 'High Mileage Oil', description: 'Start from.', price: '55' },
      ],
      faq: [
        {
          id: "oil-frequency",
          question: "How often should I change my oil?",
          answer: "Conventional oil: every 3,000-5,000 miles. Synthetic oil: every 7,500-10,000 miles. Check your owner's manual."
        },
        {
          id: "oil-type",
          question: "What type of oil should I use?",
          answer: "Depends on your vehicle, age, mileage, and driving conditions. We'll recommend the best option for your car."
        },
        {
          id: "oil-importance",
          question: "Why are regular oil changes important?",
          answer: "Oil lubricates engine parts, reduces friction, and removes contaminants. Regular changes prevent engine damage."
        },
      ]
    },
     "Electrical Services": {
      title: "Professional Oil Change Services",
      subtitle: "Engine Protection & Performance",
      description: "Regular oil changes are essential for engine health and longevity. Our oil change service includes high-quality oil, filter replacement, and comprehensive vehicle inspection to keep your engine running smoothly.",
      image: "/image/tire.jpg",
      features: [
        { text: "Premium Oil Selection", icon: "01", desc: "Choice of conventional, synthetic blend, or full synthetic oil options." },
        { text: "Oil Filter Replacement", icon: "02", desc: "High-quality oil filter replacement with every oil change service." },
        { text: "Fluid Level Check", icon: "03", desc: "Comprehensive check of all fluid levels and top-off as needed." },
        { text: "Multi-Point Inspection", icon: "04", desc: "Complimentary vehicle inspection with every oil change service." },
      ],
      pricing: [
        { title: 'Conventional Oil Change', description: 'Start from.', price: '35' },
        { title: 'Synthetic Blend Oil', description: 'Start from.', price: '45' },
        { title: 'Full Synthetic Oil', description: 'Start from.', price: '65' },
        { title: 'High Mileage Oil', description: 'Start from.', price: '55' },
      ],
      faq: [
        {
          id: "oil-frequency",
          question: "How often should I change my oil?",
          answer: "Conventional oil: every 3,000-5,000 miles. Synthetic oil: every 7,500-10,000 miles. Check your owner's manual."
        },
        {
          id: "oil-type",
          question: "What type of oil should I use?",
          answer: "Depends on your vehicle, age, mileage, and driving conditions. We'll recommend the best option for your car."
        },
        {
          id: "oil-importance",
          question: "Why are regular oil changes important?",
          answer: "Oil lubricates engine parts, reduces friction, and removes contaminants. Regular changes prevent engine damage."
        },
      ]
    },
  },


  readmore: {
    "Engine Repair": {
      title: "Professional Engine Repair Services",
      subtitle: "Complete Engine Solutions",
      description: "Our comprehensive engine repair service is designed to diagnose and fix all types of engine problems. From minor tune-ups to complete engine rebuilds, our certified technicians use advanced diagnostic tools to identify issues and provide reliable solutions.",
      image: "/image/carss.png",
      features: [
        { text: "Engine Diagnostics", icon: "01", desc: "Advanced computerized diagnostics to identify engine problems accurately." },
        { text: "Engine Rebuild", icon: "02", desc: "Complete engine rebuild services using high-quality parts and components." },
        { text: "Timing Belt Service", icon: "03", desc: "Timing belt replacement and adjustment to ensure proper engine timing." },
        { text: "Performance Tuning", icon: "04", desc: "Engine performance optimization to improve power and fuel efficiency." },
      ],
      pricing: [
        { title: 'Basic Engine Tune-Up', description: 'Start from.', price: '150' },
        { title: 'Engine Diagnostics', description: 'Start from.', price: '95' },
        { title: 'Timing Belt Replacement', description: 'Start from.', price: '450' },
        { title: 'Complete Engine Rebuild', description: 'Start from.', price: '2500' },
      ],
      faq: [
        {
          id: "engine-symptoms",
          question: "What are signs that my engine needs repair?",
          answer: "Common signs include strange noises, reduced power, excessive smoke, rough idling, and warning lights on the dashboard."
        },
        {
          id: "engine-cost",
          question: "How much does engine repair typically cost?",
          answer: "Costs vary depending on the issue. Minor repairs start from $150, while major rebuilds can cost $2000-$5000."
        },
        {
          id: "engine-time",
          question: "How long does engine repair take?",
          answer: "Simple repairs take 1-2 hours, while complete engine rebuilds can take 3-5 days depending on parts availability."
        },
      ]
    },
    "Brake Repair": {
      title: "Expert Brake Repair Services",
      subtitle: "Safe & Reliable Braking",
      description: "Your safety is our priority. Our brake repair service includes comprehensive inspection, diagnosis, and repair of all brake components. We ensure your braking system operates at peak performance for maximum safety.",
      image: "/image/carss.png",
      features: [
        { text: "Brake Pad Replacement", icon: "01", desc: "High-quality brake pad installation for optimal stopping power." },
        { text: "Brake Rotor Service", icon: "02", desc: "Rotor resurfacing or replacement to ensure smooth braking." },
        { text: "Brake Fluid Service", icon: "03", desc: "Complete brake fluid flush and replacement for system integrity." },
        { text: "Brake System Inspection", icon: "04", desc: "Comprehensive brake system inspection for safety assurance." },
      ],
      pricing: [
        { title: 'Brake Pad Replacement', description: 'Start from.', price: '180' },
        { title: 'Brake Rotor Replacement', description: 'Start from.', price: '250' },
        { title: 'Brake Fluid Flush', description: 'Start from.', price: '85' },
        { title: 'Complete Brake Service', description: 'Start from.', price: '350' },
      ],
      faq: [
        {
          id: "brake-symptoms",
          question: "How do I know if my brakes need repair?",
          answer: "Signs include squeaking or grinding noises, longer stopping distances, brake pedal feels soft or hard, or brake warning light."
        },
        {
          id: "brake-frequency",
          question: "How often should I replace brake pads?",
          answer: "Typically every 30,000-50,000 miles, but it depends on driving habits and conditions."
        },
        {
          id: "brake-safety",
          question: "Is it safe to drive with brake problems?",
          answer: "No, brake issues should be addressed immediately as they directly affect your safety and the safety of others."
        },
      ]
    },
    "Transmission Repair": {
      title: "Complete Transmission Services",
      subtitle: "Smooth Power Transfer",
      description: "Our transmission repair service covers both automatic and manual transmissions. We provide expert diagnosis, repair, and maintenance to ensure smooth gear shifting and optimal vehicle performance.",
      image: "/image/carss.png",
      features: [
        { text: "Transmission Diagnostics", icon: "01", desc: "Advanced diagnostic testing to identify transmission issues accurately." },
        { text: "Fluid & Filter Service", icon: "02", desc: "Complete transmission fluid and filter replacement service." },
        { text: "Clutch Replacement", icon: "03", desc: "Professional clutch replacement for manual transmissions." },
        { text: "Transmission Rebuild", icon: "04", desc: "Complete transmission rebuild using quality parts and components." },
      ],
      pricing: [
        { title: 'Transmission Fluid Change', description: 'Start from.', price: '120' },
        { title: 'Transmission Diagnostics', description: 'Start from.', price: '145' },
        { title: 'Clutch Replacement', description: 'Start from.', price: '850' },
        { title: 'Transmission Rebuild', description: 'Start from.', price: '2800' },
      ],
      faq: [
        {
          id: "transmission-symptoms",
          question: "What are signs of transmission problems?",
          answer: "Common signs include slipping gears, delayed engagement, unusual noises, leaking fluid, and burning smell."
        },
        {
          id: "transmission-maintenance",
          question: "How often should I service my transmission?",
          answer: "Transmission fluid should be changed every 30,000-60,000 miles depending on your vehicle and driving conditions."
        },
        {
          id: "transmission-cost",
          question: "How much does transmission repair cost?",
          answer: "Costs range from $120 for fluid changes to $3000+ for complete rebuilds, depending on the issue."
        },
      ]
    },
    "Suspension Repair": {
      title: "Professional Suspension Services",
      subtitle: "Smooth & Comfortable Ride",
      description: "Our suspension repair service ensures your vehicle provides a comfortable ride and maintains proper handling. We service all suspension components including shocks, struts, springs, and related parts.",
      image: "/image/carss.png",
      features: [
        { text: "Shock Absorber Service", icon: "01", desc: "Professional shock absorber inspection, repair, and replacement." },
        { text: "Strut Replacement", icon: "02", desc: "Complete strut assembly replacement for improved ride quality." },
        { text: "Spring Service", icon: "03", desc: "Coil spring and leaf spring inspection and replacement service." },
        { text: "Suspension Alignment", icon: "04", desc: "Precision wheel alignment for optimal tire wear and handling." },
      ],
      pricing: [
        { title: 'Shock Absorber Replacement', description: 'Start from.', price: '280' },
        { title: 'Strut Assembly Service', description: 'Start from.', price: '450' },
        { title: 'Wheel Alignment', description: 'Start from.', price: '95' },
        { title: 'Complete Suspension Service', description: 'Start from.', price: '680' },
      ],
      faq: [
        {
          id: "suspension-symptoms",
          question: "How do I know if my suspension needs repair?",
          answer: "Signs include bouncy ride, uneven tire wear, vehicle pulling to one side, and excessive noise over bumps."
        },
        {
          id: "suspension-safety",
          question: "Can I drive with bad suspension?",
          answer: "While possible, it's not recommended as it affects handling, braking, and tire wear, compromising safety."
        },
        {
          id: "suspension-lifespan",
          question: "How long do suspension components last?",
          answer: "Typically 50,000-100,000 miles, but varies based on driving conditions and vehicle type."
        },
      ]
    },
    "Oil Change": {
      title: "Professional Oil Change Services",
      subtitle: "Engine Protection & Performance",
      description: "Regular oil changes are essential for engine health and longevity. Our oil change service includes high-quality oil, filter replacement, and comprehensive vehicle inspection to keep your engine running smoothly.",
      image: "/image/carss.png",
      features: [
        { text: "Premium Oil Selection", icon: "01", desc: "Choice of conventional, synthetic blend, or full synthetic oil options." },
        { text: "Oil Filter Replacement", icon: "02", desc: "High-quality oil filter replacement with every oil change service." },
        { text: "Fluid Level Check", icon: "03", desc: "Comprehensive check of all fluid levels and top-off as needed." },
        { text: "Multi-Point Inspection", icon: "04", desc: "Complimentary vehicle inspection with every oil change service." },
      ],
      pricing: [
        { title: 'Conventional Oil Change', description: 'Start from.', price: '35' },
        { title: 'Synthetic Blend Oil', description: 'Start from.', price: '45' },
        { title: 'Full Synthetic Oil', description: 'Start from.', price: '65' },
        { title: 'High Mileage Oil', description: 'Start from.', price: '55' },
      ],
      faq: [
        {
          id: "oil-frequency",
          question: "How often should I change my oil?",
          answer: "Conventional oil: every 3,000-5,000 miles. Synthetic oil: every 7,500-10,000 miles. Check your owner's manual."
        },
        {
          id: "oil-type",
          question: "What type of oil should I use?",
          answer: "Depends on your vehicle, age, mileage, and driving conditions. We'll recommend the best option for your car."
        },
        {
          id: "oil-importance",
          question: "Why are regular oil changes important?",
          answer: "Oil lubricates engine parts, reduces friction, and removes contaminants. Regular changes prevent engine damage."
        },
      ]
    },
     "Tune Up": {
      title: "Professional Oil Change Services",
      subtitle: "Engine Protection & Performance",
      description: "Regular oil changes are essential for engine health and longevity. Our oil change service includes high-quality oil, filter replacement, and comprehensive vehicle inspection to keep your engine running smoothly.",
      image: "/image/tire.jpg",
      features: [
        { text: "Premium Oil Selection", icon: "01", desc: "Choice of conventional, synthetic blend, or full synthetic oil options." },
        { text: "Oil Filter Replacement", icon: "02", desc: "High-quality oil filter replacement with every oil change service." },
        { text: "Fluid Level Check", icon: "03", desc: "Comprehensive check of all fluid levels and top-off as needed." },
        { text: "Multi-Point Inspection", icon: "04", desc: "Complimentary vehicle inspection with every oil change service." },
      ],
      pricing: [
        { title: 'Conventional Oil Change', description: 'Start from.', price: '35' },
        { title: 'Synthetic Blend Oil', description: 'Start from.', price: '45' },
        { title: 'Full Synthetic Oil', description: 'Start from.', price: '65' },
        { title: 'High Mileage Oil', description: 'Start from.', price: '55' },
      ],
      faq: [
        {
          id: "oil-frequency",
          question: "How often should I change my oil?",
          answer: "Conventional oil: every 3,000-5,000 miles. Synthetic oil: every 7,500-10,000 miles. Check your owner's manual."
        },
        {
          id: "oil-type",
          question: "What type of oil should I use?",
          answer: "Depends on your vehicle, age, mileage, and driving conditions. We'll recommend the best option for your car."
        },
        {
          id: "oil-importance",
          question: "Why are regular oil changes important?",
          answer: "Oil lubricates engine parts, reduces friction, and removes contaminants. Regular changes prevent engine damage."
        },
      ]
    },
     "Electrical Services": {
      title: "Professional Oil Change Services",
      subtitle: "Engine Protection & Performance",
      description: "Regular oil changes are essential for engine health and longevity. Our oil change service includes high-quality oil, filter replacement, and comprehensive vehicle inspection to keep your engine running smoothly.",
      image: "/image/tire.jpg",
      features: [
        { text: "Premium Oil Selection", icon: "01", desc: "Choice of conventional, synthetic blend, or full synthetic oil options." },
        { text: "Oil Filter Replacement", icon: "02", desc: "High-quality oil filter replacement with every oil change service." },
        { text: "Fluid Level Check", icon: "03", desc: "Comprehensive check of all fluid levels and top-off as needed." },
        { text: "Multi-Point Inspection", icon: "04", desc: "Complimentary vehicle inspection with every oil change service." },
      ],
      pricing: [
        { title: 'Conventional Oil Change', description: 'Start from.', price: '35' },
        { title: 'Synthetic Blend Oil', description: 'Start from.', price: '45' },
        { title: 'Full Synthetic Oil', description: 'Start from.', price: '65' },
        { title: 'High Mileage Oil', description: 'Start from.', price: '55' },
      ],
      faq: [
        {
          id: "oil-frequency",
          question: "How often should I change my oil?",
          answer: "Conventional oil: every 3,000-5,000 miles. Synthetic oil: every 7,500-10,000 miles. Check your owner's manual."
        },
        {
          id: "oil-type",
          question: "What type of oil should I use?",
          answer: "Depends on your vehicle, age, mileage, and driving conditions. We'll recommend the best option for your car."
        },
        {
          id: "oil-importance",
          question: "Why are regular oil changes important?",
          answer: "Oil lubricates engine parts, reduces friction, and removes contaminants. Regular changes prevent engine damage."
        },
      ]
    },
  },

  blog: {
    categories: ["Auto World", "Auto Trends", "Auto Tips", "Business", "Lifestyle"],
    tags: ["Maintenance", "Oil", "Tires", "Battery", "Roadtrip"],
    posts: [
      {
        id: 1,
        category: "Auto Tips",
        title: "8 Common Car Maintenance Mistakes and How to Avoid Them",
        date: "Oct 10, 2025",
        author: "John Smith",
        img: "/worker/worker1.png",
      },
      {
        id: 2,
        category: "Auto World",
        title: "The Importance of Regular Oil Changes for Your Car",
        date: "Oct 12, 2025",
        author: "Sarah Johnson",
        img: "/worker/worker2.png",
      },
      {
        id: 3,
        category: "Lifestyle",
        title: "How to Prepare Your Car for a Long Road Trip",
        date: "Oct 15, 2025",
        author: "Ali Ahmed",
        img: "/worker/worker3.png",
      },
      {
        id: 4,
        category: "Auto Trends",
        title: "Signs Your Car Needs New Tires and How to Choose the Right Ones",
        date: "Oct 16, 2025",
        author: "Emily Clark",
        img: "/worker/worker4.png",
      },
      {
        id: 5,
        category: "Business",
        title: "The Benefits of Regular Tune-Ups for Your Car",
        date: "Oct 18, 2025",
        author: "James White",
        img: "/worker/worker5.png",
      },
      {
        id: 6,
        category: "Auto World",
        title: "How to Extend the Life of Your Car’s Battery",
        date: "Oct 20, 2025",
        author: "Sophia Lee",
        img: "/worker/worker6.png",
      },
      {
        id: 7,
        category: "Auto Tips",
        title: "Tips for Monitoring Engine Health While on the Road",
        date: "Oct 22, 2025",
        author: "Michael Brown",
        img: "/worker/worker7.png",
      },
      {
        id: 8,
        category: "Lifestyle",
        title: "The Truth About Synthetic vs Conventional Motor Oil",
        date: "Oct 23, 2025",
        author: "Rebecca Hall",
        img: "/worker/worker8.png",
      },
    ],
  },

 cardsection: [
  {
    title: "Compretitive  Pricing",
    subtitle: "We understand the importance of competitive pricing in today's market.this is why we offer the best prices for our services.We strive to provide afforable solution without sacrifice solution quality.",
    icon: <LiaCommentsDollarSolid />,
  },
  {
    title: "Customer Support",
    subtitle: "We believe exceptional support is the cornerstone of trust. This is why we provide 24/7 assistance from our dedicated team of experts.Customer can be our first proirty and solve every problem first.",
    icon: <LiaBusinessTimeSolid  />,
  },
  {
    title: "Experienced and Certified Technicians",
    subtitle: "Our team consists of highly skilled and certified technicians with years of experience in the automotive industry. You can trust us to handle your vehicle with the utmost care and expertise.",
    icon: <BiCommentAdd />,
  },
  {
    title: "Use of high Level of Equipment",
    subtitle: "We utilize state-of-the-art equipment and technology to ensure the highest quality of service. Our commitment to using advanced tools allows us to diagnose and repair your vehicle efficiently and effectively.",
    icon: <BiAddToQueue/>,
  },

],

 processSteps :[
  {
    id: 1,
    title: "Schedule an Appointment",
    description: "The first step in getting your car repaired at AutoFixers is to schedule an appointment. You can do this by phone, online, or by visiting our shop in person.",
    icon: <FaCalendarAlt size={30} />,
  },
  {
    id: 2,
    title: "Diagnostic and Inspection",
    description: "When you bring your car in for repairs, our technicians will perform a comprehensive diagnostic and inspection to determine the root cause of any issues.",
    icon: <FaTools size={30} />,
  },
  {
    id: 3,
    title: "Repair work",
    description: "We will keep you informed of the progress of your repairs and let you know if any additional work is needed.",
    icon: <FaWrench size={30} />,
  },
  {
    id: 4,
    title: "Quality assurance",
    description: "We take great pride in the quality of our work and want to ensure that you are completely satisfied with the repairs we have done.",
    icon: <FaCheckCircle size={30} />,
  },
  {
    id: 5,
    title: "Payment and pick-up",
    description: "We accept various forms of payment, including credit cards and cash, and can also work with your insurance company if your repairs are covered under your policy.",
    icon: <FaCreditCard size={30} />,
  },
],
  
 cards : [
    {
      img: "/image/labour3.png",
      title: "5 Common Car Maintenance Mistakes and How to Avoid Them",
      date: 'May 1, 2023',
      user: 'James Vice',
      desc: "comments (10)",
    },
    {
      img: "/image/labour4.png",
      title: "The Importance of Regular Oil Changes for Your Car",
      date: 'July 8, 2023',
      user: 'Tim David',
      desc: "comments (11)",
    },
    {
      img: "/image/labour3.png",
      title: "Premium car wash with eco-friendly products.",
      date: 'Aug 19, 2022',
      user: 'David Warner',
      
      desc: "comments (21)",
    },
  ],
  socialLinks : [
    {
      icon: FaYoutube,
      href: "https://youtube.com",
      label: "YouTube",
      hoverBg: "hover:bg-red-500",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      hoverBg: "hover:bg-blue-600",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      label: "Twitter",
      hoverBg: "hover:bg-sky-500",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com",
      label: "Instagram",
      hoverBg: "hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600",
    },
  ],
Services1 : [
    {
      id: "01",
      name: "Engine Repair",
      img: "/image/labour1.png",
    },
    {
      id: "02",
      name: "Brake Repair",
      img: "/image/labour2.png",
    },
    {
      id: "03",
      name: "Transmission Repair",
      img: "/image/labour3.png",
    },
    {
      id: "04",
      name: "Suspension Repair",
      img: "/image/labour4.png",
    },
     {
      id: "05",
      name: "Suspension Repair",
      img: "/image/labour2.png",
    },
   ],
   cardss : [
    {
      img : <TbFileDollar />,
      title : 'Competitive Pricing',
      subtitle : 'We understand that auto repair can be expensive, which is why we offer competitive pricing for all of our services. We strive to provide affordable solutions withoutsacrificing quality.',

    },
    {
       img : <MdMoreTime />,
      title : 'Fast And Efficient Service',
      subtitle :'We understand that auto repair can be expensive, which is why we offer competitive pricing for all of our services. We strive to provide affordable solutions withoutsacrificing quality.',

    }, 
    {
       img : <BiBible/>,
      title : 'Experienced and Certified Techniques',
      subtitle : 'We understand that auto repair can be expensive, which is why we offer competitive pricing for all of our services. We strive to provide affordable solutions withoutsacrificing quality.',

    },
    {
       img : <MdOutlineVerified/>,
      title : 'Use of high quality parts',
      subtitle : 'We understand that auto repair can be expensive, which is why we offer competitive pricing for all of our services. We strive to provide affordable solutions withoutsacrificing quality.',

    }, 
  ],
  data :[
  { id: 1, name: "John Doe", location: "New York, USA" ,img :'/image/profile.svg' ,color:'inline-flex items-center bg-red-600 text-white font-sans tracking-wide lg:text-lg text-md py-3 px-6 rounded-lg transform skew-x-[-20deg] shadow-md cursor-pointer' },
  { id: 2, name: "Jane Smith", location: "London, UK",img :'/image/profile.svg',color:'inline-flex items-center bg-white text-black font-sans tracking-wide lg:text-lg text-md py-3 px-6 rounded-lg transform skew-x-[-20deg] shadow-md cursor-pointer' },
  { id: 3,name: "Ali Khan", location: "Lahore, Pakistan" ,img :'/image/profile.svg',color:'inline-flex items-center bg-white text-black font-sans tracking-wide lg:text-lg text-md py-3 px-6 rounded-lg transform skew-x-[-20deg] shadow-md cursor-pointer' },
   ],
pricingData : [
  {
    id: 1,
    title: "Basic Oil Change",
    price: "$29.99",
    features: [
      "Includes up to 5 quarts of conventional oil",
      "Includes standard oil filter replacement",
      "Tire pressure check and adjustment",
      "Includes basic vehicle inspection",
      "Additional fees may apply for high-mileage or synthetic oil",
    ],
  },
  {
    id: 2,
    title: "Standard Tune-Up",
    price: "$149.99",
    features: [
      "Includes spark plug replacement",
      "Includes an air filter replacement",
      "Includes a fuel filter replacement",
      "Includes PCV valve replacement",
      "Additional fees may apply for distributor cap and rotor replacement",
    ],
  },
  {
    id: 3,
    title: "Brake Service",
    price: "$169.99",
    features: [
      "Includes brake pad replacement",
      "Brake rotor resurfacing or replacement",
      "Brake caliper cleaning and lubrication",
      "Brake fluid flush and replacement",
      "Additional fees may apply for brake line or master cylinder replacement",
    ],
  },
],
 people : [
    {
      id: 1,
      name: "John Doe",
      role: "Gerenal Manger",
      avatar: "/image/profile.svg",
      socials: {
        linkedin: <FaGithub/>,
        twitter: <FaLinkedin/>,
        github: <FaTwitter/>,
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Service Manger",
      avatar: "/user/user2.png",
      socials: {
         linkedin: <FaGithub/>,
        twitter: <FaLinkedin/>,
        github: <FaTwitter/>,
      },
    },
     {
      id: 3,
      name: "Jane Smith",
      role: "Customer Service",
      avatar: "/user/user8.png",
      socials: {
         linkedin: <FaGithub/>,
        twitter: <FaLinkedin/>,
        github: <FaTwitter/>,
      },
    },
     {
      id: 4,
      name: "Steve Smith",
      role: "Cerified Techician",
      avatar: "/image/logo1.jpg",
      socials: {
         linkedin: <FaGithub/>,
        twitter: <FaLinkedin/>,
        github: <FaTwitter/>,
      },
    },
     {
      id: 5,
      name: "Jam Vice",
      role: "Marketing Manger",
      avatar: "/user/user3.png",
      socials: {
         linkedin: <FaGithub/>,
        twitter: <FaLinkedin/>,
        github: <FaTwitter/>,
      },
    },
     {
      id: 6,
      name: "Jam Brown",
      role: "Customer service",
      avatar: "/user/user5.png",
      socials: {
         linkedin: <FaGithub/>,
        twitter: <FaLinkedin/>,
        github: <FaTwitter/>,
      },
    },
     {
      id: 7,
      name: "M Ali",
      role: "Marketing Services",
      avatar: "/user/user6.png",
      socials: {
         linkedin: <FaGithub/>,
        twitter: <FaLinkedin/>,
        github: <FaTwitter/>,
      },
    },
     {
      id: 8,
      name: "jake Ellise",
      role: "Older Techican",
      avatar: "/user/user7.png",
      socials: {
         linkedin: <FaGithub/>,
        twitter: <FaLinkedin/>,
        github: <FaTwitter/>,
      },
    },
  
   
  ],
 point : {
  title : 'About Us',
  subtitle : 'Our Reputation Speaks for Itself',
  desc : ' AutoWorks is a family-owned and operated business that has been providing auto repair services to the community for over 20 years. We pride ourselves on our commitment to quality and customer satisfaction.',
  image : '/image/something.jpg' 
},

 reuse : {
   title : 'About Us',
  subtitle : 'Our Reputation Speaks for Itself',
  desc : 'AutoWorks is a family-owned and operated business that has been providing auto repair services to the community for over 20 years. We pride ourselves on our commitment to quality and customer satisfaction.We understand that your car is an essential part of your daily life, and that why we strive to provide reliable and efficient service to meet all of your auto repair needs. Whether you need routine maintenance, such as oil changes and tire rotations, or more complex repairs, such as engine overhauls and transmission replacements, we have the skills and expertise to get the job done right.From routine oil changes to complex engine repairs, we offer a wide range of auto repair and maintenance services to meet all of your needs in one convenient location.',
  image : '/image/workersss.jpg'
 },

  reuseCards : {
  title: 'WHAT WE OFFER?',
  subtitle: "OUR SERVICES",
  cards: [
    {
      icon: <GiAutoRepair className="w-4 h-4 lg:w-8 lg:h-8 text-white" />,
      title: 'Brake Repair',
      description: 'Our team is trained and certified to handle all types of repairs and maintenance with precision.'
    },
    {
      icon: <MdTireRepair className="w-4 h-4 lg:w-8 lg:h-8 text-white" />,
      title: 'Quality Service',
      description: 'We ensure top-quality service with genuine parts and the latest tools to keep your vehicle in shape.'
    },
    {
      icon: <MdOutlineHomeRepairService className="w-4 h-4 lg:w-8 lg:h-8 text-white" />,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority — we deliver reliable, honest, and timely service every time.'
    },
    {
      icon: <CiBezier className="w-4 h-4 lg:w-8 lg:h-8 text-white" />,
      title: 'Affordable Pricing',
      description: 'Get the best value for your money with transparent and competitive rates for all services.'
    },
     {
      icon: <MdCarRepair className="w-4 h-4 lg:w-8 lg:h-8 text-white" />,
      title: 'Transmission Repair',
      description: 'Get the best value for your money with transparent and competitive rates for all services.'
    },
     {
      icon: <CiBowlNoodles className="w-4 h-4 lg:w-8 lg:h-8 text-white" />,
      title: 'Tire Services',
      description: 'Get the best value for your money with transparent and competitive rates for all services.'
    },
  ],
},

reuseCards1 : {
  title: 'Why Choose Us?',
  subtitle: "We're Here for Whatever You Need",
  cards: [
    {
      icon: <RiMoneyDollarBoxLine className="  w-4 h-4 lg:w-8 lg:h-8 text-white" />,
      title: 'Competitive Pricing',
      description: 'Our team is trained and certified to handle all types of repairs and maintenance with precision.'
    },
    {
      icon: <BiClinic className="w-4 h-4 lg:w-8 lg:h-8 text-white" />,
      title: 'Quality Service',
      description: 'We ensure top-quality service with genuine parts and the latest tools to keep your vehicle in shape.'
    },
    {
      icon: <BiTimer className="w-4 h-4 lg:w-8 lg:h-8 text-white" />,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority — we deliver reliable, honest, and timely service every time.'
    },
    {
      icon: <TbCalendarTime className="w-4 h-4 lg:w-8 lg:h-8 text-white" />,
      title: 'Affordable Pricing',
      description: 'Get the best value for your money with transparent and competitive rates for all services.'
    },
  ],
},

reusevideo :{
  video : '/video/video.mp4',
  title : 'Get To Known Us',
  subtitle : 'Even Closure',

},

reusevideo1 :{
  video : '/video/worker.mp4',
  title : 'Get To Known Us',
  subtitle : 'Even Closure',

},

moderncards : [
  {
    icon: <FaCogs />,
    title: "Brake Repair",
    description: "Our brake repair services include inspection, diagnosis, and repair of brake components to ensure safe and reliable braking performance."
  },
  {
    icon: <FaTachometerAlt />,
    title: "Transmission Repair",
    description: "Our transmission services include fluid and filter replacement, an inspection of transmission components, and repair or replacement as needed."
  },
  {
    icon: <GiSuspensionBridge />,
    title: "Suspension Repair",
    description: "Our suspension repair services include inspection and repair of worn components, such as shocks and struts, to improve handling and ride comfort."
  },
  {
    icon: <FaOilCan />,
    title: "Oil Change",
    description: "Regular oil changes are essential to keep your engine running smoothly. Our oil change services include the replacement of oil and oil filters with new, high-quality products."
  },
  {
    icon: <FaCarBattery />,
    title: "Electrical Services",
    description: "Our electrical services cover battery diagnostics, alternator repair, and full electrical system inspections for reliable vehicle performance."
  },
  {
    icon: <GiCarWheel />,
    title: "Tire Services",
    description: "Our tire services include tire rotation, balancing, and replacement, as well as alignment services to improve handling and prolong tire life."
  },
  {
    icon: <FaTools />,
    title: "Tune-Ups",
    description: "Engine tune-ups can help extend the life of your vehicle and improve its performance. Our tune-up services include the replacement of spark plugs, filters, and other components as needed."
  },
  {
    icon: <FaWrench />,
    title: "Check Engine",
    description: "Our check engine light diagnostic services include computer analysis of engine codes to determine the cause of any warning lights or indications."
  },
  {
    icon: <GiSteeringWheel />,
    title: "Pre-Purchase Inspections",
    description: "Our pre-purchase inspection services provide an unbiased evaluation of used vehicles, combined to help you make informed purchasing decisions."
  }
],
 
cardsinservice: [
    {

      title: 'Michelin Defender T+H ',
      description: 'Start from.',
      price: '120'
    },
    {

      title: 'GoodYear WeatherReady',
      description: 'Start from.',
      price: '100'
    },
    {
      
      title: 'Bridgestone Turanza QuietTrack',
      description: 'Start from.',
      price: '90'
    },
    {

      title: 'Continental TrueContact Tour',
      description: 'Start from.',
      price: '80'
    },
     {
      
      title: 'Pirelli Cinturato P7',
      description: 'Start from.',
      price: '120'
    },
     {
     
      title: 'Yokohama AVID Ascend GT',
      description: 'Start from.',
      price: '100'
    },
  ],
faqQuestions : [
        {
          id: "what-vehicles",
          question: "What types of vehicles do you service?",
          answer:
            "We service all types of vehicles, including cars, trucks, and SUVs.",
        },
        {
          id: "appointment",
          question: "Do I need an appointment for auto repairs?",
          answer:
            "Appointments are recommended but we also accept walk-ins depending on availability.",
        },
        {
          id: "repair-time",
          question: "How long does it typically take to complete an auto repair?",
          answer:
            "The time depends on the type of repair. Minor services can take a few hours while major repairs may take longer.",
        },
        {
          id: "warranty",
          question: "Do you offer any warranties on your repairs?",
          answer:
            "Yes, we offer warranties on most of our repair services. Please contact us for details.",
        },
        {
          id: "payment",
          question: "What forms of payment do you accept?",
          answer:
            "We accept cash, credit/debit cards, and digital payments.",
        },
      ],
 pricingData1 : [
  {
    id: 1,
    title: "Basic Oil Change",
    price: "$29.99",
    features: [
      "Includes up to 5 quarts of conventional oil",
      "Includes standard oil filter replacement",
      "Tire pressure check and adjustment",
      "Includes basic vehicle inspection",
      "Additional fees may apply for high-mileage or synthetic oil",
    ],
  },
  {
    id: 2,
    title: "Standard Tune-Up",
    price: "$149.99",
    features: [
      "Includes spark plug replacement",
      "Includes an air filter replacement",
      "Includes a fuel filter replacement",
      "Includes PCV valve replacement",
      "Additional fees may apply for distributor cap and rotor replacement",
    ],
  },
  {
    id: 3,
    title: "Brake Service",
    price: "$169.99",
    features: [
      "Includes brake pad replacement",
      "Brake rotor resurfacing or replacement",
      "Brake caliper cleaning and lubrication",
      "Brake fluid flush and replacement",
      "Additional fees may apply for brake line or master cylinder replacement",
    ],
  },
   {
    id: 4,
    title: "Suspension Service",
    price: "$490.99",
    features: [
      "Includes suspension inspection",
      "Shock absorber replacement",
      "Strut replacement",
      "Brake fluid flush and replacement",
      "Includes wheel alignment",
    ],
  },
   {
    id: 5,
    title: "Deluxe Detailing Package",
    price: "$29.99",
    features: [
      "Includes 5 quarts of conventional oil",
      "Include standard oil filter replacement",
      "Includes tire pressure check and adjustment",
      "Thorough interior vacuuming and cleaning",
      "Includes exterior wash and wax",
    ],
  },
   {
    id: 6,
    title: "Basic Oil Change",
    price: "$199.99",
    features: [
      "Includes up to 5 quarts of conventional oil",
      "Oil filter replacement",
      "Oil pan gasket replacement",
      "Includes basic vehicle inspection",
      "Additional fees may apply for brake line or master cylinder replacement",
    ],
  },
],


blogCategories: {
  "Auto World": {
    title: "The Future of Electric Vehicles: What’s Next for the Auto Industry",
    author: "Sarah Johnson",
    date: "June 15, 2023",
    comments: 18,
    breadcrumb: ["Home", "Blog", "Auto World"],
    mainImage: "/image/carss.png",
    introduction:
      "The automotive industry is undergoing a massive transformation as electric vehicles (EVs) take center stage. With innovations in battery technology and sustainable design, EVs are no longer the future — they’re the present. Let’s explore where the industry is heading and what it means for consumers and manufacturers alike.",
    sections: [
      {
        id: 1,
        title: "Advancements in Battery Technology",
        content:
          "Recent breakthroughs in lithium-ion and solid-state batteries have significantly extended EV range and reduced charging times. Companies are now investing in fast-charging networks to make long-distance EV travel more convenient.",
      },
      {
        id: 2,
        title: "Government Incentives Driving Adoption",
        content:
          "Many countries are offering tax credits and subsidies to encourage EV purchases. These initiatives not only help consumers save money but also support the global shift toward cleaner transportation.",
      },
      {
        id: 3,
        title: "Challenges in Charging Infrastructure",
        content:
          "While EV adoption grows, charging infrastructure still lags in many regions. Expanding public charging networks and introducing wireless charging technology are key priorities for the next decade.",
      },
    ],
    conclusion: {
      text:
        "Electric vehicles are shaping the future of mobility. As technology evolves and costs decrease, EVs will soon become the default choice for drivers around the world.",
      quote: "The road ahead is electric — and it's closer than we think.",
    },
    relatedPosts: [
      {
        id: 1,
        title: "Top 10 Electric Cars of 2025",
        author: "John Peters",
        date: "July 1, 2023",
        image: "/image/2.png",
      },
        {
        id: 2,
        title: "Top Employee of Car of 2025",
        author: "Mark Champman",
        date: "July 1, 2023",
        image: "/image/1.png",
      },
    ],
    sidebar: { categories: [{ name: "Auto World", count: 8 }],
         latestPosts: [
        {
          id: 1,
          title: "10 Tips for a Healthier Lifestyle",
          author: "John Doe",
          date: "October 20, 2025",
          image: "/image/1.png",
        },
        {
          id: 2,
          title: "Exploring the Hidden Gems of Northern Pakistan",
          author: "Ayesha Khan",
          date: "October 18, 2025",
          image: "/image/2.png",
        },
        {
          id: 3,
          title: "Sustainable Living: Small Steps, Big Impact",
          author: "Ali Raza",
          date: "October 16, 2025",
          image: "/image/3.png",
        },
        {
          id: 4,
          title: "Top 5 Travel Destinations for 2025",
          author: "Sara Malik",
          date: "October 14, 2025",
          image: "/image/4.png",
        },
      ],

    
      popularTags: [
        "Lifestyle",
        "Travel",
        "Health",
        "Sustainability",
        "Wellness",
        "Adventure",
        "Photography",
        "Food",
        "Nature",
        "Inspiration",
      ],
  
  
  
  },
    articleTags: ["Electric Cars", "Sustainability", "Technology", "Innovation", "Future Mobility"],
    commentsList: [
      {
        id: 1,
        author: "Emily Carter",
        date: "June 20, 2023",
        content: "Very informative! Excited to see how EVs evolve further.",
      },
           {
        id: 2,
        author: "Michael Scott",
        date: "October 30, 2023",
        content: "Great insights on the future of automotive design!",
      },
    ],
    commentForm: {
      title: "Leave a Comment",
      subtitle: "Your email address will not be published. Required fields are marked *",
      agreement: "Save my name, email, and website in this browser for the next time I comment.",
      buttonText: "Post Comment",
    },
  },

  "Auto Finance": {
    title: "How to Secure the Best Auto Loan in 2025",
    author: "Mark Wilson",
    date: "July 2, 2023",
    comments: 14,
    breadcrumb: ["Home", "Blog", "Auto Finance"],
    mainImage: "/image/last.jpg",
    introduction:
      "Buying a car often involves securing financing — but not all auto loans are created equal. Understanding loan terms, interest rates, and lender options can save you thousands over time.",
    sections: [
      {
        id: 1,
        title: "Understanding Your Credit Score",
        content:
          "Your credit score plays a major role in determining your loan’s interest rate. Check your credit report for errors and take steps to improve your score before applying.",
      },
      {
        id: 2,
        title: "Comparing Lenders and Loan Terms",
        content:
          "Shop around among banks, credit unions, and online lenders. Small differences in interest rates or loan durations can make a big financial impact over time.",
      },
      {
        id: 3,
        title: "Avoiding Common Financing Traps",
        content:
          "Watch out for long-term loans with low monthly payments but high total interest costs. Always calculate the total price, not just the monthly figure.",
      },
    ],
    conclusion: {
      text:
        "With proper research and financial planning, securing a favorable auto loan is entirely achievable. Stay informed, compare options, and negotiate terms that work best for your budget.",
      quote: "Smart financing starts with informed decisions.",
    },
    relatedPosts: [
      {
        id: 1,
        title: "Top 5 Banks Offering Low-Interest Car Loans",
        author: "Amanda Green",
        date: "August 15, 2023",
        image: "/image/3.png",
      },
           {
        id: 2,
        title: "Top Car Wishers of 2025",
        author: "Michael Scott",
        date: "October 30, 2023",
        content: "Great insights on the future of automotive design!",
        image: "/image/2.png",
      },
    ],
    sidebar: { categories: [{ name: "Auto Finance", count: 6 }],
     latestPosts: [
        {
          id: 1,
          title: "10 Tips for a Healthier Lifestyle",
          author: "John Doe",
          date: "October 20, 2025",
          image: "/image/1.png",
        },
        {
          id: 2,
          title: "Exploring the Hidden Gems of Northern Pakistan",
          author: "Ayesha Khan",
          date: "October 18, 2025",
          image: "/image/2.png",
        },
        {
          id: 3,
          title: "Sustainable Living: Small Steps, Big Impact",
          author: "Ali Raza",
          date: "October 16, 2025",
          image: "/image/3.png",
        },
        {
          id: 4,
          title: "Top 5 Travel Destinations for 2025",
          author: "Sara Malik",
          date: "October 14, 2025",
          image: "/image/4.png",
        },
      ],

    
      popularTags: [
        "Lifestyle",
        "Travel",
        "Health",
        "Sustainability",
        "Wellness",
        "Adventure",
        "Photography",
        "Food",
        "Nature",
        "Inspiration",
      ],
  
  
  },
    articleTags: ["Finance", "Car Loans", "Budgeting", "Interest Rates", "Money Management"],
    commentsList: [
      {
        id: 1,
        author: "James Walker",
        date: "July 5, 2023",
        content: "Excellent breakdown — comparing lenders really helped me!",
      },
    ],
    commentForm: {
      title: "Leave a Comment",
      subtitle: "Your email address will not be published. Required fields are marked *",
      agreement: "Save my name, email, and website in this browser for the next time I comment.",
      buttonText: "Post Comment",
    },
  },

  "Auto Trend": {
    title: "Top Automotive Trends Shaping 2025",
    author: "Rebecca Miles",
    date: "August 10, 2023",
    comments: 27,
    breadcrumb: ["Home", "Blog", "Auto Trend"],
    mainImage: "/image/about.png",
    introduction:
      "The automotive industry is changing faster than ever — from smart connectivity to AI-driven driving systems. Let’s explore the key trends revolutionizing how we drive and experience cars.",
    sections: [
      {
        id: 1,
        title: "Autonomous Driving Takes a Leap",
        content:
          "Self-driving technology is evolving rapidly, with Level 4 autonomy now being tested in major cities. AI and LiDAR are making vehicles smarter and safer than ever.",
      },
      {
        id: 2,
        title: "Rise of Connected Vehicles",
        content:
          "Cars are now integrated with IoT, enabling over-the-air updates, real-time diagnostics, and enhanced entertainment options. Connectivity is becoming the new standard.",
      },
      {
        id: 3,
        title: "Sustainable Manufacturing",
        content:
          "Automakers are focusing on eco-friendly materials and carbon-neutral production processes to align with environmental goals.",
      },
    ],
    conclusion: {
      text:
        "The automotive landscape is evolving toward a connected, intelligent, and sustainable future. Embracing these trends early can give consumers and companies a competitive edge.",
      quote: "Innovation drives the auto industry — literally.",
    },
    relatedPosts: [
      {
        id: 1,
        title: "AI in Cars: The Next Big Step",
        author: "Tom Richards",
        date: "August 25, 2023",
        image: "/image/3.png",
      },
         {
        id: 2,
        title: "Top Employee of Car of 2025",
        author: "Mark Champman",
        date: "July 1, 2023",
        image: "/image/1.png",
      },
    ],
    sidebar: { categories: [{ name: "Auto Trend", count: 4 }],
     latestPosts: [
        {
          id: 1,
          title: "10 Tips for a Healthier Lifestyle",
          author: "John Doe",
          date: "October 20, 2025",
          image: "/image/1.png",
        },
        {
          id: 2,
          title: "Exploring the Hidden Gems of Northern Pakistan",
          author: "Ayesha Khan",
          date: "October 18, 2025",
          image: "/image/2.png",
        },
        {
          id: 3,
          title: "Sustainable Living: Small Steps, Big Impact",
          author: "Ali Raza",
          date: "October 16, 2025",
          image: "/image/3.png",
        },
        {
          id: 4,
          title: "Top 5 Travel Destinations for 2025",
          author: "Sara Malik",
          date: "October 14, 2025",
          image: "/image/4.png",
        },
      ],

    
      popularTags: [
        "Lifestyle",
        "Travel",
        "Health",
        "Sustainability",
        "Wellness",
        "Adventure",
        "Photography",
        "Food",
        "Nature",
        "Inspiration",
      ], },
    articleTags: ["Technology", "AI", "Autonomous Cars", "Innovation", "Future Trends"],
    commentsList: [
      {
        id: 1,
        author: "Sophia Lee",
        date: "August 15, 2023",
        content: "Great insights — love reading about connected vehicle tech!",
      },
           {
        id: 2,
        author: "Michael Scott",
        date: "October 30, 2023",
        content: "Great insights on the future of automotive design!",
      },
    ],
    commentForm: {
      title: "Leave a Comment",
      subtitle: "Your email address will not be published. Required fields are marked *",
      agreement: "Save my name, email, and website in this browser for the next time I comment.",
      buttonText: "Post Comment",
    },
  },

  "Auto Tips": {
    title: "Essential Car Care Tips Every Driver Should Know",
    author: "David Brown",
    date: "September 1, 2023",
    comments: 19,
    breadcrumb: ["Home", "Blog", "Auto Tips"],
    mainImage: "/image/bloger.png",
    introduction:
      "Proper vehicle care can prevent costly repairs and extend your car’s lifespan. Whether you’re a new or experienced driver, these essential tips will keep your vehicle in great condition year-round.",
    sections: [
      {
        id: 1,
        title: "Check Tire Pressure Regularly",
        content:
          "Incorrect tire pressure can affect fuel efficiency and handling. Make sure to check and adjust it at least once a month.",
      },
      {
        id: 2,
        title: "Replace Wiper Blades Annually",
        content:
          "Visibility is crucial. Replace your wiper blades at least once a year or sooner if they streak or squeak.",
      },
      {
        id: 3,
        title: "Keep Up With Oil Changes",
        content:
          "Regular oil changes ensure engine longevity and performance. Always follow your manufacturer’s recommended interval.",
      },
    ],
    conclusion: {
      text:
        "Small maintenance habits can lead to big savings over time. Treat your car with care, and it will reward you with reliability and safety.",
      quote: "A well-maintained car is a dependable companion on every journey.",
    },
    relatedPosts: [
      {
        id: 1,
        title: "10 DIY Car Maintenance Tasks You Can Do at Home",
        author: "Lisa Ray",
        date: "September 12, 2023",
        image: "/image/3.png",
      },
         {
        id: 2,
        title: "Top Employee of Car of 2025",
        author: "Mark Champman",
        date: "July 1, 2023",
        image: "/image/4.png",
      },
    ],
    sidebar: { categories: [{ name: "Auto Tips", count: 7 }],
       latestPosts: [
        {
          id: 1,
          title: "10 Tips for a Healthier Lifestyle",
          author: "John Doe",
          date: "October 20, 2025",
          image: "/image/1.png",
        },
        {
          id: 2,
          title: "Exploring the Hidden Gems of Northern Pakistan",
          author: "Ayesha Khan",
          date: "October 18, 2025",
          image: "/image/2.png",
        },
        {
          id: 3,
          title: "Sustainable Living: Small Steps, Big Impact",
          author: "Ali Raza",
          date: "October 16, 2025",
          image: "/image/3.png",
        },
        {
          id: 4,
          title: "Top 5 Travel Destinations for 2025",
          author: "Sara Malik",
          date: "October 14, 2025",
          image: "/image/4.png",
        },
      ],

    
      popularTags: [
        "Lifestyle",
        "Travel",
        "Health",
        "Sustainability",
        "Wellness",
        "Adventure",
        "Photography",
        "Food",
        "Nature",
        "Inspiration",
      ],
  
  
  },
    articleTags: ["Maintenance", "Car Care", "DIY", "Driving Safety", "Performance"],
    commentsList: [
      {
        id: 1,
        author: "Michael Ross",
        date: "September 5, 2023",
        content: "These simple reminders are incredibly useful — thank you!",
      },
           {
        id: 2,
        author: "Michael Scott",
        date: "October 30, 2023",
        content: "Great insights on the future of automotive design!",
      },
    ],
    commentForm: {
      title: "Leave a Comment",
      subtitle: "Your email address will not be published. Required fields are marked *",
      agreement: "Save my name, email, and website in this browser for the next time I comment.",
      buttonText: "Post Comment",
    },
  },

  "Business": {
    title: "The Auto Industry’s Economic Impact in 2025",
    author: "Clara Hughes",
    date: "October 5, 2023",
    comments: 22,
    breadcrumb: ["Home", "Blog", "Business"],
    mainImage: "/image/second.png",
    introduction:
      "The automotive sector remains a vital contributor to global GDP. From job creation to technological innovation, the industry continues to fuel economic growth despite evolving market challenges.",
    sections: [
      {
        id: 1,
        title: "Employment and Supply Chain",
        content:
          "Millions of people worldwide are employed in automotive manufacturing, logistics, and services. Supply chain improvements are driving greater efficiency and resilience.",
      },
      {
        id: 2,
        title: "Investment in Green Technologies",
        content:
          "Automakers are pouring billions into research and development of EVs, hydrogen fuel, and renewable energy integration — reshaping business models and long-term profitability.",
      },
      {
        id: 3,
        title: "Global Market Shifts",
        content:
          "Emerging markets are becoming major players in production and sales. This globalization fosters competition but also new opportunities for collaboration.",
      },
    ],
    conclusion: {
      text:
        "The automotive industry’s role in economic stability and innovation is undeniable. Businesses that adapt to sustainability trends will lead the next wave of growth.",
      quote: "The business of cars drives the business of nations.",
    },
    relatedPosts: [
      {
        id: 1,
        title: "How Startups Are Disrupting Auto Manufacturing",
        author: "John Ellis",
        date: "October 18, 2023",
        image: "/image/2.png",
      },
         {
        id: 2,
        title: "Top Employee of Car of 2025",
        author: "Mark Champman",
        date: "July 1, 2023",
        image: "/image/1.png",
      },
    ],
    sidebar: { categories: [{ name: "Business", count: 5 }],
  
       latestPosts: [
        {
          id: 1,
          title: "10 Tips for a Healthier Lifestyle",
          author: "John Doe",
          date: "October 20, 2025",
          image: "/image/1.png",
        },
        {
          id: 2,
          title: "Exploring the Hidden Gems of Northern Pakistan",
          author: "Ayesha Khan",
          date: "October 18, 2025",
          image: "/image/2.png",
        },
        {
          id: 3,
          title: "Sustainable Living: Small Steps, Big Impact",
          author: "Ali Raza",
          date: "October 16, 2025",
          image: "/image/3.png",
        },
        {
          id: 4,
          title: "Top 5 Travel Destinations for 2025",
          author: "Sara Malik",
          date: "October 14, 2025",
          image: "/image/4.png",
        },
      ],

    
      popularTags: [
        "Lifestyle",
        "Travel",
        "Health",
        "Sustainability",
        "Wellness",
        "Adventure",
        "Photography",
        "Food",
        "Nature",
        "Inspiration",
      ],
  
  },
    articleTags: ["Economy", "Automotive Industry", "Innovation", "Sustainability", "Market Trends"],
    commentsList: [
      {
        id: 1,
        author: "Sophia Lee",
        date: "October 10, 2023",
        content: "Excellent overview of the economic side of the auto world.",
      },
           {
        id: 2,
        author: "Michael Scott",
        date: "October 30, 2023",
        content: "Great insights on the future of automotive design!",
      },
    ],
    commentForm: {
      title: "Leave a Comment",
      subtitle: "Your email address will not be published. Required fields are marked *",
      agreement: "Save my name, email, and website in this browser for the next time I comment.",
      buttonText: "Post Comment",
    },
  },

  "Life Style": {
    title: "How Cars Influence Modern Lifestyle Choices",
    author: "Rachel Green",
    date: "November 2, 2023",
    comments: 16,
    breadcrumb: ["Home", "Blog", "Life Style"],
    mainImage: "/image/tire.jpg",
    introduction:
      "Cars have become more than just transportation — they’re a reflection of our personalities, values, and social lives. Let’s explore how modern vehicles are shaping lifestyle trends in 2025.",
    sections: [
      {
        id: 1,
        title: "Car Design as a Fashion Statement",
        content:
          "Sleek interiors, sustainable materials, and minimalist designs are making cars a part of personal expression, not just mobility.",
      },
      {
        id: 2,
        title: "Rise of Digital Nomad Mobility",
        content:
          "With remote work on the rise, many people are turning their cars into mobile offices, combining travel and productivity like never before.",
      },
      {
        id: 3,
        title: "Luxury Meets Sustainability",
        content:
          "Eco-conscious luxury vehicles are gaining popularity. Consumers now expect comfort and style that align with environmental values.",
      },
    ],
    conclusion: {
      text:
        "Cars continue to shape how we live, work, and connect. The fusion of technology and lifestyle is redefining what mobility means for the modern generation.",
      quote: "Your car says as much about your lifestyle as your home does.",
    },
    relatedPosts: [
      {
        id: 1,
        title: "Top Luxury EVs Defining 2025",
        author: "Alex Turner",
        date: "November 20, 2023",
        image: "/image/4.png",
      },
         {
        id: 2,
        title: "Top sports Car of 2025",
        author: "Mark Wood",
        date: "June 12, 2021",
        image: "/image/3.png",
      },
         {
        id: 3,
        title: "Best redesign of Car of 2025",
        author: "Jimmy Fallon",
        date: "Dec 25, 2023",
        image: "/image/2.png",
      },
         {
        id: 4,
        title: "Top quality of Car of 2025",
        author: "Azhar Ali",
        date: "Jan 19, 2022",
        image: "/image/1.png",
      },
    ],




    sidebar: {
     
      categories: [
        { name: "Life Style", count: 6 },
        { name: "Travel", count: 4 },
        { name: "Sustainability", count: 3 },
      ],

   
      latestPosts: [
        {
          id: 1,
          title: "10 Tips for a Healthier Lifestyle",
          author: "John Doe",
          date: "October 20, 2025",
          image: "/image/1.png",
        },
        {
          id: 2,
          title: "Exploring the Hidden Gems of Northern Pakistan",
          author: "Ayesha Khan",
          date: "October 18, 2025",
          image: "/image/2.png",
        },
        {
          id: 3,
          title: "Sustainable Living: Small Steps, Big Impact",
          author: "Ali Raza",
          date: "October 16, 2025",
          image: "/image/3.png",
        },
        {
          id: 4,
          title: "Top 5 Travel Destinations for 2025",
          author: "Sara Malik",
          date: "October 14, 2025",
          image: "/image/4.png",
        },
      ],

    
      popularTags: [
        "Lifestyle",
        "Travel",
        "Health",
        "Sustainability",
        "Wellness",
        "Adventure",
        "Photography",
        "Food",
        "Nature",
        "Inspiration",
      ],
    },







    articleTags: ["Lifestyle", "Travel", "Luxury Cars", "Design", "Innovation"],
    commentsList: [
      {
        id: 1,
        author: "Emily Carter",
        date: "November 10, 2023",
        content: "Loved how this connects lifestyle and mobility — great read!",
      },
         {
        id: 2,
        author: "Michael Scott",
        date: "October 30, 2023",
        content: "Great insights on the future of automotive design!",
      },
    ],
    commentForm: {
      title: "Leave a Comment",
      subtitle: "Your email address will not be published. Required fields are marked *",
      agreement: "Save my name, email, and website in this browser for the next time I comment.",
      buttonText: "Post Comment",
    },
  },
}


  
 




};
export default Landingpage;