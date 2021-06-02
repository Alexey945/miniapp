import React from 'react';
import PropTypes from 'prop-types';
import { platform, PanelHeader, Panel, Div,  Button, Group, Header, Separator } from '@vkontakte/vkui';
import { openDialog } from 'bugy';
import './Persik.css';
import { PanelHeaderBack } from '@vkontakte/vkui';
import Icon20Stars from '@vkontakte/icons/dist/20/stars';

const osName = platform();


const Persik  = ({ wal }) => (
	<Panel separator={false} style={{ borderRadius: "0px 0px -5px -5px" }} className="myClas" id="backgroundpage">
		<PanelHeader left={<PanelHeaderBack onClick={wal} data-to="more" />} id="olw" separator={false}
		>
			Инструкция
		</PanelHeader>

		<Div className="block">
		<Header className="block" mode="secondary">У меня есть маска, как её опубликовать?</Header> 
	
		<Group
		 className="cd-block"
          description="Чтобы добавить маску в сервис, необходимо с помощью кнопки ниже перейти в чат группы «Художники масок» и прикрепить полученную ссылку на вашу маску с указанием в сообщении «#В_MASKS». После этого ожидайте ответа от модератора. Готово, ваша маска появилась в данном сервисе."
          >
        </Group>
		<Separator> </Separator>
<Header separator={false} mode="secondary">У меня нет маски, как её создать?</Header>
<Group 
 separator={false}
 className="cd-block"
		  description="Для создания маски перейдите в чат группы «Художники масок» с помощью кнопки ниже и напишите слово «Привет», чтобы получить подробное руководство по созданию масок."
        >
        </Group>
		</Div>
    <Div separator={false} className="buttonpersik">
    <Button separator={false} before={<Icon20Stars/>} onClick={()=>openDialog({ id: -157574223 }) } style={{ background: '#4986cc', color: '#fff' }} mode="secondary" size="l">
          Поехали!
        </Button>
    </Div>
	<br/>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;