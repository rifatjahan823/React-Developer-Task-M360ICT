import React from "react";
import { IUser } from "../types/globalTypes";
import { Dropdown, Flex } from "antd";
import { useDeleteUserMutation } from "../redux/user/userApi";

interface IProps {
  user: IUser;
  currentPage: number;
}
const UserCard = ({ user}: IProps) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  console.log(deleteUser);
  const handleDeleteUser = (id: number) => {
    deleteUser(id); // Trigger the delete mutation
  };

  const items = [
    {
      key: "1",
      label:   <button style={{border:0,background:"#2F80ED",color:"white",padding:"5px 15px",borderRadius:"15px",cursor:"pointer"}}>Add</button>,
    },
    {
      key: "2",
      label:  <button style={{border:0,background:"#2F80ED",color:"white",padding:"5px 15px",borderRadius:"15px",cursor:"pointer"}}>Update</button>
    },
    {
      key: "3",
      label:   <button onClick={() => handleDeleteUser(user.id)} style={{border:0,background:"red",color:"white",padding:"5px 15px",borderRadius:"15px",cursor:"pointer"}}>Delete</button>
    },
  ];
  return (
    <tr>
      <td style={{ width: "10%", padding: "10px 0px 10px 30px" }}>{user.id}</td>
      <td style={{ padding: "10px 0px 10px 0px" }}>
        <Flex align="center">
          <img
            src={user.avatar}
            alt=""
            style={{ width: "60px", borderRadius: "15px", marginRight: 15 }}
          />
          {user.first_name}
        </Flex>
      </td>
      <td style={{ padding: "10px 0px 10px 0px" }}>{user.email}</td>
      <td style={{ padding: "10px 0px 10px 0px" }}>
        <Dropdown
          menu={{ items }}
          placement="top"
          arrow={{ pointAtCenter: true }}
        >
          <p> ..... </p>
        </Dropdown>
      </td>
    </tr>
  );
};

export default UserCard;
