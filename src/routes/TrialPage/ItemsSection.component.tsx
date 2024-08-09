import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { IItemsSection, ItemType } from "./Trial.types";

export default function ItemsSection({ soldList, items, onChange, onSold }: IItemsSection) {
  const [item, setItem] = useState<ItemType>({
    id: 0,
    name: "",
    price: 0
  })

  return (
    <>
      <div className="inventory">

        <h3>Stock</h3>
        <table className="inventory__table">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>action</th>
          </tr>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}{item.name}</td>
              <td>${item.price}</td>
              <td>
                <Button disabled={items.length < 2} onClick={() => onSold(item)} width={100}>Sell</Button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>
              <div className="inventory__form">
                <div className="inventory__form-group">
                  <Input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setItem(prev => ({ ...prev, name: e.target.value }))}
                  />
                  <Input
                    type="number"
                    placeholder="Price"
                    onChange={(e) => setItem(prev => ({ ...prev, price: parseInt(e.target.value) }))}
                  />
                </div>
              </div>
            </td>
            <td>
              <Button
                width={100}
                onClick={() => onChange({ ...item, id: items[items.length - 1].id + 1 })}
              >
                Add
              </Button>
            </td>
          </tr>
        </table>

        <h3>Sold</h3>
        <table className="inventory__table">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {soldList.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}
