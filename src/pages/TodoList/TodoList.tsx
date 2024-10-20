import { useState, useEffect, ChangeEvent, useCallback, useMemo } from "react";

import logoImage from "../../assets/logo.svg";
import { TODO_LIST } from "./initial-state";
import { ITodoTypes } from "./types";
import {
  ButtonItem,
  ButtonsList,
  Content,
  Description,
  Link,
  Links,
  List,
  ListEmptyMessage,
  ListItem,
  ListItemIndex,
  Search,
  SearchButton,
  SearchInput,
  Status,
  Title,
  Wrapper,
} from "./style";

const TodoList = () => {
  const [items, setItems] = useState(TODO_LIST);
  const [searchInputValue, setSearchInputValue] = useState("");

  const filteredTasks = useMemo(() => {
    return items.filter((task) =>
      task.title.toLowerCase().includes(searchInputValue.toLowerCase())
    );
  }, [searchInputValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleDeleteTask = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleChangeTaskStatus = (id: string, status: ITodoTypes) => {
    const reversedStatus = status === "pending" ? "pending" : "done";
    const editedItems = [];

    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        editedItems.push({
          ...items[i],
          status: reversedStatus,
        });
      } else {
        editedItems.push(items[i]);
      }
    }

    setItems(editedItems);
  };

  return (
    <main id="page" className="todo">
      <Wrapper>
        <header>
          <img src={logoImage} alt="Cora" title="Cora" />
          <h1>Weekly to-do list &#128467;</h1>
          <h2>
            Bem-vindo ao nosso produto <i>fake</i> de <strong>to-do</strong>{" "}
            list
          </h2>
          <p>
            Marque como{" "}
            <strong>
              <u>done</u>
            </strong>{" "}
            as tasks que você conseguir concluir (elas já precisam renderizar
            com o status <strong>done</strong>)
          </p>
          <p className="disclaimer">
            Items obrigatórios marcados com arterisco (<strong>*</strong>)
          </p>
          <Search onSubmit={handleSearch}>
            <SearchInput
              id="search"
              placeholder="busca por texto..."
              value={searchInputValue}
              onChange={handleChange}
            />
            <SearchButton type="submit">buscar</SearchButton>
          </Search>
        </header>
        <section>
          <List>
            {items.length === 0 && (
              <ListEmptyMessage>
                <strong>Ops!!!</strong> Nenhum resultado foi encontrado
                &#128533;
              </ListEmptyMessage>
            )}
            {filteredTasks.map((item, i) => (
              <ListItem key={i}>
                <ListItemIndex>
                  {i + 1}
                  {item.required ? "*" : ""}.
                </ListItemIndex>
                <Content>
                  <Title>
                    {item.title}
                    <Status data-type={item.status}>{item.status}</Status>
                  </Title>
                  <Description>{item.description}</Description>
                  {item.links && item.links.length > 0 && (
                    <Links>
                      {item.links.map((link) => (
                        <Link key={link.name} target="_blank" href={link.url}>
                          {link.name}
                        </Link>
                      ))}
                    </Links>
                  )}
                  <ButtonsList>
                    <ButtonItem onClick={() => handleDeleteTask(item.id)}>
                      delete
                    </ButtonItem>
                    <ButtonItem
                      onClick={() =>
                        handleChangeTaskStatus(item.id, item.status)
                      }
                    >
                      change to{" "}
                      <strong>
                        <u>{item.status === "done" ? "pending" : "done"}</u>
                      </strong>
                    </ButtonItem>
                  </ButtonsList>
                </Content>
              </ListItem>
            ))}
          </List>
        </section>
      </Wrapper>
    </main>
  );
};

export default TodoList;
