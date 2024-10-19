import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 750px;
  margin: 20px auto 0;
`;

const Search = styled.form`
  display: flex;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 1.6em;
  padding: 15px;
  border-radius: 5px 0 0 5px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const SearchButton = styled.button`
  padding: 15px;
  font-size: 1.1em;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 0 5px 5px 0;
  background-color: ${(props) => props.theme.colors.lightGray};
  cursor: pointer;
`;

 const List = styled.ul`
  width: 100%;
  list-style: none;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  background-color: rgba(0, 0, 0, 0.01);
`;

 const ListEmptyMessage = styled.span`
  display: block;
  font-size: 1.6em;
  padding: 15px;
  color: ${(props) => props.theme.colors.gray};
`;

 const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  }
`;

const ListItemIndex = styled.span`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2em;
  line-height: 1em;
  padding-right: 10px;
`;

 const Content = styled.div`
  flex: 1;
  text-align: left;
`;

const Title = styled.h3`
  font-size: 2em;
  line-height: 1em;
  margin-bottom: 10px;
`;

const Status = styled.span`
  transform: translateY(-3px);
  font-size: 0.5em;
  line-height: 1em;
  margin-left: 5px;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  display: inline-block;
  text-transform: uppercase;

  &[data-type="pending"] {
    color: ${(props) => props.theme.colors.error};
    border-color: ${(props) => props.theme.colors.error};
  }

  &[data-type="done"] {
    color: ${(props) => props.theme.colors.success};
    border-color: ${(props) => props.theme.colors.success};
  }
`;

const Description = styled.p`
  font-size: 1.6em;
  line-height: 1.3em;
  color:  ${(props) => props.theme.colors.gray};;
`;

const Links = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 10px;
`;

const Link = styled.a`
  display: inline-block;
  font-size: 1.4em;
  padding-right: 7px;
`;

const ButtonsList = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ButtonItem = styled.button`
  display: inline-block;
  font-size: 1.1em;
  padding: 7px;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
  text-transform: uppercase;
  color:  ${(props) => props.theme.colors.main};
  border: 1px solid  ${(props) => props.theme.colors.main};
  background-color: transparent;
`;

export {
  Wrapper,
  Search,
  SearchInput,
  SearchButton,
  List,
  ListEmptyMessage,
  ListItem,
  ListItemIndex,
  Content,
  Title,
  Status,
  Description,
  Links,
  Link,
  ButtonsList,
  ButtonItem,
};