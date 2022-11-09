import config from '../config.json';
import styled from 'styled-components';

function HomePage() {
  
  const estilosDaHomePage = {
    backgroundColor: 'blue',
    color: 'brown',
  };
  console.log(config.playlists);
  return (
     <div style= {estilosDaHomePage}>
       <Menu/>
       <Header/>
       <TimeLine playlists = {config.playlists}/>
      </div>
  );
}

export default HomePage

function Menu() {
  return (
    <div>
      <h1>Menu</h1>
    </div>  
  )
}
const StyledHeader = styled.div`
   img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 50px;
   }
   .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: i6px 32px;
    gap: 16px;
   }
`;
function Header() {
  return (
    <StyledHeader>
      <img src="banner" 
       alt=""/>
       <section className="user-info">
           <img src={`https://github.com/${config.github}.png`}
             alt=""/>
             <div>             
                <h2>
                  {config.name}
                </h2>
                <h3>
                  {config.job}
                </h3>
             </div>
      </section>
    </StyledHeader>  
  )
}
function TimeLine(props) {
  console.log("dentro do componente", props.playlists);
  const playlistsNames  = Object.keys(props.playlists);
  //Statement x Retorno por expressao.
  return (
    <div>
       {playlistsNames.map((playlistName) => {
               const videos = props.playlists[playlistName];
               console.log(videos);
               return videos.map((video) => {
                return (
                 <section>
                  <h2>
                    {playlistsNames}
                  </h2>
                  <div>
                    {videos.map((video) => {
                      return (
                        <a href={video.url}>
                          <img src={video.thumb}/>
                          <span>
                            {video.title}
                          </span>
                        </a>
                      )
                    })}
                  </div>
                 </section>
                )
               })
               
         })}
    </div>  
  )
}