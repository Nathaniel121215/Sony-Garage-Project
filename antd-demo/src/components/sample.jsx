import React, { useRef, useState } from "react";
import { Button, Input, Layout, Menu, Table, Space, theme } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { MenuOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import Pulse_Logo from "./assets/Pulse_Small.png";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Translate_Icon from "./assets/Translate_Icon.png";
import User_Icon from "./assets/User_Icon.png";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';

import { IconBuildingArch } from '@tabler/icons-react';
import { IconUser } from '@tabler/icons-react';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const App = () => {
  const [data, setData] = useState([
    { key: "1", name: "John Brown", age: 32, address: "New York No. 1 Lake Park", column4: 50, column5: "Active", department: "Sales" },
    { key: "2", name: "Jim Green", age: 42, address: "London No. 1 Lake Park", column4: 70, column5: "Inactive", department: "Engineering" },
    { key: "3", name: "Joe Black", age: 32, address: "Sydney No. 1 Lake Park", column4: 30, column5: "Active", department: "HR" },
    { key: "4", name: "Jim Red", age: 32, address: "London No. 2 Lake Park", column4: 90, column5: "Inactive", department: "Sales" },
  ]);

  const [filterText, setFilterText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const [collapsed, setCollapsed] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // const handleFilter = () => {
  //   const filteredData = data.filter((item) =>
  //     item.name.toLowerCase().includes(filterText.toLowerCase())
  //   );
  //   setData(filteredData);
  // };

  // const resetFilter = () => {
  //   setData([
  //     { key: "1", name: "John Brown", age: 32, address: "New York No. 1 Lake Park", column4: 50, column5: "Active" },
  //     { key: "2", name: "Jim Green", age: 42, address: "London No. 1 Lake Park", column4: 70, column5: "Inactive" },
  //     { key: "3", name: "Joe Black", age: 32, address: "Sydney No. 1 Lake Park", column4: 30, column5: "Active" },
  //     { key: "4", name: "Jim Red", age: 32, address: "London No. 2 Lake Park", column4: 90, column5: "Inactive" },
  //   ]);
  //   setFilterText("");
  // };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    { title: "Name", dataIndex: "name", width: "400px", ...getColumnSearchProps("name") },
    { title: "Age", dataIndex: "age", width: "300px", sorter: (a, b) => a.age - b.age },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "400px",
    },
    { title: "Column 4", dataIndex: "column4", width: "300px", sorter: (a, b) => a.column4 - b.column4 },
    {
      title: "Column 5",
      dataIndex: "column5",
      width: "300px",
      filters: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" },
      ],
      onFilter: (value, record) => record.column5 === value,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "400px",
      render: (_, record) => `${record.name.toLowerCase().replace(" ", ".")}@example.com`,
    },
    {
      title: "Department",
      dataIndex: "department",
      width: "3 00px",
      filters: [
        { text: "Sales", value: "Sales" },
        { text: "Engineering", value: "Engineering" },
        { text: "HR", value: "HR" },
      ],
      onFilter: (value, record) => record.department === value,
    },


    
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout  style={{ height: "100vh"}}>
      <Sider
  theme="light"
  width={280}
  collapsible
  collapsed={collapsed}
  trigger={null} // Disable default collapse trigger
>
  {/* Logo and Collapse/Expand Icon */}
<div
  className={`flex items-center ${collapsed ? "justify-center py-4" : "justify-between"} px-5 py-1`}
  style={{
    borderBottom: "1px solid #d9d9d9",
    borderRight: "1px solid #d9d9d9", // Thin gray border
  }}
>
  {/* Logo - Visible only when not collapsed */}
  {!collapsed && (
    <img
      src={Pulse_Logo}
      alt="Logo"
      className="w-[120px] h-[48px] object-contain" // Ensuring the aspect ratio is maintained
    />
  )}

  {/* Collapse/Expand Icon - Always visible */}
  <div
    className="cursor-pointer"
    onClick={() => setCollapsed(!collapsed)}
  >
    {collapsed ? (
      <MenuOutlinedIcon style={{ fontSize: "19px" }} /> // Adjust size of Menu icon when collapsed
    ) : (
      <ArrowBackIosOutlinedIcon style={{ fontSize: "15px" }} /> // Adjust size of Arrow icon when expanded
    )}
  </div>
</div>



  {/* Menu Items */}
  <Menu
    theme="light"
    defaultSelectedKeys={["1"]}
    mode="inline"
    style={{ height: "calc(100vh - 100px)", overflowY: "auto", borderRight: "1px solid #d9d9d9", paddingTop:"15px" }} // Leave space for the bottom section
  >
    <Menu.Item
      key="1"
      icon={
        <div
          style={{
            backgroundColor: "#2A6BEB", // Background color for the icon
            borderRadius: "5px", // Circular background
            width: "28px", // Fixed width for the icon's background
            height: "28px", // Fixed height for the icon's background
            display: "flex", // Center the icon
            justifyContent: "center", // Center icon horizontally
            alignItems: "center", // Center icon vertically
          }}
        >
          <IconBuildingArch style={{ color: "#ffffff", fontSize: "20px" }} /> {/* White icon with adjusted size */}
        </div>
      }
      style={{
        fontWeight: "600",
        fontSize: "16px",
      }}
    >
      Concerts
    </Menu.Item>
    <Menu.Item
      key="2"
      icon={
        <div
          style={{
            backgroundColor: "#2A6BEB", // Background color for the icon
            borderRadius: "5px", // Circular background
            width: "28px", // Fixed width for the icon's background
            height: "28px", // Fixed height for the icon's background
            display: "flex", // Center the icon
            justifyContent: "center", // Center icon horizontally
            alignItems: "center", // Center icon vertically
          }}
        >
          <IconUser style={{ color: "#ffffff", fontSize: "20px" }} /> {/* White icon with adjusted size */}
        </div>
      }
      style={{
        fontWeight: "600",
        fontSize: "16px",
      }}
    >
      Artists
    </Menu.Item>



    {/* <Menu.SubMenu key="sub1" style={{ fontWeight: "600" }} icon={<UserOutlined />} title="User">
      <Menu.Item key="3" style={{ fontWeight: "600" }}>Tom</Menu.Item>
      <Menu.Item key="4" style={{ fontWeight: "600" }}>Bill</Menu.Item>
      <Menu.Item key="5" style={{ fontWeight: "600" }}>Alex</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu key="sub2" style={{ fontWeight: "600" }} icon={<TeamOutlined />} title="Team">
      <Menu.Item key="6" style={{ fontWeight: "600" }}>Team 1</Menu.Item>
      <Menu.Item key="8" style={{ fontWeight: "600" }}>Team 2</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item key="9" icon={<FileOutlined />} style={{ fontWeight: "600" }}>
      Files
    </Menu.Item> */}
  </Menu>

  {/* Help Section */}
  <div
  className={`flex p-4 ${
    collapsed ? "justify-center items-center" : ""
  }`}
  style={{
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTop: "1px solid #d9d9d9",
    borderRight: "1px solid #d9d9d9", 
    borderBottom: "1px solid #d9d9d9", 
  }}
>
  <div
    className={`flex ${collapsed ? "" : "mx-[20px]"} gap-2 items-center`}
  >
    <HelpOutlineOutlinedIcon 
      style={{ color: "#4A4A4A", fontSize: collapsed ? "16px" : "16px" }} // Icon size
    />
    <span
      style={{ fontSize: "13px",fontWeight: "600", }} // Text size
    >
      {!collapsed ? "Help" : ""}
    </span>
  </div>
</div>

</Sider>
      <Layout>
      <Header
      style={{
        padding: "17px",
        background: "#ffffff",  // Background color for the header
        borderBottom: "1px solid #d9d9d9",
        height: "60.5px", // Adjust header height
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left Side - Translate Icon, Concert Text, Info Icon */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Translate Icon */}
        <img
          src={Translate_Icon}
          alt="Translate"
          style={{
            width: "35px",
            height: "35px",
            marginRight: "12px", // Margin between icons
          }}
        />
        {/* Concert Text */}
        <div
          style={{
            fontSize: "17px",
            fontWeight: "bold",
            marginRight: "12px",
          }}
        >
          Concerts
        </div>
        {/* Info Icon */}
        <InfoOutlinedIcon
          style={{
            fontSize: "21px", // Info icon size
            color: "#4A4A4A", // Icon color
            paddingTop: "3px",
            
          }}
        />
      </div>

      {/* Right Side - User Icon and More Options Icon */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* User Icon */}
        <img
          src={User_Icon}
          alt="User"
          style={{
            width: "30px",
            height: "30px",
            marginRight: "12px", // Margin between icons
          }}
        />
        {/* More Options Icon (Three Dots) */}
        <MoreVertOutlinedIcon
          style={{
            fontSize: "22px", // More options icon size
            color: "#4A4A4A", // Icon color
          }}
        />
      </div>
    </Header>

    <Header
      style={{
        padding: "17px",
        background: "#ffffff", // Background color for the header
        borderBottom: "1px solid #d9d9d9",
        height: "56.5px", // Adjust header height
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left Section: Fetch Data Button */}
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "14px", // Adjustable font size
          color: "#00000", // Adjustable font color
          fontWeight: "600", // Semi-bold text
          gap: "5px", // Space between icon and text
        }}
      >
        <CachedOutlinedIcon style={{ fontSize: "18px" }} /> {/* Icon size */}
        Fetch Data
      </Button>

      {/* Right Section: Export Button */}
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "14px", // Adjustable font size
          color: "#00000", // Adjustable font color
          fontWeight: "600", // Semi-bold text
          gap: "5px", // Space between icon and text
        }}
      >
        <FileDownloadOutlinedIcon style={{ fontSize: "18px" }} /> {/* Icon size */}
        Export
      </Button>
    </Header>

    <Header
  style={{
    padding: "17px",
    background: "#ffffff", // Background color for the header
    borderBottom: "1px solid #d9d9d9",
    height: "auto", // Adjust header height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px", // Spacing between the boxes
  }}
