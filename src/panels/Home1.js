import React from 'react'; 
import { PanelHeader, RichCell, Avatar, Panel, List,  Cell, Group} from '@vkontakte/vkui';
import "./Style.css"
import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';
import Icon32MasksOutline from '@vkontakte/icons/dist/32/masks_outline';

import PropTypes from "prop-types";
const data = {
      ach2: <RichCell
       disabled 
       style={{ background: "#A180FF", color: "#ECE6FF" }} 
        before={<Avatar size={48} src='https://sun9-61.userapi.com/impf/YTbcKkD2O8XA7Rzs6rxaEGOPJE8xCFyfN-bUQw/oRWathpGluI.jpg?size=500x500&quality=96&proxy=1&sign=5817f2228f93073551f75e3eb1e89a7f&type=album' />}
        caption={<span className="ine">Вы опубликовали 5 масок в приложении.</span>}
      >
        Местный
      </RichCell>, ЭКСКЛЮЗИВНЫЙ:<List className="ypsone">
       <Cell className="ypsone" style={{ background: "#BAA1FF" }} before={<Icon28Favorite   style={{ color: "#4300FF" }}  />}>Эксклюзивные</Cell>
     </List>, СТАНДАРТНЫЙ:<List>
       <Cell style={{ background: "#BAA1FF" }}  before={<Icon32MasksOutline width={28} height={28} style={{ color: "#4300FF" }}  />}>Стандартные</Cell>
     </List>, ach7: <RichCell 
       disabled
       style={{ background: "#A180FF", color: "#ECE6FF" }} 
        before={<Avatar size={48} src='https://sun9-71.userapi.com/impf/Lqm0FGj9rU-aoaa5cfHvauw1vlJxQ9Ns6ko6Tg/mgeqa_o0eRg.jpg?size=500x500&quality=96&proxy=1&sign=aa022745de910745198a764d4126fa41&type=album' />}
        caption={<span className="ine">Ваша маска попала в «Рекомендуем».</span>}
      >
        Отличная работа!
      </RichCell>, ach8: <RichCell
       disabled 
       style={{ background: "#A180FF", color: "#ECE6FF" }} 
        before={<Avatar size={48} src='https://sun9-22.userapi.com/impf/QmChVDb0HYuwA2l_UZ6U0xSdU2wRxoDcT3BVhA/2O7vnnYLeOU.jpg?size=500x500&quality=96&proxy=1&sign=e530fc37098012bfb3b03ad9241d6cbe&type=album' />}
        caption={<span className="ine">Вы нашли баг/ошибку.</span>} 
      >
        Охотник
      </RichCell>, ach4: <RichCell
       disabled 
       style={{ background: "#A180FF", color: "#ECE6FF" }} 
        before={<Avatar size={48} src='https://sun9-19.userapi.com/impf/OFMlG5kvSmUs_ZSjt0jBXU_bLtIzZZThSCAYIg/7gpZUrGfjC0.jpg?size=500x500&quality=96&proxy=1&sign=9a11390b93995f2e27cbbcadfed26168&type=album' />}
        caption={<span className="ine">Вашей маской кто то заинтерисовался.</span>} 
      >
        Пенетрейшн
      </RichCell>, ach9: <RichCell
       disabled 
       style={{ background: "#A180FF", color: "#ECE6FF" }} 
        before={<Avatar size={48} src='https://sun9-46.userapi.com/impf/JfLRJclPgPnvInsbk6HuIyWqF5jdS9H0ddvv2A/OgcnAB0-PxI.jpg?size=500x500&quality=96&proxy=1&sign=0850a0b811d417cbb20c0056ad137c4e&type=album' />}
        caption={<span className="ine">Вы победили в конкурсе Winter-2020.</span>}
      >
        Победитель Winter-2020!
        </RichCell>}


const Home = ({ achivments, fetchedUser }) => {

return (<Panel id="backgroundpage" >
  
    <PanelHeader  id="olw" className="more" separator={false} >
      Достижения
    </PanelHeader>
{achivments[0]&&achivments.map(e=>{return data[e]})}
{!achivments[0]&&
        <Group className="backgroundtext"
          description="Творите, делитесь творчеством с пользователями, публикуя свои маски в сервисе MASKS. И помните, что ачивки можно получить только за хорошие и качественные маски!"
          separator={false}
        >     <div className="ypsone">
          <Cell  className="ypsone" separator={false} >
            У Вас ещё нет достижений 😞
          </Cell>
         </div>
        </Group>
}

</Panel>)
};


Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};
 
export default Home;


