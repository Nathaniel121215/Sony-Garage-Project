import React, { useState } from "react";
import {
    ConfigProvider,
    Button,
    Input,
    Layout,
    Menu,
    Table,
    Dropdown,
    Avatar,
    Pagination,
} from "antd";
import Loader_BlackSM from "../components/Loader_BlackSM";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"; // Dropdown Icon
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"; // Arrow inside a circle
import HeadsetIcon from "@mui/icons-material/Headset"; // Example Icon
import Header_BG from "../assets/HeaderBG.png";

import Arrow_Icon from "../assets/Arrow_Icon.svg";
import Concert_Icon from "../assets/Concert_Icon.svg";
import Artist_Icon from "../assets/Artist_Icon.svg";
import Exports_Icon from "../assets/Exports_Icon.svg";
import Fetch_Icon from "../assets/Fetch_Icon.svg";

import Search_Icon from "../assets/Search_Icon.svg";
import Filter_Icon from "../assets/Filter_Icon.svg";
import Export_Icon from "../assets/Export_Icon.svg";
import Sort_Icon from "../assets/Sort_Icon.svg";
import Edit_Icon from "../assets/Edit_Icon.svg";

const { Header, Content, Footer, Sider } = Layout;

const Artist = () => {
    const [data, setData] = useState([
        {
            key: "1",
            Artist: "Neguse",
            Website: "neguse-music.com",
            Twitter: "Neguse Music",
            Reason: "Music world tour. Live starting....",
        },
        {
            key: "2",
            Artist: "Millet",
            Website: "millet-band.com",
            Twitter: "Millet Music",
            Reason: "Band meet & greet with live solo perf...",
        },
        {
            key: "3",
            Artist: "Neguse",
            Website: "neguse-music.com",
            Twitter: "Neguse Music",
            Reason: "Music world tour. Live starting....",
        },
        {
            key: "4",
            Artist: "Millet",
            Website: "https://millet-band.com/",
            Twitter: "Millet Music",
            Reason: "Band meet & greet with live solo perf...",
        },
        {
            key: "5",
            Artist: "Anewhite",
            Website: "theanewhite.jp",
            Twitter: "Anewhite Entertainment",
            Reason: "Album signing and single rel...",
        },
        {
            key: "6",
            Artist: "Neguse",
            Website: "neguse-music.com",
            Twitter: "Neguse Music",
            Reason: "Music world tour. Live starting....",
        },
        {
            key: "7",
            Artist: "Millet",
            Website: "millet-band.com",
            Twitter: "Millet Music",
            Reason: "Band meet & greet with live solo perf...",
        },
        {
            key: "8",
            Artist: "Neguse",
            Website: "neguse-music.com",
            Twitter: "Neguse Music",
            Reason: "Music world tour. Live starting....",
        },
        {
            key: "9",
            Artist: "Millet",
            Website: "https://millet-band.com/",
            Twitter: "Millet Music",
            Reason: "Band meet & greet with live solo perf...",
        },
        {
            key: "10",
            Artist: "Anewhite",
            Website: "theanewhite.jp",
            Twitter: "Anewhite Entertainment",
            Reason: "Album signing and single rel...",
        },
    ]);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(5); // You can adjust the page size here
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    // Handling page change
    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    // Get the current page data
    const currentData = data.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const columns = [
        {
            title: "Artist Name",
            dataIndex: "Artist",
            width: "150px",
        },
        { title: "Official Website", dataIndex: "Website", width: "100px" },
        { title: "X/Twitter", dataIndex: "Twitter", width: "100px" },
        { title: "Reason", dataIndex: "Reason", width: "100px" },

    ];

    const menu = (
        <Menu>
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item>Logout</Menu.Item>
        </Menu>
    );

    return (
        <>
            <style>
                {`
          /* Header Custom Styles */
          .custom-table thead th {
            font-family: 'Inter', sans-serif !important;
            font-weight: 600 !important;
            font-size: 14px !important;
            line-height: 14px !important;
            color: #6A2868 !important;
          }

          /* Data Cell Custom Styles */
          .custom-table td {
            font-family: 'Inter', sans-serif !important;
            font-weight: 600 !important;
            font-size: 14px !important;
            line-height: 14px !important;
            color: #2B2B2B !important;
          }

          /* Custom CSS */
          .ant-pagination {
          gap:8px;
          }
          .ant-pagination-item-active {
            background-color: #382E73 !important; /* Active item background color */
            border-radius: 50% !important;         /* Make item circular */
            width: 16px !important;                /* Adjust the width for circular shape */
            height: 23px !important;               /* Adjust the height for circular shape */
            display: flex;
            justify-content: center;
            align-items: center;
            border: none !important;               /* Remove border */
          }

          /* Ensure the text color is white for active item */
          .ant-pagination-item-active a {
            color: white !important;              /* Text color for active item */
            font-size: 1em !important;            /* Set font size to 1em */
          }

        `}
            </style>
            <div className="bg-[#F7F7F7] min-h-screen">
                <Header className="p-[15px] md:p-[45px] bg-white border-b border-[#d9d9d9] h-[90.5px] flex justify-between items-center">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-center">
                            <Loader_BlackSM />
                            <span className="text-[#1f1f1f] text-[14.5px] font-extrabold font-['Inter'] leading-[1.1] mt-3">
                                PULSE AI
                            </span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Dropdown overlay={menu} trigger={["click"]}>
                                <button
                                    className="flex items-center space-x-2 bg-[#ffffff] border rounded-full px-6 py-3 border-0.5"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Avatar
                                        className="bg-[#1f1f1f] text-white"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            padding: "20px",
                                        }}
                                    >
                                        AW
                                    </Avatar>
                                    <div className="hidden md:block font-[Inter] font-medium text-[16px] leading-[16px] text-[#757575]">
                                        Allison Watts
                                    </div>
                                    <KeyboardArrowDownOutlinedIcon
                                        style={{ color: "#757575" }}
                                    />
                                </button>
                            </Dropdown>
                        </div>
                    </div>
                </Header>

                <Header
                    style={{
                        backgroundImage: `url(${Header_BG})`,
                        backgroundSize: "cover",
                        height: "auto",
                        padding: "45px",
                        position: "relative", // Add this to make the button position relative to the header
                    }}
                >
                    {/* Left Side - 3 boxes */}
                    <div className="flex items-center pt-5 gap-4 md:space-x-4 flex-col md:flex-row md:space-between">
                        {/* First Box */}
                        <div
                            className="p-4 rounded-[20px] w-auto shadow-md py-5 px-9"
                            style={{
                                backgroundColor: "#FFFFFFCC", // Semi-transparent background
                                opacity: 0.8, // 80% opacity
                            }}
                        >
                            <div className="flex items-center justify-between gap-[80px]">
                                <div className="flex flex-col">
                                    <div className="flex flex-col items-start">
                                        <p
                                            style={{
                                                fontFamily: "Inter, sans-serif",
                                                fontWeight: 600,
                                                fontSize: "14px",
                                                lineHeight: "14px",
                                                color: "#252525",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            No of Concerts
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2 gap-2">
                                        <img
                                            src={Concert_Icon}
                                            alt="Concert Icon"
                                            width={30}
                                            height={30}
                                        />
                                        <p
                                            style={{
                                                fontFamily: "Inter, sans-serif",
                                                fontWeight: 700,
                                                fontSize: "34px",
                                                lineHeight: "41.15px",
                                                color: "#252525",
                                            }}
                                        >
                                            05
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Button
                                        className="bg-transparent border-none"
                                        shape="circle"
                                        icon={
                                            <img
                                                src={Arrow_Icon}
                                                alt="Arrow Icon"
                                                width={20}
                                                height={20}
                                            />
                                        }
                                        onClick={() =>
                                            console.log("Arrow clicked!")
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Second Box */}
                        <div className="bg-white p-4 rounded-[20px] w-auto shadow-md py-5 px-9">
                            <div className="flex items-center justify-between gap-[80px]">
                                <div className="flex flex-col">
                                    <div className="flex flex-col items-start">
                                        <p
                                            style={{
                                                fontFamily: "Inter, sans-serif",
                                                fontWeight: 600,
                                                fontSize: "14px",
                                                lineHeight: "14px",
                                                color: "#252525",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            Artists
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2 gap-2">
                                        <img
                                            src={Artist_Icon}
                                            alt="Artist Icon"
                                            width={30}
                                            height={30}
                                        />
                                        <p
                                            style={{
                                                fontFamily: "Inter, sans-serif",
                                                fontWeight: 700,
                                                fontSize: "34px",
                                                lineHeight: "41.15px",
                                                color: "#252525",
                                            }}
                                        >
                                            03
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Button
                                        className="bg-transparent border-none"
                                        shape="circle"
                                        icon={
                                            <img
                                                src={Arrow_Icon}
                                                alt="Arrow Icon"
                                                width={20}
                                                height={20}
                                            />
                                        }
                                        onClick={() =>
                                            console.log("Arrow clicked!")
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Third Box */}
                        <div
                            className="p-4 rounded-[20px] w-auto shadow-md py-5 px-9"
                            style={{
                                backgroundColor: "#FFFFFFCC", // Semi-transparent background
                                opacity: 0.8, // 80% opacity
                            }}
                        >
                            <div className="flex items-center justify-between gap-[80px]">
                                <div className="flex flex-col">
                                    <div className="flex flex-col items-start">
                                        <p
                                            style={{
                                                fontFamily: "Inter, sans-serif",
                                                fontWeight: 600,
                                                fontSize: "14px",
                                                lineHeight: "14px",
                                                color: "#252525",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            Exports
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2 gap-2">
                                        <img
                                            src={Exports_Icon}
                                            alt="Exports Icon"
                                            width={30}
                                            height={30}
                                        />
                                        <p
                                            style={{
                                                fontFamily: "Inter, sans-serif",
                                                fontWeight: 700,
                                                fontSize: "34px",
                                                lineHeight: "41.15px",
                                                color: "#252525",
                                            }}
                                        >
                                            07
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Button
                                        className="bg-transparent border-none"
                                        shape="circle"
                                        icon={
                                            <img
                                                src={Arrow_Icon}
                                                alt="Arrow Icon"
                                                width={20}
                                                height={20}
                                            />
                                        }
                                        onClick={() =>
                                            console.log("Arrow clicked!")
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Button with More Info and custom icon */}
                    <div
                        className="absolute top-4 right-4 flex items-center space-x-2"
                        style={{
                            zIndex: 1, // Ensures the button is above other content
                        }}
                    >
                        <Button className="bg-[#FFFFFF] text-[#1F1F1F] rounded-[20px] px-6 py-4 flex items-center space-x-1 font-['Inter'] font-medium text-[14px] leading-[16.94px]">
                            {/* Add custom SVG icon */}
                            <img
                                src={Fetch_Icon}
                                alt="Fetch Icon"
                                className="w-4 h-4"
                            />{" "}
                            {/* You can adjust the size using w-5 and h-5 */}
                            Fetch
                        </Button>
                    </div>
                </Header>

                <Header className="bg-[#F7F7F7] px-[20px] py-[20px] md:px-[45px] flex flex-wrap items-center justify-between h-auto">
                    {/* Left Side - Title */}
                    <div className="w-full md:w-auto text-[#262525] font-[Inter] font-bold text-[25px] leading-[26px] mb-5 lg:mb-0">
                        Artists Dashboard 
                    </div>

                    {/* Right Side - Search Box and Buttons */}
                    <div className="w-full md:w-auto flex flex-col md:flex-row items-center md:space-x-4 space-y-3 md:space-y-0">
                        {/* Search Box */}
                        <div className="relative flex items-center w-full md:w-auto">
                            <img
                                src={Search_Icon}
                                alt="Search Icon"
                                className="absolute left-4 w-[16px] h-[16px] text-[#E4E4E4]"
                            />
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-12 pr-4 py-4 text-[#C4C4C4] font-[Inter] font-normal text-[13px] leading-[14.52px] border border-[#E4E4E4] rounded-[15px] w-full md:w-[280px] h-[40px]"
                            />
                        </div>

                        {/* Buttons - Use Grid Layout for Mobile */}
                        <div className="grid grid-cols-2 gap-2 w-full lg:flex md:space-x-4">
                            <Button className="lg:w-[120px] bg-[#FFFFFF] text-[#1F1F1F] rounded-[20px] px-4 py-4 flex items-center justify-center space-x-1 font-['Inter'] font-medium text-[14px] leading-[16.94px]">
                                <img
                                    src={Edit_Icon}
                                    alt="Edit Icon"
                                    className="w-4 h-4"
                                />
                                Edit
                            </Button>
                            <Button className="lg:w-[120px] bg-[#FFFFFF] text-[#1F1F1F] rounded-[20px] px-4 py-4 flex items-center justify-center space-x-1 font-['Inter'] font-medium text-[14px] leading-[16.94px]">
                                <img
                                    src={Sort_Icon}
                                    alt="Sort Icon"
                                    className="w-4 h-4"
                                />
                                Sort
                            </Button>
                            <Button className="lg:w-[120px] bg-[#FFFFFF] text-[#1F1F1F] rounded-[20px] px-4 py-4 flex items-center justify-center space-x-1 font-['Inter'] font-medium text-[14px] leading-[16.94px]">
                                <img
                                    src={Filter_Icon}
                                    alt="Filter Icon"
                                    className="w-4 h-4"
                                />
                                Filter
                            </Button>
                            <Button className="lg:w-[120px] bg-[#FFFFFF] text-[#1F1F1F] rounded-[20px] px-4 py-4 flex items-center justify-center space-x-1 font-['Inter'] font-medium text-[14px] leading-[16.94px]">
                                <img
                                    src={Export_Icon}
                                    alt="Export Icon"
                                    className="w-4 h-4"
                                />
                                Export
                            </Button>
                        </div>
                    </div>
                </Header>

                <Content className="bg-[#F7F7F7]">
                    <ConfigProvider
                        theme={{
                            components: {
                                Table: {
                                    headerBg: "#ffffff",
                                    headerColor: "#6A2868",
                                    rowHoverBg: "#f5f5f5",
                                    rowSelectedBg: "#f0f0f0",
                                    cellPaddingBlock: 16,
                                    cellPaddingInline: 16,
                                    lineType: "solid",
                                },
                                Pagination: {
                                    itemActiveBg: "#382E73",
                                },
                            },
                        }}
                    >
                        <div className="bg-white p-[15px] mb-[30px] mx-[20px] lg:mx-[45px] rounded-[10px] rounded-[10px]">
                            <Table
                                className="custom-table"
                                columns={columns}
                                dataSource={currentData} // Use currentData instead of the full data array
                                pagination={false} // Disable the built-in pagination of the table
                                rowSelection={{
                                    selectedRowKeys,
                                    onChange: setSelectedRowKeys,
                                }}
                            />

                            {/* Pagination Component */}
                            <div className="my-[20px] lg:mx-[20px] pagination-container flex justify-between items-center">
                                {/* Button on the left */}
                                <Button className="bg-[#FFFFFF] text-[#1F1F1F] rounded-[20px] px-6 py-4 flex items-center space-x-1 font-['Inter'] font-medium text-[14px] leading-[16.94px] border-1 border-black solid">
                                    {/* Add custom SVG icon */}
                                    <img
                                        src={Export_Icon}
                                        alt="Export Icon"
                                        className="w-4 h-4"
                                    />{" "}
                                    {/* You can adjust the size using w-5 and h-5 */}
                                    Export
                                </Button>

                                {/* Pagination on the right */}
                                <div className="border border-gray-300 rounded-[15px] p-1 inline-block">
                                    <Pagination
                                        current={currentPage}
                                        pageSize={pageSize}
                                        total={data.length} // Total number of records
                                        onChange={onPageChange}
                                        showSizeChanger={false} // Optionally disable the page size changer
                                        itemActiveBg="#382E73"
                                        size="small"
                                    />
                                </div>
                            </div>
                        </div>
                    </ConfigProvider>
                </Content>
            </div>
        </>
    );
};

export default Artist;
