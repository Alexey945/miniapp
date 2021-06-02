import React from 'react';
import PropTypes from 'prop-types';
import { platform, Div,  Button, Title, Gradient, Card, CardScroll, Link, PanelHeader, RichCell, Avatar, Panel, List,  Cell, Group, Text, Header, Separator, CellButton, HorizontalScroll } from '@vkontakte/vkui';
import { openDialog } from 'bugy';
import { PanelHeaderBack } from '@vkontakte/vkui';
import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';
import Icon32MasksOutline from '@vkontakte/icons/dist/32/masks_outline';
import Icon16Verified from '@vkontakte/icons/dist/16/verified';

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


const Shaposhnikov  = ({ go, nazad, achivments }) =>  {
	React.useEffect(()=>{window.scrollTo(0,0)},[])
  return <Panel separator={false} style={{ borderRadius: "0px 0px -5px -5px" }} className="myClas" id="backgroundpage">
		<PanelHeader left={<PanelHeaderBack onClick={nazad} data-to="feed" />} id="olw" separator={false}
		>
			Миша Щёголев
		</PanelHeader>
		<Group>
          <Gradient style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 32,
          }}>
            <Avatar size={96} src="https://sun9-49.userapi.com/impg/4JohX9v2WBeNoZyXX_PqKD9vNz7Jvd7lMUybcw/7kPgfzDCp1s.jpg?size=634x634&quality=96&proxy=1&sign=e250499e43d5c546a6f7c5eb72a669a2&type=album" />
            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Миша Щёголев</Title>
            <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>Автор</Text>
            <Div style={{display: 'flex'}}><Button size="m" style={{marginRight: '5px'}} href="https://vk.com/id354838669"  mode="secondary">Открыть профиль</Button>    <Button size="m"  href="https://vk.me/moneysend/354838669"  mode="secondary">Поддержать Автора</Button></Div>
          </Gradient>
    
          
<Group style={{ paddingBottom: 8 }} header={<Header className="block" >Маски Автора</Header>}></Group>
          <HorizontalScroll >
 
 <div style={{ display: 'flex' }}>
      <div style={{ ...itemStyle, paddingLeft: 4 }}>
      <a href="https://vk.com/mask-183737381_18309">
        <Avatar size={64} className="Avatarka" mode='app' style={{ marginBottom: 8 }} src='https://sun1-23.userapi.com/MoCiro9gDscyl2mLw98nCJmsZ7beHMX_kMX79A/FiRfsDaF2H4.jpg' ></Avatar> 
      </a>
      kitsune
     </div>

     <div style={{ ...itemStyle, paddingLeft: 4 }}>
      <a href="https://vk.com/mask-183737381_18302">
        <Avatar size={64} className="Avatarka" mode='app' style={{ marginBottom: 8 }} src='https://sun9-27.userapi.com/c854428/v854428470/25250c/QRnwlxbJ_fc.jpg' ></Avatar> 
      </a>
      ahegao
     </div>
     <div style={{ ...itemStyle, paddingLeft: 4 }}>
      <a href="https://vk.com/mask-183737381_18778">
        <Avatar size={64} className="Avatarka" mode='app' style={{ marginBottom: 8 }} src='https://sun9-69.userapi.com/7PqhN4B46i36uWLgDzaTT313VmhLh1KFzVe--w/DaXkXJ9zbnw.jpg' ></Avatar> 
      </a>
      Jojo
     </div>
</div>
</HorizontalScroll>
<Separator></Separator>
</Group>     
            <Header>Достижения Автора</Header>

<List><Cell style={{ background: "#BAA1FF" }}  before={<Icon32MasksOutline width={28} height={28} style={{ color: "#4300FF" }}  />}>Стандартные</Cell></List>
<RichCell
       disabled 
       style={{ background: "#A180FF", color: "#ECE6FF" }} 
        before={<Avatar size={48} src='https://sun9-19.userapi.com/impf/OFMlG5kvSmUs_ZSjt0jBXU_bLtIzZZThSCAYIg/7gpZUrGfjC0.jpg?size=500x500&quality=96&proxy=1&sign=9a11390b93995f2e27cbbcadfed26168&type=album' />}
        caption={<span className="ine">Вашей маской кто то заинтерисовался.</span>} 
      >
        Пенетрейшн
      </RichCell>
      <RichCell 
       disabled
       style={{ background: "#A180FF", color: "#ECE6FF" }} 
        before={<Avatar size={48} src='https://sun9-71.userapi.com/impf/Lqm0FGj9rU-aoaa5cfHvauw1vlJxQ9Ns6ko6Tg/mgeqa_o0eRg.jpg?size=500x500&quality=96&proxy=1&sign=aa022745de910745198a764d4126fa41&type=album' />}
        caption={<span className="ine">Ваша маска попала в «Рекомендуем».</span>}
      >
        Отличная работа!
      </RichCell>



	</Panel>
};

export default Shaposhnikov;