import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

import { Container } from "./styles";

function Searchbar() {
  const [search, setSearch] = useState<string>("");
  const handleChange = (value: string) => {
    setSearch(value);
  };

  return (
    <Container>
      <h1>busque pelos melhores produtos!</h1>
      <div>
        <SearchOutlined />
        <input
          value={search}
          onChange={(event) => handleChange(event.target.value)}
        />
      </div>
    </Container>
  );
}

export default Searchbar;
