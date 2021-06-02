import React from 'react';  
import { Header, Banner, PanelHeader, Panel, Div,  Avatar, Link, Button, HorizontalScroll, Group, Gallery } from '@vkontakte/vkui';
import Icon16Fire from '@vkontakte/icons/dist/16/fire';
import Icon16StarCircleFillYellow from '@vkontakte/icons/dist/16/star_circle_fill_yellow';
import Icon20FreezeOutline from '@vkontakte/icons/dist/20/freeze_outline';
import Icon20VotestTransferCircleFillTurquoise from '@vkontakte/icons/dist/20/votest_transfer_circle_fill_turquoise';
import Icon16Verified from '@vkontakte/icons/dist/16/verified';
import "./Style.css"



const itemStyle = {
    flexShrink: 0,
    width: 80,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    textAlign: 'center',
    fontSize: 12
  };



const Filtres = ({ id, fetchedUser, pressed, user1, user2, user3, user4, user5, user6, user7, user8, user9}) => (

<Panel className="filtres" id="backgroundpage" >
	<PanelHeader id="olw" separator={false} 
 >
  Фильтры
	</PanelHeader>
  <Banner
        before={<Avatar size={96} mode="gif" src="https://vk.com/doc308261457_598200431?hash=6ab9c0b64b368cd7cd&wnd=1&module=groups" />}
        header="🦄Pink🦄"
        subheader={<Link style={{ color: "#6d7885" }}>Алексий<Icon16Verified style={{ color: "#4986cc" }} className="pay" width={14} height={14}/></Link>}
        actions={<Button  onClick={()=>pressed('🦄Pink🦄')} href="https://vk.com/mask308261457_22935">Открыть</Button>}
      />   
 <Banner
        before={<Avatar size={96} mode="gif" src="https://vk.com/doc308261457_597745571?hash=1be15469630b6be181&dl=dbcde9af41f2761fff&wnd=1&module=groups" />}
        header="Кинофильтр-1"
        subheader={<Link style={{ color: "#6d7885" }}>Алексий<Icon16Verified style={{ color: "#4986cc" }} className="pay" width={14} height={14}/></Link>}
        actions={<Button  onClick={()=>pressed('Кинофильтр-1')} href="https://vk.com/mask308261457_22918">Открыть</Button>}
      />   
  
    

			</Panel>
);

export default Filtres;
