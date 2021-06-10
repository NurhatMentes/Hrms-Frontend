import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text="Sepetiniz">
                <Dropdown.Menu>
                    <Dropdown.Item>Acer Laptop</Dropdown.Item>
                    <Dropdown.Item>Asus Laptop</Dropdown.Item>
                    <Dropdown.Item>Dell Laptop</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sepete git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
