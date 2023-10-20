import React from "react";
import { UserData } from "../types/UserData.js";
import { State } from "../types/State.js";

export const UserDataView: React.FC<{
  value: State<UserData>;
}> = ({ value: [userData, setUserData] }) => {
  const handleInputChange = setUserData
    ? (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setUserData({
          ...userData,
          [name]: value,
        });
      }
    : undefined;

  return (
    <div className="flex column gap user-info">
      <div className="flex row gap wrap spaced">
        <label htmlFor="name">Name</label>
        <input
          className="flex"
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="flex row gap wrap spaced">
        <label htmlFor="email">Email</label>
        <input
          className="flex"
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <label htmlFor="address">Address</label>
      <textarea
        className="flex"
        id="address"
        name="address"
        value={userData.address}
        onChange={handleInputChange}
        rows={4}
        required
      />
    </div>
  );
};
