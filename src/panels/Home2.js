import React from 'react'; 
import PropTypes from 'prop-types';
import { Header, PanelHeader, Panel, Footer, Button, CellButton, Group, Link, Div } from '@vkontakte/vkui';
import Icon24Info from '@vkontakte/icons/dist/24/info';
import Icon24NarrativeActiveOutline from '@vkontakte/icons/dist/24/narrative_active_outline';
import Icon24Report from '@vkontakte/icons/dist/24/report';
import "./Style.css"
import "./Script.js"
import { openDialog, openLink } from 'bugy';
import Icon24Document from '@vkontakte/icons/dist/24/document';

const Home = ({ id, walk }) => (
<Panel>
	<PanelHeader separator={false} 
 >
Ещё
	</PanelHeader>

    <Group id="fff" header={<Header  className="block" mode="secondary">Публикация</Header>}>
      <CellButton  onClick={()=>openDialog({ id: -157574223 })} before={< Icon24NarrativeActiveOutline />}>Добавить маску</CellButton>
      <CellButton onClick={walk} data-to="persik" before={<Icon24Document/>}>Инструкция по публикации маски</CellButton>
      <CellButton  onClick={()=>openLink('https://vk.cc/awXLUo')} before={<Icon24Report />}>Правила публикации</CellButton>
    </Group>
      <Group id="fff"  header={<Header  className="block" mode="secondary">Прочее</Header>}>
      <CellButton  onClick={()=>openLink('https://vk.com/topic-194710754_40748642')} before={<Icon24Info />}>FAQ</CellButton>
      <Footer  style={{ margin: "5px" }} >Используя MASKS, Вы соглашаетесь с <Link href="https://vk.com/@official.mask-soglashenie">Пользовательским соглашением</Link> и <Link href="https://vk.com/@official.mask-politika-konfidencialnosti">Политикой конфиденциальности</Link>.</Footer>

      </Group>
</Panel>
);
Home.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Home;
