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

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

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

  const handleFilter = () => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setData(filteredData);
  };

  const resetFilter = () => {
    setData([
      { key: "1", name: "John Brown", age: 32, address: "New York No. 1 Lake Park", column4: 50, column5: "Active" },
      { key: "2", name: "Jim Green", age: 42, address: "London No. 1 Lake Park", column4: 70, column5: "Inactive" },
      { key: "3", name: "Joe Black", age: 32, address: "Sydney No. 1 Lake Park", column4: 30, column5: "Active" },
      { key: "4", name: "Jim Red", age: 32, address: "London No. 2 Lake Park", column4: 90, column5: "Inactive" },
    ]);
    setFilterText("");
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
      <Sider theme="light" width={280} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline" items={items} style={{ height: "100vh"}}/>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content>
          <div style={{ padding: "16px", background: colorBgContainer, borderRadius: borderRadiusLG }}>
            <div style={{ marginBottom: "16px" }}>
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
            </div>
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
