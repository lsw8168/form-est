import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState("male");
  const [selectedCheck, setSelectedCheck] = React.useState({
    정치: false,
    스포츠: false,
    경제: false,
  });
  const [selected, setSelected] = React.useState({ age: "" });

  const [passwordError, setpasswordError] = useState(false);
  const [termError, setTermError] = useState(false);
  const [selectedError, setSelectedError] = useState(false);

  useEffect(() => {
    console.log("처음만 실행");
  }, []);

  const onSubmit = event => {
    event.preventDefault();

    if (password !== passwordCheck) {
      return setpasswordError(true);
    }

    if (!selected.age) {
      return setSelectedError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log({
      id,
      nick,
      password,
      passwordCheck,
      selectedValue,
      selectedCheck,
      selected,
      term,
    });
  };

  const onChangeId = event => {
    setId(event.target.value);
  };

  const onChangeNick = event => {
    setNick(event.target.value);
  };

  const onChangePassword = event => {
    setPassword(event.target.value);
  };

  const onChangePasswordCheck = event => {
    setpasswordError(event.target.value !== password);
    setPasswordCheck(event.target.value);
  };

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  const handleCheckChange = name => event => {
    setSelectedCheck({ ...selectedCheck, [name]: event.target.checked });
  };

  const handleSelectChange = name => event => {
    setSelectedError(false);
    setSelected({
      ...selected,
      [name]: event.target.value,
    });
  };

  const onChangeTerm = event => {
    setTermError(false);
    setTerm(event.target.checked);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="App">
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <input
            name="user-nick"
            value={nick}
            required
            onChange={onChangeNick}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <br />
        <div>
          <input
            type="radio"
            checked={selectedValue === "male"}
            onChange={handleChange}
            value="male"
            id="male"
            name="radio"
          />
          <label htmlFor="male">남자</label>
          <input
            type="radio"
            checked={selectedValue === "female"}
            onChange={handleChange}
            value="female"
            id="female"
            name="radio"
          />
          <label htmlFor="female">여자</label>
        </div>
        <br />
        <div>
          <input
            type="checkbox"
            checked={selectedCheck.스포츠}
            onChange={handleCheckChange("스포츠")}
            value="스포츠"
            id="스포츠"
          />
          <label htmlFor="스포츠">스포츠</label>
          <input
            type="checkbox"
            checked={selectedCheck.정치}
            onChange={handleCheckChange("정치")}
            value="정치"
            id="정치"
          />
          <label htmlFor="정치">정치</label>
          <input
            type="checkbox"
            checked={selectedCheck.경제}
            onChange={handleCheckChange("경제")}
            value="경제"
            id="경제"
          />
          <label htmlFor="경제">경제</label>
        </div>
        <br />
        <div>
          <select value={selected.age} onChange={handleSelectChange("age")}>
            <option value="">연령대</option>
            <option value="10">Ten</option>
            <option value="20">Twenty</option>
            <option value="30">Thirty</option>
          </select>
        </div>
        {selectedError && (
          <div style={{ color: "red" }}> 연령대를 선택하세요.</div>
        )}
        <br />
        <div>
          <input
            type="checkbox"
            name="user-term"
            checked={term}
            onChange={onChangeTerm}
          />
          동의
          {termError && (
            <div style={{ color: "red" }}> 약관에 동의하셔야 합니다.</div>
          )}
        </div>
        <br />
        <div>
          <button type="submit">가입하기</button>
        </div>
      </form>
    </div>
  );
};

export default App;