>
  {/* Box 1 */}
  <div
    style={{
      background: "#FF7D7E",
      borderRadius: "15px",
      padding: "25px 40px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
    }}
  >
    <div
      style={{
        fontSize: "60px", // Option to control big number size
        fontWeight: "bold", // Bold for big number
        color: "#00000",
      }}
    >
      5
    </div>
    <div
      style={{
        fontSize: "18px", // Option to control small text size
        fontWeight: "600", // Semi-bold for label
        color: "#00000",
      }}
    >
      No. of Artists
    </div>
  </div>

  {/* Box 2 */}
  <div
    style={{
      background: "#6DF794",
      borderRadius: "15px",
      padding: "25px 40px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
    }}
  >
    <div
      style={{
        fontSize: "60px",
        fontWeight: "bold",
        color: "#000000",
      }}
    >
      5
    </div>
    <div
      style={{
        fontSize: "18px",
        fontWeight: "600",
        color: "#000000",
      }}
    >
      No. of Artists
    </div>
  </div>

  {/* Box 3 */}
  <div
    style={{
      background: "#FFDD6C",
      borderRadius: "15px",
      padding: "25px 40px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
    }}
  >
    <div
      style={{
        fontSize: "50px",
        fontWeight: "bold",
        color: "#000000",
      }}
    >
      0
    </div>
    <div
      style={{
        fontSize: "18px",
        fontWeight: "600",
        color: "#000000",
      }}
    >
      No. of Artists
    </div>
  </div>
