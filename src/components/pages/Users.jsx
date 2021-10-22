// import React, { useContext } from "react";
import React from "react";
import styled from "styled-components";
// import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecule/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const user = {
  id: 0,
  image: "https://source.unsplash.com/ZlFKIG6dApg",
  name: "康夫",
  email: "1111@example.com",
  phone: "ccc-cccc-aaaa",
  company: {
    name: "康夫の倉庫",
    website: "https://www.google.com/"
  }
};

const users = [...Array(10).keys()].map((val) => {
  return {
    ...user,
    id: val,
    name: `康夫${val}`
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => {
    if (!!userInfo) {
      setUserInfo({
        isAdmin: "isAdmin" in userInfo ? !userInfo.isAdmin : false
      });
    } else {
      setUserInfo({
        isAdmin: true
      });
    }
  };

  return (
    <SContainer>
      <h2>User一覧ページ</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
