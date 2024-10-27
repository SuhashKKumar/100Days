import {
    faChartColumn,
    faBagShopping,
    faBookOpen,
    faBriefcase,
    faMobile,
} from "@fortawesome/free-solid-svg-icons";

export const customersDropdownData = [
    {
        id: 1,
        icon: faChartColumn,
        name: "Agencies",
        link: "/agency",
    },
    {
        id: 2,
        icon: faBagShopping,
        name: "eCommerce & Retails",
        link: "/customers#ecommerce-retail",
    },
    {
        id: 3,
        icon: faBookOpen,
        name: "Course Creators",
        link: "/customers/course-creator",
    },
    {
        id: 4,
        icon: faBriefcase,
        name: "B2B Companies",
        link: "/customers/b2b",
    },
    {
        id: 5,
        icon: faMobile,
        name: "B2C Apps",
        link: "/customers#consumer-apps",
    },
];
