import React from 'react'; 
import { PanelHeader, Panel, Cell, Header, Separator, FixedLayout, Group, Div, Title, Gradient, Text, Link, Banner  } from '@vkontakte/vkui';
import Icon28RecentOutline from '@vkontakte/icons/dist/28/recent_outline';
import Icon16Verified from '@vkontakte/icons/dist/16/verified';
import { openDialog } from 'bugy';
import { Icon16StarCircleFillYellow } from '@vkontakte/icons';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Icon20FireCircleFillRed from '@vkontakte/icons/dist/20/fire_circle_fill_red';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import { Icon28FireCircleFillRed } from '@vkontakte/icons';
import { Icon28VotesTransferCircleFillTurquoise } from '@vkontakte/icons';
import { Icon16Fire } from '@vkontakte/icons';
import "./Style.css"

const Home =  ({ id, fetchedUser, pressed, user1, user2, user3, user4, user5, user6, user7, user8, user9}) => (

  <Panel id="backgroundpage">
    <PanelHeader separator={false}>Пантеон авторов</PanelHeader>
 
          <Gradient style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 20,
          }}>
             <Avatar size={96} src="https://sun9-45.userapi.com/impf/plo4_wylm3M8AztZAF_aQP03ZJVyjYQrPOTF1Q/E98o0fkhFQY.jpg?size=242x242&quality=96&proxy=1&sign=f175aabe49391aa7314ae56bd596c9e6&type=album" />
            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium" >Лучшие авторы<Link><fire_circle_fill_red className="pay"/></Link></Title>
            <Text style={{ marginBottom: 10, color: 'var(--text_secondary)' }}>Здесь собраны лучшие авторы.</Text>
          </Gradient>
          <Separator></Separator>
          <Group>
      <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-40.userapi.com/impg/J6TN9t4nU-j2Etnpyk8-TYunQoRndWd4ZA89kQ/Tuu1D5vBD60.jpg?size=1080x1080&quality=96&sign=4ad4674ac3c9e8a61b58b8108e22bf82&type=album" />}
        header={<Link onClick={user7}>Александр Кузьмин<Icon28VotesTransferCircleFillTurquoise className="pay" width={14} height={14}/><Icon16Fire style={{ color: "#f05c44" }} className="pay"/></Link>}
        subheader="Описание отсутствует"
        actions={<Button  onClick={user7}>Открыть профиль</Button>}
      />
        <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-5.userapi.com/impg/cQpwpoc-BCl0d1JxIVZl4pQVk8XCATwsAPOgIA/D9V6HSauIPw.jpg?size=1080x1080&quality=96&sign=a41102891433d4085d95b6a0ff847eef&type=album" />}
        header={<Link onClick={user2}>Никита Шидловский <Icon28VotesTransferCircleFillTurquoise className="pay" width={14} height={14}/><Icon16Fire style={{ color: "#f05c44" }} className="pay"/></Link>}
        subheader="Описание отсутствует"
        actions={<Button  onClick={user2}>Открыть профиль</Button>}
      />
        </Group>
      


</Panel>
);


export default Home;
