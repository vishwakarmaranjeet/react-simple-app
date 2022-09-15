import React, { useEffect, useState } from "react";
import axios from "axios";
export const service = axios.create({});
const baseURL = `https://jsonplaceholder.typicode.com/users`;

const APIRequest = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUserList = () => {
    setIsLoading(true);
    service.interceptors.request.use(
      function (req) {
        req.time = { startTime: new Date() };
        return req;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    service.interceptors.response.use(
      function (res) {
        res.config.time.endTime = new Date();
        res.duration = res.config.time.endTime - res.config.time.startTime;
        return res;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    service
      .get(baseURL)
      .then((res) => {
        setIsLoading(false);
        setUserList(res.data);
        console.log(res.duration);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUserList();
  }, []);

  const renderList = (data) => {
    return (
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  };
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        userList && userList.length && renderList(userList)
      )}
    </>
  );
};

export default APIRequest;
