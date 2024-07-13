import { Link } from "react-router-dom";
import { Input } from "antd";
// import type { SearchProps } from "antd/es/input/Search";
// import { useState } from "react";

export default function Navbar() {
  //   const [searchValue, setSearchValue] = useState<string>("");

  //   const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  //     console.log(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="flex bg-gray-500 p-4 w-full justify-between">
      <div>
        <Link to="/">
          <p>Logo</p>
        </Link>
      </div>
      <div>
        <Input.Search
          placeholder="input search text"
          allowClear
          //   onSearch={onSearch}
          onChange={handleChange}
          style={{ width: 200 }}
        />
      </div>
      <div>
        <ul className="flex gap-6 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link className="hover:underline" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
