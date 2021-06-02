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
  return 	<Panel separator={false} style={{ borderRadius: "0px 0px -5px -5px" }} className="myClas" id="backgroundpage">
		<PanelHeader left={<PanelHeaderBack onClick={nazad} data-to="feed" />} id="olw" separator={false}
		>
			Никита Шидловский 
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
            <Avatar size={96} src="https://sun9-5.userapi.com/impg/cQpwpoc-BCl0d1JxIVZl4pQVk8XCATwsAPOgIA/D9V6HSauIPw.jpg?size=1080x1080&quality=96&sign=a41102891433d4085d95b6a0ff847eef&type=album" />
            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Никита Шидловский</Title>
            <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>Автор</Text>
            <Div style={{display: 'flex'}}><Button size="m" style={{marginRight: '5px'}} href="https://vk.com/id184707055"  mode="secondary">Открыть профиль</Button>    <Button size="m"  href="https://vk.me/moneysend/184707055"  mode="secondary">Поддержать Автора</Button></Div>
          </Gradient>
    
          
<Group style={{ paddingBottom: 8 }} header={<Header className="block" >Маски Автора</Header>}></Group>
          <HorizontalScroll >
 
 <div style={{ display: 'flex' }}>
      <div style={{ ...itemStyle, paddingLeft: 4 }}>
      <a href="https://vk.com/mask184707055_17091">
        <Avatar size={64} className="Avatarka" mode='app' style={{ marginBottom: 8 }} src='https://sun9-74.userapi.com/c857024/v857024700/17a43a/6MdWamXgO7o.jpg' ></Avatar> 
      </a>
      COVID-19
     </div>

     <div style={{ ...itemStyle, paddingLeft: 4 }}>
      <a href="https://vk.com/mask184707055_17027">
        <Avatar size={64} className="Avatarka" mode='app' style={{ marginBottom: 8 }} src='https://sun9-70.userapi.com/c855424/v855424700/248eff/FTBZnXfS_UA.jpg' ></Avatar> 
      </a>
      Sweet
     </div>

     <div style={{ ...itemStyle, paddingLeft: 4 }}>
      <a href="https://vk.com/mask184707055_17025">
        <Avatar size={64} className="Avatarka" mode='app' style={{ marginBottom: 8 }} src='https://sun9-63.userapi.com/c857620/v857620700/234ee6/ubjL2z_8y0c.jpg' ></Avatar> 
      </a>
      No signal
     </div>

     <div style={{ ...itemStyle, paddingLeft: 4 }}>
      <a href="https://vk.com/mask184707055_17028">
        <Avatar size={64} className="Avatarka" mode='app' style={{ marginBottom: 8 }} src='https://sun1-29.userapi.com/936qlOsU5UcwyqwAz3G5fvKilU6IbA_SUHK0NA/evgvI_PoU_g.jpg' ></Avatar> 
      </a>
      Angels
     </div>

     <div style={{ ...itemStyle, paddingLeft: 4 }}>
      <a href="https://vk.com/mask184707055_17053">
        <Avatar size={64} className="Avatarka" mode='app' style={{ marginBottom: 8 }} src='https://sun1-99.userapi.com/RUJKfo9HmOSfFwZ1pydOiwilB-9vf2xSTmE5qA/8_YHaquvRUg.jpg' ></Avatar> 
      </a>
      Какой ты сегодня кот?
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
        before={<Avatar size={48} src='https://sun9-61.userapi.com/impf/YTbcKkD2O8XA7Rzs6rxaEGOPJE8xCFyfN-bUQw/oRWathpGluI.jpg?size=500x500&quality=96&proxy=1&sign=5817f2228f93073551f75e3eb1e89a7f&type=album' />}
        caption={<span className="ine">Вы опубликовали 5 масок в приложении.</span>}
      >
        Местный
      </RichCell>
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