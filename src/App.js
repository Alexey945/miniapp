import React, { useState, useEffect, SetScheme } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { ConfigProvider, Epic, Tabbar, TabbarItem, View } from '@vkontakte/vkui';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28StudOutline from '@vkontakte/icons/dist/28/stud_outline';
import Icon28MasksOutline from '@vkontakte/icons/dist/28/masks_outline';
import { Icon28StoryOutline } from '@vkontakte/icons';
import Icon28More from '@vkontakte/icons/dist/28/more';
import Home from './panels/Home';
import Home1 from './panels/Home1';
import Home2 from './panels/Home2';
import Home3 from './panels/Home3';
import Persik from './panels/Persik';
import Shaposhnikov from './panels/Shaposhnikov';
import Shidlovskii from './panels/Shidlovskii';
import Kostyanko from './panels/Kostyanko';
import Shegolev from './panels/Shegolev';
import Sorokin from './panels/Sorokin';
import Pokazkii from './panels/Pokazkii';
import Kyzmin from './panels/Kyzmin';
import Efremov from './panels/Efremov';
import Filtres from './panels/Filtres';
import Icon28BillheadOutline from '@vkontakte/icons/dist/28/billhead_outline';
import Icon56FireOutline from '@vkontakte/icons/dist/56/fire_outline';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { Icon28AchievementCircleFillBlue } from '@vkontakte/icons';

const App = () => {
  const [fetchedUser, setUser] = useState(null);
  const [activePanel, setActivePanel] = useState("home"); // Ставим начальную панель
  const [history, setHistory] = useState(['home']) // Заносим начальную панель в массив историй.
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [schema]=React.useState('client_light')
  const [activeStory,changeActiveStory]=React.useState('feed')
  const [tabbar]=React.useState(true)
  const [user]=React.useState(null)
  const [achivments, changeAchivments] = React.useState([])
  const onStoryChange = (e) => {
    const a = e.currentTarget.dataset.story;
    changeActiveStory(a?a:'feed')
  }

  const goBack = () => {
    if( history.length === 1 ) {  // Если в массиве одно значение:
      bridge.send("VKWebAppClose", {"status": "success"}); // Отправляем bridge на закрытие сервиса.
    } else if( history.length > 1 ) { // Если в массиве больше одного значения:
      history.pop() // удаляем последний элемент в массиве.
      setActivePanel( history[history.length - 1] ) // Изменяем массив с иторией и меняем активную панель.
    }
  }
  function goToPage( name ) { // В качестве аргумента принимаем id панели для перехода
    window.history.pushState( {panel: name}, name ); // Создаём новую запись в истории браузера
    setActivePanel( name ); // Меняем активную панель
    history.push( name ); // Добавляем панель в историю
  };

  const user1 = () => {
    changeActiveStory('shaposhnikov')
    } 

    const user2 = () => {
      changeActiveStory('shidlovskii')
      } 

      const user3 = () => {
        changeActiveStory('shegolev')
        } 
        
        const user4 = () => {
          changeActiveStory('kostyanko')
          } 
          const user5 = () => {
            changeActiveStory('sorokin')
            } 
            const user6 = () => {
              changeActiveStory('pokazkii')
              } 
              const user7 = () => {
                changeActiveStory('kyzmin')
                } 
                const user8 = () => {
                  changeActiveStory('efremov')
                  } 


    const nazad = () => {
      changeActiveStory('profil')
      } 
      
  const walk = () => {
    changeActiveStory('instr')
    }
    const wal = () => {
      changeActiveStory('more')
      }     

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };


  


  
const pressed = (maskName) => {
fetch('https://mighty-temple-55739.herokuapp.com/published'+window.location.search+'&mask_id='+maskName)
}