</Header>

<Header
  style={{
    padding: "17px",
    background: "#ffffff", // Background color for the header
    borderBottom: "1px solid #d9d9d9",
    height: "56.5px", // Adjust header height
    display: "flex",
    alignItems: "center",
    gap: "15px", // Space between buttons
  }}
>
  {/* Filter Button */}
  <Button
    style={{
      display: "flex",
      alignItems: "center",
      fontSize: "14px", // Adjustable font size
      color: "#00000", // Adjustable font color
      fontWeight: "600", // Semi-bold text
      gap: "5px", // Space between icon and text
    }}
  >
    <TuneOutlinedIcon style={{ fontSize: "18px" }} /> {/* Icon size */}
    Filter
  </Button>

  {/* Sort Button */}
  <Button
    style={{
      display: "flex",
      alignItems: "center",
      fontSize: "14px", // Adjustable font size
      color: "#00000", // Adjustable font color
      fontWeight: "600", // Semi-bold text
      gap: "5px", // Space between icon and text
    }}
  >
    <SortOutlinedIcon style={{ fontSize: "18px" }} /> {/* Icon size */}
    Sort
  </Button>
</Header>




    
        <Content>
          <div style={{ padding: "16px", background: colorBgContainer, borderRadius: borderRadiusLG }}>
            {/* <div style={{ marginBottom: "16px" }}>
              <Input
                placeholder="Enter name to filter"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                style={{ width: "200px", marginRight: "8px" }}
              />
              <Button type="primary" onClick={handleFilter} style={{ marginRight: "8px" }}>
                Apply Filter
              </Button>
              <Button onClick={resetFilter}>Reset</Button>
            </div> */}


            <Table
  rowSelection={{
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
  }}
  columns={columns}
  dataSource={data}
  pagination={{ pageSize: 3, position: ["bottomCenter"] }}
  scroll={{ x: "max-content" }}  // Use 'max-content' for dynamic width calculation
/>
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default App;
