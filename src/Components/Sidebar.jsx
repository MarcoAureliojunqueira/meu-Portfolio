import SocialNetworkContainer from './SocialNetworkContainer';
import InformationContainer from './InformationContainer';

import Avatar from '../img/MarcoFoto.jpeg';

import "../styles/Components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Marco Aurelio" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />

     <a href='Currículo  Novo- Desenvolver Web.docx'>   Download currículo</a>
     
     
    </aside>
  );
};

export default Sidebar;