React.useEffect(()=>{
window.scrollTo(0,0)
bridge.subscribe((e) => {
window.addEventListener('popstate', () => goBack());
const { type, data } = e.detail;})
fetch('https:\/\/mighty-temple-55739.herokuapp.com/user'+window.location.search) 
.then(e=>e.text()) 
.then(e=>changeAchivments(JSON.parse(e)))
.catch(()=>{})
},[])

  /* TODO */
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
        setPopout(null);
      });
      window.addEventListener('popstate', () => goBack()); // Обработчик события изменения браузерной истории
  }, []);


  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now,
          completed: false,
        },
      ])
    );
  }
  return (
    <ConfigProvider isWebView={true} scheme={schema}>
      <Epic activeStory={activeStory} tabbar={tabbar&&
        <Tabbar style={{visibility: 'hidden'}}>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === 'feed'}
            data-story="feed"
            text="Маски"
          ><Icon28MasksOutline /></TabbarItem>
            <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === 'filtres'}
            data-story="filtres"
            text="Фильтры"
          ><Icon28StoryOutline /></TabbarItem>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === 'notifications'}
            data-story="notifications"
            text="Достижения"
          ><Icon28AchievementCircleFillBlue /></TabbarItem>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === 'profil' || activeStory === 'kyzmin' || activeStory === 'shidlovskii'}
            data-story="profil"
            text="Пантеон"
          ><Icon56FireOutline  width={28} height={28}  /></TabbarItem>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === 'more'|| activeStory === 'instr'}
            data-story="more"
            text="Ещё"
          ><Icon28More /></TabbarItem>             
        </Tabbar>
      }>
        
        <View id="feed" activePanel="home" popout={popout}  
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        <Home pressed={pressed} id="home" fetchedUser={fetchedUser}
         go={go}
         goToPage={goToPage}
         walk={walk} 
         wal={wal} 
         user1={user1} 
         user2={user2}
         user3={user3}
         user4={user4}
         user5={user5}
         user6={user6}
         user7={user7}
         user8={user8}
        />
        </View>

        <View id="filtres" activePanel="home" popout={popout}  
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        <Filtres id="home" fetchedUser={user} go={go} achivments={achivments} SetScheme={SetScheme} fetchedUser={fetchedUser}/>
        </View>

        <View id="notifications" activePanel="home" popout={popout}  
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        <Home1 id="home" fetchedUser={user} go={go} achivments={achivments} SetScheme={SetScheme} fetchedUser={fetchedUser}/>
        </View>

        <View id="more" activePanel="home" popout={popout}        
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        <Home2 id="home" walk={walk}/>
        </View>

        <View id="profil" activePanel="home" popout={popout}        
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        
        <Home3 id="home" fetchedUser={user} go={go} SetScheme={SetScheme}
        user7={user7}
        user2={user2}
        />
        </View>        

        <View id="instr" activePanel="home"  popout={popout}        
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        
        <Persik id="home" selected='more' fetchedUser={user} go={go} walk={walk} wal={wal} SetScheme={SetScheme}/>
        </View>  

        <View id="shaposhnikov" activePanel="home" popout={popout}        
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        
        >
        <Shaposhnikov id="home" fetchedUser={user} go={go} walk={walk} nazad={nazad} achivments={achivments} SetScheme={SetScheme} />
        </View>  

        <View id="shidlovskii" activePanel="home" popout={popout}        
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        <Shidlovskii id="home" fetchedUser={user} go={go} walk={walk} nazad={nazad} achivments={achivments} SetScheme={SetScheme}/>
        </View>  

        <View id="shegolev" activePanel="home" popout={popout}        
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        <Shegolev id="home" fetchedUser={user} go={go} walk={walk} nazad={nazad} achivments={achivments} SetScheme={SetScheme}/>
        </View> 

        <View id="kostyanko" activePanel="home" popout={popout}        
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        <Kostyanko id="home" fetchedUser={user} go={go} walk={walk} nazad={nazad} achivments={achivments} SetScheme={SetScheme}/>
        </View> 

        <View id="sorokin" activePanel="home" popout={popout}        
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        <Sorokin id="home" fetchedUser={user} go={go} walk={walk} nazad={nazad} achivments={achivments} SetScheme={SetScheme}/>
        </View> 

        <View id="pokazkii" activePanel="home" popout={popout}        
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        <Pokazkii id="home" fetchedUser={user} go={go} walk={walk} nazad={nazad} achivments={achivments} SetScheme={SetScheme}/>
        </View> 

        <View id="kyzmin" activePanel="home" popout={popout}        
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        <Kyzmin id="home" fetchedUser={user} go={go} walk={walk} nazad={nazad} achivments={achivments} SetScheme={SetScheme}/>
        </View>

        <View id="efremov" activePanel="home" popout={popout}        
        activePanel={activePanel} // Активная панель равная стейту.
        history={history} // Ставим историю из массива панелей.
        onSwipeBack={goBack} // При свайпе выполняется данная функция.
        >
        <Efremov id="home" fetchedUser={user} go={go} walk={walk} nazad={nazad} achivments={achivments} SetScheme={SetScheme}/>
        </View>
      
      </Epic>
    </ConfigProvider>
  );
}
export default App;
 



