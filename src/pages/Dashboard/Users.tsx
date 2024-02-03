import React, { useState } from "react";
import { useGetUsersQuery } from "../../redux/user/userApi";
import UserCard from "../../componenets/UserCard";
import { IUser } from "../../types/globalTypes";
import Title from "antd/es/typography/Title";
import Pagination from "../../shared/Pagination";

interface UserListProps {
  initialPage : number;
}

const Users = ({ initialPage }:UserListProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  const { data, isLoading, error } = useGetUsersQuery(currentPage);
  const totalPages = data?.total_pages || 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Title  level={2} style={{ margin:' 15px 0px 50px 0px ',color:"#323B4B",fontWeight:600 }}>
      Users List
      </Title>
      <table style={{width:'100%', textAlign:'left',overflow:'scroll',color:"#4E5D78",fontWeight:600,}}>
        <thead style={{background:"#FAFBFC",height:40,}}>
          <th style={{width:'10%',paddingLeft:30}}>#ID</th>
          <th style={{width:'30%'}}>USER</th>
          <th style={{width:'40%'}}>EMAIL</th>
          <th style={{width:'10%'}}>OPTIONS</th>
          
        </thead>
        <tbody >
          {data?.data.map((user: IUser) => (
            <UserCard key={user.id} user={user} currentPage={currentPage} />
          ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default Users;
