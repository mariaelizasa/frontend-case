import { useState, useMemo, ChangeEvent } from "react";
import logoImage from "../../assets/logo.svg";
import { TODO_LIST } from "./initial-state";
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
import { TodoListType, TodoStatusType } from "../../@types/TodoList";

const TodoList = () => {
  const [tasks, setTasks] = useState<TodoListType[]>(TODO_LIST);

  // Add integration with backend to render with done status.

  const [searchInputValue, setSearchInputValue] = useState("");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(searchInputValue.toLowerCase())
    );
  }, [tasks, searchInputValue]);

  const handleDeleteTask = (id: string) => {
    setTasks((prevTaks) => prevTaks.filter((task) => task.id !== id));
  };

  const handleChangeTaskStatus = (id: string, status: TodoStatusType) => {
    const changedTaskStatus = status === "pending" ? "done" : "pending";

    const editedTaskStatus: TodoListType[] = tasks.map((task) =>
      task.id === id ? { ...task, status: changedTaskStatus } : task
    );

    setTasks(editedTaskStatus);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
            {tasks.length === 0 && (
              <ListEmptyMessage>
                <strong>Ops!!!</strong> Nenhum resultado foi encontrado
                &#128533;
              </ListEmptyMessage>
            )}
            {filteredTasks.map((item, i) => (
              <ListItem key={item.id}>
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
