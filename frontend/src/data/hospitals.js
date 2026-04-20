// Real Pakistani hospital data — used for demo panel listing.
// Note: sample seed for frontend demo. Production data should be managed via backend/CMS.

export const CITIES = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Peshawar",
    "Quetta",
    "Multan",
    "Faisalabad",
    "Bahawalpur",
    "Hyderabad",
];

export const PROVINCES = [
    "Sindh",
    "Punjab",
    "Islamabad Capital Territory",
    "Khyber Pakhtunkhwa",
    "Balochistan",
];

export const FACILITY_TYPES = [
    "Multi-Specialty Hospital",
    "Teaching Hospital",
    "Tertiary Care",
    "Specialty Hospital",
    "General Hospital",
    "Cancer Centre",
    "Cardiac Centre",
];

export const SPECIALTIES = [
    "Cardiology",
    "Oncology",
    "Orthopedics",
    "Neurology",
    "Pediatrics",
    "Gynae & Obs",
    "Nephrology",
    "General Surgery",
    "Pulmonology",
    "Gastroenterology",
    "ENT",
    "Emergency",
    "Dermatology",
    "Urology",
];

const h = (i, data) => ({ id: `h-${i}`, ...data });

export const HOSPITALS = [
    h(1, { name: "Aga Khan University Hospital", city: "Karachi", province: "Sindh", type: "Teaching Hospital", specialties: ["Cardiology","Oncology","Neurology","General Surgery","Pediatrics"], opd: true, ipd: true, cashless: true, address: "Stadium Road, Karachi", phone: "+92 21 3486 4000", email: "info@aku.edu", featured: true }),
    h(2, { name: "Shaukat Khanum Memorial Cancer Hospital", city: "Lahore", province: "Punjab", type: "Cancer Centre", specialties: ["Oncology"], opd: true, ipd: true, cashless: true, address: "7-A Block R-3, Johar Town, Lahore", phone: "+92 42 3590 5000", email: "info@skm.org.pk", featured: true }),
    h(3, { name: "Liaquat National Hospital", city: "Karachi", province: "Sindh", type: "Multi-Specialty Hospital", specialties: ["Cardiology","Oncology","Orthopedics","Gynae & Obs","Nephrology"], opd: true, ipd: true, cashless: true, address: "Stadium Road, Karachi", phone: "+92 21 3444 1000", email: "info@lnh.edu.pk" }),
    h(4, { name: "The Indus Hospital", city: "Karachi", province: "Sindh", type: "Tertiary Care", specialties: ["General Surgery","Pediatrics","Emergency","Oncology"], opd: true, ipd: true, cashless: true, address: "Plot C-76, Sector 31/5, Korangi, Karachi", phone: "+92 21 3511 2709" }),
    h(5, { name: "Patel Hospital", city: "Karachi", province: "Sindh", type: "Multi-Specialty Hospital", specialties: ["Cardiology","General Surgery","Orthopedics"], opd: true, ipd: true, cashless: false, address: "ST-18, Block 4, Gulshan-e-Iqbal, Karachi", phone: "+92 21 111 174 174" }),
    h(6, { name: "South City Hospital", city: "Karachi", province: "Sindh", type: "Specialty Hospital", specialties: ["Orthopedics","Gynae & Obs","Urology"], opd: true, ipd: true, cashless: true, address: "Block 3, Clifton, Karachi", phone: "+92 21 3530 0051" }),
    h(7, { name: "Ziauddin Hospital", city: "Karachi", province: "Sindh", type: "Multi-Specialty Hospital", specialties: ["Cardiology","Oncology","Pediatrics","Neurology"], opd: true, ipd: true, cashless: true, address: "4/B Shahrah-e-Ghalib, Clifton, Karachi", phone: "+92 21 3536 0083" }),
    h(8, { name: "National Medical Centre", city: "Karachi", province: "Sindh", type: "Multi-Specialty Hospital", specialties: ["Cardiology","General Surgery","ENT"], opd: true, ipd: true, cashless: false, address: "PECHS Block 6, Karachi", phone: "+92 21 3439 3215" }),
    h(9, { name: "Memon Medical Institute Hospital", city: "Karachi", province: "Sindh", type: "Multi-Specialty Hospital", specialties: ["General Surgery","Nephrology","Gynae & Obs"], opd: true, ipd: true, cashless: true, address: "Plot A/1, ST-1, Bahadurabad, Karachi", phone: "+92 21 111 664 664" }),
    h(10, { name: "National Institute of Cardiovascular Diseases (NICVD)", city: "Karachi", province: "Sindh", type: "Cardiac Centre", specialties: ["Cardiology"], opd: true, ipd: true, cashless: true, address: "Rafiqui H.J. Shaheed Road, Karachi", phone: "+92 21 9920 1271" }),
    h(11, { name: "Jinnah Postgraduate Medical Centre", city: "Karachi", province: "Sindh", type: "Tertiary Care", specialties: ["Emergency","General Surgery","Neurology","Cardiology"], opd: true, ipd: true, cashless: true, address: "Rafiqui Shaheed Road, Karachi", phone: "+92 21 9920 1300" }),
    h(12, { name: "Orthopedic & Medical Institute", city: "Karachi", province: "Sindh", type: "Specialty Hospital", specialties: ["Orthopedics"], opd: true, ipd: true, cashless: false, address: "Nishtar Road, Karachi", phone: "+92 21 3272 7272" }),
    h(13, { name: "Civil Hospital Karachi", city: "Karachi", province: "Sindh", type: "Tertiary Care", specialties: ["Emergency","General Surgery","Pediatrics","Gynae & Obs"], opd: true, ipd: true, cashless: true, address: "Baba-e-Urdu Road, Karachi", phone: "+92 21 9921 5740" }),
    h(14, { name: "Shalamar Hospital", city: "Lahore", province: "Punjab", type: "Multi-Specialty Hospital", specialties: ["Cardiology","Oncology","Gynae & Obs","Pediatrics"], opd: true, ipd: true, cashless: true, address: "Shalimar Link Road, Lahore", phone: "+92 42 3578 4590" }),
    h(15, { name: "Sheikh Zayed Hospital", city: "Lahore", province: "Punjab", type: "Tertiary Care", specialties: ["Nephrology","Cardiology","General Surgery"], opd: true, ipd: true, cashless: true, address: "University Avenue, Lahore", phone: "+92 42 9203 1011" }),
    h(16, { name: "Services Hospital", city: "Lahore", province: "Punjab", type: "Teaching Hospital", specialties: ["Emergency","General Surgery","Orthopedics","Gynae & Obs"], opd: true, ipd: true, cashless: true, address: "Jail Road, Lahore", phone: "+92 42 9920 3402" }),
    h(17, { name: "Mayo Hospital", city: "Lahore", province: "Punjab", type: "Teaching Hospital", specialties: ["Emergency","Cardiology","General Surgery","Pediatrics"], opd: true, ipd: true, cashless: true, address: "Hospital Road, Lahore", phone: "+92 42 9921 1100" }),
    h(18, { name: "Jinnah Hospital Lahore", city: "Lahore", province: "Punjab", type: "Teaching Hospital", specialties: ["Cardiology","Emergency","Neurology"], opd: true, ipd: true, cashless: true, address: "Faisal Town, Lahore", phone: "+92 42 9923 1400" }),
    h(19, { name: "Doctors Hospital", city: "Lahore", province: "Punjab", type: "Multi-Specialty Hospital", specialties: ["Cardiology","Orthopedics","Gynae & Obs","Urology"], opd: true, ipd: true, cashless: true, address: "152-G/1 Canal Bank, Johar Town, Lahore", phone: "+92 42 3513 2500" }),
    h(20, { name: "Hameed Latif Hospital", city: "Lahore", province: "Punjab", type: "Multi-Specialty Hospital", specialties: ["Gynae & Obs","Pediatrics","General Surgery"], opd: true, ipd: true, cashless: false, address: "14 Abu Bakar Block, New Garden Town, Lahore", phone: "+92 42 111 000 043" }),
    h(21, { name: "Fatima Memorial Hospital", city: "Lahore", province: "Punjab", type: "Teaching Hospital", specialties: ["Gynae & Obs","Cardiology","Pediatrics"], opd: true, ipd: true, cashless: true, address: "Shadman, Lahore", phone: "+92 42 111 111 664" }),
    h(22, { name: "Ittefaq Hospital", city: "Lahore", province: "Punjab", type: "Multi-Specialty Hospital", specialties: ["Cardiology","General Surgery","Nephrology"], opd: true, ipd: true, cashless: true, address: "Model Town, Lahore", phone: "+92 42 111 111 484" }),
    h(23, { name: "Evercare Hospital", city: "Lahore", province: "Punjab", type: "Multi-Specialty Hospital", specialties: ["Cardiology","Oncology","Orthopedics","Neurology"], opd: true, ipd: true, cashless: true, address: "Defence Road, Bhobatian Chowk, Lahore", phone: "+92 42 111 227 333", featured: true }),
    h(24, { name: "National Hospital & Medical Centre", city: "Lahore", province: "Punjab", type: "Multi-Specialty Hospital", specialties: ["Orthopedics","Urology","General Surgery"], opd: true, ipd: true, cashless: false, address: "DHA Phase 1, Lahore", phone: "+92 42 3569 1000" }),
    h(25, { name: "CMH Lahore", city: "Lahore", province: "Punjab", type: "Tertiary Care", specialties: ["Emergency","Cardiology","General Surgery","Oncology"], opd: true, ipd: true, cashless: true, address: "Saddar, Lahore Cantt", phone: "+92 42 3666 8118" }),
    h(26, { name: "Shifa International Hospital", city: "Islamabad", province: "Islamabad Capital Territory", type: "Multi-Specialty Hospital", specialties: ["Cardiology","Oncology","Nephrology","Neurology"], opd: true, ipd: true, cashless: true, address: "Sector H-8/4, Islamabad", phone: "+92 51 846 4646", featured: true }),
    h(27, { name: "Kulsum International Hospital", city: "Islamabad", province: "Islamabad Capital Territory", type: "Multi-Specialty Hospital", specialties: ["Gynae & Obs","Pediatrics","General Surgery"], opd: true, ipd: true, cashless: true, address: "Blue Area, Islamabad", phone: "+92 51 260 5530" }),
    h(28, { name: "Maroof International Hospital", city: "Islamabad", province: "Islamabad Capital Territory", type: "Multi-Specialty Hospital", specialties: ["Cardiology","Orthopedics","ENT"], opd: true, ipd: true, cashless: true, address: "F-10 Markaz, Islamabad", phone: "+92 51 234 0746" }),
    h(29, { name: "Quaid-e-Azam International Hospital", city: "Islamabad", province: "Islamabad Capital Territory", type: "Multi-Specialty Hospital", specialties: ["Cardiology","Gynae & Obs","Pediatrics","Emergency"], opd: true, ipd: true, cashless: false, address: "Golra Road, Islamabad", phone: "+92 51 222 5555" }),
    h(30, { name: "PIMS (Pakistan Institute of Medical Sciences)", city: "Islamabad", province: "Islamabad Capital Territory", type: "Tertiary Care", specialties: ["Emergency","Oncology","Cardiology","General Surgery"], opd: true, ipd: true, cashless: true, address: "G-8/3, Islamabad", phone: "+92 51 926 1170" }),
    h(31, { name: "CMH Rawalpindi", city: "Rawalpindi", province: "Punjab", type: "Tertiary Care", specialties: ["Emergency","Cardiology","Oncology","Neurology"], opd: true, ipd: true, cashless: true, address: "The Mall, Rawalpindi Cantt", phone: "+92 51 561 2000" }),
    h(32, { name: "Holy Family Hospital", city: "Rawalpindi", province: "Punjab", type: "Teaching Hospital", specialties: ["Emergency","Gynae & Obs","Pediatrics","General Surgery"], opd: true, ipd: true, cashless: true, address: "Satellite Town, Rawalpindi", phone: "+92 51 929 0319" }),
    h(33, { name: "Benazir Bhutto Hospital", city: "Rawalpindi", province: "Punjab", type: "Teaching Hospital", specialties: ["Emergency","Gynae & Obs","Pediatrics"], opd: true, ipd: true, cashless: true, address: "Murree Road, Rawalpindi", phone: "+92 51 927 5498" }),
    h(34, { name: "Rawalpindi Institute of Cardiology", city: "Rawalpindi", province: "Punjab", type: "Cardiac Centre", specialties: ["Cardiology"], opd: true, ipd: true, cashless: true, address: "Rawal Road, Rawalpindi", phone: "+92 51 924 1172" }),
    h(35, { name: "Lady Reading Hospital", city: "Peshawar", province: "Khyber Pakhtunkhwa", type: "Tertiary Care", specialties: ["Emergency","Cardiology","Oncology","Neurology","General Surgery"], opd: true, ipd: true, cashless: true, address: "Soekarno Chowk, Peshawar", phone: "+92 91 921 1230" }),
    h(36, { name: "Hayatabad Medical Complex", city: "Peshawar", province: "Khyber Pakhtunkhwa", type: "Teaching Hospital", specialties: ["Cardiology","Nephrology","General Surgery","Pediatrics"], opd: true, ipd: true, cashless: true, address: "Phase-IV, Hayatabad, Peshawar", phone: "+92 91 921 3955" }),
    h(37, { name: "Rehman Medical Institute", city: "Peshawar", province: "Khyber Pakhtunkhwa", type: "Multi-Specialty Hospital", specialties: ["Cardiology","Orthopedics","General Surgery","Oncology"], opd: true, ipd: true, cashless: true, address: "Phase-V, Hayatabad, Peshawar", phone: "+92 91 584 0300" }),
    h(38, { name: "Northwest General Hospital", city: "Peshawar", province: "Khyber Pakhtunkhwa", type: "Multi-Specialty Hospital", specialties: ["Cardiology","Neurology","Orthopedics"], opd: true, ipd: true, cashless: false, address: "Sector A-3, Phase-V, Hayatabad, Peshawar", phone: "+92 91 581 2315" }),
    h(39, { name: "Khyber Teaching Hospital", city: "Peshawar", province: "Khyber Pakhtunkhwa", type: "Teaching Hospital", specialties: ["Emergency","General Surgery","Gynae & Obs"], opd: true, ipd: true, cashless: true, address: "University Road, Peshawar", phone: "+92 91 921 6340" }),
    h(40, { name: "Shaukat Khanum Memorial Cancer Hospital Peshawar", city: "Peshawar", province: "Khyber Pakhtunkhwa", type: "Cancer Centre", specialties: ["Oncology"], opd: true, ipd: true, cashless: true, address: "Phase-VII, Hayatabad, Peshawar", phone: "+92 91 584 1000" }),
    h(41, { name: "Civil Hospital Quetta", city: "Quetta", province: "Balochistan", type: "Tertiary Care", specialties: ["Emergency","General Surgery","Pediatrics"], opd: true, ipd: true, cashless: true, address: "Jinnah Road, Quetta", phone: "+92 81 920 1412" }),
    h(42, { name: "Bolan Medical Complex Hospital", city: "Quetta", province: "Balochistan", type: "Teaching Hospital", specialties: ["Emergency","Cardiology","Gynae & Obs"], opd: true, ipd: true, cashless: true, address: "Brewery Road, Quetta", phone: "+92 81 920 2171" }),
    h(43, { name: "Quetta Institute of Medical Sciences", city: "Quetta", province: "Balochistan", type: "Teaching Hospital", specialties: ["Cardiology","General Surgery","Orthopedics"], opd: true, ipd: true, cashless: false, address: "Brewery Road, Quetta", phone: "+92 81 920 2300" }),
    h(44, { name: "Nishtar Hospital", city: "Multan", province: "Punjab", type: "Teaching Hospital", specialties: ["Emergency","Cardiology","Oncology","Neurology"], opd: true, ipd: true, cashless: true, address: "Nishtar Road, Multan", phone: "+92 61 921 0092" }),
    h(45, { name: "Ch. Pervaiz Elahi Institute of Cardiology", city: "Multan", province: "Punjab", type: "Cardiac Centre", specialties: ["Cardiology"], opd: true, ipd: true, cashless: true, address: "Nishtar Road, Multan", phone: "+92 61 922 1060" }),
    h(46, { name: "Mukhtar A. Sheikh Hospital", city: "Multan", province: "Punjab", type: "Multi-Specialty Hospital", specialties: ["Cardiology","General Surgery","Orthopedics"], opd: true, ipd: true, cashless: true, address: "Northern Bypass, Multan", phone: "+92 61 750 0000" }),
    h(47, { name: "Bahawal Victoria Hospital", city: "Bahawalpur", province: "Punjab", type: "Teaching Hospital", specialties: ["Emergency","General Surgery","Gynae & Obs"], opd: true, ipd: true, cashless: true, address: "Circular Road, Bahawalpur", phone: "+92 62 928 0255" }),
    h(48, { name: "Allied Hospital Faisalabad", city: "Faisalabad", province: "Punjab", type: "Teaching Hospital", specialties: ["Emergency","Cardiology","General Surgery"], opd: true, ipd: true, cashless: true, address: "Jail Road, Faisalabad", phone: "+92 41 929 0180" }),
    h(49, { name: "Aziz Fatimah Hospital", city: "Faisalabad", province: "Punjab", type: "Multi-Specialty Hospital", specialties: ["Cardiology","Gynae & Obs","Pediatrics","Orthopedics"], opd: true, ipd: true, cashless: true, address: "Sargodha Road, Faisalabad", phone: "+92 41 852 0111" }),
    h(50, { name: "Liaquat University Hospital", city: "Hyderabad", province: "Sindh", type: "Teaching Hospital", specialties: ["Emergency","General Surgery","Gynae & Obs","Pediatrics"], opd: true, ipd: true, cashless: true, address: "Hyderabad, Sindh", phone: "+92 22 920 0296" }),
];

export const HOSPITAL_STATS = {
    total: HOSPITALS.length,
    cities: new Set(HOSPITALS.map((h) => h.city)).size,
    cashless: HOSPITALS.filter((h) => h.cashless).length,
    provinces: new Set(HOSPITALS.map((h) => h.province)).size,
};
