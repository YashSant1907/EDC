// ==========================================
// 1. IMAGE IMPORTS (For Faculty & Team)
// ==========================================
import Aaditi from "../assets/Aaditi.jpeg";
import imgNaveen from '../assets/naveensir.jpeg';
import imgMamta from '../assets/mamta.jpeg';
import amn from "../assets/amn.jpeg";
import pratham from "../assets/pratham.jpeg";
import pratyush from "../assets/pratyush.jpeg";
import prashant7ft from "../assets/prashant7ft.jpeg";
import Div from "../assets/div.jpeg";
import satu from "../assets/satu.jpeg";
import yash from "../assets/yashu.jpeg";
import anmol from "../assets/anmol.jpeg";
import nidhi from "../assets/nidhi.jpeg";
import harshu from "../assets/harsh.jpeg";
import mukul from "../assets/mukul.jpeg";
import niku from "../assets/niku.jpeg";
import tanisha from "../assets/tanisha.jpeg";

import ideathon from "../assets/ideathon.jpeg"
import ipccmeet from "../assets/ipccmeet.jpeg"
import tiecoon from "../assets/eventTiecon.jpeg"
import churcha from "../assets/churcha.jpeg"
import summit from "../assets/summit.jpeg"

// ==========================================
// 2. EVENTS DATA (Fixes the Initiatives Error)
// ==========================================

export const upcomingEvents = [
  {
    id: 1,
    title: "Huge Ideathon 2025",
    description: "The biggest ideation competition of the year! Present your groundbreaking ideas and compete for exciting prizes. Connect with mentors, investors, and fellow innovators.",
    isHighlighted: true,
    poster: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "February 2025 (Date TBD)"
  },
  {
    id: 2,
    title: "E-Summit 2025",
    description: "Annual Entrepreneurship Summit bringing together industry leaders, successful entrepreneurs, and aspiring founders. Experience keynote sessions, panel discussions, startup exhibitions, and networking opportunities.",
    isHighlighted: true,
    poster: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2025 (Date TBD)"
  }
];

export const pastEvents = [
  {
    id: 3,
    title: "ICC Regional Meet",
    description: "Brought students, investors, and founders together for startup interactions and networking opportunities.",
    images:[ ipccmeet]
  },
  {
    id: 4,
    title: "Charcha",
    description: "Interactive discussions on trending startup topics including Q-Commerce, AI in business, and sustainable entrepreneurship.",
    images: [churcha]
    
  },
  {
    id: 5,
    title: "E-Summit",
    description: "A grand platform where top founders, CEOs, and innovators share their entrepreneurial journey and insights.",
    images: [summit    ]
  },
  
  {
    id: 6,
    title: "TiECON Chandigarh",
    description: "Theme 'Thrive Empower Nurture' - offering networking with industry leaders and global innovators.",
    images: [tiecoon ]
  },
  {
    id: 7,
    title: "Ideathon 2024",
    description: "The biggest ideation competition of the year! Present your groundbreaking ideas and compete for exciting prizes. Connect with mentors, investors, and fellow innovators.",
    images: [ideathon]
  }
];

// ==========================================
// 3. FACULTY DATA
// ==========================================

export const facultyIncharge = [
  {
    id: 1,
    name: "Dr. Naveen Aggarwal",
    designation: "Faculty Incharge, EDC UIET",
    role: "Professor, CSE | Coordinator, DIC",
    image: imgNaveen,
    description: "Dr. Naveen Aggarwal is a Professor of Computer Science and Engineering at UIET with over 23 years of experience. He serves as the Coordinator of the Design Innovation Centre and leads the Panjab University Incubation Centre. An alumnus of IIT Kharagpur and ISB Hyderabad, he has 185+ publications, 2 granted patents, and has managed projects worth over ₹10 Crores.",
    highlights: [
      { icon: "🎯", text: "23+ Years Experience" },
      { icon: "💰", text: "₹10 Cr+ Projects" },
      { icon: "📜", text: "2 Patents Granted" }
    ]
  },
  {
    id: 2,
    name: "Prof. Mamta Juneja",
    designation: "Faculty Incharge, EDC UIET",
    role: "Professor | Researcher | Innovator",
    image: imgMamta,
    description: "Prof. Mamta Juneja has over 22 years of experience in AI, IoT, and Medical Devices. She holds 3 patents in Smart Medical Devices and has received multiple startup grants. She has secured ₹10 Crores in funding from the Ministry of Education and other agencies. Her expertise in research commercialization provides vital guidance to student founders.",
    highlights: [
      { icon: "", text: "Medical Device Innovation" },
      { icon: "", text: "3 Patents Held" },
      { icon: "", text: "2 Startup Grants" }
    ]
  }
];

// ==========================================
// 4. TEAM DATA
// ==========================================

export const coreTeam = [
  {
    id: 1,
    name: "Nidhi Verma",
    role: "President",
    image: nidhi,
    bio: "Leading EDC UIET towards greater heights"
  },
  {
    id: 2,
    name: "Yash Kumar Sant",
    role: "Vice President",
    image: yash,
    bio: "Driving innovation and growth"
  },
  {
    id: 3,
    name: "Mukul Bhardwaj",
    role: "Vice President",
    image: mukul,
    bio: "Building bridges between ideas and execution"
  },
  {
    id: 4,
    name: "Aaditi Malik",
    role: "Secretary",
    image: Aaditi,
    bio: "Ensuring seamless operations"
  }
];

export const departmentLeads = [
  {
    id: 1,
    name: "Pratham Mahajan",
    role: "Department Lead",
    department: "Logistics",
    image: pratham,
    bio: "Managing events and operations"
  },
  {
    id: 2,
    name: "Prashant Chaudhary",
    role: "Department Lead",
    department: "Logistics",
    image: prashant7ft,
    bio: "Coordinating seamless event execution"
  },
  {
    id: 3,
    name: "Amanpreet Kaur",
    role: "Department Lead",
    department: "PR and Marketing",
    image: amn,
    bio: "Building brand presence"
  },
  {
    id: 4,
    name: "Pratyush Kumar",
    role: "Department Lead",
    department: "PR and Marketing",
    image: pratyush,
    bio: "Crafting compelling narratives"
  },
  {
    id: 5,
    name: "Anmol Malhotra",
    role: "Department Lead",
    department: "Finance and Database",
    image: anmol,
    bio: "Managing financial operations"
  },
  {
    id: 6,
    name: "Nikunj Singla",
    role: "Department Lead",
    department: "Finance and Database",
    image: niku,
    bio: "Maintaining data integrity"
  },
  {
    id: 7,
    name: "Tanisha Singh",
    role: "Department Lead",
    department: "Social Media and Design",
    image: tanisha,
    bio: "Creating visual stories"
  },
  {
    id: 8,
    name: "Tathagat Satyam",
    role: "Department Lead",
    department: "Social Media and Design",
    image: satu,
    bio: "Designing engaging content"
  },
  {
    id: 9,
    name: "Harsh Saxena",
    role: "Department Lead",
    department: "Tech Innovation",
    image: harshu,
    bio: "Driving technological advancement"
  },
  {
    id: 10,
    name: "Divyansh Attri",
    role: "Department Lead",
    department: "Tech Innovation",
    image: Div,
    bio: "Building innovative solutions"
  }
];