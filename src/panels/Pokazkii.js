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
			Андрей Покацкий
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
            <Avatar size={96} src="https://sun9-37.userapi.com/impg/TQjHUaAxCpEJkQIwg5GS55QftYKZod5eiTZwAw/oX_sNGmtIpA.jpg?size=390x512&quality=96&proxy=1&sign=0a7c50c6b648011aecebd8310b61ec82&type=album" />
            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Андрей Покацкий</Title>
            <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>Автор</Text>
            <Div style={{display: 'flex'}}><Button size="m" style={{marginRight: '5px'}} href="https://vk.com/id526766619"  mode="secondary">Открыть профиль</Button>    <Button size="m"  href="https://vk.me/moneysend/526766619"  mode="secondary">Поддержать Автора</Button></Div>
          </Gradient>
    
          
<Group style={{ paddingBottom: 8 }} header={<Header className="block" >Маски Автора</Header>}></Group>
          <HorizontalScroll >
 
 <div style={{ display: 'flex' }}>
      <div style={{ ...itemStyle, paddingLeft: 4 }}>
      <a href="https://vk.com/mask526766619_20774">
        <Avatar size={64} className="Avatarka" mode='app' style={{ marginBottom: 8 }} src='https://sun9-6.userapi.com/impf/E8BxVuCeXb6cTcaB3-A7EhsxOoGvy4VQDBi8FQ/IaGkymH-eJQ.jpg?size=806x770&quality=96&proxy=1&sign=08e34d98008a537f8475943eceff70d1&type=album' ></Avatar> 
      </a>
      Santa_Claus
     </div>
</div>
</HorizontalScroll>
</Group>     
            <Header>Достижения Автора</Header>
            <List className="ypsone">
       <Cell className="ypsone" style={{ background: "#BAA1FF" }} before={<Icon28Favorite   style={{ color: "#4300FF" }}  />}>Эксклюзивные</Cell>
     </List>
            <RichCell
       disabled 
       style={{ background: "#A180FF", color: "#ECE6FF" }} 
        before={<Avatar size={48} src='https://sun9-46.userapi.com/impf/JfLRJclPgPnvInsbk6HuIyWqF5jdS9H0ddvv2A/OgcnAB0-PxI.jpg?size=500x500&quality=96&proxy=1&sign=0850a0b811d417cbb20c0056ad137c4e&type=album' />}
        caption={<span className="ine">Вы победили в конкурсе Winter-2020.</span>}
      >
        Победитель Winter-2020!
        </RichCell>

	</Panel>
};

export default Shaposhnikov;