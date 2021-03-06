import { createContext, useContext, useState } from "react";
import { api } from "../Services/api";
import { AdminContext } from "./admin";
import { toast } from "react-toastify";

export const TablesContext = createContext();

export const TablesProvider = ({ children }) => {
  const [tables, setTables] = useState([]);
  const userId = localStorage.getItem("@userId");
  const id = localStorage.getItem("@id");
  const { updateEmployee } = useContext(AdminContext);
  const token = localStorage.getItem("@token");

  function createTable(products, numberTable) {
    if (!numberTable) {
      return toast.error("Adicione uma mesa");
    }

    const table = {
      userId: token ? id : userId,
      numberTable: numberTable,
      products: products,
    };
    addTable(table);
  }

  async function addTable(table) {
    const tablesApi = await api
      .get(`/tables?userId=${token ? id : userId}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {});

    const tableExists = tablesApi.find(
      (localTable) =>
        Number(table.numberTable) === Number(localTable.numberTable)
    );

    if (tableExists) {
      updateTable(table);
    } else {
      api.post(`/tables`, table).then((response) => {

      });
      syncTables();
    }
  }

  async function removeTable(tableId) {
    const isAdmin = await updateEmployee(id, tableId);

    if (isAdmin) {
      api.delete(`/tables/${tableId}`);
      toast.success("Mesa finalizada.");
    }
    setTimeout(() => {
      syncTables();
    }, 300);
  }

  async function syncTables() {
    const tempUserId = localStorage.getItem("@userId");
    const tempId = localStorage.getItem("@id");
    await api
      .get(`/tables?userId=${token ? tempId : tempUserId}`)
      .then((res) => {
        setTables(res.data);
      });
  }

  async function updateTable(table) {
    const tableApi = await api.get(
      `/tables?numberTable=${table.numberTable}&userId=${token ? id : userId}`
    );
    const productsApi = await tableApi.data[0].products;

    const newProducts = table.products.map((element) => {
      const index = productsApi.findIndex((prod) => {
        return element.name === prod.name;
      });
      
      if (index > -1) {
        element.quantity = element.quantity + productsApi[index].quantity;
      }
      
      return element;
    });

    const oldProducts = productsApi.filter((element) => {
      const index = table.products.findIndex(
        (prod) => element.name === prod.name
      );
      if (index < 0) {
        return true;
      } else {
        return false;
      }
    });

    table.products = [...newProducts, ...oldProducts];

    const idApi = tableApi.data[0].id;

    api.put(`/tables/${idApi}`, table);
    syncTables();
  }

  return (
    <TablesContext.Provider
      value={{
        tables,
        addTable,
        removeTable,
        syncTables,
        updateTable,
        createTable,
      }}
    >
      {children}
    </TablesContext.Provider>
  );
};
