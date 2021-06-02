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



const Home = ({ id, fetchedUser, pressed, user1, user2, user3, user4, user5, user6, user7, user8, user9}) => (

<Panel className="myClass" id="backgroundpage" >
	<PanelHeader id="olw" separator={false} 
 >
  Маски
	</PanelHeader>
<Group style={{ paddingBottom: 8 }} header={<Header className="lj" >Рекомендуем:</Header>}>


<HorizontalScroll className="lj"  >
 
       <div style={{ display: 'flex' }}>
            <div style={{ ...itemStyle, paddingLeft: 4 }}>
            <a onClick={()=>pressed('Jojo в Рекомендуем')}  href="https://vk.com/mask-183737381_18778">
              <Avatar size={64} className="Avatarka" style={{ marginBottom: 8 }} src='https://sun9-69.userapi.com/7PqhN4B46i36uWLgDzaTT313VmhLh1KFzVe--w/DaXkXJ9zbnw.jpg' ></Avatar> 
            </a>
            Jojo
           </div>
       <div style={{ display: 'flex' }}>
            <div style={{ ...itemStyle, paddingLeft: 4 }}>
            <a onClick={()=>pressed('Party time в Рекомендуем')}  href="https://vk.com/mask164747050_18723">
              <Avatar className="Avatarka" size={64}  style={{ marginBottom: 8 }} src='https://sun9-39.userapi.com/c857128/v857128449/1f9ba6/M_lCzeGq0ZA.jpg' ></Avatar> 
            </a>
            Party time
           </div>
       <div style={{ display: 'flex' }}>
            <div style={{ ...itemStyle, paddingLeft: 4 }}>
            <a onClick={()=>pressed('InTheClouds в Рекомендуем')}  href="https://vk.com/mask-185268030_18090">
              <Avatar className="Avatarka" size={64}  style={{ marginBottom: 8 }} src='https://sun9-67.userapi.com/c856520/v856520920/1f6dd6/BiLbgaqkjsk.jpg' ></Avatar> 
            </a>
             InTheClouds 
           </div>   
       <div style={{ display: 'flex' }}>
            <div style={{ ...itemStyle, paddingLeft: 4 }}>
            <a onClick={()=>pressed('Burroughs в Рекомендуем')} href="https://vk.com/mask-192502463_17891">
              <Avatar className="Avatarka" size={64}  style={{ marginBottom: 8 }} src='https://sun9-30.userapi.com/c206624/v206624004/17586f/qLXNtnqY02U.jpg' ></Avatar> 
            </a>
              Burroughs 
            </div>
            <div style={{ display: 'flex' }}>
            <div style={{ ...itemStyle, paddingLeft: 4 }}>
            <a onClick={()=>pressed('Какой ты кот? в  Рекомендуем')} href="https://vk.com/mask184707055_17053">
              <Avatar className="Avatarka" size={64} style={{ marginBottom: 8 }} src='https://sun1-88.userapi.com/RUJKfo9HmOSfFwZ1pydOiwilB-9vf2xSTmE5qA/8_YHaquvRUg.jpg' ></Avatar> 
            </a>
              Какой ты кот? 
            </div>   
            <div style={{ display: 'flex' }}>
            <div style={{ ...itemStyle, paddingLeft: 4 }}>
            <a onClick={()=>pressed('ahegao в Рекомендуем')} href="https://vk.com/mask-183737381_18302">
              <Avatar className="Avatarka" size={64} style={{ marginBottom: 8 }} src='https://sun9-27.userapi.com/c854428/v854428470/25250c/QRnwlxbJ_fc.jpg' ></Avatar> 
            </a>
              ahegao
             </div>   
            </div>
           </div>
         </div>
        </div>         
       </div>
     </div>
   
   </HorizontalScroll>
 </Group>
    <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-69.userapi.com/7PqhN4B46i36uWLgDzaTT313VmhLh1KFzVe--w/DaXkXJ9zbnw.jpg" />}
        header="Jojo"
        subheader={<Link style={{ color: "#6d7885" }} target="_blank">М. Щёголев</Link>}
        actions={<Button onClick={()=>pressed('Jojo')} href="https://vk.com/mask-183737381_18778">Открыть</Button>}
      />
     <Banner 
        before={<Avatar size={96} mode="image" src="https://sun9-39.userapi.com/c857128/v857128449/1f9ba6/M_lCzeGq0ZA.jpg" />}
        header="Painted glasses"
        subheader={<Link style={{ color: "#6d7885" }}>А. Кузьмин<Icon16Fire  id="verified_kyzmin" style={{ color: "#f05c44"}}class="verified_kyzmin" width={14} height={14}/> </Link>}
        actions={<Button onClick={()=>pressed('Painted glasses')} href="https://vk.com/mask164747050_18723">Открыть</Button>}
      />
     <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-41.userapi.com/c853628/v853628231/2465b5/GNkXnNKlwXs.jpg" />}
        header="Devil Horns"
        subheader={<Link style={{ color: "#6d7885" }} >А. Кузьмин<Icon16Fire  id="verified_kyzmin"  style={{ color: "#f05c44"}} className="pay" width={14} height={14}/></Link>}
        actions={<Button onClick={()=>pressed('Devil_Horns')} href="https://vk.com/mask164747050_18737">Открыть</Button>}
      />                       
     <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-28.userapi.com/c857028/v857028002/1f6525/rbzrJRXCCrc.jpg" />}
        header="Princess"
        subheader={<Link style={{ color: "#6d7885" }}>А. Кузьмин<Icon16Fire  id="verified_kyzmin"  style={{ color: "#f05c44"}} className="pay" width={14} height={14}/></Link>}
        actions={<Button onClick={()=>pressed('Princess')} href="https://vk.com/mask164747050_18691">Открыть</Button>}
      /> 
     <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-3.userapi.com/c858132/v858132332/236281/8FtCwPdioxA.jpg" />}
        header="Pa Pa Povorot"
        subheader={<Link style={{ color: "#6d7885" }}><span className="inline">И. Ефремов</span></Link>}
        actions={<Button onClick={()=>pressed('Pa-Pa-Povorot')} href="https://vk.com/mask371032592_18036">Открыть</Button>}
      /> 
     <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-67.userapi.com/c856520/v856520920/1f6dd6/BiLbgaqkjsk.jpg" />}
        header="IFlyInTheClouds"
        subheader={<Link href="https://vk.com/iljukha" target="_blank">Илюха.</Link>}
        actions={<Button  onClick={()=>pressed('IFlyInTheClouds')} href="https://vk.com/mask-185268030_18090">Открыть</Button>}
      /> 
     <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-71.userapi.com/c858220/v858220764/22fc6d/D6ot2gKJD_o.jpg" />}
        header="Kapustka"
        subheader={<Link href="https://vk.com/kapustaquiz" target="_blank"><span className="inline">Викторина капуста</span></Link>}
        actions={<Button onClick={()=>pressed('Kapustka')} href="https://vk.com/mask-175605830_17887">Открыть</Button>}
      /> 
     <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-9.userapi.com/c857136/v857136599/1ece68/td6qSY6Rqzg.jpg" />}
        header="RTJ"
        subheader={<Link href="https://vk.com/jedi_road" target="_blank"><span className="inline">Road to Jedi</span></Link>}
        actions={<Button onClick={()=>pressed('RTJ')}  href="https://vk.com/mask-188280516_18525">Открыть</Button>}
      />   
     <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-73.userapi.com/c858124/v858124700/22a782/rCEfB2Sb7q4.jpg" />}
        header="lilove"
        subheader={<Link style={{ color: "#6d7885" }} target="_blank"><span className="inline">Д. Костянко</span></Link>}
        actions={<Button  onClick={()=>pressed('lilove')} href="https://vk.com/mask279701997_18454">Открыть</Button>}
      />
     <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-30.userapi.com/c206624/v206624004/17586f/qLXNtnqY02U.jpg" />}
        header="Burroughs"
        subheader={<Link href="https://vk.com/burroughs_bot" target="_blank">Берроуз Бот</Link>}
        actions={<Button onClick={()=>pressed('Burroughs')} href="https://vk.com/mask-192502463_17891">Открыть</Button>}
      />

     <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-27.userapi.com/c854428/v854428470/25250c/QRnwlxbJ_fc.jpg" />}
        header="ahegao"
        subheader={<Link  style={{ color: "#6d7885" }} target="_blank">М. Щёголев</Link>}
        actions={<Button onClick={()=>pressed('ahegao')} href="https://vk.com/mask-183737381_18302">Открыть</Button>}
      />

      <Banner
        before={<Avatar size={96} mode="image" src="https://sun1-23.userapi.com/MoCiro9gDscyl2mLw98nCJmsZ7beHMX_kMX79A/FiRfsDaF2H4.jpg" />}
        header="kitsune"
        subheader={<Link  style={{ color: "#6d7885" }} target="_blank"><span className="inline">М. Щёголев</span></Link>}
        actions={<Button onClick={()=>pressed('kitsune')} href="https://vk.com/mask-183737381_18309">Открыть</Button>}
      />		
      <Banner
        before={<Avatar size={96} mode="image" src="https://sun1-99.userapi.com/RUJKfo9HmOSfFwZ1pydOiwilB-9vf2xSTmE5qA/8_YHaquvRUg.jpg" />}
        header="Какой ты сегодня кот?"
        subheader={<Link style={{ color: "#6d7885" }}>Н. Шидловский<Icon16Fire  id="verified_shidlovskii"  style={{ color: "#f05c44"}} className="pay" width={14} height={14}/></Link>}
        actions={<Button onClick={()=>pressed('Какой ты сегодня кот?')} href="https://vk.com/mask184707055_17053">Открыть</Button>}
      />		
      <Banner
        before={<Avatar size={96} mode="image" src="https://sun1-29.userapi.com/936qlOsU5UcwyqwAz3G5fvKilU6IbA_SUHK0NA/evgvI_PoU_g.jpg" />}
        header="Angels"
        subheader={<Link style={{ color: "#6d7885" }}>Н. Шидловский<Icon16Fire  id="verified_shidlovskii"  style={{ color: "#f05c44"}} className="pay" width={14} height={14}/></Link>}
        actions={<Button onClick={()=>pressed('Angels')} href="https://vk.com/mask184707055_17028">Открыть</Button>}
      />		
      <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-63.userapi.com/c857620/v857620700/234ee6/ubjL2z_8y0c.jpg" />}
        header="No signal"
        subheader={<Link style={{ color: "#6d7885" }}>Н. Шидловский<Icon16Fire  id="verified_shidlovskii"  style={{ color: "#f05c44"}} className="pay" width={14} height={14}/></Link>}
        actions={<Button onClick={()=>pressed('No signal')} href="https://vk.com/mask184707055_17025">Открыть</Button>}
      />		
      <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-70.userapi.com/c855424/v855424700/248eff/FTBZnXfS_UA.jpg" />}
        header="Sweet"
        subheader={<Link style={{ color: "#6d7885" }}>Н. Шидловский<Icon16Fire  id="verified_shidlovskii"  style={{ color: "#f05c44"}} className="pay" width={14} height={14}/></Link>}
        actions={<Button  onClick={()=>pressed('Sweet')} href="https://vk.com/mask184707055_17027">Открыть</Button>}
      />		
      <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-74.userapi.com/c857024/v857024700/17a43a/6MdWamXgO7o.jpg" />}
        header="COVID-19"
        subheader={<Link style={{ color: "#6d7885" }}>Н. Шидловский<Icon16Fire  id="verified_shidlovskii"  style={{ color: "#f05c44"}} className="pay" width={14} height={14}/></Link>}
        actions={<Button onClick={()=>pressed('COVID-19')} href="https://vk.com/mask184707055_17091">Открыть</Button>}
      />		
    

			</Panel>
);

export default Home;
