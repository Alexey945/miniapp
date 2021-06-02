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
			Дмитрий Сорокин
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
            <Avatar size={96} src="https://sun9-35.userapi.com/impf/Tv93NR9D6MjRavbxM8bQyGqAq8BzOP6rMQfRTA/ZnTIz040usg.jpg?size=1280x1280&quality=96&sign=48dae43516b72dd94f624a8c971f292d&type=album" />
            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Дмитрий Сорокин</Title>
            <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>Автор</Text>
            <Div style={{display: 'flex'}}><Button size="m" style={{marginRight: '5px'}} href="https://vk.com/id246268640"  mode="secondary">Открыть профиль</Button>    <Button size="m"  href="https://vk.me/moneysend/246268640"  mode="secondary">Поддержать Автора</Button></Div>
          </Gradient>
    
          
<Group style={{ paddingBottom: 8 }} header={<Header className="block" >Маски Автора</Header>}></Group>
          <HorizontalScroll >
 
 <div style={{ display: 'flex' }}>
      <div style={{ ...itemStyle, paddingLeft: 4 }}>
      <a href="https://vk.com/mask246268640_20906">
        <Avatar size={64} className="Avatarka" mode='app' style={{ marginBottom: 8 }} src='https://sun9-73.userapi.com/impf/WeqxU1FglpqEcCDrNoZd-Ioa-VGr_xk3P_CsEQ/dfFQP0Tnaus.jpg?size=500x500&quality=96&proxy=1&sign=46d8955ca093515e5aea83c1f2a1b33a&type=album' ></Avatar> 
      </a>
      New Year
     </div>
</div>
</HorizontalScroll>
</Group>     
            <Header>Достижения Автора</Header>

            <Group className="backgroundtext"
          description="Дмитрий не получил ни одного достижения."
          separator={false}
        >
          <Cell  separator={false} iclassName="ch">
            У Дмитрия ещё нет достижений 😞
          </Cell>
        </Group>

	</Panel>
};

export default Shaposhnikov;