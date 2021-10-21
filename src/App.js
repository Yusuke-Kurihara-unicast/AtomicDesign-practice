import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecule/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/ZlFKIG6dApg",
  name: "康夫",
  email: "1111@example.com",
  phone: "ccc-cccc-aaaa",
  company: {
    name: "康夫の倉庫",
    website: "https://www.google.com/"
  }
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>aaaa</PrimaryButton>
      <SecondaryButton>bbb</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
