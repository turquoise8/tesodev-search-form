import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  useCallback,
} from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState();
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("search"));
  const [searchedPeople, setSearchedPeople] = useState(["mock"]);
  const [currentPage, setCurrentPage] = useState(1);
  const [indexOfLastPerson, setIndexOfLastPerson] = useState(currentPage * 6);
  const [indexOfFirstPerson, setIndexOfFirstPerson] = useState(
    indexOfLastPerson - 6
  );
  const [currentPeople, setCurrentPeople] = useState([]);
  const [updatedData, setUpdatedData] = useState();
  const [searchBy, setSearchBy] = useState("firstName");

  const fetchData = useCallback(async () => {
    try {
      let fetchedData;

      if (localStorage.getItem("data") !== null) {
        fetchedData = JSON.parse(localStorage.getItem("data"));
        setUpdatedData(fetchedData);
      } else {
        const response = await fetch("mockData.json");
        fetchedData = await response.json();
        localStorage.setItem("data", JSON.stringify(fetchedData.data));
        setUpdatedData(fetchedData.data);
      }
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    if (updatedData) {
      const filteredData = updatedData.filter((item) => {
        switch (searchBy) {
          case "firstName":
            return item[0].toLowerCase().startsWith(searchTerm.toLowerCase());
          case "surname":
            return item[0]
              .split(" ")[1]
              .toLowerCase()
              .startsWith(searchTerm.toLowerCase());
          case "email":
            return item[2].toLowerCase().startsWith(searchTerm.toLowerCase());
          case "city":
            return item[5].toLowerCase().startsWith(searchTerm.toLowerCase());
          case "country":
            return item[4].toLowerCase().startsWith(searchTerm.toLowerCase());
          default:
            break;
        }
      });

      const people = filteredData.map((person) => {
        const name = person[0];
        const email = person[2];
        const date = person[3].slice(-4);
        const country = person[4];
        const city = person[5];
        return { name, email, date, country, city };
      });

      setSearchedPeople(people);
      setIndexOfLastPerson(currentPage * 6);
      setIndexOfFirstPerson(indexOfLastPerson - 6);
    }
  }, [currentPage, indexOfLastPerson, searchBy, searchTerm, updatedData]);

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    setIndexOfLastPerson(currentPage * 6);
  }, [currentPage]);

  useEffect(() => {
    setIndexOfFirstPerson(indexOfLastPerson - 6);
  }, [indexOfLastPerson]);

  useEffect(() => {
    setCurrentPeople(
      searchedPeople.slice(indexOfFirstPerson, indexOfLastPerson)
    );
  }, [currentPage, indexOfFirstPerson, indexOfLastPerson, searchedPeople]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        searchTerm,
        setSearchTerm,
        searchedPeople,
        setSearchedPeople,
        currentPeople,
        setCurrentPage,
        paginate,
        currentPage,
        setCurrentPeople,
        updatedData,
        setUpdatedData,
        searchBy,
        setSearchBy,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
