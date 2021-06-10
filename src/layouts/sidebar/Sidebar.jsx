import React from 'react'
import { Menu } from 'semantic-ui-react'


export default function Sidebar() {

    
    return (
        <div>
            <Menu pointing secondary vertical>
                <Menu.Item
                    name='İş Verenler'
                />
                <Menu.Item
                    name='İş İlanları'
                />
                <Menu.Item
                    name='İş Pozisyonları'
                />
            </Menu>
        </div>
    ) 

}
